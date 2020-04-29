import { Button, Form, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useState } from "react";
import InputCustom from "./utils/Input";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}; // allows to transform special characters of an url

const ContactForm = () => {
  const [contact, setContact] = useState({ email: "", text: "", name: "" }); //initiation of a report with two empty keys

  const items = [
    {
      label: "Votre nom :",
      type: "text",
      name: "name",
      value: contact.name,
    },
    {
      label: "Votre email :",
      type: "email",
      name: "email",
      value: contact.email,
      placeholder: "ex: prenom.nom@email.fr",
    },
    {
      label: "Votre message :",
      type: "textarea",
      name: "text",
      value: contact.text,
    },
  ];

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  }; //post request use recommend by netlify to send the recovered data

  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setContact({ ...contact, [name]: value });
  }; // modifies the state by destructuring the data

  return (
    <section>
      <Row className="justify-content-center m-0 mt-5 mb-5">
        <Col lg="4">
          <Card className="border-info card-block justify-content-center">
            <CardHeader className="text-center">
              Formulaire de contact
            </CardHeader>
            <CardBody>
              <Form onSubmit={(e) => handleSubmit(e)}>
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
                <Row className="justify-content-end">
                  <Button type="submit">Envoyer</Button>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ContactForm;
