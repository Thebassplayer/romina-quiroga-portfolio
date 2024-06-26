import { sendEmail } from "@/app/utils/sendGrid";
import { contactFormSchema } from "@/schemas/contactForm.schema";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const validBody = contactFormSchema.safeParse(body);

    if (!validBody.success) {
      throw new Error(validBody.error.errors[0].message);
    }

    const { email, name, message } = validBody.data;

    console.table({ email, name, message });

    await sendEmail(email, `Mi nombre es ${name}`, message);

    return new Response(JSON.stringify("Subscription created"), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify(`${error}`), {
      status: 500,
    });
  }
};
