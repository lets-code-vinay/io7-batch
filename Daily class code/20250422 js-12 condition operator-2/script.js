// 20250422 js-12 condition operator-2

// decision making flow chart

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

  if (sPrice > pPrice) {
    console.log(
      `This is a profit deal for ${item} with profit of ${sPrice - pPrice}`
    );
  } else {
    console.log(
      `This is a loss deal for ${item} with loss of ${pPrice - sPrice}`
    );
  }
};

// findProfitLoss();

/**
 * Create a function which checks the entered number is even or odd
 */
// even -- 0,2,4,6,....
// odd -- 1,3,5,7 ......

// 45 -- This is an odd number
// 44 -- This is an even number

// 78 / 2 == 49 -- 0
// 79 / 2 == 49 -- 1

// 78 % 2 --> 0 // Even
// 79 % 2 --> 1 // odd

function findEvenOdd() {
  const numberToCheck = Number(
    prompt("Please Enter a number to find even odd")
  );

  if (isNaN(numberToCheck)) {
    console.warn(`This  is not a valid number`);
    return;
  } else {
    console.log(`The entered number is ${numberToCheck}`);

    if (Math.abs(numberToCheck % 2) == 0) {
      console.log(`The number ${numberToCheck} is an EVEN number`);
    } else {
      console.log(`The number ${numberToCheck} is an ODD number`);
    }
  }
}
// findEvenOdd();

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

const employeeName = prompt("Please enter the Employee name-");
const employeeAge = prompt("Please enter the Employee Age: age must be 18-60");
const employeeGender = prompt(
  "Please enter the Employee Gender: Please use m for male and f for Female"
);
const employeeMaritalStatus = confirm("Is employee married?");

employeeInsurance({
  empName: employeeName,
  isMarried: employeeMaritalStatus,
  age: employeeAge,
  gender: employeeGender,
});

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
