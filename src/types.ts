export interface MenuItemType {
  label: string;
  children?: MenuItemType[];
}

export type DataItem = { name: string; items: string[]; removed?: boolean };
export type Data = DataItem[];
