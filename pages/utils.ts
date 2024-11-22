type Index = [number, number];

export const sortIndex = (index: Index[], order: "ASC" | "DESC" = "ASC"): Index[] => {
  return [...index].sort(([a1, b1], [a2, b2]) => {
    if (order === "ASC") {
      return a1 - a2 || b1 - b2;
    } else {
      return a2 - a1 || b2 - b1;
    }
  });
};

export const countDoubleNumber = (index: Index[]): number => {
  return index.filter(([a, b]) => a === b).length;
};

export const removeDup = (index: Index[]): Index[] => {
  const totalCount: Record<number, number> = index.reduce((acc, [a, b]) => {
    const total = a + b;
    acc[total] = (acc[total] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return index.filter(([a, b]) => totalCount[a + b] === 1);
};

export const flip = (index: Index[]): Index[] => {
  return index.map(([a, b]) => [b, a]);
};

export const removeAsTotal = (index: Index[], number: number): Index[] => {
  return index.filter(([a, b]) => a + b !== number);
};

export const reset = (): Index[] => {
  return [[6, 1], [4, 3], [5, 1], [3, 4], [1, 1], [3, 4], [1, 2]];
};