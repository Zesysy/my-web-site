import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [contact, setContact] = useState({ email: "", text: "" });

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    console.log(contact.email);
    console.log(contact.text);

    e.preventDefault();
  };

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setContact({ ...contact, [name]: value });
  };

  return (
    <>
      <section className="flexFormContact ">
        <Form onSubmit={e => handleSubmit(e)} style={{ width: "40rem" }}>
          <FormGroup>
            <Label for="exampleEmail">Renseignez votre email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={contact.email}
              onChange={handleChange}
              placeholder="prenom.nom@email.fr"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              value={contact.text}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <Button type="submit">Envoyer</Button>
        </Form>
      </section>
      <style jsx>
        {`
          .flexFormContact {
            display: flex;
            height: 80vh;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default ContactForm;
