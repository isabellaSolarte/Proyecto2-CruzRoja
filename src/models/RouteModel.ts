export interface RouterModel {
  path: string;
  component: JSX.Element;
  icon?: unknown;
  children?: RouterModel[];
}
