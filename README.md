
```markdown
# Compass API

API simples em Node.js com Express para gerenciamento de cidades e clientes.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Git
- GitHub
- Postman

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/rnPedro/Compass-API.git
   ```

2. Instale as dependências do projeto:
   ```bash
   cd compass-api
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node index.js
   ```

4. Use o Postman ou outra ferramenta para testar a API conforme documentado.

## Funcionalidades

A API contempla as seguintes operações expostas como endpoints REST:

1. **Cadastrar Cidade**
   - Método: POST
   - Endpoint: `/api/cidades`
   - Corpo da Requisição: JSON com `nome` e `estado`

2. **Cadastrar Cliente**
   - Método: POST
   - Endpoint: `/api/clientes`
   - Corpo da Requisição: JSON com informações do cliente

3. **Consultar Cidade pelo Nome**
   - Método: GET
   - Endpoint: `/api/cidades/:nome`

4. **Consultar Cidade pelo Estado**
   - Método: GET
   - Endpoint: `/api/cidades/estado/:estado`

5. **Consultar Cliente pelo Nome**
   - Método: GET
   - Endpoint: `/api/clientes/:nome`

6. **Consultar Cliente pelo ID**
   - Método: GET
   - Endpoint: `/api/clientes/id/:id`

7. **Remover Cliente**
   - Método: DELETE
   - Endpoint: `/api/clientes/:id`

8. **Alterar o Nome do Cliente**
   - Método: PUT
   - Endpoint: `/api/clientes/:id/nome`
   - Corpo da Requisição: JSON com `novoNome`

## Estrutura do Projeto

- `index.js`: Arquivo principal que inicia o servidor Express.
- `rotas/`: Contém os arquivos de definição das rotas da API.
- `controladores/`: Contém os arquivos com as funções controladoras das rotas.
- `modelos/`: Contém os arquivos com as classes de modelo para Cidade e Cliente.

## Contribuindo

Sinta-se à vontade para contribuir com sugestões, correções de bugs ou novas funcionalidades. Basta seguir estes passos:

1. Fork o repositório
2. Crie um branch para a sua contribuição: `git checkout -b feature/nova-feature`
3. Faça o commit das suas alterações: `git commit -am 'Adicionando nova feature'`
4. Faça o push do branch para o seu fork: `git push origin feature/nova-feature`
5. Submeta um pull request

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
```

