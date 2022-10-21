import { API, Storage } from 'aws-amplify';
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
            return JSON.parse(result.data.listContents.items[0]?.content);
        };
        getData().then(response => {
            console.log('data', response);
            setData(response);
        });
    }, []);

    return data;
};

export const useImages = (category: Category) => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const results = await Storage.list(`${category}/`);
            results.forEach(async (result: any, index: number) => {
                if (index) {
                    const image = await Storage.get(result.key);
                    setImages((current) => [...current, image]);
                }
            });
        };
        getImages();
    }, []);

    return images;
};