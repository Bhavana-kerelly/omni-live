import React from 'react';
import { getAssetUrl } from '../../utils/getAssetUrl';

export default function HeroVideo({ videoRef, isLoaded, onVideoError }) {
  return (
    <div className="hero-video-wrapper hero-video-background-layer">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        poster={getAssetUrl('/images/hospital-hero-poster.jpg')}
        className="hero-video hero-video-media"
        onError={onVideoError}
        aria-hidden="true"
        style={{ zIndex: 1, objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
      >
        <source src={getAssetUrl('/videos/my-new-hero-video.mp4')} type="video/mp4" />
        <source src={getAssetUrl('/videos/omni-hero.mp4')} type="video/mp4" />
        <source src={getAssetUrl('/videos/cardiology.mp4')} type="video/mp4" />
      </video>


    </div>
  );
}


