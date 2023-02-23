import webpack from 'webpack';
import { IBuildPaths } from '../webpack/build/types/config';
import path from 'path';
import { buildCssLoaders } from '../webpack/build/loaders/buildCssLoaders';

export default (({ config }: { config: webpack.Configuration; }) => {
    const paths: IBuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoaders(true));

    return config;
});