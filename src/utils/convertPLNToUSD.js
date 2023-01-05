export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
    
  if(typeof(PLN) === 'string' || typeof(PLN) === 'undefined'){
    return NaN;
  }

  if(typeof PLN !== 'string' && typeof PLN !== 'number'){
    return 'Error';
  }

  if(PLN < 0){
    return 'Wrong value...';
  }

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}