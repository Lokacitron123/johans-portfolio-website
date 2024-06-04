"use client";

import React from "react";
import { SectionHeading } from "../components/ui/Heading";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { CircleX, Loader, LoaderCircle, Send } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";

const FormDataSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }).max(50),
  email: z.string().email({
    message: "Please fill in a valid email. Example: johndoe@example.com",
  }),
  subject: z.string().min(2).max(50),
  message: z
    .string()
    .min(2, { message: "Please fill in a message to submit." })
    .max(2500, { message: "Too long message." }),
  honeypot: z.string().optional(),
});

export type FormFields = z.infer<typeof FormDataSchema>;

export default function Contact() {
  const { register, reset, handleSubmit, formState } = useForm<FormFields>({
    mode: "onSubmit",
    resolver: zodResolver(FormDataSchema),
  });

  const { errors, isSubmitting } = formState;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // Check honeypot field to prevent spam bots
    if (data.honeypot) {
      toast.error("Spam detected");
      return;
    }
    const { response, error } = await sendEmail(data);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email successfully sent");
    reset();
  };
  return (
    <section className='h-screen mx-auto'>
      <SectionHeading title='Contact Me' />
      <div className='flex flex-col items-center justify-cente'>
        <form
          className='mt-10 flex flex-col md:w-96 gap-3'
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <label className='sr-only capitalize' htmlFor='name'>
            Your name
          </label>
          <input
            className='h-14 px-4 rounded-lg border border-black/10'
            type='text'
            id='name'
            {...register("name", {
              required: true,
            })}
            placeholder='Your name'
          />
          {errors.name && (
            <div className='flex justify-center items-center gap-3'>
              <CircleX className='text-red-500' />
              <span className='font-bold text-red-500'>
                {`Error: ${errors.name.message}`}
              </span>
            </div>
          )}

          {/* Email */}
          <label className='sr-only capitalize' htmlFor='email'>
            Your email
          </label>
          <input
            className='h-14 px-4 rounded-lg border border-black/10'
            type='email'
            id='email'
            {...register("email", {
              required: true,
            })}
            placeholder='Your email'
          />
          {errors.email && (
            <div className='flex justify-center items-center gap-3'>
              <CircleX className='text-red-500' />
              <span className='font-bold text-red-500'>
                {`Error: ${errors.email.message}`}
              </span>
            </div>
          )}

          {/* Subject */}
          <label className='sr-only capitalize' htmlFor='subject'>
            Your email
          </label>
          <input
            className='h-14 px-4 rounded-lg border border-black/10'
            type='text'
            id='email'
            {...register("subject", {
              required: true,
            })}
            placeholder='Your Subject'
          />
          {errors.subject && (
            <div className='flex justify-center items-center gap-3'>
              <CircleX className='text-red-500' />
              <span className='font-bold text-red-500'>
                {`Error: ${errors.subject.message}`}
              </span>
            </div>
          )}

          {/* Message */}
          <label className='sr-only capitalize' htmlFor='message'>
            Message
          </label>
          <textarea
            className='h-52 my-3 rounded-lg border border-black/10 p-4'
            id='message'
            {...register("message", {
              required: true,
            })}
            placeholder='Your message'
          />
          {errors.message && (
            <div className='flex justify-center items-center gap-3'>
              <CircleX className='text-red-500' />
              <span className='font-bold text-red-500'>
                {`Error: ${errors.message.message}`}
              </span>
            </div>
          )}

          {/* Honeypot (hidden field) */}
          <input
            type='text'
            id='honeypot'
            className='hidden'
            {...register("honeypot")}
            tabIndex={-1}
            autoComplete='off'
          />

          <button
            className='group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-white rounded-full outline-none focus:scale-[1.15] transition-all hover:scale-[1.15]   active:scale-105  dark:bg-gray-50 dark:text-gray-900'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                Loading
                <LoaderCircle className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 animate-spin' />
              </>
            ) : (
              <>
                Submit
                <Send className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
              </>
            )}
          </button>
        </form>
      </div>
      <div>
        <Toaster position='bottom-right' />
      </div>
    </section>
  );
}
