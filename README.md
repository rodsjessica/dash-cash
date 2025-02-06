# DashCash - Sistema Financeiro

Este projeto é um sistema financeiro simples que permite aos usuários visualizar transações, entradas, despesas e saldo total. Ele inclui uma página de login, uma página inicial e um dashboard com gráficos e cards para exibir informações financeiras.

---

## Instalação

Siga os passos abaixo para instalar e executar o projeto localmente.

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**

   ```bash
   [git clone [https://github.com/rodsjessica/dash-cash.git)]
   cd dashcash


2. **Instale as dependências**

npm install
# ou
yarn install

3. **Execute o projeto**

npm run dev
# ou
yarn dev

3. **Acesse o projeto**

Abra o navegador e acesse http://localhost:3000.

*Observações Relevantes*
Login: Para acessar o sistema, utilize o usuário teste e a senha 1234.

Dashboard: Após o login, você será redirecionado para o dashboard, onde poderá visualizar as transações financeiras em gráficos e cards.

Logout: Para sair do sistema, clique no botão "Logout" na barra lateral.

*Estrutura do Projeto*
Páginas:

login: Página de login para acessar o sistema.

home: Página inicial com uma breve descrição do sistema.

dashboard: Página principal com gráficos e cards que exibem informações financeiras.

Componentes:

Sidebar: Barra lateral com navegação e botão de logout.

Card: Exibe informações sobre entradas, despesas e saldo total.

Chart: Gráfico de barras que mostra o número de entradas e despesas.

LineChart: Gráfico de linhas que mostra o fluxo financeiro ao longo dos meses.

Estilos:

Os estilos são definidos usando styled-components e estão organizados em arquivos separados para cada componente/página.

*Dependências Principais:*
next: Framework React para renderização do lado do servidor e geração de sites estáticos.

react: Biblioteca para construção de interfaces de usuário.

styled-components: Biblioteca para estilização de componentes React.

react-toastify: Biblioteca para exibição de notificações (toasts).

chart.js: Biblioteca para criação de gráficos.
