import type { MDXComponents } from "mdx/types";
import TypographyH1 from "./components/typography/TypographyH1";
import TypographyH2 from "./components/typography/TypographyH2";
import TypographyH3 from "./components/typography/TypographyH3";
import TypographyH4 from "./components/typography/TypographyH4";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
    h2: ({ children }) => <TypographyH2>{children}</TypographyH2>,
    h3: ({ children }) => <TypographyH3>{children}</TypographyH3>,
    h4: ({ children }) => <TypographyH4>{children}</TypographyH4>,
    ...components,
  };
}
