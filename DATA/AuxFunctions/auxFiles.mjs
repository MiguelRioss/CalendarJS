export function getMaxDaysInMonth(monthStr, yearStr) {
    // Convert monthStr and yearStr to numbers
    const month = parseInt(monthStr, 10) - 1; // Subtract 1 to adjust for JavaScript's month indexing (0 for January)
    const year = parseInt(yearStr, 10);

    // Create a date object for the first day of the next month
    const nextMonth = new Date(year, month + 1, 1);

    // Subtract one day from the first day of the next month
    // to get the last day of the current month
    nextMonth.setDate(nextMonth.getDate() - 1);

    // The date object now represents the last day of the current month
    // Get the day of the month to determine the maximum number of days
    const maxDays = nextMonth.getDate();

    return maxDays.toString(); // Convert the result to a string
}


export function isValidStringDay(value){
    return typeof value == 'string' && value.split("-").length == 3
    }

export function isValidDay(day){
        if(!(isValidStringDay(day) )){throw ("Invalid Day Input")}
        const date_Array = day.split("-")
        const DAY= date_Array[0]
        const MONTH = date_Array[1]
        const Year = date_Array[2]
        const maxDays = getMaxDaysInMonth(MONTH,Year)
    
        return Number(DAY) < Number(maxDays) && Number(MONTH) <= 12 && Number(Year) >= 2023
     }
    
export function isValidService(typeOfService){
    return (typeOfService == "massagem" || typeOfService == "unhas")
}

export function isValidTime(time){
    const hoursArray = time.split(':')
    const hours = Number(hoursArray[0])
    const minutes = Number(hoursArray[1])
    return hours < 24 && minutes < 60

}
export function isValidNIF(nif) {
    // Check if the input is a string of exactly 9 digits
    if (!/^\d{9}$/.test(nif)) {
      return false;
    }
  
    // Convert the string to an array of digits
    const digits = nif.split('').map(Number);
  
    // Calculate the check digit
    const checkDigit = digits[8];
  
    // Calculate the weighted sum of the first 8 digits
    let sum = 0;
    for (let i = 0; i < 8; i++) {
      sum += digits[i] * (9 - i);
    }
  
    // Calculate the expected check digit
    let expectedCheckDigit = 11 - (sum % 11);
    if (expectedCheckDigit === 10) {
      expectedCheckDigit = 0;
    }
  
    // Check if the calculated check digit matches the expected one
    return checkDigit === expectedCheckDigit;
  }