# Bloom Store

Aplicação de e-commerce construída com React, Redux Toolkit e Material UI, com foco em performance, responsividade e experiência do usuário.

Link para testar online: https://bloom-products-eb3ptt4lh-lucas-bachegas-projects.vercel.app/

## Tecnologias utilizadas

- React.js com TypeScript
- Redux Toolkit para gerenciamento global de estado
- Redux Persist para manter o carrinho salvo no localStorage
- React Router DOM para navegação entre páginas
- MUI (Material UI) para componentes visuais e responsividade
- Axios para consumo da Fake Store API
- Fake Store API como backend simulado

## Principais funcionalidades

- Pesquisa de produtos com debounce e URL sincronizada
- Carrinho persistente com adição, remoção e controle de quantidade
- Aplicação de desconto automática para a categoria "men's clothing"
- Layout responsivo e adaptável a qualquer tamanho de tela
- Página de detalhes com visual promocional
- Paginação dinâmica por quantidade de itens por página
- Modo claro e escuro alternável

## Como executar localmente

1. Clone o repositório:

git clone https://github.com/lucasbachega/bloom-products.git
cd bloom-store

2. Instale as dependências:

npm install

3. Inicie o projeto:

npm start

A aplicação estará disponível em http://localhost:3000

## Estrutura do projeto

src/
├── components/        - Componentes reutilizáveis
├── pages/             - Páginas principais (Home, Detalhes)
├── store/             - Redux slices, selectors e store configurado
├── hooks/             - Hooks personalizados
├── services/          - API e integração com Axios
├── types/             - Tipagens e interfaces globais

## Deploy

Hospedado na Vercel com build automático.

## Autor

Lucas Bachega
