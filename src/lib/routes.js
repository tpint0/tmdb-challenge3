import {Router} from "wpe-lightning-sdk";

/**
 * @see docs: https://github.com/rdkcentral/Lightning-SDK/blob/feature/router/docs/plugins/router.md
 */

import {
     Main, Splash
} from '../pages';

export default () =>{

    // define where the browser should point to on boot
    Router.root('splash', Splash);
    // Add route for movies
    Router.route('movies', Main);
    Router.start();
}