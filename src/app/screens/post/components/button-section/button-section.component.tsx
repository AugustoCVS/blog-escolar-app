import { Button } from "@/components/button/button.component";
import { View } from "react-native";
import { ButtonSectionProps } from "./button-section.types";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  isEdit,
  postId,
  isLoading,
  isDeleting,
  resetField,
  cancelEdit,
  handleStartEdit,
  handleDeletePost,
  handleSavePost,
}) => {
  return (
    <View
      className="flex flex-row items-center gap-4"
    >
      {!isEdit && postId !== 'criar' ? (
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
            onPress={handleSavePost}
            text="Salvar"
            textColor="text-white-100"
          />
        )}

      {isEdit && (
        <Button
          className="w-22 p-2 bg-red-500 rounded-md"
          onPress={() => {
            resetField('title')
            resetField('content')
            cancelEdit()
          }}
          textColor="text-white-100"
          text="Cancelar"
        />
      )}

      {(postId !== 'criar' && !isEdit) && (
        <Button
          className="w-20 p-2 bg-red-500 rounded-md"
          onPress={handleDeletePost}
          loading={isDeleting}
          text="Excluir"
          textColor="text-white-100"
        />
      )}
  </View>
  )
}