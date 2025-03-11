<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .parent {
      width: 100%;
      border: 1px solid black;
      display: grid;
      padding: 5%;
      /*first method to provide grid size*/
      /* grid-template-columns: 100px 100px 100px 100px 100px 100px;
      grid-template-rows: 100px 100px 100px; */

      /*second method to provide grid size*/
      /* grid-template-columns: auto auto auto auto auto auto;
      grid-template-rows: auto auto auto; */

      /*third method to provide grid size*/
      /*fr ==  fraction unit*/
      /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr; */

      /*fourth method to provide grid size*/
      /* grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(4, 1fr); */

      /*when you have different sizes of columns/rows*/
      /* grid-template-columns: 1fr 2fr 0.5fr 1fr 1fr 1fr; */
      grid-template-columns: 60px 1fr auto 0.5fr;
      grid-template-rows: 1fr repeat(3, 2fr) auto 1fr;
      column-gap: 5px;
      row-gap: 5px;

      /* justify-items: center;
      place-items: center; */
    }
    .child {
      border: 1px solid black;
    }

    .child:nth-child(even) {
      background-color: aqua;
    }
    .child:nth-child(odd) {
      background-color: beige;
    }

    .child-1 {
      /* grid-column-start: 1;
      grid-column-end: -1; */
      grid-column: 1/-1;
      grid-row-start: 1;
      grid-row-end: 2;
      background-color: red;
    }

    .child-2 {
      /* justify-self: end;
      place-self: end; */
      grid-column: 1/3;
      grid-row: 2/4;
    }

    .child-3 {
      /* justify-self: end;
      place-self: end; */
      grid-column: 3/5;
      grid-row: 2/3;
    }
    .child-4 {
      /* justify-self: end;
      place-self: end; */
      grid-column: 3/5;
      grid-row: 3/4;
    }

    .child-5 {
      /* justify-self: end;
      place-self: end; */
      grid-column: 1/3;
      grid-row: 4/5;
    }

    .child-6 {
      /* justify-self: end;
      place-self: end; */
      grid-column: 3/5;
      grid-row: 4/5;
    }

    .child-7 {
      /* justify-self: end;
      place-self: end; */
      grid-column: 1 / 5;
      grid-row: 4/5;
    }
    .child-8 {
      grid-column: 1/3;
      grid-row: 5/7;
      background-color: red;
    }

    .child-9 {
      grid-column: 3/5;
      grid-row: 5/6;
    }
    .child-11 {
      grid-column: 3/5;
      grid-row: 6/7;
    }
    .child-12 {
      grid-column: 1/5;
      grid-row: 7/8;
    }

  </style>
  <body>
    <div class="parent">
      <div class="child child-1">child-1</div>
      <div class="child child-2">child-2</div>
      <div class="child child-3">child-3</div>
      <div class="child child-4">child-4</div>
      <div class="child child-5">child-5</div>
      <div class="child child-6">child-6</div>
      <div class="child child-7">child-7</div>
      <div class="child child-8">child-8</div>
      <div class="child child-9">child-9</div>
      <div class="child child-11">child-11</div>
      <div class="child child-12">child-12</div>
    </div>
  </body>
</html>
