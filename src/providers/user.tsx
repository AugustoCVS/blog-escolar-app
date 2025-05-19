
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";

import { setUser } from "@/redux/slices/User/user.slice";
import { UserService } from "@/services/requests/user";
import { getToken, removeTokensOnStorage } from "@/utils/auth";
import { useRouter } from "expo-router";

export const UserInfo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const handleGetUser = async (): Promise<void> => {
    const token = await getToken();

    if (!token) {
      return;
    }

    await UserService.getUser({ id: token })
    .then((res) => {
      dispatch(setUser(res));
    })
    .catch(() => {
      removeTokensOnStorage();
      navigate.push("/screens/auth/auth");
    });
  };

  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      await handleGetUser();
      return null;
    },
  });

  return <>{children}</>;
};
