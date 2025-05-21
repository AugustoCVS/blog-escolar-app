import { RootState } from "@/redux/store";
import { RelativePathString, useRouter } from "expo-router";
import { useSelector } from "react-redux";

export const useUsers = () => {
  const router = useRouter();

  const user = useSelector((state: RootState) => state.user);

  const usersList = [
    {
      id: "1",
      name: "John Doe",
      email: "teste@teste.com",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "teste@gmail.com",
    },
    {
      id: "3",
      name: "John Smith",
      email: "teste@teste.com",
    },
  ]

  const handleRefresh = () => {
    console.log("Refresh");
  }

  const handleLoadMore = () => {
    console.log("Load more");
  }

  const loadingRefesh = false;

  const handleNavigateToCreateUser = () => {
    router.push(`/screens/user/criar` as RelativePathString);
  }

  const handleNavigateToUser = (id: string) => {
    router.push(`/screens/user/${id}` as RelativePathString);
  }

  const handleDeleteUser = (id: string) => {
    console.log("Delete user", id);
  }

  return {
    states: {
      user,
      usersList,
      loadingRefesh,
    },
    actions: {
      handleRefresh,
      handleLoadMore,
      handleNavigateToCreateUser,
      handleDeleteUser,
      handleNavigateToUser,
    },
  };
};