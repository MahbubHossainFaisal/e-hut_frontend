import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProvideRating.css";
import StarRatingComponent from "react-star-rating-component";
import OrderHistory from "../OrderHistory/orderHistory";

const ProvideRating = (props) => {
	const [data, setData] = useState([]);
	const [order, setOrder] = useState([]);
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(1);

	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;
	//console.log(props.id);

	const UpdateRating = (e) => {
		setRating(e);
	};
	const UpdateComment = (e) => {
		setComment(e.target.value);
	};

	function SubmitHandler() {
		console.log("hitting");
		axios
			.post("https://localhost:44390/api/ShopReviews", {
				ShopId: data.ShopId,
				CustomerId: data.CustomerId,
				Date: date,
				Ratting: rating,
				Comment: comment,
				ProductId: data.ProductId,
			})
			.then((res) => {
				//console.log(res.status);
				alert("Your feedback submitted.");
				props.historyHandler();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		axios
			.get("https://localhost:44390/api/SalesRecords/" + props.id)
			.then((response) => {
				setData(response.data);
				setOrder(response.data.Order);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<React.Fragment>
			<div className="PR__mainContent">
				<div className="PR__title">
					<h3>Product Review</h3>
				</div>
				<div>
					<label htmlFor="">Product ID:{" " + data.ProductId}</label>
					<br />
					<label htmlFor="">Date:{" " + data.Date}</label>
					<br />
					<label htmlFor="">Quantity:{" " + data.Quantity}</label>
					<br />
					<label htmlFor="">Grand Total:{" " + order.GrandTotal}</label>
					<br />
					<label htmlFor="">Status:{" " + data.Status}</label>
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
						value={rating}
						onStarClick={UpdateRating}
					/>
				</div>
				<div className="PR__ratingProvide">
					<table>
						<tr>
							<th>Comment</th>
							<th>
								<textarea value={comment} onChange={UpdateComment} />
							</th>
						</tr>
					</table>
				</div>
				<div>
					<button
						className="btn btn-sm btn-primary m-1"
						onClick={SubmitHandler}
					>
						Submit
					</button>

					<button
						className="btn btn-sm btn-danger "
						onClick={props.historyHandler}
					>
						Cancel
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProvideRating;
