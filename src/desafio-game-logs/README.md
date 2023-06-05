# Descrição

Esse desafio consiste em pegar os logs de um jogo imaginário e executar uma série de lógicas em cima dos logs para trazer dados, por meio de filtros, agrupamentos e outras operações baseadas em listas.

# Desafio 1

Fazer um request no servidor que retorna uma `string` com todo o log das partidas do jogo. O request para o endpoint é `/game/matches/{MATCHES}/heroes/{HEROES}`

# Desafio 2

Ordenar os logs pela propriedade `match`, de forma crescente. O tipo do atributo é `number`.

# Desafio 3

Agrupar os logs pela propriedade `match`

# Desafio 4

Exibir em tela os seguintes resultados:

- Número de ataques realizados por um herói (contar a propriedade `action=attacked`)
- Número de curas realizadas por um herói(contar a propriedade `action=healed`)
- Número de provocações feitas por um herói (contar a propriedade `action=taunted`)
- Total de interações que um herói teve (contabilizar todas as actions de um herói, seja ele como `hero` ou como `target`)
- Número de jogadas por partidas