const Hobbies = () => {
  const itemsHobbie = [
    {
      text:
        " Voyage, : seule (Venise, Édimbourg) ou à plusieurs (Sicile, Canaries, Espagne, Londres)",
    },
    {
      text:
        "Lecture : fantasy (JRR. Tolien, R. Hobb), ou roman (C.R. Zafón, H. Lee)",
    },
    { text: "Musée : L'Orangerie, Le Louvre (J. Monnet, E. Delacroix)" },
    { text: "Musique, Théatre, Jeux vidéo, Cinéma" },
    { text: "Cuisiner (surtout les gâteaux 😉)." },
  ];

  return (
    <>
      <article className="mb-4 pl-md-4">
        <h4>Centres d'intérêts</h4>
        <ul className="textHobbies">
          {itemsHobbie.map((item, key) => (
            <li key={key}>{item.text}</li>
          ))}
        </ul>
      </article>
      <style jsx>
        {`
          .textHobbies {
            font-size: 0.9rem;
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
