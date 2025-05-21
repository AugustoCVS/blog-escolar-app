import { UseFormResetField } from "react-hook-form";

export type ButtonSectionProps = {
  isEdit: boolean;
  userId: string;
  isLoading: boolean;
  isDeleting: boolean;
  resetField: UseFormResetField<{
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    isAdmin: boolean;
  }>;
  cancelEdit: () => void;
  handleStartEdit: () => void;
  handleDeleteUser: () => void;
  handleSaveUser: () => void;
}