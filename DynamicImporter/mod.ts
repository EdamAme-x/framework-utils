export async function DynamicImporter(path: string, base: string) {
  return await import(new URL(path, base).href);
}
