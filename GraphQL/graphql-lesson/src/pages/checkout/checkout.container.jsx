import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash'

import Spinner from '../../components/spinner/spinner.component';
import CheckoutPage from './checkout.component';
import {GET_CART_ITEMS, GET_TOTAL} from '../../graphql/cart.queries';

const CheckoutPageContainer = ({totalQuery: {total}, cartQuery: {cartItems}}) => {
  return false ? <Spinner /> 
  : <CheckoutPage total={total} cartItems={cartItems} />
};

export default flowRight(
  graphql(GET_TOTAL, {name: 'totalQuery'}),
  graphql(GET_CART_ITEMS, {name: 'cartQuery'})
)(CheckoutPageContainer);