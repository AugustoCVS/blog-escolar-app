import { RootState } from "@/redux/store";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";

export const useUser = () => {
  const router = useRouter();
  
  const user = useSelector((state: RootState) => state.user);


  return {
    states: {
      user
    },
  }
}