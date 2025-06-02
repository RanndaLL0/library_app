📚 Library App

Aplicativo de biblioteca desenvolvido em React Native, com integração ao Firebase para autenticação e armazenamento de dados. Permite aos usuários visualizar, adicionar e gerenciar livros.
🚀 Tecnologias Utilizadas

    React Native

    Firebase Authentication

    Firebase Firestore

    Expo

📁 Estrutura do Projeto

library_app/
├── assets/                  # Recursos estáticos (imagens, fontes, etc.)
├── src/                     # Código-fonte principal do aplicativo
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/             # Telas do aplicativo
│   ├── services/            # Serviços (ex: integração com Firebase)
│   └── utils/               # Funções utilitárias
├── App.js                   # Componente raiz do aplicativo
├── firebase.jsx             # Configuração do Firebase
├── package.json             # Dependências e scripts do projeto
└── ...                      # Outros arquivos de configuração

⚙️ Instalação e Execução

    Clone o repositório:

git clone https://github.com/RanndaLL0/library_app.git
cd library_app

Instale as dependências:

npm install

Configure o Firebase:

    Crie um projeto no Firebase Console.

    Adicione um aplicativo Android ao projeto e obtenha o arquivo google-services.json.

    Coloque o arquivo google-services.json na pasta android/app/.

    Atualize o arquivo firebase.jsx com as configurações do seu projeto Firebase.

Execute o aplicativo:

    Com o Expo CLI:

npx expo start

Com React Native CLI:
GitHub+2GitHub+2GitHub+2

        npx react-native run-android

🧩 Funcionalidades

    Autenticação de usuários com Firebase Authentication.

    Visualização de lista de livros disponíveis.

    Adição e remoção de livros da biblioteca pessoal.

    Integração com Firestore para armazenamento em tempo real.

    Interface amigável e responsiva para dispositivos móveis.

📷 Capturas de Tela

![Untitled](https://github.com/user-attachments/assets/ebb0048f-18d5-41d6-9543-47ac19b7c169)
![Untitled](https://github.com/user-attachments/assets/bc61fef1-1d87-47b7-821c-0182ceab28e1)
![Untitled](https://github.com/user-attachments/assets/82676d0c-d033-4403-b553-0a8892b6f361)




Adicione aqui imagens do aplicativo em funcionamento.
📝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
