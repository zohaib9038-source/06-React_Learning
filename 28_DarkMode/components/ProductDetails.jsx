import { useOutletContext } from "react-router-dom";
import "../app.css";
export default function ProductDetails({
  img,
  brand,
  title,
  rating,
  stock,
  price,
  description,
  warrantyInformation,
  availabilityStatus,
  shippingInformation,
}) {
  const [IsDark] = useOutletContext();

  return (
    <main className={IsDark ? "dark" : ""}>
      <div
        className="button"
        style={{ paddingTop: "2rem", marginLeft: "2rem" }}
      >
        <button
          className="backbtn"
          onClick={() => {
            history.back();
          }}
        >
          Back
        </button>
      </div>

      <div className="countryContainer">
        <div className="countryContent countryPage">
          <img src={img} alt={title} />

          <div className="productDetails">
            <div className="priceTitle">
              <h5>{title}</h5>

              <p>
                <span>$:{price}</span>
              </p>
            </div>
            <p className="description">{description}</p>
            <div className="ratingStock">
              <p>
                <span>rating: </span>
                <span>{rating}</span>
              </p>

              <p>
                <span>stock: </span>
                <span>{stock}</span>
              </p>
            </div>

            <p className="margin">Warranty: {warrantyInformation}</p>
            <p className="margin">shipping: {shippingInformation}</p>
            <p className="margin">Status: {availabilityStatus}</p>

            <p className="margin">
              <span>brand: </span>
              <span>{brand}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
