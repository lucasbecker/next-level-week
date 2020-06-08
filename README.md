# ![](https://github.com/lucasbecker/next-level-week/blob/master/header.png?raw=true)

![](https://img.shields.io/badge/npm-6.14.4-34CB79) ![](https://img.shields.io/badge/node.js-12.17.0-6633CC) ![](https://img.shields.io/badge/web-react-34CB79) ![](https://img.shields.io/badge/mobile-react--native-6633CC)

O projeto intitulado "Ecoleta" foi inicialmente desenvolvido durante a primeira [Next Level Week](https://nextlevelweek.com/) da [Rocketseat](https://rocketseat.com.br/) com o intuito de aprender na prática ferramentas e conceitos para acelerar a evolução como desenvolvedor. O projeto foi desenvolvido utilizando as tecnologias NodeJS, React, React-Native e outras, de modo que foi contruido um servidor API RESTful e banco de dados SQLite sendo alimentado por dados fornecidos através de uma aplicação web e tendo os seus dados acessados através de uma aplicação mobile. 

## Objetivo

O Ecoleta é um marketplace de coleta de resíduos que ajuda pessoas a encontrarem pontos de coleta de forma eficiente. O seu objetivo é conectar entidades que coletam resíduos que precisam de descartes específicos a pessoas que possuem esses resíduos para descarte. Assim, ajudando pessoas a econtrarem pontos de coleta de forma eficiente e reduzindo o descarte indevido de resíduos potencialmente perigosos como pilhas, baterias e lâmpadas.

## Tecnologias
A proposta do projeto era todas as tecnologias ficarem "dentro" do JavaScript, assim, esse projeto foi desenvolvido utilizando as tecnologias listadas a seguir em conjunto do TypeScript.

### Server
* Node.js, Express, KnexJS, SQLite3, Celebrate, Multer, CORS, Hapi/Joi e outros.

### Web
* React, React Router Dom, React Dropzone, React Icons, React Leaflet, Leaflet, Axios e outros.

### Mobile
* React-Native, React Native Maps, React Native SVG, React Navigation, Expo, Expo Google Fonts, Expo Constants, Expo Location, Expo Mail Composer, Axios e outros.

## Funcionalidades da API
- [ X ] Cadastrar os pontos de coleta.
- [ X ] Listar os itens de coleta.
- [ X ] Listar pontos de coleta.
- * Filtrar por estado, cidade ou item.
- [ X ] Listar um ponto de coleta específico. 

## Comandos Para Execução
#### Iniciar server
```sh
npm run dev
```

#### Migrar banco de dados e iniciar com dados padrões
```sh
npm run knex:migrate

npm run knex:seed
```

#### Iniciar aplicação web
```sh
npm start
```

#### Iniciar aplicação mobile
```sh
expo start
```

## Proximos Passos
Desafios propostos:
- [ ] Tela de confimação após cadastro do ponto de coleta.
- [ ] Opção de atualizar e remover cadastro de pontos de cadastro.
- [ ] Tornar os inputs da Home da aplicação mobile semelhantes aos selects do formulario de cadastro de pontos de coleta da aplicação web utilizando a API do IBGE e o react-native-picker-select.
- [ ] Implementar o fileFilter do multer para escolher os tipos de arquivos permitidos no cadastro de pontos de coelta.

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo ``LICENSE`` para mais informações.

