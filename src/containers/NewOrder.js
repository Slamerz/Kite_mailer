import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchOrders } from "../actions";
import NewOrderPage from "../components/NewOrderPage";

class ManageOrders extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOrders());
  }

  render() {
    const { orders, ordersLoading, ordersError, match } = this.props;
    if (ordersError) {
      return <div> ERROR! {ordersError.error}</div>;
    }
    if (ordersLoading) {
      return <div> Loading...</div>;
    }
    if (orders) return <NewOrderPage orders={orders} match={match} />;
    else return <div />;
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  ordersLoading: state.orders.loading,
  ordersError: state.orders.error
});

export default connect(mapStateToProps)(ManageOrders);
