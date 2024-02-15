import webpack from 'webpack';
import { IBuildPaths } from '../webpack/build/types/config';
import path from 'path';
import { buildCssLoader } from '../webpack/build/loaders/buildCssLoader';
import { buildSvgLoader } from '../webpack/build/loaders/buildSvgLoader';

export default ( ({ config }: { config: webpack.Configuration; }) => {
    const paths: IBuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve( __dirname, '..', '..', 'src' ),
    };

    config!.resolve!.modules!.push( paths.src );
    config!.resolve!.extensions!.push( '.ts', '.tsx' );

    //@ts-expect-error: TODO поправить типы конфига
    config!.module!.rules = config!.module!.rules!.map( (rule: webpack.RuleSetRule) => {
        if (rule.test instanceof RegExp && rule.test.toString().includes( 'svg' )) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    } );

    config!.module!.rules!.push( buildSvgLoader() );
    config!.module!.rules!.push( buildCssLoader( true ) );

    config!.plugins!.push(
        new webpack.DefinePlugin( {
            __IS_DEV__: 'true',
            __API__: JSON.stringify( 'localhost:5050' ),
        } ),
    );

    return config;
} );
