/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDetails = /* GraphQL */ `
  mutation CreateDetails(
    $input: CreateDetailsInput!
    $condition: ModelDetailsConditionInput
  ) {
    createDetails(input: $input, condition: $condition) {
      date
      location
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateDetails = /* GraphQL */ `
  mutation UpdateDetails(
    $input: UpdateDetailsInput!
    $condition: ModelDetailsConditionInput
  ) {
    updateDetails(input: $input, condition: $condition) {
      date
      location
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteDetails = /* GraphQL */ `
  mutation DeleteDetails(
    $input: DeleteDetailsInput!
    $condition: ModelDetailsConditionInput
  ) {
    deleteDetails(input: $input, condition: $condition) {
      date
      location
      id
      createdAt
      updatedAt
    }
  }
`;
