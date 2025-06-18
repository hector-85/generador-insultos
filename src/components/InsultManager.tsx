
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Trash2, List } from "lucide-react";
import { toast } from "sonner";

interface InsultManagerProps {
  insultos: string[];
  onAgregar: (insulto: string) => void;
  onEliminar: (indice: number) => void;
}

const InsultManager = ({ insultos, onAgregar, onEliminar }: InsultManagerProps) => {
  const [nuevoInsulto, setNuevoInsulto] = useState("");

  const manejarAgregarInsulto = () => {
    if (nuevoInsulto.trim()) {
      if (insultos.includes(nuevoInsulto.trim())) {
        toast.error("¡Este insulto ya existe!");
        return;
      }
      onAgregar(nuevoInsulto);
      setNuevoInsulto("");
      toast.success("¡Insulto agregado exitosamente!");
    } else {
      toast.error("¡Escribe un insulto primero!");
    }
  };

  const manejarEliminarInsulto = (indice: number) => {
    onEliminar(indice);
    toast.success("¡Insulto eliminado!");
  };

  const manejarEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      manejarAgregarInsulto();
    }
  };

  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-2xl border-0 h-fit">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <List className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Gestionar Insultos
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Escribe un nuevo insulto..."
              value={nuevoInsulto}
              onChange={(e) => setNuevoInsulto(e.target.value)}
              onKeyPress={manejarEnter}
              className="flex-1"
            />
            <Button
              onClick={manejarAgregarInsulto}
              className="bg-green-500 hover:bg-green-600 text-white px-4"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700 flex items-center gap-2">
            Lista de Insultos ({insultos.length})
          </h3>
          
          <ScrollArea className="h-80 w-full rounded-md border p-4">
            {insultos.length === 0 ? (
              <p className="text-gray-500 italic text-center py-8">
                No hay insultos en la lista
              </p>
            ) : (
              <div className="space-y-2">
                {insultos.map((insulto, indice) => (
                  <div
                    key={indice}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 flex-1 pr-2">
                      {insulto}
                    </span>
                    <Button
                      onClick={() => manejarEliminarInsulto(indice)}
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </Card>
  );
};

export default InsultManager;
