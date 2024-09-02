import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Image, Film, ImagePlus, ArrowRight } from "lucide-react";


const Create: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    
  };
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Crear Nuevo Post
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          variant={selectedOption === "images" ? "default" : "outline"}
          className="flex items-center justify-start h-16 text-lg"
          onClick={() => handleOptionClick("images")}
        >
          <Image className="w-6 h-6 mr-2" />
          Post con múltiples imágenes
        </Button>
        <Button
          variant={selectedOption === "video" ? "default" : "outline"}
          className="flex items-center justify-start h-16 text-lg"
          onClick={() => handleOptionClick("video")}
        >
          <Film className="w-6 h-6 mr-2" />
          Post con video
        </Button>
        <Button
          variant={selectedOption === "single-image" ? "default" : "outline"}
          className="flex items-center justify-start h-16 text-lg"
          onClick={() => handleOptionClick("single-image")}
        >
          <ImagePlus className="w-6 h-6 mr-2" />
          Post con una sola imagen
        </Button>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleNext}
          disabled={!selectedOption}
          className="w-full"
        >
          Siguiente
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Create;
