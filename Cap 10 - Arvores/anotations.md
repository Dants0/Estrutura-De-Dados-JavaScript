Percurso em ordem: Um percurso em ordem (in-order) visita todos os nós de uma BST em ordem crescente, o que significa que todos os nós serão visitados, do menor para o maior. Uma aplicação do percurso em ordem seria ordernar uma árvore.

Percurso pré ordem: Um percurso pré ordem (pre-order) visita o nó antes de visitar seus descendentes. Uma aplicação do percurso pré-ordem seria exibir um documento estruturado.

Percurso pós ordem: Um percurso pós ordem (post-order) visita o nó depois de visitar seus descendentes. Uma aplicação do percurso pós-ordem poderia ser calcular o espaço usado por um arquivo em um diretório e em seus subdiretórios.

---------------------------------------------------------------------------------------------------------------------------------------

Pesquisando valores em uma Árvore, há três tipos de pesquisa que geralmente executamos em árvores

<li>Removendo um nó</li>
<li>Pesquisa de valores máximos</li>
<li>Pesquisa de um valor especifico</li>

---------------------------------------------------------------------------------------------------------------------------------------

Removendo um nó

<li>Removendo um nó</li>
<li>Removendo uma folha</li>
<li>Removendo um nó com um filho ou à esquerda ou à direita</li>
<li>Removendo um nó com dois filhos</li>
<li>Árvores autobalanceadas</li>
<li>Árvore de Adelson-Velskii e Landi (árvore AVL) </li>

---------------------------------------------------------------------------------------------------------------------------------------

AVL Tree - Adelson-Velskii e Landi

Fator balanceamento - Sempre que um nó for inserido ou removido da árvore, devemos calcular a diferença entre a altura da subárvore do lado direito (hr) e da subárvore do lado esquerdo (hl). O resultado de hr - hl deve ser 0, 1 ou -1. Se o resultado for diferente desses valores, é sinal de que a árvore precisa ser balanceada. Esse conceito se hama fator de balanceamento ou fator de balanço.


A diferença entre os percursos em-ordem e pre-ordem é que o percurso pré-ordem visita o nó raiz antes. **callback(node.key)**


---------------------------------------------------------------------------------------------------------------------------------------

LL (Left-Left) -> É uma rotação simples à direita.
RR (Right - Right) -> É uma rotação simples à esquerda.
LR (Left - Right) -> É uma rotação dupla à direita (rotação à esquerda e depois à direita).
RL (Right - Left) -> É uma rotação dupla à esquerda (rotação à direita e depois à esquerda).
