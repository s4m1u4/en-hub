import * as yup from "yup";

export const ModalChangeWordSchema = yup.object({
  set: yup.string().required("Set is required"),
  originalWord: yup.string().required("Original word is required"),
  translationWord: yup.string().required("Translation word is required"),
});
