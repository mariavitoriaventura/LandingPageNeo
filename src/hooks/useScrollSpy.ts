import { useEffect, useState } from 'react';

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = selectors.map((s) => document.querySelector(s));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.3, ...options }
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [selectors, options]);

  return activeId;
}
