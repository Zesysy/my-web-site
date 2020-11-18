import { Row, Col } from "reactstrap";

import TypeWriter from "./TypeWriter";
import SocialNetworks from "../SocialNetworks";

const About = () => {
  return (
    <>
      <section className="flexAbout">
        <div>
          <Row className="m-0 justify-content-center">
            <Col lg="5" className="m-3">
              <TypeWriter />
              <p className="textHomePage">
                Début 2019 j'ai changé de direction. J'ai lâché mes aiguilles et
                raccroché ma blouse pour un nouveau défi !
                <br />
                Souhaitant retrouver un côté créatif et nourrir quotidiennement
                ma curiosité dans mon travail, j'ai choisi le métier de
                développeur. <br />
                Après une première formation, où j'ai commencé par être formée
                sur Javascript, et une nouvelle durant laquelle j'ai codé en
                Java JEE, cela fait maitenant plus d'un an que je code en toute
                autonomie. <br />
                Je suis à la recherche d'une opportunité en tant que
                développeuse web pour un poste en entreprise ou en tant que freelance.
              </p>
            </Col>
          </Row>
          <div className="socialIcons">
            <SocialNetworks size="3x" />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          @media (min-width: 1301px) {
            .flexAbout {
              display: flex;
              align-items: center;
            }

            .socialIcons {
              display: flex;
              justify-content: center;
            }
          }

          @media screen and (min-width: 700px) and (max-width: 1300px) {
            .textHomePage {
              margin: 0 5rem 0 5rem;
            }

            .socialIcons {
              display: flex;
              justify-content: center;
              margin-top: 2rem;
            }
          }

          @media (max-width: 699px) {
            p {
              font-size: 0.8rem;
            }
            .socialIcons {
              display: flex;
              justify-content: center;
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default About;
