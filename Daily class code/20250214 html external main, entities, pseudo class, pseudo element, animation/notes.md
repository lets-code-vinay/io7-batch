## reference for website to develop as project

# https://store.battlecamp.com/

## mail to external

## mail to external

<a
      href="mailto:vinay.shermauryan@gmail.com?subject=This is testing mail&body=hello how are you?"
      class="mail-link"
      target="_blank"
    >
<button class="mail-button">Mail Me</button>
</a>

## Pseudo class and pseudo element

    1. :hover
    2. :active
    3. :link
    4. :visited
    5. :first-child
    6. :last-child
    7. :nth-child()
            :nth-child(1)
            :nth-child(3)
            :nth-child(even)
            :nth-child(odd)

    Pseudo Elements
        1. :: (double colons are used)
        a. :: first-letter
        b. ::first-line
        c. ::selection
        d. ::marker
        e. ::before
        d. ::after

        Adding external website to html
        1. iframe
            src
            width
            height
            fullscreen

        2. audio
            <audio
                controls
                autoplay
                loop
                muted
                preload
            <source
                src
                type

        3. Video
            <video
                controls
                width
                height : don't use
                autoplay
                loop
                muted

            <source
                src
                poster
                type

  <div class="nobi">
      <h1 class="nobita">Nobita <span class="nobi-child">Nobi</span></h1>
    </div>

       .nobi {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
      .nobita {
      color: blue;
      width: fit-content;
      font-size: 50px;
      position: relative;
    }

     .nobi-child {
      color: red;
    }


     .nobita::before {
      content: "";
      width: 100%;
      height: 10px;
      color: green;
      position: absolute;
      left: 0;
      background-image: linear-gradient(to left, red 50%, black 50%);
      top: -10%;
    }
    .nobita::after {
      content: "";
      background-image: linear-gradient(to right, red 50%, black 50%);
      width: 100%;
      height: 10px;
      color: green;
      position: absolute;
      left: 0;
      bottom: -10%;
    }

## animation

animation-name: progress-bar;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-delay: 1s;
animation-direction: alternate;
/_ animation-direction: alternate-reverse; _/

      animation-timing-function: ease-in;
      /* Slow starts */
      /* animation-timing-function: ease-out; */
      /* Fast starts */

@keyframes progress-bar {
from {
width: 5%;
background-color: yellow;
}
to {
width: 100%;
background-color: blue;
}
}
