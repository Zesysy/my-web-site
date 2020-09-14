import Head from "next/head";

const WithHead = () => {
  return (
    <>
      <Head>
        <title>
          Ma petite création - Portfolio d'un développeur javascript et java -
          Sylène Manusset
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/solar/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" href="/static/travel.png" />
      </Head>
    </>
  );
};
export default WithHead;
