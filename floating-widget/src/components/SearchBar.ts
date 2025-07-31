import { createVoiceButtonIcon } from '../icons';
import { STYLE_CONFIG, applyGradientBorderWithFallback } from '../styles';

/**
 * Props for the SearchBar component
 */
export interface SearchBarProps {
  placeholder?: string;
  onInputFocus?: (event: FocusEvent) => void;
  onInputBlur?: (event: FocusEvent) => void;
  onInputChange?: (event: Event) => void;
  onVoiceClick?: (event: MouseEvent) => void;
  value?: string;
  className?: string;
}

/**
 * Creates a reusable search bar component with glass morphism styling and gradient border
 * @param props - Configuration options for the search bar
 * @returns HTMLElement containing the complete search bar
 */
export function createSearchBar(props: SearchBarProps = {}): HTMLElement {
  const {
    placeholder = 'Ask anything',
    onInputFocus,
    onInputBlur,
    onInputChange,
    onVoiceClick,
    value = '',
    className = ''
  } = props;

  // Create container
  const container = document.createElement('div');
  container.style.cssText = `
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  `;
  
  if (className) {
    container.className = className;
  }

  // Create input
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = placeholder;
  input.value = value;
  // Add unique widget class for higher specificity
  input.className = 'nyt-widget-search-input';
  // Create a wrapper for the input to maintain glass morphism background
  const inputWrapper = document.createElement('div');
  inputWrapper.style.cssText = `
    position: relative;
    width: 100%;
    height: 51px;
    border-radius: 41px;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(10px);
    box-shadow: 0 1.272px 15.267px rgba(0, 0, 0, 0.05);
    text-align: left;
  `;
  
  input.style.cssText = `
    height: 100% !important;
    border-radius: 41px !important;
    background: transparent !important;
    border: none !important;
    padding: 7.63px 12px !important;
    padding-right: 44px !important;
    margin: 0 !important;
    background-image: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    font-size: 16px !important;
    font-family: ${STYLE_CONFIG.fonts.primary} !important;
    outline: none !important;
    position: relative !important;
    width: 100% !important;
    caret-color: #B8FFE3 !important;
    text-align: left !important;
    box-sizing: border-box !important;
    display: block !important;
    color: transparent !important;
    line-height: normal !important;
    vertical-align: baseline !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  `;
  
  // Style placeholder with gradient
  const style = document.createElement('style');
  const uniqueClass = `gradient-input-${Math.random().toString(36).substring(2, 11)}`;
  input.classList.add(uniqueClass);
  style.textContent = `
    .nyt-widget-search-input.${uniqueClass} {
      text-align: left !important;
      margin: 0 !important;
      padding: 7.63px 12px !important;
      padding-right: 44px !important;
      background: transparent !important;
      border: none !important;
      width: 100% !important;
      height: 100% !important;
      color: transparent !important;
    }
    .nyt-widget-search-input.${uniqueClass}::placeholder {
      background: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      background-image: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      text-fill-color: transparent !important;
      text-align: left !important;
      opacity: 1 !important;
      color: transparent !important;
    }
    .nyt-widget-search-input.${uniqueClass}::-webkit-input-placeholder {
      background: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      background-image: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      opacity: 1 !important;
    }
    .nyt-widget-search-input.${uniqueClass}::-moz-placeholder {
      background: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      background-image: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      opacity: 1 !important;
    }
    .nyt-widget-search-input.${uniqueClass}:-ms-input-placeholder {
      background: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      background-image: linear-gradient(90deg, #B8FFE3 0%, #C081FF 100%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      opacity: 1 !important;
    }
    .nyt-widget-search-input.${uniqueClass}:focus {
      text-align: left !important;
      outline: none !important;
    }
  `;
  document.head.appendChild(style);

  // Apply gradient border to wrapper instead of input
  applyGradientBorderWithFallback(inputWrapper, '1px');

  // Add focus/blur handlers
  input.addEventListener('focus', (event) => {
    inputWrapper.style.boxShadow = '0 0 0 2px rgba(184, 255, 227, 0.3)';
    if (onInputFocus) {
      onInputFocus(event);
    }
  });

  input.addEventListener('blur', (event) => {
    inputWrapper.style.boxShadow = '0 1.272px 15.267px rgba(0, 0, 0, 0.05)';
    if (onInputBlur) {
      onInputBlur(event);
    }
  });

  // Add change handler
  if (onInputChange) {
    input.addEventListener('input', onInputChange);
  }

  // Create voice button
  const voiceButton = document.createElement('button');
  voiceButton.style.cssText = `
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s ease;
    z-index: 1;
  `;

  voiceButton.appendChild(createVoiceButtonIcon());

  // Voice button hover effects
  voiceButton.addEventListener('mouseenter', () => {
    voiceButton.style.opacity = '0.8';
  });

  voiceButton.addEventListener('mouseleave', () => {
    voiceButton.style.opacity = '1';
  });

  // Voice button click handler
  if (onVoiceClick) {
    voiceButton.addEventListener('click', onVoiceClick);
  }

  // Assemble components
  inputWrapper.appendChild(input);
  container.appendChild(inputWrapper);
  container.appendChild(voiceButton);

  return container;
}