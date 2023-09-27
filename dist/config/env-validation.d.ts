declare class EnvVariables {
    APP_HOST: string;
    APP_PORT: string;
    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_SYNCHRONIZE: string;
}
export declare const validate: (config: Record<string, unknown>) => EnvVariables;
export {};
