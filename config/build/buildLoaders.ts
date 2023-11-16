import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader"
        ]
    }
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }


    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }


    return [fileLoader, svgLoader, typeScriptLoader, cssLoader]

}