const NetlifyFormHidden = () => {
  return (
    <form // a hidden form which allows netlify by analyzing the html to manage the sent forms
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
