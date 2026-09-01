import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Lenis from 'lenis';

export const ScrollBackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const displayTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollControlled, setIsScrollControlled] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Draw current video frame onto canvas with aspect-fill (object-cover)
  const drawFrame = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || video.readyState < 2) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const vw = video.videoWidth || 1920;
    const vh = video.videoHeight || 1080;

    const videoRatio = vw / vh;
    const canvasRatio = cw / ch;

    let drawW = cw;
    let drawH = ch;
    let x = 0;
    let y = 0;

    if (canvasRatio > videoRatio) {
      drawH = cw / videoRatio;
      y = (ch - drawH) / 2;
    } else {
      drawW = ch * videoRatio;
      x = (cw - drawW) / 2;
    }

    ctx.drawImage(video, x, y, drawW, drawH);
  };

  // Adjust canvas size for high-DPI (Retina) displays
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    drawFrame();
  };

  useEffect(() => {
    // Initialize Lenis for buttery-smooth inertial scroll physics
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    const video = videoRef.current;
    if (!video) return;

    handleResize();

    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
      if (isScrollControlled) {
        video.pause();
      }
      updateTargetFromScroll(lenis.scroll, lenis.limit);
      drawFrame();
    };

    const handleFrameUpdate = () => {
      drawFrame();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeked', handleFrameUpdate);
    video.addEventListener('canplay', handleFrameUpdate);

    // Setup requestVideoFrameCallback if supported by browser
    let rvfcId: number | null = null;
    const scheduleVideoFrameCallback = () => {
      if ('requestVideoFrameCallback' in video) {
        rvfcId = (video as any).requestVideoFrameCallback(() => {
          drawFrame();
          scheduleVideoFrameCallback();
        });
      }
    };
    scheduleVideoFrameCallback();

    const updateTargetFromScroll = (scrollY: number, limit: number) => {
      const progress = limit > 0 ? Math.min(Math.max(scrollY / limit, 0), 1) : 0;
      setScrollProgress(progress);

      if (video.duration && isScrollControlled) {
        targetTimeRef.current = progress * video.duration;
      }
    };

    // Listen to Lenis smooth scroll updates
    lenis.on('scroll', (e: any) => {
      updateTargetFromScroll(e.scroll, e.limit);
    });

    // Main animation loop: Lenis RAF + Smooth Video Scrubbing
    const rafLoop = (time: number) => {
      lenis.raf(time);

      if (video && video.duration) {
        if (isScrollControlled) {
          // Dynamic adaptive lerp for luxurious momentum
          const diff = targetTimeRef.current - displayTimeRef.current;
          displayTimeRef.current += diff * 0.075;

          // Seek video only when video decoder is NOT busy seeking
          if (!video.seeking && Math.abs(video.currentTime - displayTimeRef.current) > 0.005) {
            const seekTime = displayTimeRef.current;
            if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
              try {
                (video as any).fastSeek(seekTime);
              } catch {
                video.currentTime = seekTime;
              }
            } else {
              video.currentTime = seekTime;
            }
          }
          drawFrame();
        } else {
          // Auto continuous playback
          drawFrame();
        }
      }

      animationFrameRef.current = requestAnimationFrame(rafLoop);
    };

    animationFrameRef.current = requestAnimationFrame(rafLoop);

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleFrameUpdate);
      video.removeEventListener('canplay', handleFrameUpdate);
      if (rvfcId !== null && 'cancelVideoFrameCallback' in video) {
        (video as any).cancelVideoFrameCallback(rvfcId);
      }
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lenis.destroy();
    };
  }, [isScrollControlled]);

  const toggleScrollMode = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isScrollControlled) {
      setIsScrollControlled(false);
      video.play().catch(() => {});
    } else {
      setIsScrollControlled(true);
      video.pause();
      if (video.duration && lenisRef.current) {
        const progress = lenisRef.current.limit > 0 ? lenisRef.current.scroll / lenisRef.current.limit : 0;
        targetTimeRef.current = progress * video.duration;
        displayTimeRef.current = targetTimeRef.current;
        video.currentTime = targetTimeRef.current;
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
      {/* Off-screen source video element for decoding */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/xxx8fpey/video/upload/v1788236527/Person_tilting_head_upward_202609011020.mp4"
        preload="auto"
        muted={isMuted}
        playsInline
        className="hidden"
      />

      {/* Smooth Canvas Rendering Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover object-center filter brightness-105 contrast-110 saturate-105 transition-opacity duration-700"
        style={{
          transform: 'scale(1.02)',
        }}
      />

      {/* Subtle Luminous Ambient Overlays */}
      <div className="absolute inset-0 bg-[#050507]/15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/80 via-transparent to-[#050507]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-hero opacity-60 pointer-events-none" />

      {/* Cyber Grid Layer */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      {/* Interactive Floating HUD indicator */}
      <div className="absolute bottom-6 left-6 z-30 pointer-events-auto hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-pill text-xs font-mono text-white/80 shadow-2xl border border-white/10 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
        <span className="text-[11px] text-white/70">
          {isScrollControlled ? 'SCROLL DRIVEN VIDEO' : 'CONTINUOUS PLAYBACK'}
        </span>
        <span className="text-[10px] text-[#ff4122] font-semibold">
          {Math.round(scrollProgress * 100)}%
        </span>

        <div className="w-px h-3.5 bg-white/20 mx-1" />

        <button
          onClick={toggleScrollMode}
          className="hover:text-white text-white/60 p-1 transition-colors cursor-pointer"
          title={isScrollControlled ? 'Switch to Auto Play' : 'Switch to Scroll Control'}
        >
          {isScrollControlled ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </button>

        <button
          onClick={toggleMute}
          className="hover:text-white text-white/60 p-1 transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-[#ff4122]" />}
        </button>
      </div>
    </div>
  );
};


