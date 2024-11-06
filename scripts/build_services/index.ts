import path from 'path';
import webpack from 'webpack';
import fs from 'fs';
import { Options } from 'ts-loader';

const getServices = () => {
    const files = fs.readdirSync(path.resolve('./clients'), { withFileTypes: true });
    return files.filter((file) => file.isDirectory()).map((file) => file.name);
};

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
    },
});

const getServiceConfig = (serviceName: string): webpack.Configuration => {
    const tsLoaderOptions: Partial<Options> = {
        compilerOptions: {
            outDir: path.resolve(`./${serviceName}`),
        },
        onlyCompileBundledFiles: true,
    };

    const config = getConfig(tsLoaderOptions);

    return {
        ...config,
        name: serviceName,
        entry: path.resolve(`./clients/${serviceName}/index.ts`),
        output: {
            path: path.resolve(serviceName),
            filename: 'index.js',
            libraryTarget: 'umd',
            library: serviceName,
            umdNamedDefine: true,
        },
        stats: {
            colors: true,
            logging: 'log',
        },
    };
};

(async () => {
    const serviceConfigList = getServices().map(getServiceConfig);

    for (let i = 0; i !== serviceConfigList.length; i++) {
        const config = serviceConfigList[i];

        console.log('Started', config.name);

        await new Promise<null>((res) => {
            webpack(config, (err) => {
                console.log('Ended', config.name, err);

                res(null);
            });
        });
    }
})();
