import path from 'path';
import { defineConfig } from 'umi';

export default defineConfig({
    dynamicImport: {
        loading: '@/components/LoadingCp',
    },
    dva: {
        immer: true,
    },
    devtool: 'source-map',
    antd: {},
    title: 'H5页面编辑',
    base: '/',
    publicPath: '/',
    outputPath: 'dist',
    esbuild: {},
    routes: [
        {
            exact: false,
            path: '/',
            component: '@/layouts/index',
            routes: [
                {
                    path: '/editor',
                    component: '../pages/editor',
                },

                {
                    path: '/login',
                    component: '../pages/login',
                },
                {
                    path: '/preview',
                    component: '../pages/editor/preview',
                },
                {
                    path: '/check',
                    component: '../pages/editor/preview',
                },

                {
                    path: '/backManagement/roles',
                    component: '../pages/backManagement/roles'
                },
                {
                    path: '/backManagement/privileges',
                    component: '../pages/backManagement/privileges'
                },
                {
                    path: '/',
                    component: '../pages/admin',
                    routes: [
                        {
                            /** 制作提示页面 */
                            path: '/',
                            redirect: '/h5/editor'
                        },
                        {
                            /** 制作提示页面 */
                            path: '/h5/editor',
                            component: '../pages/home',
                        },
                        {
                            path: '/h5/admin',
                            component: '../pages/h5Admin',
                        },
                        {
                            path: '/logs',
                            component: '../pages/logs'
                        },
                        {
                            path: '/backManagement/users',
                            component: '../pages/backManagement/users'
                        },
                    ]
                },
            ],
        },
    ],
    theme: {
        'primary-color': '#2F54EB',
    },
    extraBabelPlugins: [['import', { libraryName: 'zarm', style: true }]],
    alias: {
        components: path.resolve(__dirname, 'src/components/'),
        utils: path.resolve(__dirname, 'src/utils/'),
        assets: path.resolve(__dirname, 'src/assets/'),
    },
});