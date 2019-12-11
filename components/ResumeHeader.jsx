import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelopeOpenText,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

const ResumeHeader = () => {
  const items = [
    {
      logo: faMobileAlt,
      label: "+33 6 08 40 96 12",
      href: "tel:+33608409612"
    },
    {
      logo: faEnvelopeOpenText,
      label: "sylene.manusset@gmail.com"
    },
    {
      logo: faHome,
      label: "64210, Arbonne"
    }
  ];

  return (
    <>
      <h3>Sylène Manusset</h3>
      <ul style={{ listStyle: "none" }}>
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
      <h3>
        {"/*"} Développeur Web Junior, en recherche d’opportunités {"*/"}
      </h3>
    </>
  );
};

export default ResumeHeader;
