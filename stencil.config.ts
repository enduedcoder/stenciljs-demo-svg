import { Config } from '@stencil/core';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'test-svg',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [inlineSvg()],
  testing: {
    transform: {
      //working
      '^.+\\.svg$': '<rootDir>/svgtest.js',
    },
  },
};
