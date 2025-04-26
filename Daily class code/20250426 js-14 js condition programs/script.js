// 20250426 js-14 js condition programs

// Program 1- : Write a program to calculate the salary as per the
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

// 1. program
// 2. validation
// 3. input through keyboard

const getSalaryOfEmp = ({ name = "", gender = "", yos = 0, qual = "" }) => {
  const gen = gender.toLowerCase(); // Male, MALE --> male, M, m --> m
  const qua = qual.toLowerCase(); //

  // m, male, Male, MALE, F, f, Female, FEMALE
  if (!Boolean(name)) {
    // !Boolean('') --> !false --> true
    console.warn("Please enter a valid name");
    return;
  } else if (!Boolean(gender)) {
    console.warn("Please enter a valid gender");
    return;
  } else if (!Boolean(yos) || yos < 1 || isNaN(yos)) {
    console.warn("invalid Year of service or must be greater than 1");
    return;
  } else if (!Boolean(qual)) {
    console.warn("Please enter a valid qualification");
    return;
  } else if (gen !== "m" && gen !== "male" && gen !== "f" && gen !== "female") {
    console.warn("Please enter a valid gender in m/f");
    return;
  } else if (qua !== "pg" && qua !== "g") {
    console.warn("Please enter a valid qualification in g/pg");
    return;
  }

  console.log(`You are finding salary for ${name}, who is ${gender}. His/Her year of service is ${yos} 
    and his qualification is ${qual}`);
  // method 1--
  // if ((gen === "m" || gen === "male") && yos >= 10 && qua === "pg") {
  //   console.log(`Congratulations ${name} !!! Your salary is 15000/-`);
  // } else if ((gen === "m" || gen === "male") && yos >= 10 && qua === "g") {
  //   console.log(`Congratulations ${name} !!! Your salary is 10000/-`);
  // } else if ((gen === "m" || gen === "male") && yos < 10 && qua === "pg") {
  //   console.log(`Congratulations ${name} !!! Your salary is 10000/-`);
  // } else if ((gen === "m" || gen === "male") && yos < 10 && qua === "g") {
  //   console.log(`Congratulations ${name} !!! Your salary is 7000/-`);
  // } else if ((gen === "f" || gen === "female") && yos >= 10 && qua === "pg") {
  //   console.log(`Congratulations ${name} !!! Your salary is 12000/-`);
  // } else if ((gen === "f" || gen === "female") && yos >= 10 && qua === "g") {
  //   console.log(`Congratulations ${name} !!! Your salary is 9000/-`);
  // } else if ((gen === "f" || gen === "female") && yos < 10 && qua === "pg") {
  //   console.log(`Congratulations ${name} !!! Your salary is 10000/-`);
  // } else if ((gen === "f" || gen === "female") && yos < 10 && qua === "g") {
  //   console.log(`Congratulations ${name} !!! Your salary is 6000/-`);
  // } else {
  //   console.log(`Hi ${name}. Please coordinate with HR team. Thanks`);
  // }

  // method 2-
  if (gen === "m" || gen === "male") {
    if (yos >= 10 && qua === "pg") {
      console.log(`Congratulations ${name} !!! Your salary is 15000/-`);
    } else if (yos >= 10 && qua === "g") {
      console.log(`Congratulations ${name} !!! Your salary is 10000/-`);
    } else if (yos < 10 && qua === "pg") {
      console.log(`Congratulations ${name} !!! Your salary is 10000/-`);
    } else if (yos < 10 && qua === "g") {
      console.log(`Congratulations ${name} !!! Your salary is 7000/-`);
    } else {
      console.log(`Hi ${name}. Please coordinate with HR team. Thanks`);
    }
  } else if (gen === "f" || gen === "female") {
    if (yos >= 10 && qua === "pg") {
      console.log(`Congratulations ${name} !!! Your salary is 12000/-`);
    } else if (yos >= 10 && qua === "g") {
      console.log(`Congratulations ${name} !!! Your salary is 9000/-`);
    } else if (yos < 10 && qua === "pg") {
      console.log(`Congratulations ${name} !!! Your salary is 10000/-`);
    } else if (yos < 10 && qua === "g") {
      console.log(`Congratulations ${name} !!! Your salary is 6000/-`);
    } else {
      console.log(`Hi ${name}. Please coordinate with HR team. Thanks`);
    }
  } else {
    console.log(`Hi ${name}. Please coordinate with HR team. Thanks`);
  }
};

const empName = "Raju"; //
const empGender = "MALE"; // m/f
const yos = 15;
const qualification = "PG"; // g-> Gradudation, pg -> post-graduation

// using prompt to enter values from keyboard
// const empName = prompt("Please enter Employee name");
// const empGender = prompt("Please enter Employee's Gender m/f/male/female");
// const yos = prompt("Please enter Employee's Years of Service");
// const qualification = prompt("Please enter Employee's Qualification in pg/g");

getSalaryOfEmp({ name: empName, gender: empGender, yos, qual: qualification });

/**
 * Program 2-  A certain grade of steel is graded according to the following
conditions:
(i) Hardness must be greater than 50
(ii) Carbon content must be less than 0.7
(iii) Tensile strength must be greater than 5600
The grades are as follows:
Grade is 10 if all three conditions are met
Grade is 9 if conditions (i) and (ii) are met
Grade is 8 if conditions (ii) and (iii) are met
Grade is 7 if conditions (i) and (iii) are met
Grade is 6 if only one condition is met
Grade is 5 if none of the conditions are met 
 */

const findGradeOfSteel = ({ h = 0, c = 0, t = 0 }) => {
  console.log(
    `The hardness of steel(${h}), The Carbon of steel(${c}), The tensile of steel(${t}),`
  );

  const isHardened = h > 50;
  const isCarbonExceed = c < 0.7;
  const isTensiled = t > 5600;

  if (isHardened && isCarbonExceed && isTensiled) {
    console.log(`This is GRADE 10 steel`);
  } else if (isHardened && isCarbonExceed) {
    console.log(`This is GRADE 9 steel`);
  } else if (isCarbonExceed && isTensiled) {
    console.log(`This is GRADE 8 steel`);
  } else if (isHardened && isTensiled) {
    console.log(`This is GRADE 7 steel`);
  } else if (isHardened || isCarbonExceed || isTensiled) {
    console.log(`This is GRADE 6 steel`);
  } else {
    console.log(`This is GRADE 5 steel`);
  }
};
const hardness = 40;
const carbon = 0.3;
const tensile = 5400;

findGradeOfSteel({ h: hardness, c: carbon, t: tensile });

/**
 * Problem 3-
 * Create a program that will ask the user to input his/her birth month and birth date. The program should display the ZODIAC SIGN and its description based on his/her input month and date.

    Use the table of Zodiac Sign below:

 * Zodiac Sign Table:
 *
 * | Zodiac Sign   | Date Range                  |
 * |---------------|-----------------------------|
 * | AQUARIUS      | January 20 – February 18    |
 * | PISCES        | February 19 – March 20      |
 * | ARIES         | March 21 – April 19         |
 * | TAURUS        | April 20 – May 20           |
 * | GEMINI        | May 21 – June 20            |
 * | CANCER        | June 21 – July 22           |
 * | LEO           | July 23 – August 22         |
 * | VIRGO         | August 23 – September 22    |
 * | LIBRA         | September 23 – October 22   |
 * | SCORPIO       | October 23 – November 21    |
 * | SAGITTARIUS   | November 22 – December 21   |
 * | CAPRICORN     | December 22 – January 19    |
 */
