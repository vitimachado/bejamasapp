interface Image {
  src: string,
  alt: string
}

interface Details {
  title?: string,
  subtitle?: string,
  description?: string,
  dimmentions?: {
    width: number,
    height: number
  },
  size?: number,
  recommendations?: Array<Image>
}

declare namespace IProduct {
  export interface IProps {
    name: string,
    category: string,
    price: number,
    currency: string,
    image: Image,
    bestseller: boolean,
    featured: boolean,
    details?: Details,
    id?: string
  }
}

export { IProduct };
