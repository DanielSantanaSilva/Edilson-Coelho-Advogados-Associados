import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Edilson Coelho Advogados Associados | Advocacia Estratégica",description:"Assessoria jurídica estratégica e próxima para pessoas e empresas. Fale com Edilson Coelho Advogados Associados.",openGraph:{title:"Edilson Coelho Advogados Associados",description:"Direito que protege o que importa.",images:[{url:"/og.png",width:1200,height:630}]},twitter:{card:"summary_large_image",title:"Edilson Coelho Advogados Associados",description:"Direito que protege o que importa.",images:["/og.png"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
