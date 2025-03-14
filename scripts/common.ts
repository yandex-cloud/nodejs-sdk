export const generateServiceName = (dir: string) => {
    return dir.split('/').join('-');
};
