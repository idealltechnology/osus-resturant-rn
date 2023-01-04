export interface IFood {
  id: number;
  code: string;
  image: string;
  name: string;
  price: number;
  addList?: IFood[];
}
