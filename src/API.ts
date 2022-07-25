/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLogisticsInput = {
  date: string,
  location: string,
  address: string,
  id?: string | null,
};

export type ModelLogisticsConditionInput = {
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelLogisticsConditionInput | null > | null,
  or?: Array< ModelLogisticsConditionInput | null > | null,
  not?: ModelLogisticsConditionInput | null,
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

export type Logistics = {
  __typename: "Logistics",
  date: string,
  location: string,
  address: string,
  events:  Array<Event | null >,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Event = {
  __typename: "Event",
  name: string,
  location: string,
  start: string,
  end: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLogisticsInput = {
  date?: string | null,
  location?: string | null,
  address?: string | null,
  id: string,
};

export type DeleteLogisticsInput = {
  id: string,
};

export type CreateEventInput = {
  name: string,
  location: string,
  start: string,
  end: string,
  id?: string | null,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type UpdateEventInput = {
  name?: string | null,
  location?: string | null,
  start?: string | null,
  end?: string | null,
  id: string,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelLogisticsFilterInput = {
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelLogisticsFilterInput | null > | null,
  or?: Array< ModelLogisticsFilterInput | null > | null,
  not?: ModelLogisticsFilterInput | null,
};

export type ModelLogisticsConnection = {
  __typename: "ModelLogisticsConnection",
  items:  Array<Logistics | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type CreateLogisticsMutationVariables = {
  input: CreateLogisticsInput,
  condition?: ModelLogisticsConditionInput | null,
};

export type CreateLogisticsMutation = {
  createLogistics?:  {
    __typename: "Logistics",
    date: string,
    location: string,
    address: string,
    events:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLogisticsMutationVariables = {
  input: UpdateLogisticsInput,
  condition?: ModelLogisticsConditionInput | null,
};

export type UpdateLogisticsMutation = {
  updateLogistics?:  {
    __typename: "Logistics",
    date: string,
    location: string,
    address: string,
    events:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLogisticsMutationVariables = {
  input: DeleteLogisticsInput,
  condition?: ModelLogisticsConditionInput | null,
};

export type DeleteLogisticsMutation = {
  deleteLogistics?:  {
    __typename: "Logistics",
    date: string,
    location: string,
    address: string,
    events:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    name: string,
    location: string,
    start: string,
    end: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    name: string,
    location: string,
    start: string,
    end: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    name: string,
    location: string,
    start: string,
    end: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLogisticsQueryVariables = {
  id: string,
};

export type GetLogisticsQuery = {
  getLogistics?:  {
    __typename: "Logistics",
    date: string,
    location: string,
    address: string,
    events:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLogisticsQueryVariables = {
  filter?: ModelLogisticsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogisticsQuery = {
  listLogistics?:  {
    __typename: "ModelLogisticsConnection",
    items:  Array< {
      __typename: "Logistics",
      date: string,
      location: string,
      address: string,
      events:  Array< {
        __typename: "Event",
        name: string,
        location: string,
        start: string,
        end: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    name: string,
    location: string,
    start: string,
    end: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLogisticsSubscription = {
  onCreateLogistics?:  {
    __typename: "Logistics",
    date: string,
    location: string,
    address: string,
    events:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLogisticsSubscription = {
  onUpdateLogistics?:  {
    __typename: "Logistics",
    date: string,
    location: string,
    address: string,
    events:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLogisticsSubscription = {
  onDeleteLogistics?:  {
    __typename: "Logistics",
    date: string,
    location: string,
    address: string,
    events:  Array< {
      __typename: "Event",
      name: string,
      location: string,
      start: string,
      end: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    name: string,
    location: string,
    start: string,
    end: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    name: string,
    location: string,
    start: string,
    end: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    name: string,
    location: string,
    start: string,
    end: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
