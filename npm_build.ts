import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "pog",
    version: Deno.args[0],
    description: "Pog is a small utility library for writing better tailwind/twind classes. ",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/B3nten/pog.git",
    },
  },
});