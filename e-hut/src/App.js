import React from "react";
import { Route, Switch } from "react-router-dom";
import CartScreen from "./components/Cart/cart";
import Checkout from "./components/Checkout/checkout";
import DeliverymenSignUp from "./components/Deliverymen/deliverymenSignUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import AddProduct from "./components/Product/CreateProduct";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import Profile from "./components/Profile/ProfileCustomer";
import ProfileAdditional from "./components/Profile/ProfileCustomerAdditionalInfo";
import ShopProfile from "./components/Profile/ShopProfile";
import AdminProfile from "./components/Profile/ProfileAdmin";
import ShopSignUp from "./components/Shops/shopSignUp";
import SignUp from "./components/SignUp/SignUp";
import ShopDash from "./components/Shops/ShopDashboard";
import AdminDashBoard from "./components/AdminDashboard/dashboard";
import AdminList from "./components/AdminDashboard/Admin/adminList";
import CustomerList from "./components/AdminDashboard/Customer/customerList";
import DeliverymenList from "./components/AdminDashboard/Deliveryman/deliveryman";
import ShopList from "./components/AdminDashboard/Shop/shopList";
import UserTypeState from "./components/store/userTypeState";
import CustomerOrderDashBoard from "./components/CustomerOrderDashboard/orderDashBoard";
import RegisterAdmin from "./components/AdminDashboard/Admin/RegisterAdmin";

function App() {
  return (
    <React.Fragment>
      <UserTypeState>
        <Header />

        <Switch>
          <Route path="/home" component={Products} />
          <Route exact path="/" component={Products} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/signup/shop" component={ShopSignUp} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/products/:id" component={ProductDetails} exact />
          <Route path="/product/add" component={AddProduct} />
          <Route path="/signup/deliverymen" component={DeliverymenSignUp} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/user/profile" component={Profile} />
          <Route
            exact
            path="/user/profile/info"
            component={ProfileAdditional}
          />
          <Route
            exact
            path="/user/profile/shopProfile"
            component={ShopProfile}
          />
          <Route exact path="/shop/dashboard" component={ShopDash} />
          <Route exact path="/admin/dashboard" component={AdminDashBoard} />
          <Route exact path="/user/profile/admin" component={AdminProfile} />
          <Route exact path="/admin/list" component={AdminList} />
          <Route exact path="/customer/list" component={CustomerList} />
          <Route exact path="/deliveryman/list" component={DeliverymenList} />
          <Route exact path="/shop/list" component={ShopList} />
          <Route exact path="/admin/register" component={RegisterAdmin} />
          <Route
            exact
            path="/customer/order/details"
            component={CustomerOrderDashBoard}
          />
        </Switch>
        <Footer />
      </UserTypeState>
    </React.Fragment>
  );
}

export default App;
