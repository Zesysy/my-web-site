import { useState } from "react";
import PropTypes from "prop-types";
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
          <CardHeader className="text-center">{title}</CardHeader>
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
      <style>
        {`
          .zoomHover:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
};

CardCustom.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  link: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
};

export default CardCustom;
