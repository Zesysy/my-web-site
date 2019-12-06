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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
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
