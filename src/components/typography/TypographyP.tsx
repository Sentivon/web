export interface TypographyPProps {
  text: string;
}

export default function TypographyP({ text }: TypographyPProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}
