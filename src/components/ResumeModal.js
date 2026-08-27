import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import './ResumeModal.css';

// Use local worker file in public/
const WORKER_LOCAL = `${process.env.PUBLIC_URL || ''}/pdf.worker.min.js`;
pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_LOCAL;

const ResumeModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const containerRef = useRef(null);
  const pdfDocRef = useRef(null);
  const renderedPages = useRef(new Set());

  const PDF_PATH = '/resume.pdf';

  const renderAllPages = useCallback(async (pdf) => {
    if (!containerRef.current) return;

    // Clear previous renders
    containerRef.current.innerHTML = '';
    renderedPages.current.clear();

    const totalPages = pdf.numPages;

    for (let i = 1; i <= totalPages; i++) {
      const page = await pdf.getPage(i);

      // Use device pixel ratio for sharp rendering on all screens
      const dpr = window.devicePixelRatio || 1;
      const baseScale = Math.min(
        (containerRef.current.clientWidth - 20) / page.getViewport({ scale: 1 }).width,
        2.0
      );
      const scale = baseScale * dpr;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width / dpr}px`;
      canvas.style.height = `${viewport.height / dpr}px`;
      canvas.style.display = 'block';
      canvas.style.margin = '0 auto 10px auto';

      await page.render({ canvasContext: context, viewport }).promise;

      containerRef.current.appendChild(canvas);
    }
  }, []);

  const tryLoadPDF = useCallback(async (workerSrc) => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
    const response = await fetch(PDF_PATH);
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    return await loadingTask.promise;
  }, []);

  const loadPDF = useCallback(async () => {
    if (!isOpen) return;

    setLoading(true);
    setError(false);

    let pdf = null;

    // Load using local worker
    try {
      pdf = await tryLoadPDF(WORKER_LOCAL);
    } catch (localErr) {
      console.error('Local worker failed:', localErr);
    }

    if (!pdf) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      pdfDocRef.current = pdf;
      setLoading(false);
      
      // Wait for React to re-render so the container is no longer display: none
      setTimeout(() => {
        renderAllPages(pdf);
      }, 50);
    } catch (err) {
      console.error('PDF render error:', err);
      setError(true);
      setLoading(false);
    }
  }, [isOpen, renderAllPages, tryLoadPDF]);

  useEffect(() => {
    if (isOpen) {
      loadPDF();
    }

    const currentContainer = containerRef.current;
    const currentRenderedPages = renderedPages.current;

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
      if (currentRenderedPages) {
        currentRenderedPages.clear();
      }
      pdfDocRef.current = null;
    };
  }, [isOpen, loadPDF]);

  // Re-render on resize for responsive layout
  useEffect(() => {
    if (!isOpen || !pdfDocRef.current || loading) return;

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (pdfDocRef.current) {
          renderAllPages(pdfDocRef.current);
        }
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, renderAllPages, loading]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Resume</h2>
          <div className="modal-actions">
            <a
              href={PDF_PATH}
              download="Jayasurya_Resume.pdf"
              className="btn btn-primary download-btn"
            >
              Download
            </a>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary download-btn"
            >
              Open in New Tab
            </a>
            <button className="close-btn" onClick={onClose}>&times;</button>
          </div>
        </div>
        <div className="modal-body">
          {loading && (
            <div className="pdf-loading">
              <div className="spinner"></div>
              <p>Loading PDF...</p>
            </div>
          )}
          {error && (
            <div className="pdf-fallback">
              <p>PDF preview is not available. Please download the file instead.</p>
              <div className="fallback-actions">
                <a
                  href={PDF_PATH}
                  download="Jayasurya_Resume.pdf"
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
                <a
                  href={PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          )}
          <div
            ref={containerRef}
            className="pdf-pages-container"
            style={{ display: loading || error ? 'none' : 'flex' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
