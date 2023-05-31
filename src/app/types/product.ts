export interface IListProduct {
  content: Array<IProduct>;
}

export interface IProduct {
    productId: string,
    productName: string,
    status: string,
    category: string

}
