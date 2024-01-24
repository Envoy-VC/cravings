import { gql } from '~/generated/gql';

export const GET_RESTAURANT_BY_OWNER =
  gql(`query GetRestaurantByOwner($owner: String!) {
    restaurantCollection(first: 1, filter: { owner: { eq: $owner } }) {
      edges {
        node {
          id
          owner
          name
          image
          description
          address
          city
          state
          postal_code
          phone_number
          email
          opening_hours_end
          opening_hours_start
          active
        }
      }
    }
  }`);

export const GET_RESTAURANTS = gql(`
query GetRestaurants($after: Cursor) {
  restaurantCollection(first: 10, after: $after) {
    edges {
      cursor
      node {
        id
        owner
        name
        description
        address
        city
        state
        postal_code
        phone_number
        email
        opening_hours_end
        opening_hours_start
        active
        created_at
        updated_at
        cuisine
      }
    }
  }
}`);
