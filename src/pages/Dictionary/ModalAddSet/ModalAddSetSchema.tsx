import * as yup from "yup";

export const ModalAddSetSchema = yup.object({
  title: yup.string().required("Title is required"),
});
