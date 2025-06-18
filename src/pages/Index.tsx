
import { useState } from "react";
import InsultDisplay from "../components/InsultDisplay";
import InsultManager from "../components/InsultManager";

const Index = () => {
  const [insultos, setInsultos] = useState<string[]>([
    "Eres más lento que una tortuga con reuma",
    "Tu cerebro funciona a la velocidad de internet en el 2000",
    "Tienes menos luces que un árbol de navidad apagado",
    "Eres tan despistado que te pierdes en tu propia casa",
    "Tu sentido común está de vacaciones permanentes",
    "Eres más perdido que Adán en el día de la madre",
    "Tienes menos gracia que un pato en una pelea de gallos",
    "Eres tan confuso que ni tú te entiendes",
    "Tu lógica tiene más agujeros que un colador",
    "Eres más raro que un perro verde"
  ]);

  const [insultoActual, setInsultoActual] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const generarInsultoAleatorio = () => {
    if (insultos.length === 0) {
      setInsultoActual("¡Agrega algunos insultos primero!");
      return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * insultos.length);
    setInsultoActual(insultos[indiceAleatorio]);
  };

  const agregarInsulto = (nuevoInsulto: string) => {
    if (nuevoInsulto.trim() && !insultos.includes(nuevoInsulto.trim())) {
      setInsultos([...insultos, nuevoInsulto.trim()]);
    }
  };

  const eliminarInsulto = (indice: number) => {
    const nuevosInsultos = insultos.filter((_, i) => i !== indice);
    setInsultos(nuevosInsultos);
  };

  const verificarAdmin = (password: string) => {
    return password === "admin123";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🎭 Generador de Insultos
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <InsultDisplay 
              insulto={insultoActual}
              onGenerar={generarInsultoAleatorio}
            />
          </div>
          
          <div>
            <InsultManager
              insultos={insultos}
              onAgregar={agregarInsulto}
              onEliminar={eliminarInsulto}
              isAdmin={isAdmin}
              onAdminChange={setIsAdmin}
              onVerifyAdmin={verificarAdmin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
