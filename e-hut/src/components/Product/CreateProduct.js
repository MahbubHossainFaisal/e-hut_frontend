import axios from "axios";
import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./AddProduct.css";

const AddProduct = (props) => {
  const [Categories, setCategories] = useState([]);
  const [Brands, setBrands] = useState([]);
  const [product, setProduct] = useState({
    Name: "",
    BrandId: "",
    CategoryId: "",
    Details: "",
    Warrenty: "",
    Price: "",
    Quantity: "",
    Status: "true",
  });

  var user = JSON.parse(localStorage.getItem("user"));

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    Name,
    BrandId,
    CategoryId,
    Details,
    Warrenty,
    Price,
    Quantity,
    Status,
  } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: [e.target.value] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(Validate(product));
    e.preventDefault();
  };

  const Validate = () => {
    const errors = {};

    if (product.Name === "") {
      console.log("Name_PR" + product.Name);
      errors.Name = "Product Name Is Requeired";
    }
    if (product.BrandId === "") {
      errors.BrandId = "Brand Is Required";
    }

    if (product.CategoryId === "") {
      errors.CategoryId = "Category Is Required";
    }

    if (product.Quantity === "") {
      errors.Price = "Quantity Is Required";
    }

    if (product.Price === "") {
      errors.Price = "Price Is Required";
    }
    //console.log(errors);
    console.log(formErrors);
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("calling ready for api");
      axios
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
          alert("Product added");
          axios.post("https://localhost:44390/api/ProductDistributions", {
            ProductId: res.data.ProductId,
            ShopId: user.UserId,
            Quantity: product.Quantity[0],
            Status: "True",
          });
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrors]);

  useEffect(() => {
    axios
      .get("https://localhost:44390/api/Categories")
      .then((response) => {
        setCategories(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://localhost:44390/api/Brands")
      .then((response) => {
        setBrands(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <p className="error">{formErrors.Name}</p>
          <div className="">
            <label>Brand:</label>
            <select
              name="BrandId"
              className="form-select form-select-lg mb-3 "
              onChange={(e) => onInputChange(e)}
              required={true}
            >
              <option>--select--</option>
              {Brands.map((item) => (
                <option className="" value={item.BrandId}>
                  {item.Name}
                </option>
              ))}
            </select>
            <p className="error">{formErrors.BrandId}</p>
          </div>

          <div className="">
            <label>Category</label>
            <select
              name="CategoryId"
              className="form-select form-select-lg mb-3"
              onChange={(e) => onInputChange(e)}
            >
              <option>--select--</option>
              {Categories.map((item) => (
                <option className="" value={item.CategoryId}>
                  {item.Name}
                </option>
              ))}
            </select>
            <p className="error">{formErrors.CategoryId}</p>
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
              <option value="">--select--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              name="Quantity"
              placeholder="Quantity"
              value={Quantity}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <br />
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              name="Price"
              placeholder="Price"
              value={Price}
              onChange={(e) => onInputChange(e)}
            ></input>
            <p className="error">{formErrors.Price}</p>
          </div>

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
