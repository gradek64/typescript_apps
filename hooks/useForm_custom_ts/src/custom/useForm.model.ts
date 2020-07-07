export type InputOrTextArea =
  | React.FormEvent<HTMLInputElement>
  | React.FormEvent<HTMLTextAreaElement>
  | React.FormEvent<HTMLSelectElement>
  | React.FormEvent<HTMLFormElement>;

export type UseFormStateReturn = [
  {
    [key: string]: {
      value: string;
      required?: boolean;
      touched?: boolean;
      error: string;
    };
  },
  (event: InputOrTextArea) => void,
  (event: InputOrTextArea) => void,
  (event: InputOrTextArea) => void
];
