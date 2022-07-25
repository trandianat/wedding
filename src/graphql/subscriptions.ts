/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLogistics = /* GraphQL */ `
  subscription OnCreateLogistics {
    onCreateLogistics {
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
export const onUpdateLogistics = /* GraphQL */ `
  subscription OnUpdateLogistics {
    onUpdateLogistics {
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
export const onDeleteLogistics = /* GraphQL */ `
  subscription OnDeleteLogistics {
    onDeleteLogistics {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
