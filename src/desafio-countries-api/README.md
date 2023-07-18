# Contexto

Os desafios 1, 2 e 3 são interligados, resolver um irá ajudar na resolução do próximo desafio. Para ter certeza que tudo
está funcional, você pode rodar o seguinte comando:

# Regras

- Não pode utilizar nenhuma biblioteca diferente das listadas no package.json
- Tenha a extensão [LiveShare](https://code.visualstudio.com/learn/collaboration/live-share) instalada no
  seu [VsCode](https://code.visualstudio.com)
- Todas as funções devem ter sua entrada e saída bem definidas por tipos

````shell
npm run test:country
````

# Desafio 1

1. Crie uma função de ordenação alfabética. Essa função deve receber uma lista de objetos quaisquer e uma property que
   deve ditar qual será o campo a ser considerado. Abaixo você pode observar a assinatura padrão da função (sinta-se a
   vontade para alterar da forma que achar melhor)

```typescript
type Sort = (list: any, key: string) => any[];
```

## Especificacões

- Essa função deverá trabalhar com generics e a key deverá ser uma chave do generics recebido da lista.

# Desafio 2

1. Fazer um request HTTP a [API de países](https://restcountries.com/v3.1/all)
2. Armazenar os países em uma variável
3. Ordenar os países em ordem alfabética decrescente, pela propriedade `name.common`

Para facilitar, o output desse request está em `src/mocks/countries.json` e seu tipo no
arquivo `src/mocks/country.type.ts`. Você pode fazer um request em `localhost:5000/countries` caso esteja usando o
servidor local do teste.

# Desafio 3

1. Dado o que foi feito, criar serviço que será chamado por um controller do express
2. Retornar todos os países, podendo usar a queryString `fields[]` para exibir quais serão os campos informados
3. Deve-se aplicar paginação em utilizando `page` e `pageSize` como parâmetros
4. O retorno da sua função deverá ser:

```typescript
type Response = {
    items: Country[];
    nextPage: number;
    page: number;
    pageSize: number;
    previousPage: number;
    totalItems: number;
}
```