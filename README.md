# Gestão de Projetos e Controle Financeiro 🫰

## Visão Geral
Este projeto consiste em uma **solução básica de gestão de projetos e controle financeiro**, permitindo que usuários registrem, acompanhem e organizem transações financeiras associadas a diferentes projetos.  
O objetivo principal é fornecer uma **ferramenta prática, funcional e de fácil utilização**, simulando a entrega de um sistema para um cliente real.

---

## Objetivos do Projeto
- Registrar transações financeiras (receitas e despesas) vinculadas a projetos.
- Visualizar histórico de transações de forma organizada.
- Acompanhar saldo e movimentações financeiras em tempo real.
- Demonstrar **planejamento e documentação de um sistema**, simulando o trabalho de um analista de sistemas.

---

## Funcionalidades
- Adicionar, editar e excluir transações.
- Diferenciar transações de **receita** e **despesa**.
- Visualizar o **saldo atual**.
- Filtrar e ordenar transações por critérios como data ou valor.
- Interface intuitiva e responsiva.
- Modal para criação de novas transações.

---

## Tecnologias Utilizadas
- **Frontend:** React, JavaScript, CSS
- **Gerenciamento de Estado:** React Hooks (`useState`, `useEffect`)
- **Controle de Versão e CI/CD:** GitHub, GitHub Actions
- **Hospedagem/Deploy:** Apenas a documentação é o foco aqui.


---

## Estrutura do Projeto
```text
src/
├── components/      # Componentes reutilizáveis (Botões, Cards, Modais)
├── pages/           # Páginas principais (Dashboard, Histórico de transações)
├── services/        # Serviços para lógica de negócios ou APIs futuras
├── App.jsx          # Componente principal
└── index.js         # Ponto de entrada do React
