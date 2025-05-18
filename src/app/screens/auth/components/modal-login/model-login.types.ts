import { RefObject } from "react";
import { Modalize } from "react-native-modalize";
import * as yup from "yup";
import { signInSchema } from "./modal-login.constants";

export interface ModalLoginProps   {
  modalRef: RefObject<Modalize | null>;
}

export type formProps = yup.InferType<typeof signInSchema>
