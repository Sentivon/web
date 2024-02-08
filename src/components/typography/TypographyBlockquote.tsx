export interface TypographyBlockquoteProps {
  text: string;
}

export default function TypographyBlockquote({
  text,
}: TypographyBlockquoteProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}
