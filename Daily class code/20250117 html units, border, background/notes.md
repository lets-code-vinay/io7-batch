## revision on display inline, block,. inline-block

## external css

## global margin/padding

\*{ margin: 0;
padding: 0;
box-size: border-box

## border----

            border: 1px solid red;

            1. border-style
                solid
                dashed
                dotted
                double
                inset
                outset
                ridge
                groove
                hidden
                none
                shorthand (solid, ridge, dotted, double)

            2. border-width : To increase or decrease thickness of border
                border-width: 1px, medium, thick

            3. shorthand()
                border-width
                border-style
                border-color
                 We can use all above properties in a single property like border: 2px double blue; it calls shorthand

            4. border-color:
                border-color: red;

            5. border side styling
                border-top-style: double
                border-left-style: dotted
                border-dashed-style: dashed
                border-bottom-style: double
                    :: shorthand ::
                border-top: 1px double red;
                border-left: 1px dotted green;
                border-right: 1px double red;

            6. border-radius
                border-radius: 10px; or 10%  (suitable is px)

                    :: how to make round element ::
                a. element must be equal in height and width
                b. border-radius: (half of width/height) or 50%  (suitable is %age only when height == width)
                c. border-radius: 50%;

                    :: how to make capsule in element ::
                a. Height and width size doesn't matter
                b. give half value of height/width in percentage
                c. border-radius: 150px;  (suitable only in px)-

                    :: how to make oval, egg, ellipse in element ::
                a. Height and width size doesn't matter
                b. give 50% border-radius
                c. border-radius: 50%;  (suitable only in percentage)-

            7. border-image
                use this image for reference
                        https://www.w3schools.com/cssref/border.png
                border: 10px solid transparent
                border-image: url(local image path/ online link)
                border-image: url(https://www.w3schools.com/cssref/border.png)
                border-image: url(https://www.w3schools.com/cssref/border.png) 30
                border-image: url(https://www.w3schools.com/cssref/border.png) 30 round/stretch

## background-image

        1. add parent inside that use img
        2. Adding images
            local image
            online image
        3. background-properties
            1. background-image : url(local path/ online link);
            2. filter
                opacity
                blur
                brightness
                grayscale
                sepia
                saturate
                drop-shadow
                contrast
                invert
                shorthand- using multiple filters
        4. background-position
            top
            center
            bottom
            left
            right
            10% 50%
        5. background-position-x
            left
            right
            center
            10%
        6. background-position-y
            tpo
            bottom
            center
            10%
        7. background-repeat
            repeat
            no-repeat
            round
            scale
            repeat-x
            repeat-y
        8. background-size
            cover
            contain
            auto
            size -- 100%,
                    100% 50%
                    100px 100px

## Types of unit in Web development

1. px == 96px == 1" == 1 inch
2. % == percentage(Self calculation)
3. vw == viewport width
4. vh == viewport height
5. em == element
6. rem == root Element of html
