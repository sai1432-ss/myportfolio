const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
      <p className="text-lg text-slate-400 mb-12">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:hello@example.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors border border-blue-500">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
