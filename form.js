class RegistrationForm {
      constructor(formName) {
        this.form = document.forms[formName];
      }

      getName() {
        return this.form["name"].value;
      }

      getId() {
        return this.form["id"].value;
      }

      getEmail() {
        return this.form["email"].value;
      }

      getSubjects() {
        const subjects = document.querySelectorAll('input[name="subject"]:checked');
        let selected = [];
        subjects.forEach((checkbox) => {
          selected.push(checkbox.value);
        });
        return selected.join(", ") || "None";
      }

      getGender() {
        const selected = document.querySelector('input[name="gender"]:checked');
        return selected ? selected.value : "Not specified";
      }

      getCity() {
        return this.form["city"].value;
      }

      getAddress() {
        return this.form["addr"].value;
      }

      submitForm() {
        const name = this.getName();
        const id = this.getId();
        const email = this.getEmail();
        const sub = this.getSubjects();
        const gender = this.getGender();
        const city = this.getCity();
        const addr = this.getAddress();

        let doc = window.open("", "", "width=300,height=500");
        doc.document.write(`
          <h3>Registration Details</h3>
          Name    :  ${name}<br>
          ID      :  ${id}<br>
          Email   :  ${email}<br>
          Subject :  ${sub}<br>
          Gender  :  ${gender}<br>
          City    :  ${city}<br>
          Address :  ${addr}<br><br>
          <button onclick="window.close()">Close Window</button>
        `);
      }
    }

    const register = new RegistrationForm("form");