import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetailComponent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <div className="mt-auto">Loading...</div>;
  }

  if (!product) {
    return <div className="mt-auto">Error fetching product details.</div>;
  }

  return (
    <>
      <div>
        <h4 className="text-center mt-4">Product Detail</h4>
        <div className="card mb-3 mx-auto p-5" style={{ maxWidth: "840px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8 mb-0">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div className="mt-auto">
                  <h5 className="card-title">{product.title}</h5>
                  <h6>Price: Rs{product.price}</h6>
                  <p className="card-text">{product.description}</p>
                  <p>Category: {product.category}</p>
                  <p className="card-text mb-0">
                    <small className="text-muted">
                      Rating: {product.rating.rate} ({product.rating.count}{" "}
                      reviews)
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="btn btn-primary float-end me-5 ">
          Go Back
        </Link>
      </div>
    </>
  );
};

export default ProductDetailComponent;
