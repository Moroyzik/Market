import React, { Component } from "react";

import Product from "./product";

const imgLink =
  "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/1/1868764_krossovki_ash_addict_belyy_kozha_natural_naya.JPG";

const products = [
  {
    id: 0,
    image: imgLink,
    price: "40",
    name: "педаль",
    isChecked: false,
  },
  {
    id: 2,
    image: imgLink,
    price: "40",
    name: "педаль",
    isChecked: false,
  },
  {
    id: 3,
    image: imgLink,
    price: "40",
    name: "педаль",
    isChecked: false,
  },
];

class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
      case: [],
    };
  }

  handleCheckProduct = (id) => {
    const newProducts = this.state.products.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    const newCase = newProducts
      .filter((item) => item.isChecked)
      .map((item) => item.id);

    this.setState({
      products: newProducts,
      case: newCase,
    });
  };

  render() {
    return (
      <div className="siteBody">
        {this.props.isCase && <p>Корзина: {this.state.case}</p>}

        {!this.props.isCase &&
          this.state.products.map((item, index) => (
            <Product
              key={index}
              id={item.id}
              isChecked={item.isChecked}
              name={item.name}
              price={item.price}
              imgLink={item.image}
              handleUpdateData={this.handleCheckProduct}
            />
          ))}
      </div>
    );
  }
}

export default Ccomponent;
