const SocialNetworks = ({ size }) => {
  const items = [
    { link: "https://github.com/Zesysy", logo: "github-square" },
    { link: "https://gitlab.com/Zesysy", logo: "gitlab" },
    { link: "https://www.linkedin.com/in/sylene-manusset/", logo: "linkedin" }
  ];
  return (
    <>
      {items.map((item, key) => (
        <a
          key={key}
          className={`fab fa-${item.logo} fa-${size}x m-2 linkSocialNetwork`}
          style={{ color: "gray" }}
          href={item.link}
          target="_blank"
        />
      ))}
      {size === "3" ? (
        <style jsx>
          {`
            .linkSocialNetwork:hover {
              color: var(--info) !important;
              text-decoration: none;
            }
          `}
        </style>
      ) : (
        <style jsx>
          {`
            .linkSocialNetwork:hover {
              text-decoration: none;
            }
          `}
        </style>
      )}
    </>
  );
};

export default SocialNetworks;
