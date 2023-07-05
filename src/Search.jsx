import React, { useState } from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    products: [],
    searchTerm: "",
    searchResults: [],
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.error("Error fetching products:", error));
  }

  handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    const results = this.state.products.filter((product) =>
      product.title.toLowerCase().startsWith(term)
    );
    this.setState({ searchTerm: term, searchResults: results });
  };

  render() {
    const { searchTerm, searchResults } = this.state;

    return (
      <>
        <div className="mt-10 m-5 p-5">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Product ..."
              aria-label="Search"
              value={searchTerm}
              onChange={this.handleSearch}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        {searchResults.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 g-4 m-4 column-gap-3">
            {searchResults.map((product) => (
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
        ) : (
          <div className="text-center">No results found.</div>
        )}
      </>
    );
  }
}

export default Search;
