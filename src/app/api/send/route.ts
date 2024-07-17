const NEXT_PUBLIC_RESEND_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY;

export async function POST(request: Request) {
  const body = await request.json();
  const { email, fullName, message } = body;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NEXT_PUBLIC_RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'EnableD <hello@getenabled.co.uk>',
      to: [email],
      subject: `Thank you for getting in touch ${fullName}!`,
      html: `<strong> We have received your message: \n ${message}</strong>`,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }
  const error = await res.json();
  return Response.json(error);
}
