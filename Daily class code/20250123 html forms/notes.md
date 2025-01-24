form

<form>
<fieldset>
<legend>Personal Data</legend>

        <label for="first-name">First Name:</label>

        <input
            type="text,
            password,
            number,
            email,
            date,
            time,
            datetime-local,
            website,
            tel
            hidden,
            submit"
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
