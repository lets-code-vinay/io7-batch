// 20250501 js-16 js star loop

/**
 *  # # # # #
 *  # # # # #
 *  # # # # #
 *  # # # # #
 *  # # # # #
 */
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    str = `${str} #`;
  }
  document.write(str);
  document.write("<br />");
}

document.write("<br />");
document.write("<br />");

// print triangle

for (let i = 1; i <= 5; i++) {
  let h = "";

  for (let j = 1; j <= i; j++) {
    h = h + "# ";
  }
  document.write(h);
  document.write("</br>");
}
document.write("<br />");
document.write("<br />");

// Exercise ---
// right triangle star pattern

for (let i = 0; i <= 5; i++) {
  let d = "";

  for (let j = 1; j <= 5 - i; j++) {
    d += "&nbsp; &nbsp;";
  }
  for (let k = 1; k <= i; k++) {
    d += "#&nbsp;";
  }

  document.write(d);
  document.write("</br>");
}

// Exercise ---
// right triangle star pattern
//      *
//    * *
//  * * *
//* * * *
document.write("right triangle star pattern");
document.write("<br>");

// Simple for loop to print right triangle star pattern
// const rightTriangle = () => {
//   for (let i = 1; i <= 4; i++) {
//     let pattern = "";
//     for (let j = 1; j <= 4 - i; j++) {
//       pattern += "  ";
//     }
//     for (let k = 1; k <= i; k++) {
//       pattern += "* ";
//     }
//     document.write(pattern.trim() + "<br>");
//   }
// };
// rightTriangle();

//-------------

// reverse left triangle
// * * * * *
// * * * *
// * * *
// * *
// *

const reverseLeftTriangle = (num) => {
  for (let a = num; a >= 1; a--) {
    for (let b = 1; b <= a; b++) {
      document.write("* ");
    }
    document.write("<br>");
  }
};
// let number = Number(prompt("Enter number of rows to print the star pattern"));
let number = 5;
reverseLeftTriangle(number);

document.write("<br>");
document.write("<br>");
