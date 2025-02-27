import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
    </div>
  );
};

export default Product;
