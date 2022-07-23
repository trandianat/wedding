/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDetails = /* GraphQL */ `
  query GetDetails($id: ID!) {
    getDetails(id: $id) {
      date
      location
      id
      createdAt
      updatedAt
    }
  }
`;
export const listDetails = /* GraphQL */ `
  query ListDetails(
    $filter: ModelDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
        location
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
