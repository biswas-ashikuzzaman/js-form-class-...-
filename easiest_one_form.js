class FormHandler {
      submit() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let gender = document.querySelector('input[name="gender"]:checked');
        let city = document.getElementById("city").value;
        let address = document.getElementById("address").value;

        let genderValue = gender ? gender.value : "Not selected";

        alert(
          "Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "Gender: " + genderValue + "\n" +
          "City: " + city + "\n" +
          "Address: " + address
        );
      }
    }

    const formHandler = new FormHandler();