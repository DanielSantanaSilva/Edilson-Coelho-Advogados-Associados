import { ContactSection } from "@/components/landing/contact-section";
import { ConversionSection } from "@/components/landing/conversion-section";
import { HeroSection } from "@/components/landing/hero-section";
import { OfficeSection } from "@/components/landing/office-section";
import { PracticesSection } from "@/components/landing/practices-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { WhatsappFloatingButton } from "@/components/landing/whatsapp-floating-button";

export default function Home() {
  return <main><SiteHeader /><HeroSection /><OfficeSection /><PracticesSection /><ConversionSection /><ContactSection /><SiteFooter /><WhatsappFloatingButton /></main>;
}
