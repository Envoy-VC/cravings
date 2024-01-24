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
