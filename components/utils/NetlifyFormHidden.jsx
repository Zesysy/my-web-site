const NetlifyFormHidden = () => {
  return (
    // Hidden form which allows netlify by analyzing the html to manage the sent forms
    <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="text" defaultValue={""} />
    </form>
  );
};

export default NetlifyFormHidden;
