import axios from "axios";
import React, { useState } from "react";
import reactDom from "react-dom";
import "./AddProduct.css";

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    Name: "",
    BrandId: "",
    CategoryId: "",
    Details: "",
    Warrenty: "",
    Price: "",
    Status: "true",
  });

  const { Name, BrandId, CategoryId, Details, Warrenty, Price, Status } =
    product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: [e.target.value] });
  };

  const onSubmit = async (e) => {
    await axios
      .post("https://localhost:44390/api/products", {
        Name: product.Name[0],
        BrandId: product.BrandId[0],
        CategoryId: product.CategoryId[0],
        Details: product.Details[0],
        Warranty: product.Warrenty[0],
        Price: product.Price[0],
        Status: true,
      })
      .then((res) => {
        alert("Product Added");
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <div className="mainContent">
        <form action="" className="" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="Name"
              placeholder="Product Name"
              value={Name}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div className="">
            <label>Brand:</label>
            <select
              name="BrandId"
              className="form-select form-select-lg mb-3 "
              onChange={(e) => onInputChange(e)}
            >
              <option className="" value="1">
                Apex
              </option>
              <option className="" value="1">
                Teer
              </option>
            </select>
          </div>

          <div className="">
            <label>Category</label>
            <select
              name="CategoryId"
              className="form-select form-select-lg mb-3"
              onChange={(e) => onInputChange(e)}
            >
              <option value="1">Vegetable</option>
              <option value="1">oil</option>
            </select>
          </div>

          <div className="form-group">
            <label>Details</label>
            <textarea
              name="Details"
              className="form-control"
              value={Details}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Warrenty</label>
            <select
              className="form-control"
              name="Warrenty"
              onChange={(e) => onInputChange(e)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="Price"
              placeholder="Price"
              value={Price}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>

          <input
            type="hidden"
            name="Status"
            value="true"
            onChange={(e) => onInputChange(e)}
          ></input>

          <br />
          <div className="">
            <input
              type="submit"
              className="btn btn-primary btn-sm btnSubmit"
              value="Add"
            />
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default AddProduct;
