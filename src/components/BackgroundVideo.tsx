import { useRef, useCallback, useEffect } from "react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const fadeIn = useCallback((video: HTMLVideoElement) => {
    const start = performance.now();
    const duration = 500;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      video.style.opacity = String(progress);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  const fadeOut = useCallback((video: HTMLVideoElement): Promise<void> => {
    return new Promise((resolve) => {
      const start = performance.now();
      const duration = 500;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        video.style.opacity = String(1 - progress);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(tick);
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => fadeIn(video);

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.5) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        fadeOut(video).then(() => {
          setTimeout(() => {
            video.currentTime = 0;
            video.play();
            video.addEventListener("timeupdate", handleTimeUpdate);
          }, 100);
        });
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [fadeIn, fadeOut]);

  return (
    <video
      ref={videoRef}
      src={VIDEO_URL}
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 0 }}
    />
  );
}
