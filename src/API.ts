/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDetailsInput = {
  date: string,
  location?: string | null,
  id?: string | null,
};

export type ModelDetailsConditionInput = {
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelDetailsConditionInput | null > | null,
  or?: Array< ModelDetailsConditionInput | null > | null,
  not?: ModelDetailsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Details = {
  __typename: "Details",
  date: string,
  location?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDetailsInput = {
  date?: string | null,
  location?: string | null,
  id: string,
};

export type DeleteDetailsInput = {
  id: string,
};

export type ModelDetailsFilterInput = {
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelDetailsFilterInput | null > | null,
  or?: Array< ModelDetailsFilterInput | null > | null,
  not?: ModelDetailsFilterInput | null,
};

export type ModelDetailsConnection = {
  __typename: "ModelDetailsConnection",
  items:  Array<Details | null >,
  nextToken?: string | null,
};

export type CreateDetailsMutationVariables = {
  input: CreateDetailsInput,
  condition?: ModelDetailsConditionInput | null,
};

export type CreateDetailsMutation = {
  createDetails?:  {
    __typename: "Details",
    date: string,
    location?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDetailsMutationVariables = {
  input: UpdateDetailsInput,
  condition?: ModelDetailsConditionInput | null,
};

export type UpdateDetailsMutation = {
  updateDetails?:  {
    __typename: "Details",
    date: string,
    location?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDetailsMutationVariables = {
  input: DeleteDetailsInput,
  condition?: ModelDetailsConditionInput | null,
};

export type DeleteDetailsMutation = {
  deleteDetails?:  {
    __typename: "Details",
    date: string,
    location?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDetailsQueryVariables = {
  id: string,
};

export type GetDetailsQuery = {
  getDetails?:  {
    __typename: "Details",
    date: string,
    location?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDetailsQueryVariables = {
  filter?: ModelDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDetailsQuery = {
  listDetails?:  {
    __typename: "ModelDetailsConnection",
    items:  Array< {
      __typename: "Details",
      date: string,
      location?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDetailsSubscription = {
  onCreateDetails?:  {
    __typename: "Details",
    date: string,
    location?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDetailsSubscription = {
  onUpdateDetails?:  {
    __typename: "Details",
    date: string,
    location?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDetailsSubscription = {
  onDeleteDetails?:  {
    __typename: "Details",
    date: string,
    location?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
