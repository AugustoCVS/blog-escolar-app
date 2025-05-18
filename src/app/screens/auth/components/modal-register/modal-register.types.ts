import { RefObject } from "react";
import { Modalize } from "react-native-modalize";
import * as yup from "yup";
import { signUpSchema } from "./modal-register.constants";

export interface ModalRegisterProps  {
  modalRef: RefObject<Modalize | null>;
} 

export type formProps = yup.InferType<typeof signUpSchema>
