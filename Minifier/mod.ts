import { minify, minifyHTML } from "https://deno.land/x/minifier@v1.1.1/mod.ts";

export function Minifier(
  lang: "html" | "css" | "js" | "json",
  code: string
): string {
  // deno-lint-ignore no-inferrable-types
  let result: string = "";

  if (lang === "html") {
    result = minifyHTML(code, {
      minifyCSS: true,
      minifyJS: true,
    });
  } else if (lang === "css") {
    result = minify("css", code);
  } else if (lang === "js") {
    result = minify("js", code);
  } else if (lang === "json") {
    result = minify("json", code);
  } else {
    throw new Error("Unknown language: 'html' | 'css' | 'js' | 'json'");
  }

  return result;
}
