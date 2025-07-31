import { createMoreIcon, createAIStarsIcon } from '../icons';
import { 
  createExpandedWidgetStyles, 
  createSuggestionItemStyles,
  createMoreButtonStyles,
  STYLE_CONFIG,
  applyCommonStyles,
  applyGradientBorderWithFallback,
  cleanupGradientBorder
} from '../styles';
import { SuggestionItem } from '../types';
import { createSearchBar } from '../components/SearchBar';

export class ExpandedState {
  private element: HTMLElement | null = null;

  private suggestions: SuggestionItem[] = [
    { id: 'top-stories', text: 'Top Stories', icon: 'sparkle' },
    { id: 'breaking-news', text: 'Breaking News', icon: 'sparkle' },
    { id: 'wordle', text: 'Generate a new Wordle', icon: 'sparkle' }
  ];


  public render(onMinimize?: () => void): HTMLElement {
    
    const widget = document.createElement('div');
    widget.setAttribute('data-widget-state', 'expanded');
    widget.style.cssText = createExpandedWidgetStyles();
    
    // Apply modern mask-composite gradient border
    applyGradientBorderWithFallback(widget, '1px');
    
    // Create sections in visual order
    widget.appendChild(this.createHeader());
    widget.appendChild(this.createSearchSection());
    widget.appendChild(this.createSuggestionsSection());
    widget.appendChild(this.createMoreButtonSection());
    
    applyCommonStyles(widget);
    this.element = widget;
    return widget;
  }

  private createHeader(): HTMLElement {
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    
    const title = document.createElement('h2');
    title.textContent = 'Ask New York Times Anything!';
    title.style.cssText = `
      font-size: ${STYLE_CONFIG.fonts.sizes.large};
      font-weight: 600;
      color: white;
      margin: 0;
      max-width: 288px;
    `;
    
    header.appendChild(title);
    
    return header;
  }

  private createSearchSection(): HTMLElement {
    const section = document.createElement('div');
    section.style.cssText = `
      position: relative;
      margin-top: 25px;
    `;
    
    const searchBar = createSearchBar({
      placeholder: 'Ask anything',
      onInputFocus: () => {
        // Handle focus event for potential state transitions
      },
      onVoiceClick: () => {
        // Handle voice button click
      }
    });
    
    section.appendChild(searchBar);
    
    return section;
  }

  private createSuggestionsSection(): HTMLElement {
    const section = document.createElement('div');
    section.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-top: 25px;
    `;
    
    this.suggestions.forEach((suggestion, index) => {
      const item = document.createElement('div');
      item.style.cssText = createSuggestionItemStyles();
      
      const icon = createAIStarsIcon('14px', '18px');
      icon.style.marginRight = '6px';
      const text = document.createElement('span');
      text.textContent = suggestion.text;
      text.style.fontSize = STYLE_CONFIG.fonts.sizes.medium;
      
      item.appendChild(icon);
      item.appendChild(text);
      
      // Add hover effect
      item.addEventListener('mouseenter', () => {
        item.style.opacity = '0.8';
      });
      
      item.addEventListener('mouseleave', () => {
        item.style.opacity = '1';
      });
      
      // Add click handler
      item.addEventListener('click', () => {
        console.log(`Suggestion clicked: ${suggestion.text}`);
      });
      
      section.appendChild(item);
      
      // Add dashed line separator between items (except after the last one)
      if (index < this.suggestions.length - 1) {
        const separator = document.createElement('div');
        separator.style.cssText = `
          width: 100%;
          height: 1px;
          background-image: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.2) 90%, transparent 100%);
          margin: 0;
          position: relative;
          overflow: hidden;
        `;
        
        // Create dashed line effect
        const dashedLine = document.createElement('div');
        dashedLine.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-image: repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.3) 0px,
            rgba(255, 255, 255, 0.3) 4px,
            transparent 4px,
            transparent 8px
          );
        `;
        
        separator.appendChild(dashedLine);
        section.appendChild(separator);
      }
    });
    
    return section;
  }

  private createMoreButtonSection(): HTMLElement {
    const moreSection = document.createElement('div');
    moreSection.style.cssText = `
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
    `;
    
    // More button
    const moreButton = document.createElement('button');
    moreButton.style.cssText = createMoreButtonStyles();
    
    // Add icon
    const moreIcon = createMoreIcon();
    moreButton.appendChild(moreIcon);
    
    // Add text
    const moreText = document.createElement('span');
    moreText.textContent = 'More';
    moreButton.appendChild(moreText);
    
    moreButton.addEventListener('mouseenter', () => {
      moreButton.style.opacity = '0.8';
    });
    
    moreButton.addEventListener('mouseleave', () => {
      moreButton.style.opacity = '1';
    });
    
    moreSection.appendChild(moreButton);
    
    return moreSection;
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