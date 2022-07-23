import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { listDetails } from 'graphql/queries';

export const RSVP = (): JSX.Element => {
  const fetchDetails = async () => {
    const apiData = await API.graphql({ query: listDetails });
    console.log('apiData', apiData);
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
