export interface IFood {
  _id: number;
  code: string;
  image: string;
  name: string;
  price: number;
  addList?: IFood[];
}
