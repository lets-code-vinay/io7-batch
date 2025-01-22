## https://guidely.com/self-help-and-individual-counseling-guidely-community/

## units

# Types of unit in Web development

1. px == 96px == 1" == 1 inch
2. % == percentage(Self calculation)
3. vw == viewport width
4. vh == viewport height
5. em == element
6. rem == root Element

html {
font-size: 62.5%; /_ == 10px = 62.5 _ 16 == 1000\*/
}

<!--Google fonts : start-->
<!--Font awesome CDN: start-->
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css"
      integrity="sha512-8RxmFOVaKQe/xtg6lbscU9DU0IRhURWEuiI0tXevv+lXbAHfkpamD4VKFQRto9WgfOJDwOZ74c/s9Yesv3VvIQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

     3. Font-properties
            font-size : to increase or decrease the size of font
                small
                smaller
                x-small
                xx-small
                large
                larger
                x-large
                xx-large
                px : 10px , 20px 200px
            font-weight: To make fonts bold
                bold
                bolder
                100-900
                    <600

            font-family: to change fon style
                font-family: cursive;
                font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, serif;
                    multiple fonts can be used if in anycase font-A doesn't work
                    Then it will pick font-B
                google fonts
                    1. go to google fonts website
                        https://fonts.google.com/?sort=alpha
                    2. select any font
                    3. Get font
                    4. Click Get Embed Code or Go to Cart Icon
                    5. Copy Code and paste to head tag
                    6. use font-family in your element

        -->

<!--
        1. line-height
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
            provide gap in between letters
        8. bdo + direction
            Use to give text direction like LEFT-TO-RIGHT or RIGHT-TO-LEFT
            By default ltr
            direction: rtl (right-to-left)
                All word got reversed
        9. kbd
            To mention any keyboard button in website use <kbd> tag
        10. code
            If you are adding any code then use inside <code> tags
        11. meter
              Is used to show some specific value in a progress bar
        12. picture : responsiveness
              picture + source + media
              <picture>
                <source media="(min-width: 350px)" srcset="../image-path" />
                <img src="" alt="" />
        13. Favicon
                The icon which are used on the tab along with Title; known as favicon
                <link  rel="icon" href="path.png"/>
        14. vertical-align
                To adjust any image according to text use vertical align
                it must be used with img tag only
                vertical-align: baseline;
                vertical-align: super;
                vertical-align: sub;
                vertical-align: bottom;
                vertical-align: top;
                vertical-align: middle;
    -->

## navbar

# page ref from prev class
