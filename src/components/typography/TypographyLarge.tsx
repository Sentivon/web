export interface TypographyLargeProps {
  text: string;
}

export default function TypographyLarge({ text }: TypographyLargeProps) {
  return <div className="text-lg font-semibold">{text}</div>;
}
