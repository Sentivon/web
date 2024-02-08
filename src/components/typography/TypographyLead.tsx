export interface TypographyLeadProps {
  text: string;
}

export default function TypographyLead({ text }: TypographyLeadProps) {
  return <p className="text-xl text-muted-foreground">{text}</p>;
}
