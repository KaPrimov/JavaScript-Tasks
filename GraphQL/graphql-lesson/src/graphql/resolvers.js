import { gql } from 'apollo-boost';
import { addItemToCart, getCartItemCount, getTotal, clearItem, removeItemFromCart} from '../redux/cart/cart.utils';
import {GET_CART_HIDDEN, GET_CART_ITEMS, GET_ITEM_COUNT, GET_TOTAL} from './cart.queries'
import { GET_CURRENT_USER } from './user.queries';

export const typeDefs = gql`
  extend type Item {
    quantity: Int!
  }

  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }

  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!,
    RemoveItemFromCart(item: Item!): [Item]!
    ClearItem(item: Item!): Boolean
    SetCurrentUser(user: User!): Boolean
  }
`;


export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN
      });
      
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      });
      return !cartHidden;
    },

    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = addItemToCart(cartItems, item);

      updateCartData(cache, newCartItems);

      return newCartItems;
    },

    clearItem: (_root, {item}, { cache }) => {

      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = clearItem(cartItems, item.id);

      updateCartData(cache, newCartItems);

      return true;
    },

    removeItemFromCart: (_root, {item}, { cache }) => {

      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });
      const newCartItems = removeItemFromCart(cartItems, item);

      updateCartData(cache, newCartItems);

      return newCartItems;
    },

    setCurrentUser: (_root, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user }
      });

      return user;
    }
  }
};

const updateCartData = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems) }
  });

  cache.writeQuery({
    query: GET_TOTAL,
    data: {total: getTotal(newCartItems)}
  })

  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems }
  });
};

