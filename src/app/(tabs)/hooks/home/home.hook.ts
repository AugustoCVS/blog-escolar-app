import { useEffect, useState } from "react";

import { RootState } from "@/redux/store";
import { PostsService } from "@/services/requests/posts";
import { getToken } from "@/utils/auth";
import { useQuery } from "@tanstack/react-query";
import { RelativePathString, useRouter } from "expo-router";
import { useSelector } from "react-redux";

export const useHome = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [paginationProps, setPaginationProps] = useState<{page: number, limit: number}>({
    page: 1,
    limit: 10,
  });

  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const handleGetUserTokenFromStorage = async () => {
    const userToken = await getToken();
    setToken(userToken);
    setLoading(false);
  }

  const handleDebounceSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    handleGetUserTokenFromStorage();

    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const getPosts = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      return await PostsService.getPosts({limit: paginationProps.limit, page: paginationProps.page});
    },
    retry: 2,
    enabled: debouncedSearch === '',
    refetchOnWindowFocus: false,
  });

  const searchPosts = useQuery({
    queryKey: ["posts", debouncedSearch],
    queryFn: async () => {
      return await PostsService.getPostsBySearch(debouncedSearch);
    },
    retry: 2,
    enabled: debouncedSearch !== '',
    refetchOnWindowFocus: false,
  });

  const posts = debouncedSearch ? searchPosts.data : (getPosts.data || []);
  const loadingRequest = searchPosts.isLoading || getPosts.isFetching
  const loadingRefesh = getPosts.isRefetching;

  const handleRefresh = () => {
    getPosts.refetch();
  }

  const handleLoadMore = () => {
    if ((posts?.length ?? 0) >= paginationProps.limit) {
      setPaginationProps({
        ...paginationProps,
        limit: paginationProps.limit + 10,
      });

      getPosts.refetch();
    }
  }

  const handleNavigateToPost = (id: string) => {
    router.push(`/screens/post/${id}` as RelativePathString);
  }

  const handleNavigateToCreatePost = () => {
    router.push(`/screens/post/criar` as RelativePathString);
  }

  return {
    states: {
      search,
      user,
      token,
      loading,
      loadingRequest,
      posts,
      loadingRefesh,
    },
    actions: {
      handleLoadMore,
      handleNavigateToPost,
      handleNavigateToCreatePost,
      handleDebounceSearch,
      handleRefresh,
    }
  }
}