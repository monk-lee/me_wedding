import { useState, useEffect } from 'react';

const useScrollTracker = (
  ref?: React.RefObject<HTMLDivElement>,
  trackScrollDepths?: number[],
  callback?: (params: {
    scrollY: number;
    scrollPercent: number;
    remainingDepths: Array<number>;
  }) => void,
): { scrollY: number } => {
  const [state, setState] = useState({
    scrollDepths: trackScrollDepths,
    scrollY: 0,
  });

  const { scrollDepths, scrollY } = state;

  useEffect(() => {
    if (typeof window === 'undefined' || window.pageYOffset === 0) {
      return;
    }
    setState((oldState) => ({
      ...oldState,
      scrollY: window.pageYOffset,
    }));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const endScrollTracker = () => {
      if (ref) {
        ref.current?.removeEventListener('scroll', handleScroll);
      } else {
        document.removeEventListener('scroll', handleScroll);
      }
    };

    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;

      let scrollTop: number;
      let scrollHeight: number;
      let clientHeight: number;

      if (ref) {
        scrollTop = ref.current?.scrollTop || 0;
        scrollHeight = ref.current?.scrollHeight || 0;
        clientHeight = ref.current?.clientHeight || 0;
      } else {
        scrollTop = h.scrollTop || b.scrollTop;
        scrollHeight = h.scrollHeight || b.scrollHeight;
        clientHeight = h.clientHeight;
      }

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollDepths) {
        const nextMinDepth = Math.min(...scrollDepths, scrollHeight);

        if (scrollPercent >= nextMinDepth) {
          const updatedScrollDepths = scrollDepths.filter(
            (depth) => depth !== nextMinDepth,
          );

          if (updatedScrollDepths.length === 0) {
            endScrollTracker();
          }

          if (callback) {
            callback({
              scrollY: nextMinDepth,
              scrollPercent,
              remainingDepths: updatedScrollDepths,
            });
          }
          setState({
            scrollY: nextMinDepth,
            scrollDepths: updatedScrollDepths,
          });
        }
      } else {
        setState({ ...state, scrollY: scrollPercent });
      }
    };

    if (ref) {
      ref.current?.addEventListener('scroll', handleScroll);
    } else {
      document.addEventListener('scroll', handleScroll);
    }

    return endScrollTracker;
  }, [scrollDepths, scrollY, state]);

  return { scrollY };
};

export default useScrollTracker;
