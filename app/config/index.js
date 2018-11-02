import localConfig from '../config/env/local'

let config;
switch(process.env.NODE_APP_ENV) {
   	default:
        config = localConfig;
}

export default config;
