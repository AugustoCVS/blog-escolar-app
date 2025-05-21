import { EmptyScreen } from "@/components/empty-screen/empty-screen.component";
import { Input } from "@/components/inputs/input/input.component";
import { colors } from "@/styles/colors";
import { formatDate } from "@/utils/formatters";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { ButtonSection } from "./components/button-section/button-section.component";
import { postSchema } from "./post.constants";
import { usePost } from "./post.hook";
import { formProps } from "./post.types";

export default function Post() {
  const { postId } = useLocalSearchParams();
  const { states, actions } = usePost({ postId: postId as string });
  const {control, handleSubmit, formState: { errors }, resetField} = useForm<formProps>({
    resolver: yupResolver(postSchema),
    values: {
      title: states.post?.title || '',
      content: states.post?.content || '',
      author: states.user.name
    }
  })

  if(!states.post) {
    return <EmptyScreen message="Post não encontrado. Tente novamente!" />
  }

  return (
    <View
      className="flex flex-col w-full h-screen p-4"
    >
      <View className="flex flex-row w-full items-center justify-between">
        {states.user.isAdmin && (states.edit || postId === 'criar') ? (
          <Controller 
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Título"	
                value={value}
                onChangeText={onChange}
                errorMessage={errors.title?.message}
                keyboardType="default"
                width="w-3/4"
              />
            )}
          />
          ) : (
            <Text className="font-bold text-lg">{states.post?.title}</Text>
          )}

        <Text className="text-sm text-gray-500">
          {formatDate(states.post.createdAt)}
        </Text>
      </View>
      
      <View className="flex flex-col w-full mt-8">
        <Controller 
          control={control}
          name="content"
          render={({ field: { onChange, value } }) => (
            <TextInput
              keyboardType={"default"}
              placeholder={"Conteúdo"}
              placeholderTextColor={colors.gray[300]}
              value={value}
              onChangeText={onChange}
              className={`w-full border border-gray-300 rounded-xl text-black min-h-[200px] align-top p-4`}
              multiline
              numberOfLines={10}
              editable={states.edit || postId === 'criar'}
            />
          )}
        />

        {errors.content && (
          <Text className="text-red-500 pt-2 text-xs">{errors.content?.message}</Text>
        )}
      </View>

      <View
        className={`flex flex-row items-center ${states.user.isAdmin ? 'justify-between' : 'justify-end'} mt-8 gap-4`}
      >
        {(states.user.isAdmin && !states.isLoading) && (
          <ButtonSection
            isEdit={states.edit}
            postId={postId as string}
            isLoading={states.isLoading}
            isDeleting={states.isLoadingDeletePost}
            resetField={resetField}
            cancelEdit={actions.cancelEdit}
            handleStartEdit={actions.handleStartEdit}
            handleDeletePost={actions.handleDelete}
            handleSavePost={handleSubmit(actions.onFormSubmit)}
          />
        )}

        {!states.edit && postId !== 'criar' ? (
            <Text className="text-xs text-gray-400">Autor: {states.post?.author.name}</Text>
          ) : (
          <Controller 
            control={control}
            name="author"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Autor"	
                value={value}
                onChangeText={onChange}
                errorMessage={errors.author?.message}
                keyboardType="default"
              />
            )}
          />
        )}
      </View>
      
    </View>
  )
}