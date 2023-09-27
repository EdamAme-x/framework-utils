import { assert, assertEquals } from "https://deno.land/std@0.202.0/testing/asserts.ts";
import { DirectoryDraw } from "../DirectoryDraw/mod.ts";

Deno.test("assert works correctly", () => {
  assert(true);
  assertEquals(1, 1);
});

Deno.test("DirectoryDrow test", () => {
  const dir: {
    readonly relativePath: string;
    readonly fullPath: string;
    readonly fileName: string;
  }[] = [
    {
      relativePath: "/index.tsx",
      fullPath: "file:///workspaces/framework-utils/test/routes/index.tsx",
      fileName: "index.tsx",
    },
    {
      relativePath: "/sub.js",
      fullPath: "file:///workspaces/framework-utils/test/routes/sub.js",
      fileName: "sub.js",
    },
    {
      relativePath: "/api/get.ts",
      fullPath: "file:///workspaces/framework-utils/test/routes/api/get.ts",
      fileName: "get.ts",
    },
    {
      relativePath: "/api/auth/post.ts",
      fullPath: "file:///workspaces/framework-utils/test/routes/api/auth/post.ts",
      fileName: "post.ts",
    },
  ];

  const dir2 = DirectoryDraw({
    base: import.meta.url.replace("/dir.test.ts", "") + "/routes/",
  });

  console.log(dir);
  console.log(dir2);

  return assertEquals(dir, dir2);
});
