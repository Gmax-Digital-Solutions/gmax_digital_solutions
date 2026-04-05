import { z } from "zod";

export const newsletterSchema = z.object({
  first_name: z.string().optional(),
  email: z.string().email("Invalid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
