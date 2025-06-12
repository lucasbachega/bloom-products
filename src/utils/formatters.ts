export const formatAmount = (value: number | string | any) => {
  return parseFloat(value || 0)
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
