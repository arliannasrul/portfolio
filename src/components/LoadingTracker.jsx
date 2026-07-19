// File: components/LoadingTracker.jsx
import { useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export default function LoadingTracker({ onLoaded }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onLoaded();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, onLoaded]);

  return null;
}