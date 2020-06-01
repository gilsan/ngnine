import { INavigationItem } from './navigation-item';

export interface INavigationGroup {
  icon: string;
  name: string;
  items: INavigationItem[];
}
