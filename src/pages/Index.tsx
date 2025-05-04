
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-3xl">
        <AspectRatio ratio={16 / 9} className="mb-8 overflow-hidden rounded-b-lg shadow-md">
          <img 
            src="https://cdn.poehali.dev/files/3ec180eb-8e66-4754-925a-e7bff4dc66c8.jpeg" 
            alt="Bitcoin с деньгами" 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>

      <div className="text-center max-w-xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-6">Ваш проект успешно создан</p>
        
        <Button 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all" 
          asChild
        >
          <a href="https://1wbfqv.life/casino/list?open=register&p=rddo" target="_blank" rel="noopener noreferrer">
            Перейти на сайт <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
