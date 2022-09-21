// module.exports = {
//   process(sourcePath) {
//    // return 'module.exports =  ${JSON.stringify(path.basename(sourcePath))} ;';
//      return {
//       code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
//   };
//   },
//   getCacheKey() {
//       // The output is always the same.
//       return 'svgTransform';
//   },
// };



export const inlineSvg = function inlineSvg(props) {
  return '<span  {...props} />';
};

  
// export function inlineSvg(): PluginTransformer {
//   return {
//     name: 'inlineSvg',
//     transform(
//       sourceText: string,
//       fileName: string,
//     ): Promise<PluginTransformResults> {
//       // if (!util.usePlugin(fileName)) {
//       //   return null;
//       // }

//       if (sourceText === '') {
//         throw new Error('/** inlineSvg error: the SVG file is empty **/');
//       }

//       return new Promise<PluginTransformResults>((resolve) => {
//         const svgCode = sourceText;
//         resolve({
//           id: fileName,
//           code: `export default \`${svgCode}\``,
//         });
//       });
//     },
//   };
// }

// // import svgtojsx from 'svg-to-jsx';
// // import { PluginTransformResults, PluginTransformer } from 'stencil-inline-svg/dist/declarations';
// export function usePlugin(fileName: string) {
//   return /\.svg$/i.test(fileName);
// }

// /**
//  *  If the sourceText is a base64 string returned by
//  *  rollup imagePlugin, remove the export part of the
//  *  string and decode the base64 value
//  *
//  *  @param sourceText - a rollup imagePlugin export string in the format const img = 'data:image/svg+xml;base64,...'; export default img;
//  */
// // export function decodeBase64SourceText(sourceText: string) {
// //   let [, base64Code] = sourceText.split('base64,');
// //   if (!base64Code) {
// //     return false;
// //   }

// //   base64Code = base64Code.slice(0, base64Code.indexOf(`';`));

// //   return Buffer.from(base64Code, 'base64').toString();
// // }
// /**
//  * Copied and adapted from @stencil/sass
//  * https://github.com/ionic-team/stencil-sass
//  */

//  export interface PluginOptions {
//     include?: string;
//     exclude?: string;
//     data?: any;
//   }
  
//   export interface PluginTransformResults {
//     code?: string;
//     id?: string;
//   }
  
//   export interface PluginCtx {
//     config: {
//       rootDir?: string;
//       srcDir?: string;
//     };
//     fs: any;
//     diagnostics: Diagnostic[];
//   }
  
//   export interface Diagnostic {
//     level: 'error' | 'warn' | 'info' | 'log' | 'debug';
//     type:
//       | 'typescript'
//       | 'bundling'
//       | 'build'
//       | 'runtime'
//       | 'hydrate'
//       | 'css'
//       | 'inline-svg';
//     header?: string;
//     language?: string;
//     messageText: string;
//     code?: string;
//     absFilePath?: string;
//     relFilePath?: string;
//     lineNumber?: number;
//     columnNumber?: number;
//     lines?: PrintLine[];
//   }
  
//   export interface PrintLine {
//     lineIndex: number;
//     lineNumber: number;
//     text?: string;
//     errorCharStart: number;
//     errorLength?: number;
//   }
  
//   export interface PluginTransformer {
//     name: string;
//     transform: (
//       sourceText: string,
//       fileName: string,
//     ) => Promise<PluginTransformResults>;
//   }
