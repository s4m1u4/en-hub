import * as yup from "yup";

export const ModalChangeSetSchema = yup.object({
  title: yup.string().required("Title is required"),
});
