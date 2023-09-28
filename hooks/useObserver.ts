import { RefObject, useEffect, useRef, useState } from "react";

interface useObserverProps<T>{
    ref: RefObject<T>
}

export const useObserver = <T extends HTMLElement>({ ref }:useObserverProps<T>) => {
    const [isVisible, setIsVisible] = useState(false);
    // const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return {
        isVisible
    }
}