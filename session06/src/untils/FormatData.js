/**
 * Hàm format tiền VND
 * @param {*} money
 * @returns
 */

export const formatMoney = (money) => {
  const moneyFormat = money.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return moneyFormat;
};
