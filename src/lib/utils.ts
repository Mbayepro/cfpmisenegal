import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CFPMI_INFO } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPriceFCFA(amount: number): string {
  return new Intl.NumberFormat("fr-SN", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(amount) + " FCFA";
}

export function generateWhatsAppLink(customMessage?: string, phoneNumber = CFPMI_INFO.whatsappClean): string {
  const defaultText = `Bonjour CFPMI Sénégal, je souhaite avoir des renseignements sur vos formations professionnelles (Froid & Climatisation, Électricité...).`;
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

export function generateCallLink(phoneNumber = CFPMI_INFO.phonePrimaryClean): string {
  return `tel:+${phoneNumber}`;
}

