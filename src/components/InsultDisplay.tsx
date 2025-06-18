
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

interface InsultDisplayProps {
  insulto: string;
  onGenerar: () => void;
}

const InsultDisplay = ({ insulto, onGenerar }: InsultDisplayProps) => {
  return (
    <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
      <div className="text-center space-y-6">
        <div className="min-h-[120px] flex items-center justify-center">
          {insulto ? (
            <p className="text-2xl font-semibold text-gray-800 leading-relaxed animate-fade-in">
              "{insulto}"
            </p>
          ) : (
            <p className="text-xl text-gray-500 italic">
              ¡Presiona el botón para generar un insulto!
            </p>
          )}
        </div>
        
        <Button
          onClick={onGenerar}
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Zap className="mr-2 h-5 w-5" />
          ¡Generar Insulto!
        </Button>
      </div>
    </Card>
  );
};

export default InsultDisplay;
