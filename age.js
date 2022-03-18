const getAgeFromBirthDate = () => {
  const date = new Date();
  console.log(`Please enter inputs in number format. e.g.(day: 22, month: 7, year: 1999)`);
  let day = parseInt(prompt(`Please enter the day you were born:`));
  let month = parseInt(prompt(`Please enter the month you were born:`));
  let year = parseInt(prompt(`Please enter the year you were born:`));
  let arr = [year, month, day];
  date.setFullYear(date.getFullYear() - year);
  date.setMonth(date.getMonth() - month);
  return date;
};
function printAge (){
    let age = getAgeFromBirthDate().getFullYear();
    console.log(`You are ${age} years old.`);
}
printAge();

