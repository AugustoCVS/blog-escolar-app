import { Button } from "@/components/button/button.component";
import { View } from "react-native";
import { ButtonSectionProps } from "./button-section.types";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  isEdit,
  userId,
  isLoading,
  isDeleting,
  resetField,
  cancelEdit,
  handleStartEdit,
  handleDeleteUser,
  handleSaveUser,
}) => {
  return (
    <View
      className="flex flex-row items-center gap-4"
    >
      {!isEdit && userId !== 'criar' ? (
        <Button
          className="w-20 p-2 bg-green-500 rounded-md"
          onPress={handleStartEdit}
          text="Editar"
          textColor="text-white-100"
        />
        ) : (
          <Button
            className="w-20 p-2 bg-green-500 rounded-md"
            loading={isLoading}
            onPress={handleSaveUser}
            text="Salvar"
            textColor="text-white-100"
          />
        )}

      {isEdit && (
        <Button
          className="w-22 p-2 bg-red-500 rounded-md"
          onPress={() => {
            resetField('name')
            resetField('email')
            cancelEdit()
          }}
          textColor="text-white-100"
          text="Cancelar"
        />
      )}

      {(userId !== 'criar' && !isEdit) && (
        <Button
          className="w-20 p-2 bg-red-500 rounded-md"
          onPress={handleDeleteUser}
          loading={isDeleting}
          text="Excluir"
          textColor="text-white-100"
        />
      )}
  </View>
  )
}