overflow
text-overflow

::-webkit-scrollbar {
width: 10px;
height: 10px;
}
::-webkit-scrollbar-button {
background: blue;
border-radius: 5px;
}
::-webkit-scrollbar-track-piece {
background: red;
}
::-webkit-scrollbar-thumb {
background: black;
border-radius: 5px;
}

    transition-property: background-color width border border-radius;
      transition-duration: 2s;
      /* transition-delay: 1s; */
      /* transition-timing-function: linear; */
      /* transition-timing-function: ease-in; */
      transition-timing-function: ease-out;



    .c-america {
        provide slight animation
      transition: transform 2s;
      transition: width 2s;
      transition: background 2s;


    }
    .c-america:hover {
      transform: rotate(45deg);
      transform: rotate(360deg);
      transform: translateX(-50px);
      transform: translateY(150px);
      transform: translate(-50px, 50px);
      transform: skewX(-45deg);
      transform: skewY(-45deg);
      transform: skew(15deg, 45deg);
      transform: scaleX(1.2);

    }
