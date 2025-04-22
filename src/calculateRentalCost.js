/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  if (typeof days !== 'number' || days <= 0 || !Number.isInteger(days)) {
    return 'Please enter a valid number of days.';
  }

  const dailyRate = 40;
  let result = days * dailyRate;

  if (days >= 7) {
    result -= 50;
  } else if (days >= 3) {
    result -= 20;
  }

  return result;
}
module.exports = calculateRentalCost;
