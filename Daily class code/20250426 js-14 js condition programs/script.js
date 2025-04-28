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
  let output = document.getElementById("output");

  if (isNaN(h)) {
    console.warn(`Please enter valid hardness`);
    return;
  } else if (isNaN(c)) {
    console.warn(`Please enter valid Carbon`);
    return;
  } else if (isNaN(t)) {
    console.warn(`Please enter valid Tensile`);
    return;
  }

  console.log(
    `The hardness of steel(${h}), The Carbon of steel(${c}), The tensile of steel(${t}),`
  );

  const isHardened = Number(h) > 50;
  const isCarbonExceed = Number(c) < 0.7;
  const isTensiled = Number(t) > 5600;

  if (isHardened && isCarbonExceed && isTensiled) {
    console.log(`This is GRADE 10 steel`);
    output.innerText = `This is GRADE 10 steel`;
  } else if (isHardened && isCarbonExceed) {
    console.log(`This is GRADE 9 steel`);
    output.innerText = `This is GRADE 9 steel`;
  } else if (isCarbonExceed && isTensiled) {
    console.log(`This is GRADE 8 steel`);
    output.innerText = `This is GRADE 8 steel`;
  } else if (isHardened && isTensiled) {
    console.log(`This is GRADE 7 steel`);
    output.innerText = `This is GRADE 7 steel`;
  } else if (isHardened || isCarbonExceed || isTensiled) {
    console.log(`This is GRADE 6 steel`);
    output.innerText = `This is GRADE 6 steel`;
  } else {
    console.log(`This is GRADE 5 steel`);
    output.innerText = `This is GRADE 5 steel`;
  }
};
// const hardness = 40;
// const carbon = "0.3";
// const tensile = "5400";

// const hardness = prompt("Please enter hardness under 100");
// const carbon = prompt("Please enter Carbon in decimal");
// const tensile = prompt("Please enter Tensile above 5000");

// ---- code will be readable when html uncommented
// document.getElementById("checkSteel").addEventListener("click", () => {
//   const hardness = document.getElementById("hardness").value;
//   const carbon = document.getElementById("carbon").value;
//   const tensile = document.getElementById("tensile").value;

//   findGradeOfSteel({ h: hardness, c: carbon, t: tensile });
// });

/**
 * Problem 3-
 * Create a program that will ask the user to input his/her birth month and birth date. 
 * The program should display the ZODIAC SIGN and its description based on his/her input month and date.

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

// (month == 'jan' && date >=20 ) || (month === 'feb' && data <=18)

const findMyZodiac = ({ month = "", day = 0 }) => {
  let output = document.getElementById("output");
  let zodiacIs = document.getElementById("zodiac-is");
  let error = document.getElementById("error");

  // validations
  if (!month) {
    console.warn("Please enter valid month");
    error.innerText = "Please enter valid month";
    return;
  } else if (!day) {
    console.warn("Please enter valid day");
    error.innerText = "Please enter valid day";
    return;
  } else if (isNaN(day)) {
    console.warn("Please enter valid day in numbers from 1-31");
    error.innerText = "Please enter valid day in numbers from 1-31";
    return;
  } else if (day > 31 || day < 1) {
    console.warn("Please enter valid day in numbers from 1-31");
    error.innerText = "Please enter valid day in numbers from 1-31";
    return;
  }

  if ((month === "jan" && day >= 20) || (month === "feb" && day <= 18)) {
    console.log("Zodiac is AQUARIUS");
    output.innerText = "Zodiac is AQUARIUS";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/32/aquarius-759383_960_720.jpg'  />`;
  } else if (
    (month === "feb" && day >= 19 && day < 29) ||
    (month === "mar" && day <= 20)
  ) {
    console.log("Zodiac is PISCES");
    output.innerText = "Zodiac is PISCES";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/32/fish-759384_960_720.jpg'  />`;
  } else if ((month === "mar" && day >= 21) || (month === "apr" && day <= 19)) {
    console.log("Zodiac is ARIES");
    output.innerText = "Zodiac is ARIES";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/32/aries-759382_1280.jpg'  />`;
  } else if ((month === "apr" && day >= 20) || (month === "may" && day <= 20)) {
    console.log("Zodiac is TAURUS");
    output.innerText = "Zodiac is TAURUS";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/32/bull-759381_960_720.jpg'  />`;
  } else if ((month === "may" && day >= 21) || (month === "jun" && day <= 20)) {
    console.log("Zodiac is GEMINI");
    output.innerText = "Zodiac is GEMINI";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2018/03/16/16/44/signs-of-the-zodiac-3231780_960_720.png'  />`;
  } else if ((month === "jun" && day >= 21) || (month === "jul" && day <= 22)) {
    console.log("Zodiac is CANCER");
    output.innerText = "Zodiac is CANCER";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/31/cancer-759378_640.jpg'  />`;
  } else if ((month === "jul" && day >= 23) || (month === "aug" && day <= 22)) {
    console.log("Zodiac is LEO");
    output.innerText = "Zodiac is LEO";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/30/lion-759374_1280.jpg'  />`;
  } else if ((month === "aug" && day >= 23) || (month === "sep" && day <= 22)) {
    console.log("Zodiac is VIRGO");
    output.innerText = "Zodiac is VIRGO";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/31/virgin-759376_960_720.jpg'  />`;
  } else if ((month === "sep" && day >= 23) || (month === "oct" && day <= 22)) {
    console.log("Zodiac is LIBRA");
    output.innerText = "Zodiac is LIBRA";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/31/horizontal-759380_960_720.jpg'  />`;
  } else if ((month === "oct" && day >= 23) || (month === "nov" && day <= 21)) {
    output.innerText = "Zodiac is SCORPIO";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/31/scorpio-759377_960_720.jpg'  />`;
    console.log("Zodiac is SCORPIO");
  } else if ((month === "nov" && day >= 22) || (month === "dec" && day <= 21)) {
    console.log("Zodiac is SAGITTARIUS");
    output.innerText = "Zodiac is SAGITTARIUS";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/30/contactors-759373_960_720.jpg'  />`;
  } else if ((month === "dec" && day >= 22) || (month === "jan" && day <= 19)) {
    console.log("Zodiac is CAPRICORN");
    output.innerText = "Zodiac is CAPRICORN";
    zodiacIs.innerHTML = `<img class='zodiac-img' src='https://cdn.pixabay.com/photo/2015/05/09/07/31/capricorn-759379_960_720.jpg'  />`;
  } else {
    console.log("Sorry no ZODIAC found");
    output.innerText = "Sorry no ZODIAC found";
  }
};

// const month = "nov";
// const day = 31;

document.getElementById("checkZodiac").addEventListener("click", () => {
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;

  month = month.slice(0, 3).toLowerCase();
  console.log("month--", month, month.slice(0, 3), day);
  findMyZodiac({ month, day: day });
});
