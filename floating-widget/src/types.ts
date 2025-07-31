export enum WidgetState {
  COLLAPSED = 'collapsed',
  EXPANDED = 'expanded'
}

export interface WidgetConfig {
  theme?: 'light' | 'dark';
  position?: {
    bottom?: string;
    right?: string;
    left?: string;
  };
  zIndex?: number;
}

export interface AnimationConfig {
  duration: number;
  easing: string;
}

export interface StyleConfig {
  collapsedButton: {
    height: string;
    padding: string;
    borderRadius: string;
    background: string;
    border: string;
    boxShadow: string;
    backdropFilter: string;
  };
  expandedWidget: {
    width: string;
    height: string;
    borderRadius: string;
    padding: string;
    background: string;
    border: string;
    boxShadow: string;
    backdropFilter: string;
  };
  gradients: {
    primary: string;
    border: string;
  };
  fonts: {
    primary: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

export interface SuggestionItem {
  id: string;
  text: string;
  icon: string;
}

export interface UserAvatar {
  id: string;
  initials: string;
  color: string;
}

export interface WidgetElements {
  container: HTMLElement;
  collapsedButton?: HTMLElement;
  expandedWidget?: HTMLElement;
}

export interface EventHandlers {
  onClick: (event: Event) => void;
  onEscape: (event: KeyboardEvent) => void;
  onOutsideClick: (event: Event) => void;
}