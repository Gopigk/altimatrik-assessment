export const checkKeysHasValue = (obj: any, keys: string[]) => {
  return keys.every((key) => obj[key]);
};
