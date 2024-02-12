export const checkKeysHasValue = (obj: any, keys: string[]) => {
  return keys.every((key) => obj[key]);
};

export const removeDuplicatesInArray = (arr: any[]) => {
  return Array.from(new Set(arr));
};
