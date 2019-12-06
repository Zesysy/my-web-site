import { useRouter } from "next/router";
import { Row } from "reactstrap";

const Footer = () => {
  const router = useRouter();

  if (router.pathname !== "/") {
    // display condition according to the current path
    return (
      <>
        <footer>
          <Row className="justify-content-center">
            <a
              className="fab fa-github-square fa-2x m-2"
              style={{ color: "gray" }}
              href="https://github.com/Zesysy"
              target="_blank"
            />
            <a
              className="fab fa-gitlab fa-2x m-2"
              style={{ color: "gray" }}
              href="https://gitlab.com/Zesysy"
              target="_blank"
            />
            <a
              className="fab fa-linkedin fa-2x m-2"
              style={{ color: "gray" }}
              href="https://www.linkedin.com/in/sylene-manusset/"
              target="_blank"
            />
          </Row>
        </footer>
        <style jsx>
          {`
            footer {
              background-color: var(--info);
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
            }
          `}
        </style>
      </>
    );
  } else {
    return (
      <>
        <footer>
          <p>Sylène Manusset | 2019</p>
        </footer>
        <style jsx>
          {`
            footer {
              text-align: center;
              background-color: var(--info);
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
            }
          `}
        </style>
      </>
    );
  }
};

export default Footer;
