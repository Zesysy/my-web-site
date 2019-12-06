import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  if (router.pathname !== "/") {
    return (
      <>
        <footer>
          <p>Sylène Manusset | 2019</p>
        </footer>
        <style jsx>
          {`
            footer {
              text-align: center;
              vertical-align: middle;
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
  } else return null;
};

export default Footer;
