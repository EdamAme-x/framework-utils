import { assertEquals } from "https://deno.land/std@0.202.0/testing/asserts.ts";
import { Minifier } from "../Minifier/mod.ts";

Deno.test("MinifyHTML test", () => {
  const minifyCode: string = Minifier(
    "html",
    `
  <h1>Hello World</h1>
  <p>Hello World</p>
  <button class="btn">Hello World</button>
  `
  );

  return assertEquals(
    `<h1>Hello World</h1><p>Hello World</p><button class=btn>Hello World</button>`,
    minifyCode
  );
});

Deno.test("MinifyCSS test", () => {
  const minifyCode: string = Minifier(
    "css",
    `
  .btn {
    color: red;
  }
  `
  );

  return assertEquals(`.btn { color: red; }`, minifyCode);
});

Deno.test("MinifyJS test", () => {
  const minifyCode: string = Minifier(
    "js",
    `
  console.log(" Hello World ");
  const a = 0;
  `
  );

  return assertEquals(`console.log(" Hello World "); const a = 0;`, minifyCode);
});

Deno.test("MinifyJSON test", () => {
  const minifyCode: string = Minifier(
    "json",
    `
  {
    "Hello": "World"
  }
  `
  );

  return assertEquals(`{"Hello":"World"}`, minifyCode);
});
