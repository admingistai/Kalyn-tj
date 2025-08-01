import { StyleConfig } from './types';

export const STYLE_CONFIG: StyleConfig = {
  collapsedButton: {
    height: '51px',
    padding: '7.634px 12px',
    borderRadius: '41px',
    background: 'rgba(255, 255, 255, 0.10)',
    border: '1px solid transparent',
    boxShadow: '0 1.272px 15.267px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)'
  },
  expandedWidget: {
    width: '348px',
    height: '372px',
    borderRadius: '30px',
    padding: '25px 14px',
    background: 'rgba(255, 255, 255, 0.10)',
    border: '1px solid transparent',
    boxShadow: '0 1.272px 15.267px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)'
  },
  typingWidget: {
    width: '348px',
    height: '205px',
    borderRadius: '30px',
    padding: '10px',
    background: 'rgba(255, 255, 255, 0.10)',
    border: '1px solid transparent',
    boxShadow: '0 1.272px 15.267px rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)'
  },
  gradients: {
    primary: 'linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%)',
    border: 'linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%)'
  },
  fonts: {
    primary: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    sizes: {
      small: '14px',
      medium: '16px',
      large: '24px'
    }
  }
};

// Legacy gradient border function (deprecated)
export function applyGradientBorder(element: HTMLElement, gradient: string): void {
  element.style.background = `${gradient} border-box`;
  element.style.backgroundClip = 'padding-box, border-box';
  element.style.backgroundOrigin = 'padding-box, border-box';
}

// Modern mask-composite gradient border implementation that respects border-radius
export function applyTrueGradientBorder(element: HTMLElement, borderWidth: string = '1px'): void {
  // Ensure element has relative positioning for pseudo-element
  if (element.style.position !== 'absolute' && element.style.position !== 'fixed') {
    element.style.position = 'relative';
  }
  
  // Generate unique identifier for this element's gradient border
  const pseudoElementId = `gradient-border-${Math.random().toString(36).substring(2, 11)}`;
  element.setAttribute('data-gradient-border', pseudoElementId);
  
  // Create and inject CSS for pseudo-element
  const style = document.createElement('style');
  style.setAttribute('data-gradient-border-style', pseudoElementId);
  style.textContent = `
    [data-gradient-border="${pseudoElementId}"]::before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 0;
      border-radius: inherit;
      padding: ${borderWidth};
      background: ${STYLE_CONFIG.gradients.border};
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  `;
  
  // Append to head if not already present
  if (!document.querySelector(`style[data-gradient-border-style="${pseudoElementId}"]`)) {
    document.head.appendChild(style);
  }
}

// Browser compatibility detection
export function supportsMaskComposite(): boolean {
  const testElement = document.createElement('div');
  const style = testElement.style as any;
  
  // Check for modern mask-composite support
  if ('maskComposite' in style) {
    return true;
  }
  
  // Check for WebKit mask-composite support
  if ('webkitMaskComposite' in style) {
    return true;
  }
  
  return false;
}

// DEPRECATED: Gradient border implementation using border-image (incompatible with border-radius)
// WARNING: border-image does not work with border-radius. Use applyTrueGradientBorder() instead.
export function applyGradientBorderWithFallback(element: HTMLElement, borderWidth: string = '1px'): void {
  console.warn('⚠️  applyGradientBorderWithFallback is deprecated. Use applyTrueGradientBorder() for border-radius compatibility.');
  
  // Check if browser supports border-image (most modern browsers do)
  if (CSS.supports('border-image', 'linear-gradient(0deg, red, blue) 1')) {
    // Modern border-image approach - creates true gradient border (NO BORDER-RADIUS SUPPORT)
    element.style.border = `${borderWidth} solid transparent`;
    element.style.borderImage = `${STYLE_CONFIG.gradients.border} 1`;
    element.style.borderImageSlice = '1';
  } else {
    // Fallback for older browsers - use background layers
    element.style.background = `
      ${STYLE_CONFIG.gradients.border} border-box
    `;
    element.style.border = `${borderWidth} solid transparent`;
    element.style.backgroundClip = 'border-box';
    element.style.backgroundOrigin = 'border-box';
  }
}

// Cleanup function for gradient border styles
export function cleanupGradientBorder(element: HTMLElement): void {
  // Clean up old complex gradient border attributes
  const pseudoElementId = element.getAttribute('data-gradient-border');
  if (pseudoElementId) {
    const styleElement = document.querySelector(`style[data-gradient-border-style="${pseudoElementId}"]`);
    if (styleElement && styleElement.parentNode) {
      styleElement.parentNode.removeChild(styleElement);
    }
    element.removeAttribute('data-gradient-border');
  }
  
  // Clean up old simple gradient border attributes
  const simplePseudoElementId = element.getAttribute('data-simple-gradient-border');
  if (simplePseudoElementId) {
    const simpleStyleElement = document.querySelector(`style[data-simple-gradient-border-style="${simplePseudoElementId}"]`);
    if (simpleStyleElement && simpleStyleElement.parentNode) {
      simpleStyleElement.parentNode.removeChild(simpleStyleElement);
    }
    element.removeAttribute('data-simple-gradient-border');
  }
  
  // Clean up new border-image gradient border styles
  element.style.border = '';
  element.style.borderImage = '';
  element.style.borderImageSlice = '';
  element.style.backgroundClip = '';
  element.style.backgroundOrigin = '';
}

export function createGradientText(text: string, gradient: string): HTMLElement {
  const span = document.createElement('span');
  span.textContent = text;
  span.style.background = gradient;
  span.style.webkitBackgroundClip = 'text';
  span.style.backgroundClip = 'text';
  span.style.webkitTextFillColor = 'transparent';
  span.style.backgroundSize = '100%';
  span.style.backgroundRepeat = 'no-repeat';
  return span;
}

export function applyCommonStyles(element: HTMLElement): void {
  element.style.fontFamily = STYLE_CONFIG.fonts.primary;
  element.style.boxSizing = 'border-box';
  (element.style as any).webkitFontSmoothing = 'antialiased';
  (element.style as any).mozOsxFontSmoothing = 'grayscale';
}

export function createContainerStyles(): string {
  return `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    font-family: ${STYLE_CONFIG.fonts.primary};
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `;
}

export function createCollapsedButtonStyles(): string {
  return `
    display: flex;
    align-items: center;
    gap: 4px;
    height: ${STYLE_CONFIG.collapsedButton.height};
    padding: ${STYLE_CONFIG.collapsedButton.padding};
    border-radius: ${STYLE_CONFIG.collapsedButton.borderRadius};
    background: ${STYLE_CONFIG.collapsedButton.background};
    border: ${STYLE_CONFIG.collapsedButton.border};
    box-shadow: ${STYLE_CONFIG.collapsedButton.boxShadow};
    backdrop-filter: ${STYLE_CONFIG.collapsedButton.backdropFilter};
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: ${STYLE_CONFIG.fonts.sizes.medium};
    font-weight: 400;
    color: white;
    outline: none;
    position: relative;
    overflow: hidden;
    transform-origin: center center;
    transform: scale(1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    will-change: transform;
  `;
}

export function createExpandedWidgetStyles(): string {
  return `
    width: ${STYLE_CONFIG.expandedWidget.width};
    height: ${STYLE_CONFIG.expandedWidget.height};
    border-radius: ${STYLE_CONFIG.expandedWidget.borderRadius};
    padding: ${STYLE_CONFIG.expandedWidget.padding};
    background: ${STYLE_CONFIG.expandedWidget.background};
    border: ${STYLE_CONFIG.expandedWidget.border};
    box-shadow: ${STYLE_CONFIG.expandedWidget.boxShadow};
    backdrop-filter: ${STYLE_CONFIG.expandedWidget.backdropFilter};
    color: white;
    display: flex;
    flex-direction: column;
    gap: 22px;
    position: relative;
    transform-origin: center center;
    transform: scale(1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  `;
}

export function createTypingWidgetStyles(): string {
  return `
    width: ${STYLE_CONFIG.typingWidget.width};
    height: ${STYLE_CONFIG.typingWidget.height};
    border-radius: ${STYLE_CONFIG.typingWidget.borderRadius};
    padding: ${STYLE_CONFIG.typingWidget.padding};
    background: ${STYLE_CONFIG.typingWidget.background};
    border: ${STYLE_CONFIG.typingWidget.border};
    box-shadow: ${STYLE_CONFIG.typingWidget.boxShadow};
    backdrop-filter: ${STYLE_CONFIG.typingWidget.backdropFilter};
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    transform-origin: center center;
    transform: scale(1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: height 0.3s ease;
  `;
}

export function createSearchInputStyles(): string {
  return `
    height: 51px;
    border-radius: 41px;
    background: rgba(255, 255, 255, 0.10);
    border: 1px solid transparent;
    padding: 7.63px 12px;
    color: white;
    font-size: 16px;
    font-family: ${STYLE_CONFIG.fonts.primary};
    outline: none;
    backdrop-filter: blur(10px);
    position: relative;
    width: 100%;
  `;
}

export function createSuggestionItemStyles(): string {
  return `
    display: flex;
    align-items: center;
    padding: 8px 0;
    color: white;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    box-sizing: border-box;
  `;
}

export function createFooterStyles(): string {
  return `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0;
  `;
}

export function createMoreButtonStyles(): string {
  return `
    background: rgba(140, 140, 140, 0.2);
    border: none;
    padding: 0 14px;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-family: ${STYLE_CONFIG.fonts.primary};
    font-weight: 500;
    line-height: 22.4px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 320px;
    height: 35px;
    box-sizing: border-box;
  `;
}

export function createAvatarStyles(): string {
  return `
    width: 35.22px;
    height: 35.22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    font-weight: 500;
    margin-left: -8px;
    border: 2px solid rgba(255, 255, 255, 0.2);
  `;
}

export function createInputBarStyles(): string {
  return `
    display: flex;
    width: 320px;
    height: ${STYLE_CONFIG.collapsedButton.height};
    padding: ${STYLE_CONFIG.collapsedButton.padding};
    align-items: center;
    gap: 10px;
    border-radius: ${STYLE_CONFIG.collapsedButton.borderRadius};
    background: ${STYLE_CONFIG.collapsedButton.background};
    backdrop-filter: ${STYLE_CONFIG.collapsedButton.backdropFilter};
    position: relative;
    transition: all 0.3s ease;
    transform-origin: center center;
    transform: scale(1);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  `;
}

export function createInputFieldStyles(): string {
  return `
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-family: ${STYLE_CONFIG.fonts.primary};
    font-size: ${STYLE_CONFIG.fonts.sizes.medium};
    font-weight: 400;
    color: white;
    position: relative;
    z-index: 2;
  `;
}

export function createVoiceButtonStyles(): string {
  return `
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${STYLE_CONFIG.gradients.primary};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    z-index: 3;
    flex-shrink: 0;
  `;
}

export function createGradientPlaceholderStyles(): string {
  return `
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-family: ${STYLE_CONFIG.fonts.primary};
    font-size: ${STYLE_CONFIG.fonts.sizes.medium};
    font-weight: 400;
    background: ${STYLE_CONFIG.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    pointer-events: none;
    transition: opacity 0.3s ease;
  `;
}

export function addGoogleFonts(): void {
  if (!document.querySelector('link[href*="Work+Sans"]')) {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
}

