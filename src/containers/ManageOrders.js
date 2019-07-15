import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchOrders } from "../actions";
import OrdersPage from "../components/OrdersPage";
import { Redirect } from "react-router";
class ManageOrders extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOrders());
  }

  render() {
    const { orders, ordersLoading, ordersError, match, user } = this.props;
    if (!user.token) {
      return <Redirect to="/" />;
    }
    if (ordersError) {
      return <div> ERROR! {ordersError.error}</div>;
    }
    if (ordersLoading) {
      return <div> Loading...</div>;
    }
    if (orders) return <OrdersPage orders={orders} match={match} />;
    else return <div />;
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  ordersLoading: state.orders.loading,
  ordersError: state.orders.error,
  user: state.auth.user
});

export default connect(mapStateToProps)(ManageOrders);
