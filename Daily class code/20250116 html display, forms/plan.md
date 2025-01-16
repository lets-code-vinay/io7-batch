1.  <!-- Describe the character standard -->
    <meta charset="UTF-8" />

    <!-- Describe viewport to adjust our web-application -->
    <meta name="viewport" content="width=device-width; initial-scale=1" />

    <!-- Describe the Author or developer of this web-application -->
    <meta name="author" description="Vinay Maurya" />

    <!-- Describe the name of web application -->
    <meta name="application-name" content="let Learn together" />

    <!--It show short description of website in google search -->
    <meta
      name="description"
      content="This is used to develop tutorials for Future enthusiastic coders"
    />

    <!--SEO friendly-->
    <meta name="keywords" content="html, css, javascript, react" />

    <link rel="stylesheet" href="./style.css" />

    <!-- Add title -->
    <title>Forms</title>

    <!-- Add favicon -->
     <link rel="icon" type="image/x-icon" href="/images/favicon.ico">

2.  margin
    margin-top
    margin-right
    margin-bottom
    margin-left
    margin x,y
    margin

3.  padding
4.  display properties
    # block
    # inline
    # inline-block
5.  form
    <form>
        <fieldset>
          <legend>Personal Data</legend>

        <label for="first-name">First Name:</label>

        <input
          type="text, password, number,email, date, time,datetime-local, website,
                      hidden, submit"
          placeholder="Enter first name"
          id="first-name"
          minlength="3"
          maxlength="10"
          required
            disabled

        />

        type='date'
        value="2024-01-30"
          min="2024-01-15"
          max="2024-02-15"

          type="time" id="birth-time" value="20:15"

           <label class="female-selection" for="female">Female</label>
        <input
          type="radio"
          id="female"
          value="Female"
          name="gender_selection"
        />

        <input id="cricket" type="checkbox" checked disabled />
        <label for="cricket">Cricket</label>
        <br />

          <label for="color">Select Fav color:</label>
        <input id="color" type="color" value="#0000ff" disabled />

           <label for="pic">Upload Profile Pic:</label>
        <input type="file" id="pic" disabled accept />
        <br />

          <label for="image">image:</label>
        <input
          type="image"
          id="image"
          src="https://rukminim2.flixcart.com/image/416/416/xif0q/dslr-camera/e/h/v/dmc-g85kgw-k-16-dmc-g85kgw-k-panasonic-original-imagzknqpwukucj8.jpeg?q=70&crop=false"
          width="50"
        />

        <label for="range">Price Range:</label>
        <input type="range" id="range" value="70" min="20" max="80" disabled />
        <br />

        <input type="submit" value="Sign up" />
        <input type="button" value="Sign up" />

        <button>
