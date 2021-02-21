export interface IFormat {
    src: string
    alt: string
    children?: React.ReactNode
    status?: boolean
}
  
export type ContextType = {
    image: IFormat[];
    saveImage: (images: IFormat) => void;
  };
  