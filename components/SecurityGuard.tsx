'use client';

import { useEffect } from 'react';

export function SecurityGuard() {
  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable Keyboard Shortcuts for DevTools & Source
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12
      if (e.key === 'F12') e.preventDefault();

      // Disable Ctrl+Shift+I, J, C, K
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key.toUpperCase())) {
        e.preventDefault();
      }

      // Disable Cmd+Opt+I (Mac)
      if (e.metaKey && e.altKey && e.key === 'i') e.preventDefault();

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') e.preventDefault();

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') e.preventDefault();
    };

    // 3. Disable Text Selection (Visual Deterrent)
    const handleSelect = (e: Event) => {
      // Allow selection inside input/textarea if any, but block overall
      const target = e.target as HTMLElement;
      if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
        // e.preventDefault(); // This can sometimes be too invasive, better via CSS
      }
    };

    // 4. Disable Image Dragging
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // 5. Console Poisoning & Anti-Tampering
    const poisonConsole = () => {
      const warning = '\n%c STOP! %c\n\nThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature, it is a scam and will give them access to your account.\n';
      console.log(warning, 'color: red; font-size: 40px; font-weight: bold; -webkit-text-stroke: 1px black;', 'font-size: 18px;');
      
      // Clear console on interval to hide any logs
      console.clear();
    };

    // 6. Aggressive Debugger Trap
    const debuggerTrap = () => {
      (function () {
        (function a() {
          try {
            (function b(i) {
              if (('' + i / i).length !== 1 || i % 20 === 0) {
                // eslint-disable-next-line no-debugger
                debugger;
              } else {
                // eslint-disable-next-line no-debugger
                debugger;
              }
              b(++i);
            })(0);
          } catch (e) {
            setTimeout(a, 50);
          }
        })();
      })();
    };

    const interval = setInterval(poisonConsole, 2000);
    // const trapInterval = setInterval(debuggerTrap, 1000); // This can be very heavy, use with caution

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('selectstart', handleSelect);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('selectstart', handleSelect);
      window.removeEventListener('dragstart', handleDragStart);
      clearInterval(interval);
      // clearInterval(trapInterval);
    };
  }, []);

  return null; // This component doesn't render anything UI-wise
}
