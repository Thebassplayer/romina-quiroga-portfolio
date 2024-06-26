const ContactForm = () => {
  return (
    <form className="animate-in text-foreground flex w-1/2 flex-col justify-center gap-2 p-4 *:font-roboto">
      <label className="text-md text-white" htmlFor="email">
        Nombre
      </label>
      <input
        className="mb-6 rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        name="nombre"
        placeholder="Tu nombre"
        maxLength={50}
        required
      />
      <label className="text-md text-white" htmlFor="email">
        Email
      </label>
      <input
        className="mb-6 rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        name="email"
        maxLength={100}
        placeholder="your@mail.com"
        required
      />
      <label className="text-md text-white" htmlFor="email">
        Deja tu mensaje
      </label>
      <textarea
        className="mb-6 max-h-48 resize-y rounded-md border bg-white/50 px-4 py-2 text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        name="email"
        placeholder="Tu mensaje"
        required
      />
      <button className="mt-10 rounded-md border px-4 py-2 text-white hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
