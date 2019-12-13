import { useState } from "react";
import { Card, CardText, CardHeader, CardBody, CardImg } from "reactstrap";

import Modal from "./Modal";

const CardCustom = ({ title, description, preview, link, subtitle }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="zoomHover">
        <Card
          className="border-info ml-auto mr-auto d-block"
          style={{ maxWidth: "20rem" }}
          onClick={toggle}
        >
          <CardHeader>{title}</CardHeader>
          <CardImg top width="100%" src={preview} alt="Aperçu du site" />
          <CardBody>
            <CardText>{subtitle}</CardText>
          </CardBody>
        </Card>
      </div>
      <Modal
        modal={modal}
        toggle={toggle}
        title={title}
        preview={preview}
        link={link ? link : null}
        description={description}
      />
      <style jsx>
        {`
          .zoomHover:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
};

export default CardCustom;