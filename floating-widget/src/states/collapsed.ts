import { createThreeAIStarsIcon } from '../icons';
import { 
  createCollapsedButtonStyles, 
  createGradientText, 
  STYLE_CONFIG, 
  applyCommonStyles,
  applyTrueGradientBorder,
  cleanupGradientBorder
} from '../styles';
import { addHoverEffects, addClickAnimation } from '../animations';

export class CollapsedState {
  private element: HTMLElement | null = null;

  public render(): HTMLElement {
    const button = document.createElement('button');
    button.setAttribute('data-widget-state', 'collapsed');
    button.style.cssText = createCollapsedButtonStyles();
    
    // Clean up any existing gradient border before applying new one
    cleanupGradientBorder(button);
    
    // Apply true gradient border that respects border-radius
    applyTrueGradientBorder(button, '1px');
    
    // Create content container
    const content = document.createElement('div');
    content.style.cssText = `
      display: flex;
      align-items: center;
      gap: 4px;
      position: relative;
      z-index: 1;
    `;
    
    // Add three AI stars icon
    const aiStarsIcon = createThreeAIStarsIcon('14px', '15px', 'white');
    content.appendChild(aiStarsIcon);
    
    // Add "Ask" text with gradient
    const askText = createGradientText('Ask', STYLE_CONFIG.gradients.primary);
    askText.style.fontSize = STYLE_CONFIG.fonts.sizes.medium;
    askText.style.fontWeight = '400';
    content.appendChild(askText);
    
    button.appendChild(content);
    
    // Apply common styles and effects
    applyCommonStyles(button);
    addHoverEffects(button);
    addClickAnimation(button);
    
    this.element = button;
    return button;
  }


  public getElement(): HTMLElement | null {
    return this.element;
  }

  public destroy(): void {
    if (this.element) {
      // Clean up gradient border styles
      cleanupGradientBorder(this.element);
      
      if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
    this.element = null;
  }
}