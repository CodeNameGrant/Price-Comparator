export type Product = {
  name: string;
  prices: Price[];
};

export type Price = {
  retailer: string;
  price: number;
  updated: string | Date;
};
