import { useEffect, useState } from "react";

import { getToken } from "@/utils/auth";

export const useHome = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const handleGetUserTokenFromStorage = async () => {
    const userToken = await getToken();
    setToken(userToken);
    setLoading(false);
  }

  useEffect(() => {
    handleGetUserTokenFromStorage();
  }, []);

  return {
    states: {
      token,
      loading,
    }
  }
}