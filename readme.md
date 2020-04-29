<h1 align="center">
 <img src="https://ik.imagekit.io/hq2gg4sqoa/logo__-77cGTsu.svg">
</h1>

## Web Preview
<h1 align="center">
  <img src="frontend/src/assets/meetapp_demo.gif">
</h1>

## Mobile Preview
<h1 align="center">
  <img src="frontend/src/assets/meetapp_mobile_demo.gif">
</h1>
  

# Índice
- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Backend](#-backend)
- [Frontend](#-frontend)
- [Mobile](#-mobile)
- [Repositórios Originais](#-repositórios-originais)

## 📋 Sobre

O **Meetapp** funciona como uma gerenciador de meetups (eventos), onde sua funcionalidade está divida em duas partes, no projeto FrontEnd, o usuário poderá cadastrar seus próprios meetups, já no projeto Mobile, o usuário apenas poderá visualizar os meetups por dia e se inscrever/desinscrever dos meetups. Projeto desenvolvido como desafio final do Curso da RocketSeat para certificação.

---

## 🚀 Tecnologias

O projeto utiliza-se das seguintes tecnologias:

- NodeJS;
- Yarn;
- ExpressJS;
- Postgresql;
- Docker:
  - Redis (redis:alpine).
- ReactJS;
- React Native;
- Redux;
- Redux-saga;
- React hooks;
- Eslint;
- Prettier;
- EditorConfig;
- Mailtrap;
- Sentry;
- Reactotron.

---

## 👨‍💻 Backend

Para execução do projeto no Backend, necessita-se da utilização do seguinte comando no terminal para instalação das dependências:

```sh
yarn
```

Após a instalação dos pacotes, é uma boa ideia que seu computador já tenha Postgresql e Redis instalados, sendo pelo docker ou diretamente na máquina. No meu caso, foi realizada a instalação do postgresql sem estar no docker, já o Redis foi necessário utilizar o Docker devido a complicação de sua instalação em Ambiente Windows, porém fica ao seu critério.

Realize uma cópia do ".env.example" e renomei-o para ".env" e realize as configurações.

Algumas explicações sobre algumas variáveis de ambiente:

- APP_SECRET: É definida para geração do JWT. Como boa prática, é interessante colocar um código aleatório, como um hash;

- "# Database": Configurações relacionadas ao banco de dados Relacional (testado apenas com postgresql), faça a configuração de acordo com seu banco local ou via docker;

- "# Redis": Configurações relacionadas ao banco Redis, conforme você tenha configurado em sua máquina;

- "# Mail": Configurações relacionadas ao serviço de e-mail, nesse projeto foi utilizado o Mailtrap;

- "# Sentry": Crie sua conta no Sentry e gere um novo monitoramente de projeto, busque pelo DSN gerado e informe-o. É necessário para que os erros em produção possam ser enviados para uma plataforma que facilite o gerenciamento.

Antes de inicializar o projeto, é necessário criar o banco de dados, conforme configurado no .env e rodar o seguinte comando para criar as tabelas do projeto:

```sh
yarn sequelize db:migrate
```

Após tudo configurado, execute o seguinte comando para inicialização do projeto:

```sh
yarn dev
```

Abra um novo terminal na pasta do backend e execute o seguinte comando para habilitar o gerenciamento de fila e envio de e-mails:

```sh
yarn queue
```

É importante que o queue seja executado, pois o projeto virá a dar erro quando usar algo a rota direcionada às inscrições em meetups.

---

## 💻 Frontend

Para execução do frontend é importante que o Backend já esteja iniciado, sendo assim, é necessário apenas a utilização do seguinte comando para instalar as dependências do projeto:

```sh
yarn
```

Após a instalação das dependências, basta iniciar o projeto com:

```sh
yarn start
```

Aguarde uns instantes e a aplicação já estará rodando. Realize um cadastro de usuário e já poderá utilizar a aplicação.

---

## 📱 Mobile

O projeto em Mobile foi testado apenas na plataforma **Android**, sendo assim é necessário que você possua um emulador como genymotion ou um celular android que possa ser emulado via USB.

Para emular com o Genymotion em ambiente windows, é importante saber que, caso esteja utilizando Docker, você enfrentará um problema, sendo assim aconselho que seja emulado diretamente no celular. Maiores dúvidas, pode-se acessar:

[RocketseatDocs](https://docs.rocketseat.dev/ambiente-react-native/usb/android)

Após configurar o emulador, é importante realizar uma configuração em 2 arquivos devido a utilização do Windows e Android.

Primeiro vá em "mobile/src/config/ReactotronConfig.js", nele você irá trocar a seguinte linha:

```js
const tron = Reactotron.configure({ host: "192.168.0.109" });
```

Em host, troque pelo IP local da sua máquina.

Depois vá em "mobile/src/services/api", e procure por:

```js
const api = axios.create({
  baseURL: "http://192.168.0.109:3333"
});
```

Troque o ip também, defina-o de acordo com o seu IP Local, para que possa realizar as chamadas à API.

Pronto, agora só utilizar o seguinte comando para baixar as dependências do projeto:

```sh
yarn
```

Como a versão do react native já é 0.61+, observe se ele reclama sobre link automático nas dependências:

```
react-native-vector-icons
@react-native-community/async-storage
```

Se disser que foi feito link manual e que não era necessário do link automático, pule para esta parte, senão, realize os seguintes comandos no terminal:

```sh
react-native link react-native-vector-icons
react-native link @react-native-community/async-storage
```

Pronto, agora basta deixar o emulador ligado/conectado e executar o seguinte comando:

```sh
react-native run-android
```

---

## 📁 Repositórios Originais

Para conferência dos histórico de commits, basta clicar em algumas das opções abaixo para poder ir pro repositório original de cada.

- [Backend](https://github.com/ThomasNeo/meetapp-backend)
- [Frontend](https://github.com/ThomasNeo/meetapp-reactjs)
- [Mobile](https://github.com/ThomasNeo/meetupNative)

---
Desenvolvido 🙃 por Thomas Lossio.