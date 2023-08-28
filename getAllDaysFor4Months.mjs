
  

export  function daysUntilMonthsFromNow(months) {
    if (months < 0) {
      return "Invalid input: months should be a positive number.";
    }
  
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
  
    // Add the specified number of months to the current date
    futureDate.setMonth(currentDate.getMonth() + months);
  
    // Calculate the difference in milliseconds
    const timeDifference = futureDate - currentDate;
  
    // Convert the difference to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }
  
  // Example usage: Calculate the number of days until 4 months from now
//  const monthsUntil = 4;
 // const daysUntilFourMonths = daysUntilMonthsFromNow(monthsUntil);
  
export function getNextNDays(n) {
    const currentDate = new Date();
    const result = {};
  
    for (let i = 0; i < n; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
  
      const day = String(nextDate.getDate()).padStart(2, '0');
      const month = String(nextDate.getMonth() + 1).padStart(2, '0');
      const year = nextDate.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;
  
      if (!result[`${month}-${year}`]) {
        result[`${month}-${year}`] = [];
      }
      result[`${month}-${year}`].push(formattedDate);
    }
  
    return result;
  }
  
//  const formattedDates = getNextNDays(daysUntilFourMonths);
//  console.log(formattedDates);
  
