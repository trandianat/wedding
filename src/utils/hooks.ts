import { API } from 'aws-amplify';
import { listContents } from 'graphql/queries';
import { useEffect, useState } from 'react';
import { Category } from 'utils/types';

export const useData = (category: Category) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        console.log('data', data);
        const getData = async () => {
            const result: any = await API.graphql({
                query: listContents,
                variables: { filter: { category: { eq: category } } },
            });
            setData(JSON.parse(result.data.listContents.items[0].content));
        };
        if (!data) getData();
    }, [data]);

    return data;
};