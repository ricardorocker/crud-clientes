# Projeto Angular de CRUD de Clientes
Bem-vindo ao repositório do projeto CRUD de Clientes desenvolvido em Angular. Este projeto inclui funcionalidades de listagem, formulário, estilos personalizados, serviços, pipes, validadores, modelos e componentes reutilizáveis.

## Capturas de Tela

### Tela Principal
![image](https://github.com/ricardorocker/crud-clientes/assets/76121782/c7b0ad1b-884f-4bdb-85ed-691b58d3f487)

### Tela de Edição
![image](https://github.com/ricardorocker/crud-clientes/assets/76121782/a1d90b42-e1f0-401f-99ca-9a3aaa3d67e7)

### Card de feedback
![image](https://github.com/ricardorocker/crud-clientes/assets/76121782/6f987216-73d3-416a-86d3-b6f3f85cdcdc)


## Estrutura do Projeto
### Views
- Listagem Component
- Formulário Component

### Estilos
- _variables.scss: Arquivo de variáveis para a estilização consistente.

### Serviços
- Cliente.service.ts: Serviço responsável por interagir com a API fake para operações CRUD de clientes.

### Pipes
- Cpf.pipe.ts: Pipe personalizado para formatar exibição de CPF.

### Validadores
- cpf.validator.ts: Validador personalizado para CPF.
- idade.validator.ts: Validador personalizado para idade.
- nome.validator.ts: Validador personalizado para nome.

### Modelos
- Cliente.ts: Modelo de dados para representar um cliente.
- Filtros.ts: Modelo de dados para representar filtros aplicáveis à listagem de clientes.

### Componentes Reutilizáveis
- Card
- Navbar

## Conhecimentos Técnicos Utilizados
- Criação de protótipo personalizado em Figma
- Criação de variáveis SCSS seguindo cores, tamanhos e pesos de fontes
- Estilos gerais
- Criação de dumb componentes
- @Input, @Output
- Interpolation
- ngOnInit
- ngIf, ngFor, ngTemplate, ngContainer
- ngModel, ngClass
- ReactiveForms, FormControls, FormValidators
- patchValue
- Custom Validators: ValidatorFn, ValidationErrors
- Mensagens de erros customizadas
- Máscaras (Ngx Masks)
- Pipes
- Custom Pipes (PipeTransform)
- Overlay
- Route, Route ID
- Service: HttpClient, HttpParams, GET, PUT, POST, DELETE
- RxJS: pipe, tap, map, switchMap, catchError
- Interfaces (Model)
- Card de feedback
- HttpParams: Filtro, Paginação, Ordenação
- JSON-Server (API Fake)

## Como Executar o Projeto

Para executar o projeto localmente, siga os passos descritos anteriormente. Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
ng serve

# Acesse a aplicação no navegador em http://localhost:4200/
````

#### Iniciar o JSON Server (API Fake)

O projeto depende de uma API fake fornecida pelo JSON Server para simular operações de CRUD. Certifique-se de iniciar o JSON Server antes de executar a aplicação Angular.

```bash
# Instalar o JSON Server globalmente (caso ainda não tenha)
npm install -g json-server

# Iniciar o JSON Server (a partir da raiz do projeto)
json-server --watch db.json
````

## Contato
Sinta-se à vontade para entrar em contato para mais informações ou esclarecimentos sobre o projeto.

- Nome: Ricardo S. Rocker
- Email: ricardo.santos.rocker@gmail.com
- GitHub: [GitHub Profile](https://github.com/ricardorocker)
- Website: [Ricardo Rocker's Website](https://ricardorocker.com/)
- Linkedin: [Ricardo Rocker's Linkdin](https://www.linkedin.com/in/ricardo-s-rocker/)
- Instagram: [Ricardo Rocker's Instagram](https://www.instagram.com/ricardorocker.developer/)
