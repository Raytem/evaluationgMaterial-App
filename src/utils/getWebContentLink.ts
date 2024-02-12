import { NodeEnv } from 'src/enums/node-env';

export const getWebContentLink = (fileName: string, materialFolder) => {
  let serverUrl;

  if (process.env.NODE_ENV === NodeEnv.PRODUCTION) {
    serverUrl = process.env.DOMAIN_URL;
  } else {
    serverUrl = process.env.APP_URL;
  }

  return `${serverUrl}/${process.env.FILE_STATIC_DIR_NAME}/${process.env.FILE_MATERIAL_IMAGES_DIR_NAME}/${materialFolder}/${fileName}`;
};
