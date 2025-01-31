## pseudo class

a:link - a normal, unvisited link
a:visited - a link the user has visited
a:hover - a link when the user mouses over it
a:active - a link the moment it is clicked

## cursor properties

cursor: pointer;

1.  text-align
    text-align: start
    it is default property. Text is starting from the left
    text-align: center
    It aligns text to the center of parent
    text-align: end
    It aligns text to end of parent.
    text-align: justify
    In justify all the texts manage the gap and fill accordingly

2.  text-decoration:
    text-decoration-line: provide line type like
    text-decoration-line: underline
    text-decoration-line: overline
    text-decoration-line: overline underline
    text-decoration-line: line-through
    text-decoration-style: provide some line styling like
    text-decoration-style: solid
    text-decoration-style: wavy
    text-decoration-style: double
    text-decoration-style: dashed
    text-decoration-style: dotted
    text-decoration-color: provide colors to line
    text-decoration-color: red, #3122abc, rgb(45,78,210)
    text-decoration-thickness: provide thickness to line
    text-decoration-thickness: auto
    text-decoration-thickness: 2px
    text-decoration-thickness: 2%
    text-decoration shorthand: is combination of all text-decoration properties
    text-decoration-line
    text-decoration-style
    text-decoration-color
    text-decoration-thickness

                text-decoration: line style color thickness
                text-decoration: overline dotted blue 2px;

    3. text-transform
       Change entire text to lowercase, capitalize, uppercase
       text-transform: uppercase;
       text-transform: lowercase;
       text-transform: capitalize;
    4. text-indent
       Provide some space from left in para
       text-indent work only when applied to parent
       text-index: 10px
       text-index: 10%
    5. writing-mode
       We can rotate texts
       writing-mode: vertical-lr :-- vertical text at left side
       writing-mode: vertical-rl :-- vertical text at right side
    6. Cursor
       /_ cursor: default; _/
       /_ cursor: alias; _/ /_ not much use_/
       /_ cursor: all-scroll; _/ /_ used when there is horizontal and vertical scroll available_/
       /_ cursor: auto; _/ /_ behaves like default-cursor_/
       /_ cursor: cell; _/ /_ used in cells_/
       cursor: col-resize; /_ used in cell col-resize_/
       cursor: row-resize; /_ used in cell row-resize_/
       cursor: context-menu; /_ behaves like default-cursor_/
       cursor: copy; /_ indication to copy_/
       cursor: crosshair; /_ used in entity relationship diagram_/
       cursor: e-resize; /_ horizontal resize (e- east)_/
       cursor: n-resize; /_ vertical resize (n-north_/
       cursor: s-resize; /_ vertical resize (s-south_/
       cursor: w-resize; /_ horizontal resize (w-west)_/
       cursor: ns-resize; /_ vertical resize (ns-north south)_/
       cursor: ew-resize; /_ horizontal resize (ew-east west)_/
       cursor: ne-resize; /_ horizontal resize (ne-north east)_/
       cursor: nw-resize; /_ incline resize (nw-north west)_/
       cursor: se-resize; /_ incline resize (se-south west)_/
       cursor: sw-resize; /_ incline resize (sw-south west)_/
       cursor: grab; /_ Grabbing icon- start_/
       cursor: grabbing; /_ Grabbing icon- end_/
       cursor: help; /_ used where help or support thing is indicating_/
       cursor: move; /_ similar to all-scroll_/
       cursor: no-drop; /_ used when you are dealing with drab-n-drop feature_/
       cursor: none; /_ disabled the cursor_/
       cursor: not-allowed; /_ cursor prohibited_/
       cursor: pointer; /_ to show any clickable_/
       cursor: progress; /_ to show progress or loading_/
       cursor: text; /_ to indicate texts_/
       cursor: wait; /_ change cursor to loader to show loading process_/
       cursor: zoom-in; /_ to zoom-in +_/
       cursor: zoom-out; /_ to zoom-out - _/
       cursor: url("../00-icons/Handwriting.cur"), auto; / \* to add custom cursor.
       You must add image with .cur extension
       http://www.rw-designer.com/cursor-library
       https://www.cursor.cc/?

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
