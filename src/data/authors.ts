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
    bio: "Jeg jobber som driftansvarlig for Veidekke Prefab, med utdannelse som automatikkmekaniker. På fritiden er jeg lidenskapelig opptatt av trening og teknologi, inkludert homelab, spilling, og programmering. Jeg startet denne bloggen for å dele mine prosjekter og inspirere andre med lignende interesser.",
  },
];
