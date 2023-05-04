const sum_Points = str => {
  const newStr = str.slice(0, -1);

  switch (newStr) {
    case "A":
      return 1;
    case "J":
      return 10;
    case "Q":
      return 10;
    case "K":
      return 10;
    default:
      return Number(newStr);
  }
};

export {sum_Points}
