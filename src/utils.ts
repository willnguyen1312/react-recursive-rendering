import { ItemType } from "./types";

export const findNodeById = (
  data: ItemType[],
  predicate: (item: ItemType) => boolean
): ItemType | null => {
  if (data.length === 0) return null;

  let result = null;
  const stack = [...data];

  while (stack.length !== 0) {
    const current = stack.pop() as ItemType;

    if (predicate(current)) {
      return current;
    } else {
      stack.push(...(current.children || []));
    }
  }

  return result;
};
