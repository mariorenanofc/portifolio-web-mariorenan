import React from 'react';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}) => {
  const { ref, isInView } = useInView();
  const prefersReducedMotion = usePrefersReducedMotion();

  const getTransform = () => {
    if (prefersReducedMotion) return 'none';
    
    switch (direction) {
      case 'up': return isInView ? 'translateY(0)' : 'translateY(30px)';
      case 'down': return isInView ? 'translateY(0)' : 'translateY(-30px)';
      case 'left': return isInView ? 'translateX(0)' : 'translateX(30px)';
      case 'right': return isInView ? 'translateX(0)' : 'translateX(-30px)';
      default: return isInView ? 'translateY(0)' : 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: prefersReducedMotion ? 1 : (isInView ? 1 : 0),
        transform: getTransform(),
        transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};