import Axios from "axios";

function ProductData() {
  return Axios.get("https://localhost:44390/api/products").then((response) => {
    console.log(response);
  });
}

export default ProductData;
