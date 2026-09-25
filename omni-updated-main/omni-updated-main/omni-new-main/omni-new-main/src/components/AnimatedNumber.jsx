import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedNumber({ value, duration = 1500, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Extract number from string if formatted like "15+" or "50,000+"
  const targetNum = parseInt(String(value).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * targetNum);

            setDisplayValue(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(targetNum);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNum, duration]);

  // Format with commas if original string had commas
  const formattedVal = String(value).includes(',')
    ? displayValue.toLocaleString()
    : displayValue;

  return (
    <span ref={elementRef}>
      {hasAnimated.current ? formattedVal : displayValue}{suffix || (String(value).includes('+') ? '+' : '')}
    </span>
  );
}
