import { API } from 'aws-amplify';
import { listContents } from 'graphql/queries';
import { useEffect, useState } from 'react';
import { Category } from 'utils/types';

export const useData = (category: Category) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const getData = async () => {
            const result: any = await API.graphql({
                query: listContents,
                variables: { filter: { category: { eq: category } } },
            });
            console.log('result', result);
            if (result.data.listContents.items.length > 0) {
                setData(JSON.parse(result.data.listContents.items[0].content));
            }
        };
        if (!data) getData();
        console.log('data', data);
    }, [data]);

    return data;
};