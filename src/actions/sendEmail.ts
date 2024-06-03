"use server";
import React from "react";
import ContactTemplate from "@/emails/ContactForm";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: EmailData) => {
  const name = formData.name;
  const email = formData.email;
  const subject = formData.subject;
  const message = formData.message;

  if (
    (!message && typeof message !== "string") ||
    !subject ||
    !email ||
    !name
  ) {
    return {
      error: "Invalid message",
    };
  }

  let response;

  try {
    response = await resend.emails.send({
      from: "contactform@johanlindell.dev",
      to: "johan.lindell91@gmail.com",
      subject: subject,
      reply_to: email,
      react: React.createElement(ContactTemplate, {
        message: message,
        email: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    response,
  };
};
