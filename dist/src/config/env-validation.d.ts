declare class EnvVariables {
    APP_HOST: string;
    APP_PORT: string;
    APP_URL: string;
    APP_PROXY_PORT: string;
    APP_PROXY_URL: string;
    CNT_OF_NUMBERS_AFTER_POINT: string;
    FILE_STATIC_DIR_NAME: string;
    FILE_MATERIAL_IMAGES_DIR_NAME: string;
    FILE_TEMPLATES_DIR_NAME: string;
    FILE_RESIZE_SIZE: string;
    FILE_MAX_SIZE: string;
    FILE_UPLOAD_LIMIT: string;
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
