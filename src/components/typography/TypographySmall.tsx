export interface TypographySmallProps {
  text: string;
}

export default function TypographySmall({ text }: TypographySmallProps) {
  return <small className="text-sm font-medium leading-none">{text}</small>;
}
