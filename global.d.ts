declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            GH_USERNAME?: string;
        }
    }
}

export {};