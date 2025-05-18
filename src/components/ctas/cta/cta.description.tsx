import { View } from "react-native"

export const Description: React.FC<{children: React.ReactNode, gap?: number}> = ({
  children,
  gap = 2
}) => {
  return (
    <View
      className={`w-full flex flex-col gap-${gap}`}
    >
      {children}
    </View>
  )
}