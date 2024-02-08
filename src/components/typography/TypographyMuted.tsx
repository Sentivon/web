export interface TypographyMutedProps {
  text: string;
}

export default function TypographyMuted({ text }: TypographyMutedProps) {
  return <p className="text-sm text-muted-foreground">{text}</p>;
}
