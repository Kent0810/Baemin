const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("VND", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
};

export default FormatPrice;
