import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { DirectoryDraw } from "../DirectoryDraw/mod.ts";

Deno.test("assert works correctly", () => {
  assert(true);
  assertEquals(1, 1);
});

Deno.test("DirectoryDrow test", async () => {
  const dir: {
    readonly path: string;
  }[] = [
    {
      path: "/index.tsx",
    },
    {
      path: "/api/get.ts",
    },
    {
      path: "/sub.js"
    }
  ];

  console.log(dir);
  console.log(
    DirectoryDraw({
      base: import.meta.url.replace("/dir.test.ts", "") + "/routes/",
    })
  );
});
