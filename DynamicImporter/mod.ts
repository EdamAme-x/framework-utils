export async function DynamicImporter(path: string, base: string): Promise<unknown> {
  return await import(new URL(path, base).href);
}
