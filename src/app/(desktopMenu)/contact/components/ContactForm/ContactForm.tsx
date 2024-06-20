const ContactForm = () => {
  return (
    <form className="animate-in text-foreground flex w-1/2 flex-col justify-center gap-2 p-4 *:font-roboto">
      <label className="text-md text-white" htmlFor="email">
        Nombre
      </label>
      <input
        className=" mb-6 rounded-md border bg-white/50 px-4 py-2 text-white"
        name="nombre"
        placeholder="Tu nombre"
        required
      />
      <label className="text-md text-white" htmlFor="email">
        Email
      </label>
      <input
        className=" mb-6 rounded-md border bg-white/50 px-4 py-2 text-white"
        name="email"
        placeholder="your@mail.com"
        required
      />
      <label className="text-md text-white" htmlFor="email">
        Deja tu mensaje
      </label>
      <input
        className=" mb-6 rounded-md border bg-white/50 px-4 py-2 text-white"
        name="email"
        type="textarea"
        placeholder="Tu mensaje"
        required
      />
      <button className="mt-10 rounded-md border px-4 py-2 text-white">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
