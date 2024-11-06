export interface Games {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string,
    description: string,
    background_image: string,
    image_logo: string,
    rating: number
}

export interface Images {
    id: number;
    url: string;
}
  
export interface Platforms {
    id: number;
    name: string;
}
  
export interface Genres {
    id: number,
    name: string
}
  
export interface Publishers {
    id: number,
    name: string
  }
  
export interface Ratings {
    id: number,
    slug: string,
    name: string
}