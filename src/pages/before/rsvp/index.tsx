import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { listLogistics } from 'graphql/queries';

export const RSVP = (): JSX.Element => {
  const fetchDetails = async () => {
    const apiData: any = await API.graphql({ query: listLogistics });
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
