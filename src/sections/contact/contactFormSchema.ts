import * as z from 'zod';

export const ContactFormSchema = z
  .object({
    fullName: z.string(),
    email: z.string().email({ message: 'Email must be a valid email address' }),
    message: z.string(),
  })
  .strict();
