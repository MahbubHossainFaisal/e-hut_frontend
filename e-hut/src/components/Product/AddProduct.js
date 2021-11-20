import React from "react";
import reactDom from "react-dom";
import "./AddProduct.css";

const AddProduct = (props) => {
	return (
		<React.Fragment>
			<br />
			<br />
			<div className="mainContent">
				<form action="" className="">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="name"
							placeholder="Product Name"
						></input>
					</div>
					<div className="">
						<label>Brand:</label>
						<select name="brand" className="form-select form-select-lg mb-3 ">
							<option className="" value="1">
								Apex
							</option>
							<option className="" value="1">
								Teer
							</option>
						</select>
					</div>

					<div className="">
						<label>Catgory</label>
						<select name="name" className="form-select form-select-lg mb-3">
							<option value="1">Vegetable</option>
							<option value="1">oil</option>
						</select>
					</div>

					<div className="form-group">
						<label>Details</label>
						<textarea name="details" className="form-control" />
					</div>

					<div className="form-group">
						<label>Warrenty</label>
						<select className="form-control">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>

					<input type="hidden" name="status" value="true"></input>

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
