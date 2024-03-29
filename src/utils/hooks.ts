import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { listContents } from 'graphql/queries';
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
      setData(response);
    });
  }, []);

  return data;
};

export const useImages = (category: Category) => {
  // const [images, setImages] = useState<string[]>([]);

  // useEffect(() => {
  //     const getImages = async () => {
  //         const results = await Storage.list(`${category}/`);
  //         results.forEach(async (result: any, index: number) => {
  //             if (index) {
  //                 const image = await Storage.get(result.key);
  //                 setImages((current) => [...current, image]);
  //             }
  //         });
  //     };
  //     getImages();
  // }, []);

  // return images;
  const images: Record<Category, string[]> = {
    [Category.ACTIVITIES]: [],
    [Category.FOOTER]: [],
    [Category.HEADER]: [],
    [Category.LOGISTICS]: [
      'engagement-1.jpg',
      'inn.jpg',
      'grand.jpg',
      'map-ceremony.png',
      'map-cocktail-hour.png',
      'map-reception.png',
      'map-after-party.png',
    ],
    [Category.PARTY]: [
      'party-1.jpg',
      'party-2.jpg',
      'party-3.jpeg',
      'party-4.jpg',
      'party-6.jpg',
    ],
    [Category.PHOTOS]: ['photos-1.jpg', 'photos-2.jpg', 'photos-3.jpg'],
    [Category.STORY]: ['story-1.jpg', 'story-3.jpg'],
    [Category.THANKS]: ['thanks-3.jpg', 'thanks-4.jpg'],
    [Category.VENDORS]: ['vendors-1a.jpg'],
    [Category.VIDEO]: [],
  };
  return images[category].map(
    image =>
      `https://images215425-main.s3.amazonaws.com/public/${category}/${image}`
  );
};
