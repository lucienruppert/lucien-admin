export type User = {
  email: string;
  role: string;
  errors?: Array<string>;
};

export type EmailSendingResult = {
  sent: string;
  failed: Array<string>;
};
