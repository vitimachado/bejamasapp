import { IProduct } from "../../shared/models/product";

export interface ICart {
  open: boolean,
  products: Array<IProduct>
}
