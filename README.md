<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/isabellaSolarte/Proyecto2-CruzRoja.git">
    <img src="public/icono-calculadora.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">Cruz Roja Carbon FootPrint</h3>

  <p align="center">
    Cruz Roja Carbon FootPrint es una plataforma web desarrollada con React y TypeScript que tiene como objetivo ayudar a las empresas a calcular y reducir su huella de carbono. La plataforma está diseñada utilizando la metodología Atomic Design, lo que garantiza una arquitectura modular, escalable y fácil de mantener.
  </p>
</div>

> [!WARNING]
> Como aclaración se tiene hacer que el proyecto va enfocado a la producción de gases de efecto invernadero por lo que puede que muchos tipos de contaminación no se tengan encuenta, la información de huella de carbono se obtiene de diferentes estudios encontrados en el internet, se le sugiere buscar estudios de fuentes confiables que provean la información con la cuál se va a "alimentar" el sistema.

## Built With
- [![React][React-shield]][React-link]
- [![TypeScript][TypeScript-shield]][TypeScript-link]

## Configuración inicial
1.Instale las dependencias 
```sh
   npm i --force
   ```
2. configurar prettier y eslint con los archivos de configuración en la raíz del proyecto
3. Inicie el proyecto con el comando
```sh
   npm run dev
   ```

## Estructura de proyecto

```bash
src\
 ├─adapters\
 ├─assets\
 ├─components\
 │├─Atoms\
 │├─Layouts\
 │├─Molecules\
 │└─organims\
 ├─Configs\
 │ ├─locales\
 │ │ └─es\
 │ └─theme\
 ├─context\
 ├─core\
 ├─hooks\
 ├─models\
 ├─pages\
 │ └─examplePageFolder\
 │   ├─adapters\
 │   ├─components\
 │   ├─hooks\
 │   ├─models\
 │   └─syledComponents\
 ├─recoil\
 │ ├─states\
 │ └─store\
 ├─router\
 ├─services\
 ├─styledComponents\
 ├─pages\
 └─utils\
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-link]: https://reactjs.org/
[TypeScript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-link]: https://www.typescriptlang.org/

## Bibliotecas

- MaterialUi (diseño de componentes) https://mui.com/material-ui/getting-started/
- Recoil (Manejador de estados) https://recoiljs.org/docs/introduction/core-concepts
- Axios (promesas HTTP para peticiones al backen) https://axios-http.com/docs/intro

## Recomendaciones

- Actualizar los archivos de barril(index.ts) de un folder si se crea un nuevo archivo dentro de el.
- instalar la extensión auto barrel si se usa vscode para facilitar el manejo de archivos de barril.

## Patrones de diseño
Se usa atomic design.
leer -https://danilowoz.com/blog/atomic-design-with-react

GitFlow.
leer - https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow - https://www.freecodecamp.org/news/practical-git-and-git-workflows/

Fuente para los íconos: https://mui.com/material-ui/material-icons/

## API's externas

- https://documenter.getpostman.com/view/1134062/T1LJjU52#2e131a94-a28e-4cfe-95fe-d10c0e40eae7
- https://restcountries.com/
<p align="right">(<a href="#readme-top">back to top</a>)</p>
