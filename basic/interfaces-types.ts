interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

const updateProduct = (id: number, updates: Partial<Product>) => {
  console.log(`Update Product ${id} with:`, updates);
};

updateProduct(1, { price: 500 });
