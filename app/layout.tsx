import "./globals.css";

export const metadata = {
  title: "Dra. Adriely Anute | Harmonização Facial & Estética Avançada",
  description: "Estética médica com precisão, naturalidade e intenção. Conheça o método da Dra. Adriely Anute.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
