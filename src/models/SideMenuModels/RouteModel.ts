import { PathNames } from '../../core';

export interface RouterModel {
  path: PathNames | '/*';
  component: JSX.Element;
  icon?: JSX.Element;
  children?: RouterModel[];
  title: string;
}
