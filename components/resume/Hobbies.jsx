const Hobbies = () => {
  const itemsHobbie = [
    { text: "❤️ Javascript et React" },
    { text: "Lectures (science fiction, fantaisie, romans…)" },
    { text: "Cinéma, musée, théâtre, voyages, musique" },
    { text: "Cuisiner (surtout les gâteaux 😉)." }
  ];

  const itemsPictures = [
    { image: "/static/images/sablesNoel.webp", text: "Sablé de Noël" },
    { image: "/static/images/venise.webp", text: "Venise" },
    {
      image: "/static/images/librairiebookstore.webp",
      text: "Librairie Bookstore, Biarritz"
    }
  ];
  return (
    <>
      <article className="mb-4">
        <h4>Centres d'intérêts</h4>
        <ul className="textHobbies">
          {itemsHobbie.map((item, key) => (
            <li key={key}>{item.text}</li>
          ))}
        </ul>
        {itemsPictures.map((item, key) => (
          <img
            src={item.image}
            alt={item.text}
            key={key}
            className="rounded m-1"
            data-toggle="tooltip"
            data-placement="right"
            title={item.text}
          />
        ))}
      </article>
      <style jsx>
        {`
          .textHobbies {
            font-size: 0.9em;
          }
          img:hover {
            border-radius: 5px;
            box-shadow: 1px 1px 15px 1px black;
          }
        `}
      </style>
    </>
  );
};

export default Hobbies;
