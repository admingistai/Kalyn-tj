import { WidgetState, WidgetConfig, EventHandlers } from './types';
import { CollapsedState } from './states/collapsed';
import { ExpandedState } from './states/expanded';
import { createContainerStyles, addGoogleFonts } from './styles';
import { fadeIn, fadeOut, crossFade } from './animations';

class FloatingWidget {
  private container: HTMLElement;
  private currentState: WidgetState = WidgetState.COLLAPSED;
  private collapsedState: CollapsedState;
  private expandedState: ExpandedState;
  private config: WidgetConfig;
  private eventHandlers: EventHandlers;

  constructor(config: WidgetConfig = {}) {
    this.config = {
      theme: 'dark',
      position: {
        bottom: '20px'
      },
      zIndex: 9999,
      ...config
    };

    this.collapsedState = new CollapsedState();
    this.expandedState = new ExpandedState();
    
    this.eventHandlers = {
      onClick: this.handleClick.bind(this),
      onEscape: this.handleEscapeKey.bind(this),
      onOutsideClick: this.handleOutsideClick.bind(this)
    };

    this.container = this.createContainer();
    this.init();
  }

  private createContainer(): HTMLElement {
    const container = document.createElement('div');
    container.setAttribute('data-floating-widget', 'true');
    container.style.cssText = createContainerStyles();
    
    // Apply custom positioning if provided
    if (this.config.position?.bottom) {
      container.style.bottom = this.config.position.bottom;
    }
    if (this.config.position?.left) {
      container.style.left = this.config.position.left;
      container.style.transform = 'none';
    }
    if (this.config.position?.right) {
      container.style.right = this.config.position.right;
      container.style.left = 'auto';
      container.style.transform = 'none';
    }
    if (this.config.zIndex) {
      container.style.zIndex = this.config.zIndex.toString();
    }

    return container;
  }

  private init(): void {
    // Add Google Fonts
    addGoogleFonts();
    
    // Render initial collapsed state
    this.renderCollapsedState();
    
    // Attach to DOM
    document.body.appendChild(this.container);
    
    // Bind event listeners
    this.bindEventListeners();
    
    // Initial fade in
    this.container.style.opacity = '0';
    setTimeout(() => {
      fadeIn(this.container);
    }, 100);
  }

  private renderCollapsedState(): void {
    this.container.innerHTML = '';
    const collapsedElement = this.collapsedState.render();
    collapsedElement.addEventListener('click', this.eventHandlers.onClick);
    this.container.appendChild(collapsedElement);
  }

  private renderExpandedState(): void {
    this.container.innerHTML = '';
    const expandedElement = this.expandedState.render(() => {
      this.collapseWidget();
    });
    this.container.appendChild(expandedElement);
  }

  private handleClick(event: Event): void {
    event.stopPropagation();
    
    if (this.currentState === WidgetState.COLLAPSED) {
      this.expandWidget();
    }
  }

  private handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.currentState === WidgetState.EXPANDED) {
      this.collapseWidget();
    }
  }

  private handleOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    
    if (this.currentState === WidgetState.EXPANDED && 
        !this.container.contains(target)) {
      this.collapseWidget();
    }
  }

  private async expandWidget(): Promise<void> {
    if (this.currentState === WidgetState.EXPANDED) return;
    
    const currentElement = this.container.firstElementChild as HTMLElement;
    if (!currentElement) return;

    // Create expanded widget
    this.renderExpandedState();
    const expandedElement = this.container.firstElementChild as HTMLElement;
    
    // Set initial state for animation
    expandedElement.style.opacity = '0';
    expandedElement.style.display = 'block';
    
    // Perform cross-fade animation
    await crossFade(currentElement, expandedElement);
    
    this.currentState = WidgetState.EXPANDED;
  }

  private async collapseWidget(): Promise<void> {
    if (this.currentState === WidgetState.COLLAPSED) return;
    
    const currentElement = this.container.firstElementChild as HTMLElement;
    if (!currentElement) return;

    // Create collapsed button
    this.renderCollapsedState();
    const collapsedElement = this.container.firstElementChild as HTMLElement;
    
    // Set initial state for animation
    collapsedElement.style.opacity = '0';
    collapsedElement.style.display = 'block';
    
    // Perform cross-fade animation
    await crossFade(currentElement, collapsedElement);
    
    this.currentState = WidgetState.COLLAPSED;
  }

  private bindEventListeners(): void {
    document.addEventListener('keydown', this.eventHandlers.onEscape);
    document.addEventListener('click', this.eventHandlers.onOutsideClick);
  }

  private unbindEventListeners(): void {
    document.removeEventListener('keydown', this.eventHandlers.onEscape);
    document.removeEventListener('click', this.eventHandlers.onOutsideClick);
  }

  public getCurrentState(): WidgetState {
    return this.currentState;
  }

  public destroy(): void {
    this.unbindEventListeners();
    
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    
    this.collapsedState.destroy();
    this.expandedState.destroy();
  }
}

// Auto-initialization with IIFE
(function() {
  function initializeWidget() {
    // Check if widget already exists
    if (document.querySelector('[data-floating-widget="true"]')) {
      return;
    }

    // Get configuration from script tag
    const scriptTag = document.querySelector('script[src*="widget"]') as HTMLScriptElement;
    let config: WidgetConfig = {};
    
    if (scriptTag && scriptTag.dataset.config) {
      try {
        config = JSON.parse(scriptTag.dataset.config);
      } catch (e) {
        console.warn('Failed to parse widget config:', e);
      }
    }

    // Initialize the widget
    new FloatingWidget(config);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWidget);
  } else {
    initializeWidget();
  }
})();

// Export for potential manual initialization
export default FloatingWidget;