import { useEffect, useRef } from "react";

const revealObserverOptions: IntersectionObserverInit = {
  rootMargin: "0px 0px -12% 0px",
  threshold: 0.2,
};

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.visible = "true";
        observer.unobserve(node);
      }
    }, revealObserverOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return ref;
}
