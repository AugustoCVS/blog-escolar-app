import { RootState } from "@/redux/store"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "expo-router"
import { useSelector } from "react-redux"

import { CreatePostProps, UpdatePostProps } from "@/services/interfaces/posts"
import { PostsService } from "@/services/requests/posts"
import { useState } from "react"
import { Toast } from "toastify-react-native"

export const usePost = ({postId}: {postId: string}) => {
  const router = useRouter()
  const queryClient = useQueryClient();

  const user = useSelector((state: RootState) => state.user);

  const [edit, setEdit] = useState<boolean>(false)

  const handleGoBackToHome = (): void => {
   router.push('/(tabs)') 
  }

  const getPostById = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      return await PostsService.getPostsById(postId)
    },
    enabled: postId !== 'criar'
  })

  const createPost = useMutation({
    mutationFn: async ({postData, userId}: {postData: CreatePostProps, userId: string}) =>
      await PostsService.createPost({postData, userId}),
    onError: () => {
      Toast.error('Erro ao criar post. Tente novamente!')
    },
    onSuccess: () => {
      Toast.success('Post criado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['getPosts'] });
      queryClient.invalidateQueries({ queryKey: ['getPostsByAuthor'] });

      router.back()
    }
  })

  const updatePost = useMutation({
    mutationFn: async ({ postData }: {postData: UpdatePostProps}) =>
      await PostsService.updatePost({ postData }),
    onError: () => {
      Toast.error('Erro ao atualizar post. Tente novamente!')
    },
    onSuccess: () => {
      Toast.success('Post atualizado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['getPosts'] });
      queryClient.invalidateQueries({ queryKey: ['getPostsByAuthor'] });

      cancelEdit()
      getPostById.refetch()
    }
  })

  const deletePost = useMutation({
    mutationFn: async ({postId, userId}: {postId: string, userId: string}) =>
      await PostsService.deletePost({postId, userId}),
    onError: () => {
      Toast.error('Erro ao deletar post. Tente novamente!')
    },
    onSuccess: () => {
      Toast.success('Post deletado com sucesso!')
      handleGoBackToHome()
      queryClient.invalidateQueries({ queryKey: ['getPosts'] });
      queryClient.invalidateQueries({ queryKey: ['getPostsByAuthor'] });
    }
  })

  const handleDelete = (): void => {
    deletePost.mutate({postId, userId: user.id})
  }

  const handleStartEdit = (): void => {
    setEdit(true)
  }

  const cancelEdit = (): void => {
    setEdit(false)
  }

  const onFormSubmit = (data: CreatePostProps): void => {
    const createPosData = {
      title: data.title,
      content: data.content,
    }

    const updatePosData = {
      ...createPosData,
      postId,
      userId: user.id
    }

    if(postId === 'criar') {
      return createPost.mutate({postData: createPosData, userId: user.id})
    }

    if(edit) {
      return updatePost.mutate({postData: updatePosData})
    }
  };

  const post = getPostById.data
  const isLoading = getPostById.isLoading
  const isLoadingDeletePost = deletePost.isPending
  const isLoadingCreatePost = createPost.isPending
  const isLoadingUpdatePost = updatePost.isPending

  return {
    states: {
      user,
      post,
      isLoading,
      isLoadingDeletePost,
      isLoadingCreatePost,
      isLoadingUpdatePost,
      edit
    },
    actions: {
      handleGoBackToHome,
      handleStartEdit,
      handleDelete,
      onFormSubmit,
      cancelEdit,
    }
  }
}