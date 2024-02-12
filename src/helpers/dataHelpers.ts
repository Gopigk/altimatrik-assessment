export const checkKeysHasValue = (obj: any, keys?: string[]) => {
  if (!keys) return Object.values(obj).some((value) => value);
  return keys.every((key) => obj[key]);
};

export const removeDuplicatesInArray = (arr: any[]) => {
  return Array.from(new Set(arr));
};
