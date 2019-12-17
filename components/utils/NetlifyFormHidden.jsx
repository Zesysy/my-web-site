const NetlifyFormHidden = () => {
  return (
    <form
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="text" name="text" />
      <input type="email" name="email" />
      <textarea name="message" defaultValue={""} />
    </form>
  );
};

export default NetlifyFormHidden;
