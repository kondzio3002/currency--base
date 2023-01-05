export const convertUSDToPLN = (USD) => {
  const USDtoPLN = USD * 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  if(USD < 0){
    return 'Wrong value...';
  }

  return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');
}