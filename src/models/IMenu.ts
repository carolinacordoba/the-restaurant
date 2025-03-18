export interface IMenuItem {
  title: string;
  description: string;
  price: string;
}

export interface IMenuCategory {
  title: string;
  items: IMenuItem[];
}
