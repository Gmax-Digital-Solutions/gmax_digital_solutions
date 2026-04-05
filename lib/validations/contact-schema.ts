import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),

  email: z.string().email("Enter a valid email address"),

  company: z.string().min(2, "Company name is required"),

  helpWith: z.string().min(2, "Please select what you need help with"),

  message: z.string().min(10, "Message must be at least 10 characters"),
});
