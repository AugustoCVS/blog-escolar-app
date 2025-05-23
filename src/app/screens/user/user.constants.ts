import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  isAdmin: yup.boolean().default(false),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .test("password", "Senha inválida", function (value) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),
});

export const editUserSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  isAdmin: yup.boolean().default(false),
  password: yup
    .string()
    .notRequired()
    .test("password", "Senha inválida", function (value) {
      if (!value) return true;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .when("password", {
      is: (val: string) => !!val,
      then: (schema) => schema.required("A confirmação de senha é obrigatória"),
      otherwise: (schema) => schema.notRequired(),
    }),
});

export const SUCCESS_MESSAGE = "Usuário cadastrado com sucesso!";
export const ERROR_MESSAGE = "Erro ao cadastrar usuário!";
export const EDIT_SUCCESS_MESSAGE = "Usuário editado com sucesso!";
export const EDIT_ERROR_MESSAGE = "Erro ao editar usuário!";