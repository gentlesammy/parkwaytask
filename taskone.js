//function fetches fee configuration from a file using  fetch api
async function fetchFeeConfig() {
  const response = await fetch("./fees.config.json");
  const transList = await response.json();
  return transList;
}

//check out where amount to be transfered falls in  fee configuration and append  the charge
const feesCalculator = async (AmountTransfered) => {
  //get fee configuration
  const feeConfigList = await fetchFeeConfig();
  var charges;
  //filter out the object where amount transfered falls
  const matchedFeeConfig = feeConfigList.fees.filter(
    (item) =>
      AmountTransfered >= item.minAmount && AmountTransfered <= item.maxAmount
  );
  //equate charges value for the amount in matchedFeeConfig
  charges = matchedFeeConfig[0].feeAmount;
  console.log(charges);
  return charges;
};

feesCalculator(5000);
