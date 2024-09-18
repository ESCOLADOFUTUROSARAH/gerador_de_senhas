# Gerador de Senha Avançado

Este projeto implementa um gerador de senhas avançado utilizando HTML, CSS e JavaScript. O usuário pode definir o comprimento da senha e quais tipos de caracteres incluir, como letras, números, pontuação e caracteres especiais. O sistema permite gerar múltiplas senhas de uma vez e exibe as senhas geradas paginadas na tela.

## Funcionalidades
Permite ao usuário definir:
- O comprimento da senha.
  - A inclusão de letras, números, pontuação e caracteres especiais.
  - O número de senhas a serem geradas.
  - Gera senhas aleatórias de acordo com as opções definidas.
- Exibe as senhas geradas na tela, com paginação para facilitar a visualização.
- Permite navegar entre as páginas de senhas geradas.

## Como Usar
1. Crie um arquivo HTML contendo os seguintes campos de entrada:
  - passwordLength (Comprimento da senha).
  - useLetters (Incluir letras: sim/não).
  - useNumbers (Incluir números: sim/não).
  - usePunctuation (Incluir pontuação: sim/não).
  - useSpecialCharacters (Incluir caracteres especiais: sim/não).
  - numberOfPasswords (Quantidade de senhas a serem geradas).
  - Um botão com o ID generateButton para gerar as senhas.
2. Inclua o código JavaScript para a lógica de geração de senhas em uma tag <script> ou em um arquivo .js separado.
3. Estilize os resultados utilizando CSS conforme preferir, e adicione classes para os controles de paginação.
4. Ao clicar no botão de gerar senhas, as senhas serão exibidas na página, com controles de navegação para visualizar múltiplas páginas.

## Exemplo de uso
1. Defina o comprimento da senha, selecione os tipos de caracteres e o número de senhas.
2. Clique em "Gerar Senhas".
3. As senhas geradas serão exibidas em uma tabela, e você poderá navegar entre as páginas de resultados utilizando os botões "Anterior" e "Próximo".

## Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.