const Hobbies = () => {
  const itemsHobbie = [
    { text: "Lectures (science fiction, fantaisie, romans…)" },
    { text: "Cinéma, musée, théâtre, voyages, musique" },
    { text: "Cuisiner (surtout les gâteaux 😉)." },
  ];


  return (
    <>
      <article className="mb-4 pl-4">
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
