import React, { useRef, useEffect, useState } from 'react';
import './style.css';

const TruncateText = ({ text, icon, className }) => {
  const containerRef = useRef(null);
  const [maxLength, setMaxLength] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const maxTextWidth = containerWidth;
      const charsToFit = Math.floor(maxTextWidth / 6);
      setMaxLength(charsToFit);
    }
  }, [text]);

  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <p className={`truncate-text m-0 ${className}`} ref={containerRef}>
      {icon && icon}
      {truncatedText}
    </p>
  );
};

export default TruncateText;
