/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLogistics = /* GraphQL */ `
  mutation CreateLogistics(
    $input: CreateLogisticsInput!
    $condition: ModelLogisticsConditionInput
  ) {
    createLogistics(input: $input, condition: $condition) {
      date
      location
      address
      events {
        name
        time
        location
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
export const updateLogistics = /* GraphQL */ `
  mutation UpdateLogistics(
    $input: UpdateLogisticsInput!
    $condition: ModelLogisticsConditionInput
  ) {
    updateLogistics(input: $input, condition: $condition) {
      date
      location
      address
      events {
        name
        time
        location
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
export const deleteLogistics = /* GraphQL */ `
  mutation DeleteLogistics(
    $input: DeleteLogisticsInput!
    $condition: ModelLogisticsConditionInput
  ) {
    deleteLogistics(input: $input, condition: $condition) {
      date
      location
      address
      events {
        name
        time
        location
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      name
      time
      location
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      name
      time
      location
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      name
      time
      location
      id
      createdAt
      updatedAt
    }
  }
`;
