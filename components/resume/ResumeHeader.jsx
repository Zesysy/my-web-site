import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelopeOpenText,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";

const ResumeHeader = () => {
  const items = [
    {
      logo: faMobileAlt,
      label: "+33 6 08 40 96 12",
      href: "tel:+33608409612",
    },
    {
      logo: faEnvelopeOpenText,
      label: "sylene.manusset@gmail.com",
    },
    {
      logo: faHome,
      label: "64210, Arbonne",
    },
  ];

  return (
    <>
      <section>
        <Row className="m-0 mt-3">
          <Col lg="10">
            <h3>Sylène Manusset</h3>
            <h4 className="text-center">
              {"/*"} Développeur Web Junior, en recherche d’opportunités {"*/"}
            </h4>
          </Col>
          <Col lg="2">
            <ul id="ulHover">
              {items.map((item, key) => (
                <li key={key}>
                  {item.href ? (
                    <a href={item.href} target="_blank">
                      <FontAwesomeIcon
                        icon={item.logo}
                        color="gray"
                        fixedWidth={true}
                      />{" "}
                      {item.label}
                    </a>
                  ) : (
                    <i>
                      <FontAwesomeIcon
                        icon={item.logo}
                        color="gray"
                        fixedWidth={true}
                      />{" "}
                      {item.label}
                    </i>
                  )}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </section>
      <style jsx>
        {`
          #ulHover {
            list-style: none;
            border-radius: 5px;
          }
          ul#ulHover:hover {
            border-radius: 5px;
            box-shadow: 1px 1px 15px 1px black;
          }
        `}
      </style>
    </>
  );
};

export default ResumeHeader;
