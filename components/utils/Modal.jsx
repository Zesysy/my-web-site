import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const MocalCustom = ({ link, title, modal, toggle, preview, description }) => {
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <Modal isOpen={modal} size="md">
      <ModalHeader toggle={toggle} close={closeBtn}>
        {title}
      </ModalHeader>
      <div className=" ml-auto mr-auto d-block mt-2">
        <img src={preview} alt="aperçu du site" />
      </div>
      <ModalBody className="text-justify">{description}</ModalBody>
      <ModalFooter>
        {link ? (
          <a
            tag="button"
            className="btn btn-secondary "
            href={link}
            target="_blank"
          >
            Vers le site
          </a>
        ) : null}

        <Button color="primary" onClick={toggle}>
          Fermer
        </Button>
      </ModalFooter>
    </Modal>
  );
};

MocalCustom.propTypes = {
  modal: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default MocalCustom;
