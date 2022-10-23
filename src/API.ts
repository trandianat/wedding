/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContentInput = {
  category?: Category | null,
  content?: string | null,
  id?: string | null,
};

export enum Category {
  ACTIVITIES = "ACTIVITIES",
  FOOTER = "FOOTER",
  LOGISTICS = "LOGISTICS",
  PARTY = "PARTY",
  RSVP = "RSVP",
  STORY = "STORY",
}


export type ModelContentConditionInput = {
  category?: ModelCategoryInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelContentConditionInput | null > | null,
  or?: Array< ModelContentConditionInput | null > | null,
  not?: ModelContentConditionInput | null,
};

export type ModelCategoryInput = {
  eq?: Category | null,
  ne?: Category | null,
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

export type Content = {
  __typename: "Content",
  category?: Category | null,
  content?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentInput = {
  category?: Category | null,
  content?: string | null,
  id: string,
};

export type DeleteContentInput = {
  id: string,
};

export type ModelContentFilterInput = {
  category?: ModelCategoryInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelContentFilterInput | null > | null,
  or?: Array< ModelContentFilterInput | null > | null,
  not?: ModelContentFilterInput | null,
};

export type ModelContentConnection = {
  __typename: "ModelContentConnection",
  items:  Array<Content | null >,
  nextToken?: string | null,
};

export type CreateContentMutationVariables = {
  input: CreateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type CreateContentMutation = {
  createContent?:  {
    __typename: "Content",
    category?: Category | null,
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type UpdateContentMutation = {
  updateContent?:  {
    __typename: "Content",
    category?: Category | null,
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput,
  condition?: ModelContentConditionInput | null,
};

export type DeleteContentMutation = {
  deleteContent?:  {
    __typename: "Content",
    category?: Category | null,
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContentQueryVariables = {
  id: string,
};

export type GetContentQuery = {
  getContent?:  {
    __typename: "Content",
    category?: Category | null,
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentConnection",
    items:  Array< {
      __typename: "Content",
      category?: Category | null,
      content?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContentSubscription = {
  onCreateContent?:  {
    __typename: "Content",
    category?: Category | null,
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentSubscription = {
  onUpdateContent?:  {
    __typename: "Content",
    category?: Category | null,
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentSubscription = {
  onDeleteContent?:  {
    __typename: "Content",
    category?: Category | null,
    content?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
