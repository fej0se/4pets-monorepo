
# 🐶 🐱  4Pets
<p align="center"><img src="https://i.ibb.co/QJRM0XD/banner-mobile.png" /></p>

## Deploy link

[4pets.company](https://www.4pets.company)

## Time

**Hipster:** Otávio, Leonardo, Marcela, Débora

**Hacker:** Felipe

## Introdução

Nosso desafio foi criar uma vitrine para produto digital, preferencialmente utilizando PWA (é uma aplicação híbrida entre web e mobile). Após muita conversa e debate entre os membros da equipe, foi escolhido o mercado pet.

Essa decisão foi tomada através de um dot voting feito no Miro, no qual cada um do time escolheu um tema diverso e foi feito um levantamento dos prós e contras de cada um deles. No final do processo cada um deu um voto para o tema favorito.

Através de pesquisa com o usuário, mercado e benchmark optamos por utilizar somente roupas e acessórios para cachorros e gatos. Futuramente o site deve ser ampliado para atender outros animais de estimação.

    


## 🧰  Principais técnologias utilizadas

<p align="center"><img src="https://i.ibb.co/QC4K1S3/tecs.png" /></p>




**Client:** React, Javascript

**Server:** Node, NestJS, Typescript, MySQL, Jest

**Deploy:**  DigitalOcean

**Automação:** GitHub Actions
## 💻  Screenshots

<p align="center"><img width="100%" src="https://media.giphy.com/media/tKsZJCIQNVOGn1bTi9/giphy.gif" /></p>


  

# 🏭  Instalar e rodar o projeto

## Sem docker

1. Clonar o projeto
2. Instalar as dependências com: (caso não tenha yarn instalado executar antes ```npm i -g yarn```)

```bash
yarn install
```
3. Configurar as váriaveis de ambiente (seguindo os arquivos .env.example em casa projeto)
4. Rodar front
```bash
yarn start:front
```
5. Rodar back
```bash
yarn start:back
```


## Com docker

1. Clonar o projeto
2. Configurar as váriaveis de ambiente (dentro do Dockerfile)
3. Realizar o build do docker
```bash
docker-compose up --build
```


## 📖  API

#### GET - todos produtos/paginado

```http
  GET /api/v1/store/products?page=:number
```

#### GET - um produto

```http
   GET /api/v1/store/product/:id
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required** - Id do produto |

-----

#### POST - adicionar produto

```http
   GET /api/v1/store/product
```

| body | Tipo atributo    | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required** - nome do produto |
| `description`      | `string` | **Required** - descrição do produto |
| `image`      | `string` | **Required** - link da imagem do produto |
| `storeName`      | `string` | **Required** - nome da loja |
| `linkToProd`      | `string` | **Required** - link para loja |
| `sizes`      | `Array<string>` | **Required** - tamanhos do produto |
| `categoryId`      | `number` | **Required** - id da categoria que o produto pertence |

-----

  
#### DELETE - deletar produto

```http
   DELETE /api/v1/store/product/:id
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required** - Id do produto |

-----

#### PUT - atualizar produto

```http
   PUT /api/v1/store/product/:id
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required** - Id do produto |

| body | Tipo  atributo   | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Not Required** - nome do produto |
| `description`      | `string` | **Not Required** - descrição do produto |
| `image`      | `string` | **Not Required** - link da imagem do produto |
| `storeName`      | `string` | **Not Required** - nome da loja |
| `linkToProd`      | `string` | **Not Required** - link para loja |
| `categoryId`      | `number` | **Not Required** - id da categoria que o produto pertence |

-----

#### GET - Procurar por categoria e departamento 

```http
   GET /api/v1/store/findby?department=:department&category=:category&limit=:limit&page=:page&by=:by&order=:order
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `department`      | `number` | **Required** - id do departamento |
| `category`      | `number` | **Required** - id da categoria |
| `limit`      | `number` | **Required** - limite de produtos retornados |
| `page`      | `number` | **Required** - pagina atual |
| `by`      | `number` | **Required** - parametro a ser considerado na ordem (id, updatedAt...) |
| `order`      | `string` | **Required** - ordem de retorno ASC/DESC |

-----

#### GET - um produto

```http
   GET /api/v1/store/store/search?name=:name&page=:page
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required** - parametro a ser buscado|
| `page`      | `number` | **Required** - pagina atual |

-----

#### POST - criar categoria

```http
   POST /api/v1/store/department
```

| body | Tipo atributo    | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required** nome do departamento|

-----

#### POST - criar categoria

```http
   POST /api/v1/store/category
```

| body | Tipo  atributo   | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required** - nome da categoria |
| `departmentId`      | `number` | **Required** - id do departamento a qual vai pertencer|

-----

#### GET - procurar produtos de um departamento

```http
   GET /api/v1/store/getAllByDep?department=:id&limit=:limit&page=:page
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required** - id do departamento |
| `limit`      | `number` | **Required** - limite de retorno |
| `page`      | `number` | **Required** - pagina atual |


## Autores

- [@fej0se](https://www.github.com/fej0se)

  
