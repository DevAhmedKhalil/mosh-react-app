import React, { useEffect, useState } from "react";
import { ca } from "zod/v4/locales";

const ListProduct = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in category:", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ListProduct</div>;
};

export default ListProduct;
