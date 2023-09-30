export const getWebContentLink = (fileName: string, materialFolder) => {
  return `${process.env.APP_URL}/${process.env.FILE_STATIC_DIR_NAME}/${process.env.FILE_MATERIAL_IMAGES_DIR_NAME}/${materialFolder}/${fileName}`;
};
