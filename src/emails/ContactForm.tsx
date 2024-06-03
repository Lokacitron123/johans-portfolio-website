import React from "react";
import {
  Html,
  Body,
  Heading,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactTemplate({
  message,
  email,
}: ContactFormTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New message incoming contact form in johanlindell.dev</Preview>
      <Tailwind>
        <Body className='bg-gray-50 text-black'>
          <Container>
            <Section className='bg-white border border-black my-10 px-10 py-4 rounded-md'>
              <Heading>Message from contact form.</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>From sender: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
