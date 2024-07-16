const RESEND_API_KEY = process.env.RESEND_API_KEY

export async function POST() {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'EnableD <hello@getenabled.co.uk>',
      to: ['dboland77@gmail.com'],
      subject: 'hello world',
      html: '<strong>local test!</strong>',
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }
  else {
    const error= await res.json()
    return Response.json(error)
  }
}


