import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Outer Ring */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
        }}
        animate={{
          width: isHovering ? 80 : 32,
          height: isHovering ? 80 : 32,
          left: isHovering ? -40 : -16,
          top: isHovering ? -40 : -16,
          backgroundColor: isHovering ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 211, 238, 0.05)",
          borderColor: isHovering ? "rgba(34, 211, 238, 0.5)" : "rgba(34, 211, 238, 0.2)",
        }}
        className="fixed rounded-full border border-cyan-500/20 mix-blend-screen transition-colors duration-300"
      />
      
      {/* Core Dot */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -2,
          top: -2,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        className="fixed w-1 h-1 bg-cyan-400 rounded-full"
      />

      {/* Hover Pulse */}
      {isHovering && (
        <motion.div
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            left: -4,
            top: -4,
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="fixed w-2 h-2 bg-cyan-400 rounded-full"
        />
      )}
    </div>
  );
}
