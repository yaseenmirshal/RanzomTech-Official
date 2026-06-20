"use client";
import { useEffect, useState } from "react";

export default function VideoPopup({ style, instagramUrl }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const loadInstagram = async () => {
      // ✅ If script exists, just process
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        return;
      }

      // ✅ Load script
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      };
    };

    // ✅ Small delay helps Instagram render inside modal
    setTimeout(loadInstagram, 200);
  }, [isOpen]);

  return (
    <>
      {style === 1 && (
        <a onClick={() => setOpen(true)} className="video-popup">
          <span className="icon">
            <i className="fas fa-play" />
          </span>
          <img src="/assets/img/element/bn1-circle.png" alt="img" className="hero-circle" />
        </a>
      )}

      {style === 2 && (
        <a onClick={() => setOpen(true)} className="video-popup step-textcircle">
          <span className="icon d-center radius100">
            <i className="fas fa-play" />
          </span>
          <img src="/assets/img/element/step-textcircle.png" alt="img" className="step-circle" />
        </a>
      )}

      {style === 3 && (
        <a onClick={() => setOpen(true)} className="video-popup position-relative">
          <span className="icons themebg radius100 d-center">
            <i className="fas fa-play" />
          </span>
          <img src="/assets/img/element/watch-ciricle01.png" alt="img" className="circle" />
        </a>
      )}

      {/* ✅ Modal */}
      {isOpen && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "420px",
              background: "#111",
              borderRadius: "14px",
              padding: "10px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "8px",
                right: "12px",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              ✕
            </button>

            {/* ✅ Instagram Embed */}
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={instagramUrl}
              data-instgrm-version="14"
              style={{
                margin: "0 auto",
                width: "100%",
                minWidth: "280px",
                background: "#111",
              }}
            ></blockquote>

            {/* ✅ Fallback button if embed doesn't load */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                marginTop: "10px",
                textAlign: "center",
                color: "#fff",
                textDecoration: "underline",
                fontSize: "14px",
              }}
            >
              Open on Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}
