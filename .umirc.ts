import { defineConfig } from 'dumi';

const baseUrl = 'https://user-images.githubusercontent.com';

export default defineConfig({
  title: 'shifangjiaoyu',
  favicon:
    baseUrl + '9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: baseUrl + '/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  description: '用于Biz Web Dev 前端组件开发。',
  // more config: https://d.umijs.org/config
});
