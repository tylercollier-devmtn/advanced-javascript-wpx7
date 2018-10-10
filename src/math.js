export const doTheActualCalculationThough = arr => {
  if (!arr.length) {
    throw new Error('No values to calculate');
  }
  // ...
}

export const calculateMax = arr => {
  // try {
  //   return doTheActualCalculationThough(arr);
  // } catch (error) {
  //   // Can't do this here!
  //   // this.setState({ message: error.message });
  //   // console.log(error);
  //   writeToMyDeveloperTeamErrorLogAcrossTheInternet();
  //   throw error;
  // }
  return doTheActualCalculationThough(arr);
}