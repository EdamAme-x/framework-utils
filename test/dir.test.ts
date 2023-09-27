import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { DirectoryDraw } from "../DirectoryDraw/mod.ts";

Deno.test("assert works correctly", () => {
  assert(true);
  assertEquals(1, 1);
});

Deno.test("DirectoryDrow test", async () => {
  const dir: {
    readonly path: string;
    readonly fullPath: string;
  }[] = [
    {
      path: "/index.tsx",
      fullPath: "file:///workspaces/framework-utils/test/routes/index.tsx",
    },
    {
      path: "/sub.js",
      fullPath: "file:///workspaces/framework-utils/test/routes/sub.js",
    },
    {
      path: "/api/get.ts",
      fullPath: "file:///workspaces/framework-utils/test/routes/api/get.ts",
    },
    {
      path: "/api/auth/post.ts",
      fullPath:
        "file:///workspaces/framework-utils/test/routes/api/auth/post.ts",
    },
  ];

  const dir2 = DirectoryDraw({
    base: import.meta.url.replace("/dir.test.ts", "") + "/routes/",
  });

  console.log(dir);
  console.log(dir2);

  return assertEquals(dir, dir2);
});
