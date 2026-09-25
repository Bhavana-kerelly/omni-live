"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetUrl } from "../../utils/getAssetUrl";

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 48;
  const maxGap = 72;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials = [],
  autoplay = true,
  colors = {},
  fontSizes = {},
}) => {
  // Color & font config with OMNI Hospitals brand defaults
  const colorName = colors.name ?? "#0B1F41";
  const colorDesignation = colors.designation ?? "#0190DE";
  const colorTestimony = colors.testimony ?? "#334155";
  const colorArrowBg = colors.arrowBackground ?? "#0190DE";
  const colorArrowFg = colors.arrowForeground ?? "#FFFFFF";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#70BE44";
  const fontSizeName = fontSizes.name ?? "1.6rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.95rem";
  const fontSizeQuote = fontSizes.quote ?? "1.1rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isMuted, setIsMuted] = useState(true);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);
  const videoRefs = useRef({});

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay (only if not manually unmuted video)
  useEffect(() => {
    if (autoplay && testimonialsLength > 0 && isMuted) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 6000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength, isMuted]);

  // Handle video playback synchronization
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((key) => {
      const vid = videoRefs.current[key];
      if (vid) {
        if (parseInt(key, 10) === activeIndex) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  }, [activeIndex]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (testimonialsLength === 0) return;
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    if (testimonialsLength === 0) return;
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  // Compute transforms for each card (always show 3: left, center, right)
  function getCardStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (!activeTestimonial) return null;

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Video Cards Stack */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => {
            const videoUrl = testimonial.videoSrc || testimonial.video;
            const isActive = index === activeIndex;

            return (
              <div
                key={testimonial.id || index}
                className={`testimonial-card-frame ${isActive ? 'active-card' : ''}`}
                data-index={index}
                style={getCardStyle(index)}
              >
                {videoUrl ? (
                  <div className="video-card-wrapper">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={getAssetUrl(videoUrl)}
                      poster={testimonial.src ? getAssetUrl(testimonial.src) : undefined}
                      autoPlay={isActive}
                      loop
                      muted={isMuted}
                      playsInline
                      className="testimonial-video"
                      onError={(e) => {
                        if (testimonial.videoFallback && e.currentTarget.src !== getAssetUrl(testimonial.videoFallback)) {
                          e.currentTarget.src = getAssetUrl(testimonial.videoFallback);
                          if (isActive) e.currentTarget.play().catch(() => {});
                        }
                      }}
                    />
                    
                    {/* Glowing Video Badge Overlay */}
                    <div className="video-brand-badge">
                      <span className="badge-pulse-dot" />
                      <span className="badge-text">PATIENT VIDEO STORY</span>
                    </div>

                    {/* Interactive Audio Toggle Control for Active Card */}
                    {isActive && (
                      <button
                        type="button"
                        className="video-audio-toggle-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        title={isMuted ? "Unmute Video" : "Mute Video"}
                      >
                        {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                        <span>{isMuted ? "Sound Off" : "Sound On"}</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <img
                    src={getAssetUrl(testimonial.src)}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Content Column */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="name"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="designation"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="quote"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls with OMNI Brand Identity */}
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={20} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={20} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>

      {/* Styled JSX for Brand Customization */}
      <style>{`
        .testimonial-container {
          width: 100%;
          max-width: 64rem;
          padding: 1.5rem;
          margin: 0 auto;
        }
        .testimonial-grid {
          display: grid;
          gap: 3.5rem;
          align-items: center;
        }
        .image-container {
          position: relative;
          width: 100%;
          max-width: 270px;
          height: 480px;
          aspect-ratio: 9 / 16;
          margin: 0 auto;
          perspective: 1000px;
        }
        .testimonial-card-frame {
          position: absolute;
          width: 100%;
          height: 100%;
          aspect-ratio: 9 / 16;
          border-radius: 1.5rem;
          box-shadow: 0 16px 36px rgba(1, 144, 222, 0.18);
          overflow: hidden;
          background: #0B1F41;
          border: 2px solid #EBF4FE;
        }
        .testimonial-card-frame.active-card {
          border-color: #70BE44;
          box-shadow: 0 20px 40px rgba(112, 190, 68, 0.25), 0 0 20px rgba(1, 144, 222, 0.2);
        }
        .video-card-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .testimonial-video,
        .testimonial-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .video-brand-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(11, 31, 65, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(112, 190, 68, 0.6);
          padding: 6px 14px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 5;
        }
        .badge-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #70BE44;
          box-shadow: 0 0 10px #70BE44;
          animation: pulseGreen 1.5s infinite;
        }
        @keyframes pulseGreen {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        .badge-text {
          font-family: monospace;
          font-size: 0.7rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 0.08em;
        }
        .video-audio-toggle-btn {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(1, 144, 222, 0.9);
          color: #FFFFFF;
          border: none;
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
          z-index: 5;
        }
        .video-audio-toggle-btn:hover {
          background: #70BE44;
          transform: translateY(-2px);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .name {
          font-weight: 800;
          margin-bottom: 0.25rem;
          font-family: 'Playfair Display', Georgia, serif;
        }
        .designation {
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .quote {
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .arrow-buttons {
          display: flex;
          gap: 1.25rem;
          padding-top: 2.5rem;
        }
        .arrow-button {
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 14px rgba(1, 144, 222, 0.3);
        }
        .arrow-button:hover {
          box-shadow: 0 8px 20px rgba(112, 190, 68, 0.4);
          transform: scale(1.08);
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularTestimonials;
