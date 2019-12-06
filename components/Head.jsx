import Head from "next/head";

const WithHead = () => {
  return (
    <>
      <Head>
        <title>Ma petite création</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/minty/bootstrap.min.css"
        />
      </Head>
      <style jsx>
        {`
          body {
            min-height: 100%;
            margin: 0;
            padding: 0;
            position: relative;
          }
        `}
      </style>
    </>
  );
};
export default WithHead;
