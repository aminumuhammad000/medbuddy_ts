declare namespace JSX {
  interface IntrinsicElements {
    "iconify-icon": {
      icon?: string;
      style?: React.CSSProperties;
      class?: string;
      id?: string;
    } & React.HTMLAttributes<HTMLElement>;
  }
}
