# Cars Forms — Login & Cadastro

Tela de autenticação (Login/Cadastro) com fundo em vídeo, construída em HTML, CSS e JavaScript puro, estilizada com Bootstrap 5 e ícones Ionicons.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

## Demonstração

Abra o `index.html` diretamente no navegador — não é necessário build nem servidor.

## Funcionalidades

- **Vídeo de fundo em loop** (`video/cars.mp4`) cobrindo toda a tela.
- **Formulário de Login** com campos de Email e Senha, opção "Lembrar" e link "Alterar senha".
- **Validação de campos**: ao clicar em **Entrar**, o formulário verifica se os campos foram preenchidos corretamente (email válido e senha com no mínimo 4 caracteres) antes de prosseguir, exibindo mensagens de erro inline.
- **Cadastro interativo**: ao clicar em **Cadastrar**, o card alterna para um formulário de cadastro com os campos **Nome**, **Email** e **Senha**, também validados.
- **Totalmente responsivo (mobile-first)**: o layout se adapta a celulares, tablets e desktops.

## Estrutura do projeto

```
├── index.html      # Estrutura das telas de Login e Cadastro
├── style.css        # Estilos, tema escuro e responsividade
├── script.js        # Validação de formulários e alternância Login/Cadastro
└── video/
    └── cars.mp4      # Vídeo de fundo
```

## Tecnologias utilizadas

- HTML5
- CSS3 (media queries para responsividade)
- JavaScript (Vanilla)
- [Bootstrap 5](https://getbootstrap.com/)
- [Ionicons](https://ionic.io/ionicons)

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/marcolino1512/cars-forms.git
   ```
2. Abra o arquivo `index.html` no navegador.

## Licença

Este projeto está sob a licença MIT — veja o arquivo [LICENSE](LICENSE) para mais detalhes.
