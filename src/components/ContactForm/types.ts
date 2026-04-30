export type RepresentType = "company" | "individual";

export type SubmitStatus = "idle" | "sending" | "success" | "error";

export type FormValues = {
  name: string;
  email: string;
  company: string;
  eventType: string;
  guests: string;
  location: string;
  message: string;
  date: Date | null;
  consent: boolean;
};
