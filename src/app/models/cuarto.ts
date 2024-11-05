import { cuartoImagen } from "./cuartoImagen";

export interface cuarto {
    id: number;
    title: string;
    description: string;
    mainImage: string;
    images: cuartoImagen[];
  }