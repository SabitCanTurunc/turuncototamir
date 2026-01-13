// Shared type definitions

export interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}

export interface BrandLogoProps {
  onClick: () => void;
}

export interface FooterProps {
  navigateTo: (tab: string) => void;
  openContactModal: () => void;
}

export interface HomeSectionProps {
  navigateTo: (tab: string) => void;
  openContactModal: () => void;
  scrollToTopRef?: React.MutableRefObject<(() => void) | null>;
}

export interface ServicesSectionProps {
  openContactModal: () => void;
}

export interface FormData {
  brand: string;
  model: string;
  modelYear: string;
  serviceType: string;
  name: string;
  phone: string;
  date: string;
}
