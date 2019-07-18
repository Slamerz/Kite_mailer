import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchOrders } from "../actions";
import NewOrderPage from "../components/NewOrderPage";
import {Redirect} from "react-router";

class ManageOrders extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOrders());
  }

  render() {
    const { orders, ordersLoading, ordersError, match, user } = this.props;

    if(!user.token){
      return <Redirect to="/"/>
    }
    if (ordersError) {
      return <div> ERROR! {ordersError.error}</div>;
    }
    if (ordersLoading) {
      return <div> Loading...</div>;
    }
    if (orders) return <NewOrderPage orders={orders.filter(order => order.senderId === user._id)} match={match} />;
    else return <div />;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  orders: state.orders.orders,
  ordersLoading: state.orders.loading,
  ordersError: state.orders.error
});

export default connect(mapStateToProps)(ManageOrders);
