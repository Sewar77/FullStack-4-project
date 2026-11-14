import Joi from "joi";

export const categoriesSchema = Joi.object({
  name: Joi.string().min(3).max(200).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name must be less than or equal to 200 characters",
    "any.required": "Name is required",
  }),
  description: Joi.string().min(4).messages({
    "string.base": "Name must be a string",
    "string.min": "Name must be at least 3 characters long",
  }),
  status: Joi.string()
    .valid("approved", "rejected", "pending")
    .default("approved"),
});
