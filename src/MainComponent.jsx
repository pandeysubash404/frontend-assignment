import React from "react";
import { Link } from "react-router-dom";

class MainComponent extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // Simulating API call to fetch products
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.error("Error fetching products:", error));
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-4 m-4 column-gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="card mb-3 p-2"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0 cl-2" style={{ maxWidth: "540px" }}>
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: Rs {product.price}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Rating: {product.rating.rate}
                      </small>
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainComponent;
