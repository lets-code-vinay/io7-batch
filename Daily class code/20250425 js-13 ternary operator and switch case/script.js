// 20250425 js-13 ternary operator and switch case

/**
 *  A company insures its drivers in the following
cases:
− If the driver is married.
− If the driver is unmarried, male & above 30 years of age.
− If the driver is unmarried, female & above 25 years of age.
In all other cases the driver is not insured. If the marital status, sex
and age of the driver are the inputs, write a program to determine
whether the driver is to be insured or not
 */

// married                          --> insurance
// unmarried && male && age > 30    --> insure
// unmarried && female && age > 25  --> insure
// if all above case gone failed    ---> not insure

// 1. marital status -> married and unmarried
// 2. age            -> < 25
// 3. gender         -> male, female

// we will use static value

// case 1
// marital status --> married
// age            --> 30
// gender         --> male

// case 2
// marital status --> unmarried
// age            --> 30
// gender         --> female

// case 3
// marital status --> unmarried
// age            --> 30
// gender         --> male

// case 4
// marital status --> unmarried
// age            --> 20
// gender         --> male

// validation
// marital status --> boolean (married -> yes, unmarried -> no)
// gender         --> string  (m, f)
// age            --> number
//                --> age > 18, age < 60

const employeeInsurance = ({
  empName = "",
  isMarried = false,
  age = 0,
  gender = "",
}) => {
  console.log("-----------------------------", gender);

  // validations
  // 1. empName , age, gender must be entered
  if (!Boolean(empName)) {
    console.warn(`Please enter a valid name`);
    return;
  } else if (!age || age <= 0) {
    console.warn(`${age} is nat a valid age.`);
    return;
  } else if (age <= 18) {
    console.warn(
      `${empName} is underage with age of ${age}. Employee must be 18+`
    );
    return;
  } else if (age > 60) {
    console.warn(
      `${empName} is overage with age of ${age}. Employee must be 60-`
    );
    return;
  } else if (!Boolean(gender)) {
    console.warn(`Please enter a valid gender (m or f)`);
    return;
  } else if (
    gender.length > 0 &&
    gender.toLowerCase() !== "m" &&
    gender.toLowerCase() !== "f"
  ) {
    console.warn(`Please enter a valid gender (m or f) --2`);
    return;
  }

  console.log(
    `${empName} with age of ${age}, gender is ${gender}. This employee is married ${isMarried}`
  );
  if (isMarried == true) {
    console.log(`${empName} is eligible for insurance`);
  } else if (isMarried == false && gender.toLowerCase() == "m" && age > 30) {
    console.log(`${empName} is eligible for insurance`);
  } else if (isMarried == false && gender.toLowerCase() == "f" && age > 25) {
    console.log(`${empName} is eligible for insurance`);
  } else {
    console.log(`${empName} is NOT eligible for insurance`);
  }
};

// employeeInsurance({ empName: "Ajay", isMarried: true, age: 31, gender: "m" });
// employeeInsurance({
//   empName: "Aditya",
//   isMarried: false,
//   age: 31,
//   gender: "m",
// });
// employeeInsurance({
//   empName: "",
//   isMarried: true,
//   gender: "F",
//   age: 59,
// });
// employeeInsurance({ empName: "James", isMarried: true, age: 27, gender: "m" });

// const employeeName = prompt("Please enter the Employee name-");
// const employeeAge = prompt("Please enter the Employee Age: age must be 18-60");
// const employeeGender = prompt(
//   "Please enter the Employee Gender: Please use m for male and f for Female"
// );
// const employeeMaritalStatus = confirm("Is employee married?");

// employeeInsurance({
//   empName: employeeName,
//   isMarried: employeeMaritalStatus,
//   age: employeeAge,
//   gender: employeeGender,
// });

// Example 2.6: Write a program to calculate the salary as per the
// following table:
/**
 * Salary Table:
 *
 * Gender | Years of Service | Qualifications   | Salary
 * -------|------------------|------------------|--------
 * Male   | >= 10            | Post-Graduate    | 15000
 *        | >= 10            | Graduate         | 10000
 *        | < 10             | Post-Graduate    | 10000
 *        | < 10             | Graduate         | 7000
 * -------|------------------|------------------|-------
 * Female | >= 10            | Post-Graduate    | 12000
 *        | >= 10            | Graduate         | 9000
 *        | < 10             | Post-Graduate    | 10000
 *        | < 10             | Graduate         | 6000
 */

// What is Ternary operator?
// Ternary operator is single line decision making or condition operator

// create a program to find even odd

const num = 10;
if (num % 2 == 0) {
  console.log("This is a even number");
} else {
  console.log("This is a odd number");
}

// condition ? true case : false case
num % 2 == 0
  ? console.log("This is a even number -- ternary")
  : console.log("This is a odd number -- ternary");

/**
 * Ramesh has bought a glass at price of 50 rs and sold it at price of 60 rs.
 * Find is Ramesh in profit or loss
 */

const findProfitLoss = () => {
  const item = String(prompt("Enter item you are purchasing and selling"));
  const pPrice = Number(prompt("Enter the purchase amount in rs."));
  const sPrice = Number(prompt("Enter the sell amount in rs."));
  // validation
  if (isNaN(pPrice)) {
    console.warn(`Invalid amount!!! . Please enter a valid purchase amount`);
    return;
  } else if (isNaN(sPrice)) {
    console.warn(`Invalid amount!!! . Please enter a valid purchase amount`);
    return;
  } else if (!item) {
    console.warn(`Invalid item name!!! . Please enter a valid Item name`);
    return;
  } else if (item.length > 100) {
    console.warn(`Invalid ${item}!!!. item name must be under 100 characters`);
    return;
  } else if (item.toLowerCase().includes("mobile")) {
    console.warn(
      `Unaccepted Item!!!. Mobiles are not allowed to sale and purchase`
    );
    return;
  }

  sPrice > pPrice
    ? console.log(
        `This is a profit deal for ${item} with profit of ${sPrice - pPrice}`
      )
    : console.log(
        `This is a loss deal for ${item} with loss of ${pPrice - sPrice}`
      );
};

// findProfitLoss();

/**
 * If the ages of Sanjay, Vijay and Ajay are input through the
keyboard, write a program to determine the youngest of the
three.
 */

const whoIsYoungest = () => {
  const Sanjay = Number(prompt("Enter Sanjay's Age"));
  const Vijay = Number(prompt("Enter Vijay's Age"));
  const Ajay = Number(prompt("Enter Ajay's Age"));
  console.log(
    `Age of Sanjay- ${Sanjay}, Age of Vijay ${Vijay} and age of Ajay ${Ajay}`
  );

  if (isNaN(Sanjay) || isNaN(Vijay) || isNaN(Ajay)) {
    console.warn(
      `Please enter valid age of ${
        isNaN(Sanjay) ? "Sanjay" : isNaN(Vijay) ? "Vijay" : "Ajay"
      }`
    );
    return;
  }

  // if (Sanjay < Vijay && Sanjay < Ajay) {
  //   console.log("Sanjay is Youngest -- if-else");
  // } else if (Vijay < Sanjay && Vijay < Ajay) {
  //   console.log("Vijay is Youngest -- if-else");
  // } else {
  //   console.log("Ajay is Youngest -- if-else");
  // }

  Sanjay < Vijay && Sanjay < Ajay
    ? console.log("Sanjay is Youngest")
    : Vijay < Sanjay && Vijay < Ajay
    ? console.log("Vijay is Youngest")
    : console.log("Ajay is Youngest");
};

// whoIsYoungest();

// ---------- Switch Case --------------
const dayName = "fri";

if (dayName == "sun") {
  console.log(" this is Sunday");
} else if (dayName == "mon") {
  console.log(" this is Monday");
} else if (dayName == "tues") {
  console.log(" this is Tuesday");
} else if (dayName == "wed") {
  console.log(" this is Wednesday");
} else if (dayName == "thur") {
  console.log(" this is Thursday");
} else if (dayName == "fri") {
  console.log(" this is Friday");
} else if (dayName == "sat") {
  console.log(" this is Saturday");
} else {
  console.log("No day has been matched");
}

switch (dayName) {
  case "sun":
    console.log(" this is Switch Sunday");
    break;
  case "mon":
    console.log("This is Switch Monday");
    break;

  case "tues":
    console.log("This is Switch Tuesday");
    break;

  case "wed":
    console.log("This is Switch Wednesday");
    break;

  case "thurs":
    console.log("This is Switch Thursday");
    break;

  case "fri":
    console.log("This is Switch Friday");
    break;

  case "sat":
    console.log("This is Switch Saturday");
    break;
  default:
    console.log("No day has been matched");
    break;
}
