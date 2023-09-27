import { join } from "https://deno.land/std@0.107.0/path/mod.ts";

export function DirectoryDraw(config: {
  base: string; // routes <=> any.config.ts -> import.meta.url + '/routes/'
  subdir?: string | null;
}): {
  readonly path: string; // /routes/index.tsx => /index.tsx
}[] {
  let { base, subdir } = config;

  const result: any[] = [];

  if (!base.endsWith("/")) {
    base += "/";
  }

  try {
    Deno.readDirSync(new URL(base));
  } catch (e) {
    console.error(e);
    return [];
  }

  for (const dirEntry of Deno.readDirSync(new URL(base))) {
    if (!dirEntry.isFile) {
      result.push(
        DirectoryDraw({
          base: new URL(base + dirEntry.name).href,
          subdir: (subdir ? subdir + "/" : "") + dirEntry.name,
        })
      );
    } else {
      result.push({
        path: `/${subdir ? subdir + "/" : ""}` + dirEntry.name,
      });
    }
  }

  return result.flat();
}
