import z from "zod";

//singup

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

//singin

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

//creatBlogInput

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

//updateBlogInput

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

//type inference in zod
export type SignupInput = z.infer<typeof signupInput>;
//type inference in zod
export type SigninInput = z.infer<typeof signinInput>;
//type inference in zod
export type CreateBlogInput = z.infer<typeof createBlogInput>;
//type inference in zod
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
