import { removeTokensOnStorage } from "@/utils/auth"
import { useRouter } from "expo-router"

export const useHeader = () => {
  const router = useRouter()
  
  const handleLogout = async (): Promise<void> => {
    await removeTokensOnStorage()
    router.push("/screens/auth/auth")
  }

  return {
    actions: {
      handleLogout
    }
  }

}