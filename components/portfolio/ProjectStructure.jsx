const ProjectStructure = ({ title, subtitle, link, description }) => {
  return (
    <div className="col-lg-3 col-sm-6 mb-3 mt-3 mr-1 border rounded-bottom borderCustom">
      <a href={link} target="_blank">
        {title}
      </a>
      <p className="d-none d-md-block">
        Technologies : <br />
        {subtitle}
      </p>
      {description}
    </div>
  );
};

export default ProjectStructure;
