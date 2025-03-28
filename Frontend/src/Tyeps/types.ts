export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: {
      url: string;
    }
  }