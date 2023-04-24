export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
      name: string;
    };
    image: string[];
  }