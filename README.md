# Customer Management System - Frontend

Este é o repositório do frontend para o Customer Management System, um sistema de gerenciamento de clientes desenvolvido como parte do teste de programação para a vaga de desenvolvedor na Facilita Jurídico.

**Importante:** O backend para este projeto está em um repositório separado. Certifique-se de também clonar e configurar o backend para o funcionamento adequado do sistema. O repositório do backend pode ser encontrado em [customermanagementsystem-backend](https://github.com/seu-usuario/customermanagementsystem-backend).

## Ferramentas Utilizadas

- **React:** v18.2.0
- **React DOM:** v18.2.0
- **Axios:** v1.6.5
- **Cors:** v2.8.5
- **React Modal:** v3.16.1

### Ferramentas de Desenvolvimento

- **Vite:** v5.0.8
- **Eslint:** v8.55.0
- **@vitejs/plugin-react:** v4.2.1
- **@types/react:** v18.2.43
- **@types/react-dom:** v18.2.17
- **Eslint-plugin-react:** v7.33.2
- **Eslint-plugin-react-hooks:** v4.6.0
- **Eslint-plugin-react-refresh:** v0.4.5

## Como Iniciar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

1. **Clone ambos os repositórios (frontend e backend):**

   ```bash
   git clone https://github.com/seu-usuario/customermanagementsystem-frontend.git
   git clone https://github.com/seu-usuario/customermanagementsystem-backend.git
   cd customermanagementsystem-frontend

Instale as dependências para ambos os projetos (frontend e backend):

bash
Copy code
# No diretório frontend
cd customermanagementsystem-frontend
npm install

# No diretório backend
cd ../customermanagementsystem-backend
npm install
Inicie ambos os servidores de desenvolvimento (frontend e backend):

bash
Copy code
# No diretório frontend
npm run start

# No diretório backend
npm run start
O aplicativo frontend estará disponível em http://localhost:3000 e o servidor backend em http://localhost:porta.

Observação: Certifique-se de que ambos os servidores estejam em execução simultaneamente para o correto funcionamento do sistema.

Scripts Disponíveis
Iniciar o servidor de desenvolvimento (frontend):

bash
Copy code
npm run start
Construir a aplicação para produção (frontend):

bash
Copy code
npm run build
Executar o linter para verificar e corrigir problemas no código (frontend):

bash
Copy code
npm run lint
Visualizar a construção da aplicação antes de criar (frontend):

bash
Copy code
npm run preview
Iniciar o servidor de desenvolvimento (backend):

bash
Copy code
npm run start
Construir a aplicação para produção (backend):

bash
Copy code
npm run build
Executar o linter para verificar e corrigir problemas no código (backend):

bash
Copy code
npm run lint
Visualizar a construção da aplicação antes de criar (backend):

bash
Copy code
npm run preview