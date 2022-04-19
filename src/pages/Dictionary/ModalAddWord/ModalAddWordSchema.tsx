import * as yup from "yup";

export const ModalAddWordSchema = yup.object({
  originalWord: yup.string().required("Original word is required"),
  translationWord: yup.string().required("Translation word is required"),
});
