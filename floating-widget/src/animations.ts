import { AnimationConfig } from './types';

export const DEFAULT_ANIMATION_CONFIG: AnimationConfig = {
  duration: 300,
  easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
};

export function fadeIn(element: HTMLElement, config: AnimationConfig = DEFAULT_ANIMATION_CONFIG): Promise<void> {
  return new Promise((resolve) => {
    element.style.opacity = '0';
    element.style.display = 'block';
    element.style.transition = `opacity ${config.duration}ms ${config.easing}`;
    
    requestAnimationFrame(() => {
      element.style.opacity = '1';
    });
    
    setTimeout(() => {
      resolve();
    }, config.duration);
  });
}

export function fadeOut(element: HTMLElement, config: AnimationConfig = DEFAULT_ANIMATION_CONFIG): Promise<void> {
  return new Promise((resolve) => {
    element.style.transition = `opacity ${config.duration}ms ${config.easing}`;
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.display = 'none';
      resolve();
    }, config.duration);
  });
}

export function scaleIn(element: HTMLElement, config: AnimationConfig = DEFAULT_ANIMATION_CONFIG): Promise<void> {
  return new Promise((resolve) => {
    element.style.transform = 'scale(0.95)';
    element.style.opacity = '0';
    element.style.display = 'block';
    element.style.transition = `all ${config.duration}ms ${config.easing}`;
    
    requestAnimationFrame(() => {
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    });
    
    setTimeout(() => {
      resolve();
    }, config.duration);
  });
}

export function scaleOut(element: HTMLElement, config: AnimationConfig = DEFAULT_ANIMATION_CONFIG): Promise<void> {
  return new Promise((resolve) => {
    element.style.transition = `all ${config.duration}ms ${config.easing}`;
    element.style.transform = 'scale(0.95)';
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.display = 'none';
      resolve();
    }, config.duration);
  });
}

export function addHoverEffects(element: HTMLElement): void {
  const originalBoxShadow = element.style.boxShadow || '';
  
  element.addEventListener('mouseenter', () => {
    // Only apply scale, not translateX
    element.style.transform = 'scale(1.05)';
    element.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
  });
  
  element.addEventListener('mouseleave', () => {
    // Reset to default scale
    element.style.transform = 'scale(1)';
    element.style.boxShadow = originalBoxShadow;
  });
}

export function addClickAnimation(element: HTMLElement): void {
  element.addEventListener('mousedown', () => {
    // Only apply scale, not translateX
    element.style.transform = 'scale(0.98)';
  });
  
  element.addEventListener('mouseup', () => {
    // Reset to default scale
    element.style.transform = 'scale(1)';
  });
  
  element.addEventListener('mouseleave', () => {
    // Reset to default scale on mouse leave
    element.style.transform = 'scale(1)';
  });
}

export async function crossFade(
  elementOut: HTMLElement, 
  elementIn: HTMLElement, 
  config: AnimationConfig = DEFAULT_ANIMATION_CONFIG
): Promise<void> {
  const fadeOutPromise = fadeOut(elementOut, config);
  const fadeInPromise = fadeIn(elementIn, config);
  
  await Promise.all([fadeOutPromise, fadeInPromise]);
}