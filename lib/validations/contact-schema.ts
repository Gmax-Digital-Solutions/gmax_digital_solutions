import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),

  email: z.string().email("Invalid email address"),

  company: z.string().max(100).optional(),

  businessCategory: z.string().min(2, "Select a business category"),

  companySize: z.string().min(1, "Select company size"),

  service: z.string().min(2, "Select a service"),

  message: z.string().min(10, "Message too short").max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
