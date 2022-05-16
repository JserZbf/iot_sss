import { resolve } from 'path';
export const TARGETS = {
  dev: {
    api: 'http://172.17.40.64:8002',
  },
};
const TARGET = TARGETS[process.env.PROXY_TARGET] || {};
// ref: https://umijs.org/config/
export default {
  proxy: {
    context: (pathname, req) => {
      return req.headers['x-requested-with'] === 'XMLHttpRequest';
    },
    target: TARGET.api,
    changeOrigin: true,
    ws: true,
    onProxyReqWs: (proxyReq) => {
      proxyReq.setHeader('origin', TARGET.api);
    },
    secure: false,
    // 需要转发的API前缀
  },
  hash: true,
  antd: {},
  history: {
    type: 'hash',
  },
  dva: {
    disableModelsReExport: true,
    lazyLoad: true,
  },
  dynamicImport: {
    loading: 'components/Spin',
  },
  title: '基础模块',
  headScripts: [
    // header里面插入script脚本
  ].filter((i) => i),
  links: [{ rel: 'stylesheet', href: '//at.alicdn.com/t/font_2681856_m3291mzp0mi.css' }],
  chainWebpack(config) {
    config.resolve.modules.add(resolve(__dirname, './src'));
    config.module
      .rule('worker-loader')
      .test(/\.worker\.js$/i)
      .use('worker-loader')
      .loader('file-loader');
  },
  define: {
    'process.env.dev': 'Y',
  },
};
