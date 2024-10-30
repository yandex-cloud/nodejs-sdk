import path from 'path';
import webpack from 'webpack';
import fs from 'fs';
import { Options } from 'ts-loader';

const getServices = () => fs.readdirSync(path.resolve(__dirname, './clients'));

const getConfig = (tsLoaderOptions: Partial<Options>): webpack.Configuration => ({
    mode: 'development',
    optimization: {},
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
                options: tsLoaderOptions,
            },
        ],
    },
    resolve: {
        plugins: [],
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
        fallback: {
            stream: require.resolve('stream-browserify'),
            zlib: require.resolve('browserify-zlib'),
            buffer: require.resolve('buffer/'),
            assert: require.resolve('assert/'),
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),

            url: require.resolve('url'),
            crypto: require.resolve('crypto-browserify'),

            vm: require.resolve('vm-browserify'),
            http: require.resolve('stream-http'),

            fs: false,
            tls: false,
            net: false,
            http2: false,
            dns: false,
        },
    },
});

const getServiceConfig = (serviceName: string): webpack.Configuration => {
    const tsLoaderOptions: Partial<Options> = {
        compilerOptions: {
            outDir: path.resolve(__dirname, `./${serviceName}`),
        },
        onlyCompileBundledFiles: true,
    };

    const config = getConfig(tsLoaderOptions);

    return {
        ...config,
        name: serviceName,
        entry: path.resolve(__dirname, `./clients/${serviceName}/index.ts`),
        output: {
            path: path.resolve(__dirname, serviceName),
            filename: 'index.js',
            libraryTarget: 'umd',
            library: serviceName,
            umdNamedDefine: true,
        },
    };
};

module.exports = getServices().map(getServiceConfig);
module.exports.parallelism = 1;
