import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash';

import CheckoutItem from './checkout-item.component';
import {ADD_ITEM_TO_CART, CLEAR_ITEM, REMOVE_ITEM_FROM_CART} from '../../graphql/cart.mutations';



const CheckoutItemContainer = ({cartItem, addItem, clearItem, removeItem}) => {
  return <CheckoutItem 
    addItem={item => addItem({ variables: { item } })}
    clearItem={item => clearItem({ variables: { item } })}
    removeItem={item => removeItem({ variables: { item } })}
    cartItem={cartItem}
  />
};

export default flowRight(
  graphql(ADD_ITEM_TO_CART, {name: 'addItem'}),
  graphql(CLEAR_ITEM, {name: 'clearItem'}),
  graphql(REMOVE_ITEM_FROM_CART, {name: 'removeItem'})
)(CheckoutItemContainer);