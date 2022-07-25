/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLogistics = /* GraphQL */ `
  query GetLogistics($id: ID!) {
    getLogistics(id: $id) {
      date
      location
      address
      events {
        name
        location
        start
        end
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLogistics = /* GraphQL */ `
  query ListLogistics(
    $filter: ModelLogisticsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogistics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
        location
        address
        events {
          name
          location
          start
          end
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      name
      location
      start
      end
      id
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        location
        start
        end
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
