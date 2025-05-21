import { RootState } from "@/redux/store";
import { UserService } from "@/services/requests/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { RelativePathString, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { Toast } from "toastify-react-native";

export const useUsers = () => {
  const router = useRouter();

  const user = useSelector((state: RootState) => state.user);

  const userListReq = useQuery({
    queryKey: ["userList"],
    queryFn: async () => {
      return await UserService.listAllUsers();
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const deleteUser = useMutation({
    mutationFn: async (id: string) => {
      return await UserService.deleteUser({ id });
    },
    onSuccess: () => {
      Toast.success("Usuário deletado com sucesso!");
      userListReq.refetch();
    },
    onError: () => {
      Toast.error("Erro ao deletar usuário");
    },
  })

  const handleRefresh = () => {
    userListReq.refetch();
  }

  const handleNavigateToCreateUser = () => {
    router.push(`/screens/user/criar` as RelativePathString);
  }

  const handleNavigateToUser = (id: string) => {
    router.push(`/screens/user/${id}` as RelativePathString);
  }

  const handleDeleteUser = (id: string) => {
    deleteUser.mutate(id);
  }

  const usersList = userListReq.data || [];
  const loading = userListReq.isLoading || userListReq.isFetching; 
  const loadingRefresh = userListReq.isRefetching;

  return {
    states: {
      user,
      usersList,
      loading,
      loadingRefresh,
    },
    actions: {
      handleRefresh,
      handleNavigateToCreateUser,
      handleDeleteUser,
      handleNavigateToUser,
    },
  };
};