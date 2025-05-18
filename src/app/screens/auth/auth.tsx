import { Button } from '@/components/button/button.component';
import { colors } from '@/styles/colors';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Text, View } from "react-native";
import { useAuth } from './auth.hook';
import { ModalLogin } from './components/modal-login/modal-login.component';
import { ModalRegister } from './components/modal-register/modal-register.component';

export default function Auth() {
  const { refs, actions } = useAuth();

  return (
    <>
      <View
        className="flex h-screen bg-white-200 items-center justify-center"
      >
        <View
          className="flex items-center justify-between h-3/4 pt-40 w-full"
        >
          <View
            className='flex flex-col items-center gap-4'
          >
            <SimpleLineIcons name="book-open" size={60} color={colors.gray[700]} />
            <Text
              className='text-gray-700 text-3xl font-bold'
            >
              Blog Escolar
            </Text>
          </View>

          <View
            className='flex flex-col items-center justify-center gap-4 w-full px-8'
          >
            <Button 
              text='Login'
              isFirstStyle
              textColor='text-white-100'
              onPress={actions.handleOpenModalLogin}
            />

            <Button 
              text='Cadastro'
              isFirstStyle={false}
              textColor='text-white-100'
              onPress={actions.handleOpenModalRegister}
            />
          </View>
        </View>
      </View>

      <ModalLogin modalRef={refs.modalLogin} />
      <ModalRegister modalRef={refs.modalRegister} />
    </>
  )
}