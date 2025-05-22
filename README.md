# Blog Escolar App

### Sumário
- [Visão Geral](#visão-geral)
- [Setup Inicial](#setup-inicial)
- [Arquitetura da Aplicação](#arquitetura-da-aplicação)
- [Guia de Uso](#guia-de-uso)
- [Experiências e Desafios](#experiências-e-desafios)

### Visão Geral
Aplicativo mobile desenvolvido em React Native com Expo para gestão de um blog escolar, permitindo cadastro, autenticação, criação e visualização de postagens, além de gerenciamento de usuários (alunos e administradores/professores).

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Docker
- Backend configurado ([Documentação do Backend](https://github.com/AugustoCVS/blog-escolar))

### Setup Inicial
1. **Pré-requisitos:**
   - Node.js >= 18
   - npm >= 9
   - Expo CLI (`npm install -g expo-cli`)
2. **Instalação das dependências:**
   ```bash
   npm install
   ```
3. **Integração backend**
   Ao iniciar o projeto você verá a seguinte mensagem
     > Metro waiting on exp://XXX.XXX.X.XXX:80817

   Você deverá colocar sua rota de IPV4 no BASE_URL do arquivo api.ts
      ```bash
      const BASE_URL = "http://XXX.XXX.X.XXX:3001";
      ```
4. **Execução do app:**
   ```bash
   npx expo start
   ```
   Caso o Expo abra usando o *development build* basta apertar a tecla *S* e trocar para o Expo Go
   O Expo abrirá opções para rodar no emulador Android/iOS ou no dispositivo físico via QR Code.

### Arquitetura da Aplicação e Tecnologias Utilizadas
- **Base:** React Native + Expo
- **Gerenciamento de estado:** Redux Toolkit
- **Comunicação com API:** Axios
- **Gerenciamento de requisições:** React Query
- **Validação de formulários:** Yup + React Hook Form
- **Navegação:** Expo Router (file-based routing)
- **UI:** NativeBase, React Native Paper, Tailwind (via NativeWind)
- **Notificações:** Toastify React Native

### Estrutura de Pastas
- `src/app/(tabs)`: Telas principais (Home, Profile, Users)
- `src/app/screens`: Telas de autenticação, post e usuário
- `src/components`: Componentes reutilizáveis (inputs, botões, cards, modais)
- `src/services`: Serviços de API (auth, posts, users)
- `src/redux`: Store e slices do Redux
- `src/styles`: Temas, cores e estilos globais
- `src/utils`: Funções utilitárias

### Guia de Uso
- **Login/Cadastro:**
  - Tela inicial permite login ou cadastro de novo usuário.
  - Validação de campos obrigatórios e senha forte.
- **Home:**
  - Lista de posts do blog.
  - Pesquisa de posts (input de busca).
  - Usuários administradores podem criar novos posts.
- **Profile:**
  - Exibe posts do usuário logado.
  - Permite criar post ou usuário (se admin).
- **Users:**
  - Lista todos os usuários cadastrados.
  - Permite editar ou deletar usuários (admin).
- **Post:**
  - Visualização, criação e edição de posts.
  - Apenas administradores podem criar/editar posts.

### Experiências e Desafios
- **Desafios Técnicos:**
  - Integração com múltiplas bibliotecas de UI e navegação.
  - Gerenciamento de autenticação e persistência de token.
  - Validação robusta de formulários (Yup + React Hook Form).
  - Controle de permissões (admin vs aluno) em rotas e ações.
- **Aprendizados:**
  - Importância de uma arquitetura modular e reutilizável.
  - Uso eficiente do React Query para cache e atualização de dados.
  - Adoção de padrões de código e boas práticas para facilitar manutenção.

---

