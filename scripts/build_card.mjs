import {build} from 'esbuild';
await build({entryPoints:['src/card.ts'],bundle:true,format:'esm',target:'es2022',minify:true,
  outfile:'dist/niak-comfort-card.js',sourcemap:true,legalComments:'none',loader:{'.css':'text'}});
