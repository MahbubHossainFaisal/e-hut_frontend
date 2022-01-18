import axios from "axios";
import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
const ViewReview = (props) => {
  const [ReviewProduct, setReviewProduct] = useState([]);
  return (
    <React.Fragment>
      <div className="Reviews">
        <div className="PR__mainContent">
          <div className="PR__title">
            <h3>Product Review</h3>
          </div>
          <div>
            <label htmlFor="">Product ID:{" " + ReviewProduct.ProductId}</label>
            <br />
            <label htmlFor="">Date:{" " + ReviewProduct.Date}</label>
            <br />
            <label htmlFor="">Quantity:{" " + ReviewProduct.Quantity}</label>
            <br />
            <label htmlFor="">
              Grand Total:{" " + ReviewProduct.GrandTotal}
            </label>
            <br />
            <label htmlFor="">Status:{" " + ReviewProduct.Status}</label>
            <br />
            <br />
          </div>
          <div>
            <h5>Your feedBack</h5>
          </div>
          <div>
            <StarRatingComponent
              name="rate"
              starCount={5}
              value={ReviewProduct.rating}
            />
          </div>
          <div className="PR__ratingProvide">
            <table>
              <tr>
                <th>Comment</th>
                <th>
                  <textarea value="Good" />
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      ;
    </React.Fragment>
  );
};

export default ViewReview;
