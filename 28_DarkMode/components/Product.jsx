import ProductDetails from "./ProductDetails";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SpecificShimmerProduct from "./SpecificShimmerProduct";
export default function Product() {
  const params = useParams();
  const [notFound, setNotFound] = useState(false);
  console.log(params);
  const id = params.id.split("=")[1];
  const [product, setProduct] = useState(null);
  const { state } = useLocation();
  console.log(state);

  function UpdateData(data) {
    setProduct(data);
  }

  useEffect(() => {
    if (state) {
      UpdateData(state);
    } else {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          if (!res.ok) {
            setNotFound(true);
            throw new Error("Product not found");
          }
          return res.json();
        })
        .then((item) => {
          UpdateData(item);
        })
        .catch((err) => {
          setNotFound(true);
        });
    }
  }, [id]);

  if (notFound) {
    console.log(notFound);
    return <div>Page not found</div>;
  } else {
    if (!product) {
      return <SpecificShimmerProduct />;
    }
    return (
      <>
        {product ? (
          <ProductDetails
            availabilityStatus={product.availabilityStatus}
            shippingInformation={product.shippingInformation}
            warrantyInformation={product.warrantyInformation}
            description={product.description}
            img={product.images[0]}
            title={product.title}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            brand={product.brand}
          />
        ) : (
          <h2>Loading...</h2>
        )}
      </>
    );
  }
}
