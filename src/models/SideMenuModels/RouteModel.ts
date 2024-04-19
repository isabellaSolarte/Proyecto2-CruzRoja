export interface RouterModel {
  path: string;
  component: JSX.Element;
  icon?: JSX.Element;
  children?: RouterModel[];
  title: string;
}
