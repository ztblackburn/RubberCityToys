import React from "react";

export default function Scene({ scene, onChoice }) {
  return (
    <div className="scene">
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: scene.text }}
      ></p>
      <div className="options">
        {scene.options.map((opt, idx) => (
          <button key={idx} onClick={() => onChoice(opt.next)}>
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
