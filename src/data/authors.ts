export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
 
  {
    name: "Fredrik Høiland",
    slug: "fredrik-høiland",
    image: "./src/assets/authors/fredrik.webp",
    bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.",
  },
];
