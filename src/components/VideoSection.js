import React, { useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://youtu.be/RTOscc7tufk?si=jptCOicq7uuNGm7N";
  const embedUrl = "https://www.youtube.com/embed/RTOscc7tufk?autoplay=1&rel=0";
  const channelUrl = "https://www.youtube.com/@JAYASURYA-KK";
  const thumbnailUrl = "/screenshots/Smart_Construction_Safety_youtube_thumbnail.png";

  return (
    <section id="video" className="section video-section">
      <h2 className="section-title">Video Demo</h2>

      <div className="glass-panel simple-video-card">
        <div className="video-player-box">
          {isPlaying ? (
            <div className="video-iframe-wrapper">
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
                title="Close video"
              >
                ✕ Close
              </button>
            </div>
          ) : (
            <div 
              className="video-thumbnail-wrapper"
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsPlaying(true);
                }
              }}
              title="Click to play video"
            >
              <img 
                src={thumbnailUrl} 
                alt="Smart Safety Monitor Video Demonstration" 
                className="video-thumbnail-img"
              />
              <div className="video-play-btn">
                <svg viewBox="0 0 24 24" className="play-icon" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="simple-video-footer">
          <h3 className="simple-video-title">Smart Safety Monitor — Live Demonstration</h3>
          <p className="simple-video-desc">
            End-to-end working demonstration of the IoT smart helmet telemetry and real-time AI PPE safety platform.
          </p>
          <div className="simple-video-links">
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
            >
              <img src="/icons/youtube.svg" alt="YouTube" className="yt-btn-icon" />
              Watch on YouTube <span>↗</span>
            </a>
            <a 
              href={channelUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-secondary"
            >
              YouTube Channel <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
