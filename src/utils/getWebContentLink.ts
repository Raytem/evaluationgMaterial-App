import { NodeEnv } from 'src/enums/node-env';

export const getWebContentLink = (fileName: string, materialFolder) => {
  let serverUrl;
  if (process.env.NODE_ENV === NodeEnv.DEVELOPMENT) {
    serverUrl = process.env.APP_URL;
  } else {
    serverUrl = process.env.APP_PROXY_URL;
  }
  return `${serverUrl}/${process.env.FILE_STATIC_DIR_NAME}/${process.env.FILE_MATERIAL_IMAGES_DIR_NAME}/${materialFolder}/${fileName}`;
};
