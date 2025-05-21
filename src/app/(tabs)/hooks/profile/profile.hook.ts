import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { RelativePathString, useRouter } from "expo-router";
import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { PostsService } from "@/services/requests/posts";
import { Toast } from "toastify-react-native";

export const useProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const user = useSelector((state: RootState) => state.user);

    const [paginationProps, setPaginationProps] = useState<{page: number, limit: number}>({
    page: 1,
    limit: 10,
  });

  const getPosts = useQuery({
    queryKey: ["getPostsByAuthor"],
    queryFn: async () => {
      return await PostsService.getPostsByAuthor({
        limit: paginationProps.limit, 
        page: paginationProps.page,
        authorId: user.id
      });
    },
    enabled: user.id !== '',
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const posts = getPosts.data || []
  const loading = getPosts.isLoading || getPosts.isFetching

  const handleLoadMore = () => {
    if(posts.length >= paginationProps.limit) {
      setPaginationProps({
        ...paginationProps,
        limit: paginationProps.limit + 10,
      });

      getPosts.refetch();
    }
  }

  const handleRefresh = () => {
    getPosts.refetch();
  }

  const handleNavigateToPost = (id: string) => {
    router.push(`/screens/post/${id}` as RelativePathString);
  }

  const handleNavigateToCreatePost = () => {
    router.push(`/screens/post/criar` as RelativePathString);
  }

  const deletePost = useMutation({
    mutationFn: async ({postId, userId}: {postId: string, userId: string}) =>
      await PostsService.deletePost({postId, userId}),
    onError: () => {
      Toast.error('Erro ao deletar post. Tente novamente!')
    },
    onSuccess: () => {
      Toast.success('Post deletado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['getPosts'] });
      queryClient.invalidateQueries({ queryKey: ['getPostsByAuthor'] });
    }
  })

  const handleDeletePost = (postId: string) => {
    deletePost.mutate({postId, userId: user.id})
  }

  return {
    states: {
      user,
      posts,
      loading,
    },
    actions: {
      handleRefresh,
      handleLoadMore,
      handleDeletePost,
      handleNavigateToPost,
      handleNavigateToCreatePost,
    }
  }
}