import { sendEmail } from "@/app/utils/sendGrid";
import contactFormSchema from "@/schemas/contactForm";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const validBody = contactFormSchema.safeParse(body);

    if (!validBody.success) {
      throw new Error(validBody.error.errors[0].message);
    }

    const { email, nombre, message } = validBody.data;

    console.table({ email, nombre, message });

    await sendEmail(email, "Test Email", "This is a test email from Next.js!");

    return new Response(JSON.stringify("Subscription created"), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify(`${error}`), {
      status: 500,
    });
  }
};
