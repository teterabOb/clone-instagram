// Define la interfaz para una sola imagen
interface Image {
    description: string;
    image: string;
  }
  
  // Define la interfaz para múltiples imágenes
  interface Images {
    description: string;
    images: string[];
  }

export const getImage = (): Image => {
    return {
        description: "",
        image: ""
    }
}

export const getImages = (): Images => {
    return {
        description: "",
        images: []
    }
}