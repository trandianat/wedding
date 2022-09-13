import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { listEvents } from 'graphql/queries';

export const RSVP = (): JSX.Element => {
  const fetchDetails = async () => {
    const apiData: any = await API.graphql({ query: listEvents });
    const events = apiData.data.listEvents.items;
    console.log('events', events);
    // const sortedEvents = events.sort(
    //   (event1: any, event2: any) =>
    //     (new Date(event1.start) as any) - (new Date(event2.start) as any)
    // );
    // console.log('sortedEvents', sortedEvents);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <main>
      <h3>RSVP</h3>
    </main>
  );
};
