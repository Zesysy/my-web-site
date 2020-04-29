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
          <Col lg="9" md="7">
            <h3>Sylène Manusset</h3>
            <h4 className="text-center">
              {"/*"} Développeur Web Junior, en recherche d’opportunités {"*/"}
            </h4>
          </Col>
          <Col lg="3" md="5">
            <ul id="ulStyle">
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
          h4 {
            font-family: Courier New, Courier, monospace;
          }

          #ulStyle {
            list-style: none;
            border-radius: 5px;
          }

          ul#ulStyle:hover {
            border-radius: 5px;
            box-shadow: 1px 1px 15px 1px black;
          }

          @media screen and (min-width: 700px) and (max-width: 1300px) {
            h3 {
              font-size: 1.4rem;
            }
            h4 {
              font-size: 1.3rem;
            }
          }

          @media (max-width: 699px) {
            h3 {
              font-size: 1.2rem;
            }
            h4 {
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ResumeHeader;
