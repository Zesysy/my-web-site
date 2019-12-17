import { Button, Form } from "reactstrap";
import { useState } from "react";
import InputCustom from "./utils/Input";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}; // allows to transform special characters of an url

const ContactForm = () => {
  const [contact, setContact] = useState({ email: "", text: "" }); //initiation of a report with two empty keys

  const items = [
    {
      label: "Renseignez votre email",
      type: "email",
      name: "email",
      value: contact.email,
      placeholder: "prenom.nom@email.fr"
    },
    {
      label: "Votre message",
      type: "textarea",
      name: "text",
      value: contact.text
    }
  ];

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    e.preventDefault();
  }; //post request use recommend by netlify to send the recovered data

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setContact({ ...contact, [name]: value });
  }; // modifies the state by destructuring the data

  return (
    <>
      <section className="flexFormContact ">
        <Form onSubmit={e => handleSubmit(e)} style={{ width: "40rem" }}>
          {items.map((item, key) => (
            <InputCustom
              label={item.label}
              type={item.type}
              name={item.name}
              value={item.value}
              handleChange={handleChange}
              placeholder={item.placeholder}
              key={key}
            />
          ))}

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
