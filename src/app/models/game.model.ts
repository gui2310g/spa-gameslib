export interface Game {
    id: number;
    name: string,
    description: string,
    background_image: string,
    image_logo: string,
    released: string,
    rating: number,
    slug: string
}

export interface Images {
    id: number;
    url: string;
}
  
export interface Platforms {
    id: number;
    slug: string,
    name: string;
}
  
export interface Genres {
    id: number,
    slug: string,
    name: string
}
  
export interface Publishers {
    id: number,
    slug: string,
    name: string
  }
  
export interface Screenshots {
    id: number,
    url: string
}  

export interface Ratings {
    id: number,
    slug: string,
    name: string
}