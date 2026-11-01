import React, { useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://youtu.be/RTOscc7tufk?si=jptCOicq7uuNGm7N";
  const embedUrl = "https://www.youtube.com/embed/RTOscc7tufk?autoplay=1&rel=0";
  const channelUrl = "https://www.youtube.com/@JAYASURYA-KK";
  const githubUrl = "https://github.com/JAYASURYA-KK/Smart-Safety-Monitor";
  const thumbnailUrl = "/screenshots/Smart_Construction_Safety_youtube_thumbnail.png";

  return (
    <section id="video" className="section video-section">
      <h2 className="section-title">Project Demonstration</h2>
      <p className="video-section-subtitle">
        Watch the full live working demonstration of the <strong>Smart Safety Monitor</strong> project on YouTube.
      </p>

      <div className="glass-panel video-container-card">
        <div className="video-player-wrapper">
          {isPlaying ? (
            <div className="video-iframe-container">
              <iframe
                src={embedUrl}
                title="Smart Safety Monitor Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="video-iframe"
              />
              <button 
                type="button" 
                className="video-close-btn"
                onClick={() => setIsPlaying(false)}
                title="Return to preview"
              >
                ✕ Close Player
              </button>
            </div>
          ) : (
            <div 
              className="video-thumbnail-container"
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsPlaying(true);
                }
              }}
              title="Click to play video demonstration"
            >
              <img 
                src={thumbnailUrl} 
                alt="Smart Safety Monitor YouTube Video Thumbnail" 
                className="video-thumbnail"
              />
              <div className="video-play-overlay">
                <div className="play-btn-circle">
                  <svg viewBox="0 0 24 24" className="play-triangle" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="play-label">Watch Live Demo</span>
              </div>
              <div className="video-duration-badge">Live Demonstration</div>
            </div>
          )}
        </div>

        <div className="video-info-content">
          <div className="video-badge-row">
            <span className="video-badge youtube-badge">
              <img src="/icons/youtube.svg" alt="YouTube" className="badge-icon" />
              YouTube Video
            </span>
            <span className="video-badge tech-badge">IoT + AI</span>
            <span className="video-badge tech-badge">Firebase Realtime DB</span>
            <span className="video-badge tech-badge">YOLOv10</span>
          </div>

          <h3 className="video-title">
            Smart Safety Monitor — Industrial Worker Safety & Telemetry Platform
          </h3>

          <p className="video-desc">
            Complete architectural walkthrough and real-time execution demo featuring:
          </p>

          <ul className="video-highlights">
            <li>
              <span className="highlight-bullet">▸</span>
              <strong>IoT Smart Helmet:</strong> ESP32 streaming real-time DHT22 temperature, MQ-7 toxic gas, and MPU6050 fall shock telemetry.
            </li>
            <li>
              <span className="highlight-bullet">▸</span>
              <strong>Firebase Realtime Database:</strong> Sub-second cloud synchronization between field hardware and the monitoring console.
            </li>
            <li>
              <span className="highlight-bullet">▸</span>
              <strong>AI Computer Vision:</strong> YOLOv10-driven PPE detection identifying hard hats and safety gear with instant hazard alerts.
            </li>
            <li>
              <span className="highlight-bullet">▸</span>
              <strong>React Dashboard:</strong> Interactive live analytics, worker registry, and SOS emergency alarm controls.
            </li>
          </ul>

          <div className="video-actions">
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary video-cta-btn"
            >
              <img src="/icons/youtube.svg" alt="YouTube" className="btn-icon" />
              Watch on YouTube <span>↗</span>
            </a>
            <a 
              href={channelUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary video-secondary-btn"
            >
              Subscribe @JAYASURYA-KK <span>↗</span>
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary video-secondary-btn"
            >
              <img src="/icons/github.svg" alt="GitHub" className="btn-icon" />
              GitHub Repo <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

