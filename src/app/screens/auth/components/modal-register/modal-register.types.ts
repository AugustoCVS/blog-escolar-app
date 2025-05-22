import { RefObject } from "react";
import { UseFormResetField } from "react-hook-form";
import { Modalize } from "react-native-modalize";
import * as yup from "yup";
import { signUpSchema } from "./modal-register.constants";

export interface ModalRegisterProps  {
  modalRef: RefObject<Modalize | null>;
  resetField: UseFormResetField<{
    name: string;
    email: string;
    isAdmin: boolean;
    password: string;
    confirm_password: string;
}>
} 

export type formProps = yup.InferType<typeof signUpSchema>
