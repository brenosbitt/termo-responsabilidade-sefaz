# Termo de Responsabilidade - SEFAZ

Este projeto é uma aplicação simples, em formato estático, para exibir um formulário de termo de responsabilidade voltado a sistemas da SEFAZ. A interface foi desenvolvida com HTML e CSS e é servida por um container Docker com Nginx.

## O que é o projeto

A aplicação tem como objetivo disponibilizar uma página com o conteúdo do termo de responsabilidade de forma prática, leve e de fácil acesso. Como é um projeto estático, não há backend ou banco de dados.

## Estrutura das pastas

```text
termo-responsabilidade-sefaz/
├── src/                      # arquivos da interface do formulário
│   ├── assets/               # arquivos estáticos compartilhados
│   ├── termo-contadoria/     # interface do termo da contadoria
│   └── termo-responsabilidade/ # interface do termo de responsabilidade
├── Dockerfile                # imagem Docker usada para servir a aplicação
├── docker-compose.yml        # configuração do container e da porta
├── nginx.conf                # configuração do servidor Nginx
├── .env                      # variáveis de ambiente, incluindo a porta
└── .dockerignore             # arquivos ignorados na criação da imagem
```

## Endpoints de acesso

- `/` — acesso ao termo de responsabilidade
- `/responsabilidade/` — acesso ao termo de responsabilidade
- `/contadoria/` — acesso ao termo da contadoria

## Como subir na máquina virtual

1. Acesse a pasta do projeto:
   ```bash
   cd termo-responsabilidade-sefaz
   ```

2. Suba o container com Docker Compose:
   ```bash
   docker compose up -d --build
   ```

3. Acesse a aplicação no navegador:
   ```text
   http://localhost:8082
   ```

**Observação:** se quiser alterar a porta, basta mudar o valor de `WEB_PORT` no arquivo `.env` e reiniciar o Docker.
