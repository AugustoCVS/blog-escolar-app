import { useQuery } from "@tanstack/react-query";
import { RelativePathString, useRouter } from "expo-router";
import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { PostsService } from "@/services/requests/posts";

export const useUser = () => {
  const router = useRouter();
  
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

  return {
    states: {
      user,
      posts,
      loading,
    },
    actions: {
      handleRefresh,
      handleLoadMore,
      handleNavigateToPost,
      handleNavigateToCreatePost,
    }
  }
}