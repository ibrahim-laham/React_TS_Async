import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts("https://api.escuelajs.co/api/v1/products");
  }, []);
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
      {/* <ProductItem products={products} /> */}
    </div>
  );
}
