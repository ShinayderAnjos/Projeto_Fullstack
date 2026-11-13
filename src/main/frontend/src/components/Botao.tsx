import type { ButtonHTMLAttributes } from "react";

type Variante = "primario" | "perigo" | "neutro";

const estilos: Record<Variante, string> = {
  primario: "bg-orange-600 hover:bg-orange-700",
  perigo: "bg-red-600 hover:bg-red-700",
  neutro: "bg-gray-500 hover:bg-gray-600",
};

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
}

function Botao({ variante = "primario", className = "", ...props }: BotaoProps) {
  return <button className={`rounded-md px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50 ${estilos[variante]} ${className}`} {...props} />;
}

export default Botao;
