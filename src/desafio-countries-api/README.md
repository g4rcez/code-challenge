# Contexto

Os desafios 1, 2 e 3 são interligados, resolver um irá ajudar na resolução do próximo desafio.

# Desafio 1

1. Crie uma função de ordenação alfabética. Essa função deve receber uma lista de objetos quaisquer e uma property que deve ditar qual será o campo a ser considerado. Abaixo você pode observar a assinatura padrão da função (sinta-se a vontade para alterar da forma que achar melhor)

```typescript
type Sort = (list: any, key: string) => any[];
```

## Especificacões

- Essa função deverá trabalhar com generics e a key deverá ser uma chave do generics recebido da lista.

# Desafio 2

1. Fazer um request HTTP a [API de países](https://restcountries.com/v3.1/all)
    1. Armazenar os países em uma variável
    2. Ordenar os países do mais populoso para o menos populoso

Para facilitar, o output desse request está em `src/mocks/countries.json` e seu tipo no arquivo `src/mocks/country.type.ts`. Você pode fazer um request em `localhost:5000/countries` caso esteja usando o servidor local do teste.

# Desafio 3

1. Dado o que foi feito, criar uma API que retorne os países seguindo o padrão REST
2. `GET /` retorna todos os países, podendo usar a queryString `name=string` para filtrar nomes de países
3. Deve-se aplicar paginação em `GET /` utilizando `page` e `offset` como parâmetros
4. `GET /{name}` retorna o país dado o seu `name.common`
5. Deverá ser utilizado o express para a implementação do endpoint

# Bônus de implementação

- Adicionar validação aos requests da API
- Escrever testes de unidade
- Escrever testes de integração

