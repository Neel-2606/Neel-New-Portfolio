ALTER TABLE public.contacts
  ADD CONSTRAINT contacts_name_len CHECK (char_length(name) BETWEEN 1 AND 120),
  ADD CONSTRAINT contacts_email_len CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT contacts_subject_len CHECK (char_length(subject) BETWEEN 1 AND 200),
  ADD CONSTRAINT contacts_message_len CHECK (char_length(message) BETWEEN 20 AND 5000);