import React, { useState, useEffect, useRef } from "react";
import "./MorSkills.css";

export const SkillCard = ({ logo, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Handle the interactive glow effect
  useEffect(() => {
    if (!isHovered || !cardRef.current) return;

    const handleMouseMove = (e) => {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className={`skill-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-card-content">
        <div className="skill-icon-wrapper">
          <img src={logo} alt={`${title} logo`} className="skill-icon" />
        </div>
        <h3 className="skill-title">{title}</h3>
        <p className="skill-description">{desc}</p>
      </div>
      <div className="skill-card-glow"></div>
    </div>
  );
};
