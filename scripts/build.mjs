import {
    rm,
    mkdir,
    copyFile,
    readFile,
    writeFile
} from "node:fs/promises";

import { build } from "esbuild";
import { minify } from "html-minifier-terser";

const pastaSaida = "docs";

console.log("Limpando build anterior...");

await rm(pastaSaida, {
    recursive: true,
    force: true
});

await mkdir(`${pastaSaida}/css`, { recursive: true });
await mkdir(`${pastaSaida}/js`, { recursive: true });
await mkdir(`${pastaSaida}/imagens`, { recursive: true });

console.log("Minificando JavaScript...");

await build({
    entryPoints: ["js/app.js"],
    bundle: true,
    minify: true,
    format: "esm",
    target: ["es2020"],
    outfile: `${pastaSaida}/js/app.min.js`,
    legalComments: "none"
});

let javascript = await readFile(
    `${pastaSaida}/js/app.min.js`,
    "utf8"
);

javascript = javascript.replaceAll(
    "../imagens/",
    "./imagens/"
);

await writeFile(
    `${pastaSaida}/js/app.min.js`,
    javascript
);

console.log("Minificando CSS...");

await build({
    entryPoints: ["css/style.css"],
    bundle: true,
    minify: true,
    outfile: `${pastaSaida}/css/style.min.css`,
    legalComments: "none"
});

console.log("Minificando HTML...");

let html = await readFile(
    "html/index.html",
    "utf8"
);

html = html
    .replace(
        "../css/style.css",
        "./css/style.min.css"
    )
    .replace(
        "../js/app.js",
        "./js/app.min.js"
    );

html = await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
    keepClosingSlash: true
});

await writeFile(
    `${pastaSaida}/index.html`,
    html
);

console.log("Copiando imagens...");

await copyFile(
    "imagens/ong.webp",
    `${pastaSaida}/imagens/ong.webp`
);

await copyFile(
    "imagens/ong.jpg",
    `${pastaSaida}/imagens/ong.jpg`
);

console.log("");
console.log("Build de produção concluída!");
console.log(`Arquivos gerados em /${pastaSaida}`);