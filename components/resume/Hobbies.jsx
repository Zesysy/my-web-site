const Hobbies = () => {
  const itemsHobbie = [
    { text: "❤️ Javascript et React" },
    { text: "Lectures (science fiction, fantaisie, romans…)" },
    { text: "Cinéma, musée, théâtre, voyages, musique" },
    { text: "Cuisiner (surtout les gâteaux 😉)." },
  ];

  const itemsPictures = [
    { image: "/static/sablesNoel.webp", text: "Sablé de Noël" },
    { image: "/static/venise.webp", text: "Venise" },
    {
      image: "/static/librairiebookstore.webp",
      text: "Librairie Bookstore, Biarritz",
    },
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
            font-size: 0.9rem;
          }
          img:hover {
            border-radius: 5px;
            box-shadow: 1px 1px 15px 1px black;
          }

          @media screen and (min-width: 700px) and (max-width: 1300px) {
            h4 {
              font-size: 1.3rem;
            }

            img {
              display: none;
            }
          }

          @media (max-width: 699px) {
            .textHobbies {
              font-size: 0.7rem;
            }

            h4 {
              font-size: 1.1rem;
            }

            img {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Hobbies;
