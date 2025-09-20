import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref: elementRef,
    isVisible: triggerOnce ? hasTriggered || isVisible : isVisible,
    hasTriggered,
  };
};

// Animation variants for different effects
export const scrollAnimationVariants = {
  fadeIn: {
    hidden: "opacity-0",
    visible: "opacity-100 transition-opacity duration-700 ease-out",
  },
  fadeInUp: {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0 transition-all duration-700 ease-out",
  },
  fadeInLeft: {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0 transition-all duration-700 ease-out",
  },
  fadeInRight: {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0 transition-all duration-700 ease-out",
  },
  scaleIn: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100 transition-all duration-700 ease-out",
  },
  slideInFromBottom: {
    hidden: "opacity-0 translate-y-16",
    visible: "opacity-100 translate-y-0 transition-all duration-1000 ease-out",
  },
  staggerContainer: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  staggerItem: {
    hidden: "opacity-0 translate-y-4",
    visible: "opacity-100 translate-y-0",
  },
};
