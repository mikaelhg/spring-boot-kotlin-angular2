### POC: Kotlin + Spring Boot + Angular 2 + TypeScript

```bash
mvn clean package spring-boot:run
```

The project provides backend services using Spring Boot, and generates a nice clean JavaScript 
frontend using the Maven Frontend plugin to first fetch a relevant Node.JS binary package, NPM, 
then run `npm install` to fetch a shitload of JS modules, and execute the Angular-CLI build 
process through `npm run build`.

The Angular-CLI build compiles TypeScript into ES5, SASS into CSS, template languages into HTML,
and uses Webpack to combine it all into a great big honking library, which the browser can then
load and run.

The frontend stuff gets compiled into the directory specified in the `outDir` parameter of the 
`angular-cli.json` configuration file. With a Spring Boot web app, we want to stuff it into the
build's class path, under `/static`.
