## transition: 1s;

## hidden properties

display: none;
visibility: hidden;
opacity:0

/_ visibility: hidden; this take space on the dom _/
overflow: hidden;

1.  line-height
    to provide space between to lines
    line-height: 10px;
    line-height: 1;
    line-height: 0;
    line-height: 10;
    line-height: 50%;

    2. word-spacing
       To provide space in between 2 words
       % and counting won't work
       word-spacing: 10px;
       word-spacing: 0px;
       word-spacing: -10px;

    3. Quotation
       a. blockquote + cite
       To use any external data
       cite: refers the source  
        b. q
       To use any external data

    4. abbr + title
       abbr means Abbreviation or acronym
       It is used to provide the full form of any acronym or short form
       like ATM, WHO, SSP, PM,
       I withdrawn some cash from
       <abbr title="Automatic Taler Machine">ATM</abbr> today morning

    5. Address
    address tag used to provide address to make website more SEO friendly
    <address>#:10, St.No. 5, Keshav Nagar, Pune<</address>

    6. cite + title
       To mention any art work, creativity

    7. letter-spacing  
        provide gap in between letters 8. bdo + direction
       Use to give text direction like LEFT-TO-RIGHT or RIGHT-TO-LEFT
       By default ltr
       direction: rtl (right-to-left)
       All word got reversed 9. kbd
       To mention any keyboard button in website use <kbd> tag

    8. code
       If you are adding any code then use inside <code> tags

    9. meter
       Is used to show some specific value in a progress bar

    10. picture : responsiveness
    picture + source + media
    <picture>
    <source media="(min-width: 350px)" srcset="../image-path" />
    <img src="" alt="" />

    11. Favicon
    The icon which are used on the tab along with Title; known as favicon
    <link  rel="icon" href="path.png"/>

    12. vertical-align
        To adjust any image according to text use vertical align
        it must be used with img tag only
        vertical-align: baseline;
        vertical-align: super;
        vertical-align: sub;
        vertical-align: bottom;
        vertical-align: top;
        vertical-align: middle;

    .vertical img {
    vertical-align: sub;
    }

    .dire {
    direction: rtl;
    }

    <p class="vertical">
        The
        <img src="../../rabbit-icon.png" alt="rabbit-icon" width="20" />Rabbit
        is one of my fav animal
      </p>

      <p class="dire">
        The
        <img src="../../rabbit-icon.png" alt="rabbit-icon" width="20" />Rabbit
        is one of my fav animal
      </p>

## positions

## z-index
