import { ZodError } from "zod";

type FormattedErrors = {
  [key: string]: string;
};

export const formatFormDataErrors = (error: ZodError, initialFormData: any): typeof initialFormData => {
  const errors: FormattedErrors = {};
  error.errors.forEach((e) => {
    errors[e.path.join('.')] = e.message;
  });
  return {...initialFormData, ...errors};
};

export const formatNumber = (num: number) => num.toLocaleString();