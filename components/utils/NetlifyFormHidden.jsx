const NetlifyFormHidden = () => {
  return (
    <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="email" name="email" />
      <textarea name="text" defaultValue={""} />
    </form>
  );
};

export default NetlifyFormHidden;
