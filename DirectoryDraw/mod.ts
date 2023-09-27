export function DirectoryDraw(config: {
  base: string; // routes <=> any.config.ts -> import.meta.url + '/routes/'
  subdir?: string | null;
}): { path: string }[] {
  let { base, subdir } = config;

  const result: { path: string }[] = [];

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
      const subdirectory = subdir ? subdir + "/" : "";
      const subdirectoryPath = new URL(base + dirEntry.name).href;
      result.push(...DirectoryDraw({ base: subdirectoryPath, subdir: subdirectory + dirEntry.name }));
    } else {
      const filePath = `/${subdir ? subdir + "/" : ""}` + dirEntry.name;
      result.push({ path: filePath });
    }
  }

  return result;
}
