
export class Product {
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  price?: number;
  image?: string;

  constructor(id: number, name: string, category: string, description: string, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
