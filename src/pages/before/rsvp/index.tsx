import { useEffect } from 'react';
import { API } from 'aws-amplify';
import { listContents } from 'graphql/queries';

export const RSVP = (): JSX.Element => {
  const fetchDetails = async () => {
    const apiData: any = await API.graphql({ query: listContents });
    console.log(
      'apiData',
      JSON.parse(apiData.data.listContents.items[0].content)
    );
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
