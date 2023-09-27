export const getWebContentLink = (fileName: string) => {
  return `${process.env.APP_URL}/${process.env.APP_STATIC_DIR_NAME}/${fileName}`;
};
