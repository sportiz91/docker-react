/*
//64. Neccesary Commands

Los tres comandos que vamos a ejecutar son:
1. npm run start
2. npm run test
3. npm run build.

npm run start -> es un comando solo utilizado para development. Startupea el Development Server, que se usa para hostear nuestra app
y hacerla disponible en nuestro web browser.
Este servidor no es apropiado para usar en producción, solo se usa en Development.

npm run test -> corre cualquier test que esté asociado con el project. Cuando creamos una create-react-app, por default veremos
que tendremos algunos tests generados por default.

npm run build -> este comando se utiliza para agarrar todos los js files que están atados al project. Los concatena todos en un único
file que será servido en el ambiente de producción. 

Al tocar npm run build, veamos que se genera una nueva carpeta, llamada la build. La build tendrá una carpeta llamada static
donde adentro veremos un file llamado main.a0bxx.js -> este será el file de producción que tendrá que ser servido con AWS.

Q: In a create-react-app context, what happens when we run: "npm run build". Can you explain me what the build process is?
A: 
In a create-react-app project, running the command npm run build will start the build process for the project.
This process creates an optimized production build of the React app by performing the following steps:
Transpilation: The source code is transpiled from the ECMAScript 6 (ES6) syntax to browser-compatible ES5 syntax using Babel. 
This ensures that the code can run on any browser.
Bundling: The JavaScript files are bundled together using a tool like Webpack. 
This reduces the number of HTTP requests required to load the app and improves performance.
Minification: The bundled JavaScript files are minified to reduce their size. This is done by removing 
whitespace, comments, and other unnecessary characters. This reduces the size of the files that need to be downloaded and makes 
the app load faster.
Optimization: The build process optimizes the app by using techniques like code splitting, tree shaking, and 
caching to improve performance.
Asset Management: The process copies static files like images and CSS files 
to the build folder and ensures that they can be loaded by the browser.
Source Maps: The build process generates source maps that help with 
debugging by mapping the production code to the original source code.
Once the build process is complete, a build folder is generated that contains the optimized production build of 
the React app. This folder can then be deployed to a web server or a cloud-based hosting service.

Q: On the cloud-based hosting service, do I have to host all the build folder resulting from running 
npm run build? Or just the main.js it's ok?
A:
When you run npm run build in a Create React App project, it generates a production-ready build in the build folder.
This includes all the compiled code, as well as any static assets (such as images, fonts, etc.) that your application uses.
If you want to host your application on a cloud-based hosting service, you typically need to host all the contents of the build folder.
This is because the static assets and compiled code are all required for the application to work correctly.
In particular, you will need to serve the index.html file, which is the entry point to your application.
In some cases, you may be able to optimize the build output to reduce the amount of content that needs to be served.
For example, you might be able to use code splitting to split your JavaScript code into multiple chunks
which can be loaded on-demand as the user navigates your application.
However, this depends on the specific hosting service you are using and the requirements of your application.

Q: Inside my build folder, I have a static folder. Can you explain what is it?
A: 
The "static" folder is created by the Create React App build process and contains assets 
that are required by the application, such as images, fonts, and other static files that are referenced in the HTML and CSS files.
The static files are optimized and compressed during the build process to improve the performance of the application.
When the application is deployed, the static folder is typically included along with the other files in the build folder, 
as it contains the necessary assets for the application to function properly.
The static folder is typically served by the web server that is hosting 
the application, along with the other files in the build folder.

Q: Inside the static folder, I have a "js" folder. Can you explain it?
A:
The "js" folder inside the "static" folder in a build directory of a create-react-app 
project typically contains all the JavaScript files generated during the build process.
These JavaScript files are usually created by Webpack, a popular module bundler, which is used by create-react-app 
to bundle and optimize the code.
Webpack takes all the JavaScript modules used in the project and generates a single JavaScript file that can be 
loaded in the browser.
This process includes transpiling the code to make sure it works on all browsers, 
minifying and compressing the code to make it smaller and faster to load
and generating source maps to help with debugging.
The resulting JavaScript file in the "js" folder is the optimized and bundled version of all the JavaScript files used in the app
This file can be included in the HTML file of the app, and it will contain all the necessary logic to make the app work properly.

Q: Inside the JS folder, I have some chunk.js files, main.js files and for both, .map files too. Can you explain all of them?
A:
In a create-react-app project, when you run npm run build, the build process generates a build folder with several 
subfolders and files that are used to serve your application to the client.
Inside the build/static/js folder, you will find the JavaScript code for your React application.
The JavaScript code is separated into several files: the main.js file and one or more chunk.js files. 
These files contain the compiled JavaScript code for your React components and other application logic.
The main.js file is the entry point of your application. It includes all the code required to start 
your React application and render the initial user interface.
The chunk.js files contain additional code that was split from the main.js file to optimize the loading speed of your application.
The .map files are source map files, which contain information to help debug the original JavaScript code.
These files map the compiled JavaScript code to the original source code, 
allowing you to debug the application as if you were working with the original source code. 
Source maps are useful when you need to debug minified code, as the original code is often hard to read and understand without them.

Q: Can you tell me what happens when we run npm run start?
A:
When you run npm run start in a create-react-app project, the development server starts up.
This server allows you to preview your application in the browser and provides hot-reloading so that any changes 
you make to your code are automatically reflected in the browser without the need for manual refreshes.
The start script runs the react-scripts start command, which does a number of things:
1. It sets up the development server, which listens for requests and serves the appropriate content.
2. It compiles your code using Babel, a JavaScript compiler that can transform your modern JavaScript 
code into a format that's compatible with older browsers.
3. It compiles your CSS and other assets, such as images and fonts, using webpack, a module bundler 
that can combine multiple files into a single file.
4. It watches for changes in your code and recompiles and reloads the browser as needed.
Once the server is running, you can view your application by navigating to http://localhost:3000 in your browser.

Q: What is the development server? Can you explain me in detail?
A:
In software development, a development server is a server that is used during the development phase of a software project.
It is designed to simulate the production environment in which the application will run,
, but in a controlled and isolated way that allows for rapid development and testing.
In the context of web development, a development server typically serves static files and dynamically generated content over HTTP.
It can also be used to simulate the behavior of various client devices, such as desktop and mobile browsers,
to help ensure that an application looks and behaves correctly on different platforms.
The development server often includes features such as automatic code reloading, which allows developers to see changes
to the code in real-time without needing to manually reload the page.
It may also include debugging tools and logging capabilities to help developers track down issues and troubleshoot problems.
Many web development frameworks and tools provide their own built-in development servers, such as the 
development server included with create-react-app.
Developers can also create their own development servers using tools such as Node.js, Express, or Apache.

65. Create the Dev Dockerfile
Vamos a necesitar dos Dockerfiles. Uno que corra en development, y otro que corra en production.
Al Dockerfile de dev lo llamamos Dockerfile.dev. Al Dockerfile de production lo llamamos Dockerfile a secas.
En Development, el comando que deberá correr el Dockerfile.dev será npm run start.
En Production, el comando que deberá correr el Dockerfile será npm run build.

66. Duplicating Dependencies
En la sección pasada vimos algo raro, y es que se envió todo al Docker daemon y algo así como 156 MB. 
"Sending Build Context to Docker Daemon 155.2 MB."
En nuestro caso vemos las siguientes líneas de comando -> " => [internal] load build context                               3.5s 
 => => transferring context: 3.14MB  "
El problema es que cuando instalamos la create-react-app, esa tool automáticamente instaló todas las dependencias en nuestro root
directory del projecto. 
Entonces, como podemos ver, tenemos un node_modules a la izquierda. 
Es decir, 155MB de dependencias.
En el pasado, no instalamos ninguna de nuestras dependencias en el root folder. En vez de eso, dependíamos de nuestra Docker image
para instalar las dependencias. 
Entonces, en el presente, tenemos dos copias de dependencias: y no necesitamos dos. 
La solución fácil acá es borrar el node_modules adentro de nuestro working directory. 
Si luego de eso intento runnear el docker build por segunda vez, notaremos que va mucho más rápido.
Es decir, va tan rápido como cuando corríamos el Node Server usando Docker. 

Q: Can you explain me the problem of duplicating dependencies in Docker?
A:
Duplicating dependencies in Docker can lead to issues with the size of the Docker image, making it larger than necessary.
This can also lead to issues with maintaining the dependencies in the long term.
For example, if one project is using one version of a dependency, and another project is using 
a different version of the same dependency, this can cause conflicts and make it difficult to manage the dependencies.
Additionally, duplicating dependencies in Docker can lead to longer build times and slower deployment
as the Docker image needs to be rebuilt and redeployed every time the dependencies change.
To address this issue, it is often recommended to use a package manager, such as npm or pip, to manage dependencies, and to use 
Docker's layer caching feature to minimize the size of the image.
This involves carefully structuring the Dockerfile to ensure that dependencies are only installed when necessary 
and that they are reused across multiple images where possible.

Q: Where can I locate the installation of the dependencies in a dockerfile to avoid duplication? Can you show me with example code?
A:
To avoid duplicating dependencies in a Dockerfile, you can use multi-stage builds.
Multi-stage builds allow you to separate the build environment from the runtime environment,
so you can install dependencies in the build environment, and copy only the necessary files to the runtime environment.
Here's an example Dockerfile using multi-stage builds:
# Build environment
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime environment
FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["npm", "start"]

In this example, the Dockerfile has two stages: the build environment and the runtime environment.
In the build environment, we copy the package*.json files, install the dependencies, and copy the rest of the application code.
We then run the build command to create the production build.
In the runtime environment, we copy only the necessary files from the build environment 
(in this case, the dist directory), copy the package*.json files, install the production dependencies, 
and start the application with the npm start command.

Q: What is the AS command in the above code? Can you explain me?
A:
The AS command in a Dockerfile is used to create an alias for a previously defined image or container.
In the given example, the alias is used to copy the installed dependencies from a previous image to the current image being built.
Specifically, in the example code provided, the AS command is used to create a named intermediate image named dependencies
This image contains the node_modules installed by running npm install in a previous stage of the build process.
Then, in the current stage, the COPY --from=dependencies command is used to copy the node_modules 
from the dependencies image into the current image being built.
This avoids duplicating the installation process for dependencies, as the node_modules are already installed in the dependencies image.
The AS command is part of the Docker multi-stage build feature, which allows for multiple FROM statements in a single Dockerfile
each defining a separate stage of the build process. This feature helps to optimize the size and efficiency 
of the resulting Docker image.

Q: What is the * in package*.json. Can you show me some example name files that are resulting for this?
A:
The * character in a file path is known as a wildcard, and it matches any character or set of characters in a file name.
In the context of a Dockerfile, the * can be used to match any version of a file that has a specific naming pattern.
In the specific case of package*.json, the * is matching any file that starts with the word "package" and ends with the extension ".json". 
For example, some of the files that could match this pattern are:
package.json: This is the most common name for the configuration file of a Node.js project, which lists the project's 
dependencies and other metadata.
package-lock.json: This file is automatically generated by npm to lock the dependencies 
of a project to specific versions, ensuring consistency across different installations.
package.prod.json: This file could be an alternative configuration file that sets production-specific options for the project.

Q: Can you explain in detail what is package-lock.json? Can you explain me the syntax with example code? 
What is the purpose for package-lock.json?
A:
package-lock.json is a file that lists the exact version of every package that was installed in a project using npm.
It is generated automatically by npm when installing packages, and is intended to ensure that the same versions 
of packages are installed in the future
even if some versions are updated or removed from the npm registry.
The file is used in combination with package.json to specify the dependencies of a project and their exact versions.
The file contains information about the resolved dependency tree of a project, including the full 
list of dependencies, their versions, and the versions of their transitive dependencies.
It also includes the exact URLs used to download the packages, and a cryptographic hash of the package contents to ensure integrity.
Here's an example of what a package-lock.json file might look like:
{
  "name": "my-project",
  "lockfileVersion": 1,
  "dependencies": {
    "axios": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/axios/-/axios-0.21.1.tgz",
      "integrity": "sha512-dp0DhMeeJ+gCYUTwS0FAKLW4A4GQ7KwMKn3wJwT+MZL14juT3Pzi9DpfHx/1aAXsVGhMgJgqrDFYwKwB4LJoQ==",
      "requires": {
        "follow-redirects": "^1.14.0"
      }
    },
    "follow-redirects": {
      "version": "1.14.0",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.14.0.tgz",
      "integrity": "sha512-HaA2V+Kf1Mjb+ZVnbRI1LJxz7hFmrPQFFxXyDXeXZfzPc3lNb3Cw5ZyVoE/m+d0fRPv/9XpU6Mb+B+6NjU6Mw=="
    }
  }
}
In this example, the file lists the packages axios and follow-redirects, along with their exact versions and resolved URLs.
The integrity field contains a cryptographic hash of the package contents, which ensures that the downloaded packages
match the original packages published to the registry.
When running npm install, npm will use the package-lock.json file to install the exact versions of packages specified in the file, 
even if newer versions are available on the registry. 
}This helps to ensure consistency and prevent issues that can arise from using different versions of the 
same package across different environments.
In short, package-lock.json is an important file that ensures that a project's dependencies are installed consistently and reproducibly.
It should be committed to source control along with the project's package.json file, to ensure that others 
can install the project's dependencies correctly.

Q: What is a Runtime enviorment?
A:
A runtime environment is a specific configuration of software, hardware, 
and system settings that determines how a computer program or script runs.
It includes a specific version of an operating system, any required dependencies or libraries
and settings such as environment variables that may be needed for the program to function properly.
In simpler terms, a runtime environment is a platform where software can be executed.
It provides the necessary components and settings for a program to run as intended.
Some common examples of runtime environments include web browsers, virtual machines, and operating systems.

Q: In the above example, can we assume that the runtime environment is refering as the final Docker container 
(and not the intermediate one)?
A:
Yes, in the given example, the runtime environment is referring to the final Docker container that will be built from the intermediate 
container created in the previous step
The dependencies installed in the intermediate container will be copied to the final container using the COPY command
and the application will be executed in the final container. The final container is 
the runtime environment where the application will run.

Q: In the COPY instruction, can you explain me the --from flag?
A:
The --from flag is used to specify the source container or image from which to copy files or directories.
This is particularly useful in multi-stage builds, where you can use files from an earlier 
build stage in a later stage without including unnecessary files or dependencies.
For example, consider a Dockerfile with two stages:
FROM node:14.17-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21-alpine
COPY --from=builder /app/build /usr/share/nginx/html
In the above example, we have two stages: builder and nginx. In the builder stage, 
we copy the package*.json files, install dependencies, copy the rest of the source code, and build the application.
In the nginx stage, we copy the built files from the builder stage into the Nginx container.
The --from=builder flag specifies that we want to copy files from the builder stage instead of the current stage, which is nginx
The source path /app/build specifies the files to copy, and the destination path /usr/share/nginx/html 
specifies the location in the nginx container where the files should be copied.

Q: And what is the dist folder? Can you explain me in detail?
A: The dist folder, short for "distribution", is a conventionally used folder in many programming languages 
and frameworks to store the compiled or transpiled output of the application's source code.
For example, in a typical JavaScript web application built with a tool like webpack, the dist folder 
may contain the transpiled and minified JavaScript files
CSS files, and any other assets that are ready to be deployed to a production server.
The contents of the dist folder are usually generated by a build tool, such as webpack or Gulp,
which takes the application's source code and compiles or transpiles it into a form that can be run in a web browser or on a server.
In a Docker context, the dist folder is often copied into a container to be served by a web server or other application server.
The exact content and structure of the dist folder depends on the specific application and build configuration, 
but it typically includes the files needed to run the application in production.

Q: We had: RUN npm install --production. Can you explain me the --production flag? What differences are with no flag?
A: 
The --production flag is used with the npm install command to install only the production dependencies in a Node.js project.
This means that any development dependencies (such as testing frameworks, build tools, etc.) are not installed.
By default, npm install will install both production and development dependencies.
The main difference between installing production and development dependencies 
is that production dependencies are the ones required for the app to run in a production environment, 
while development dependencies are used to build and test the application during development.
Using the --production flag can help reduce the size of the final Docker image, as it avoids 
including unnecessary files in the container.
This can help reduce the overall image size and make it faster to deploy.
It is worth noting that when using the --production flag, any packages defined as a devDependency 
in the package.json file will not be installed.
This can cause issues if the app relies on any of these packages at runtime, as they will not be available in the container.

66. Starting the Container
docker run <containerId> -> si intentamos acceder ahora a través de localhost:3000. No podremos. No hicimos port mapping.
Tenemos que agregar a docker run -p flag. 
docker run -p 3000:3000 <containerId>.
localmachine:container

Si hacemos un cambio en el source code. No veremos los cambios en el container.
Recordemos, cuando buildeamos la image, básicamente estamos tomando un snapshot del source code en el project directory.
Y luego buildeamos la image con ese snapshot. Si queremos tener los cambios reflejados de alguna forma en el container,
necesitaremos rebuildear la imagen, o alguna otra solución.

Obviamente no querremos rebuildear la imagen cada vez que hagamos un cambio.

67. Docker Volumes
Queremos que los cambios al Source code se reflejen en el container sin tener que rebuildear la imagen y restart el Container.
El proceso de nuestra imagen era:
1. Seteamos la workdir del container a /app
2. Copiamos package.json e instalamos dependencias
3. Copiamos /src y /public a nested /app.

Cuando hacemos la copia de 3. -> básicamente estamos tomando un snapshot de esos files al momento de creación.
Por default, no van a cambiar cada vez que hagamos un cambio al source code.

Entonces, para tener los cambios reflejados en el container, tendremos que cambiar la estrategia de copiado directo.
Lo que vamos a hacer es ajustar el Docker run command que usamos para startupear el container.
Ajustando el CMD, vamos a hacer uso de un feature de Docker llamado volumes. 
Con un Docker Volume, esencialmente setupeamos un placeholder adentro de nuestro Docker Container. 
Entonces ya no estaremos copiando nuestros /src y /public directories. 
Lo que pondremos en el container, debajo de /app son referencias a esos folders! (esto lo hacemos con volumes).

El Docker Volume, entonces, se puede pensar como los port mappings que setupeamos anteriormente. 
El Port Mapping que usamos mapeaba un port adentro del container a un puerto afuera del container.

Con el Docker Volume, básicamente estamos estableciendo un mapping de un folder dentro del container, a un folder fuera del container.

Por qué no usamos Volumes anteriormente?

El problema es que setupear un Docker volume a veces es bastante complicado. Esto debido a la sintaxis que tenemos que usar en el
docker run.

Sintaxis:
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <imageId>
-v -> utilizado para setupear un volumen.
$(pwd) -> present working directory. El $ + pwd adentro de paréntesis es un shortcut. Con pwd obtenemos el present working directory.
Y tomamos el folder resultante y lo mapeamos a :/app folder. 
Básicamente hacemos un mapeo del present working directory al app folder. 

El comando final que corro es: docker run -p 3000:3000 -v $(pwd):/app ea8c9ce908cbaa0089249bdadf20c1acb6

En este caso, tendremos un error. Veremos que el proyecto intenta empezar, pero tira el error:
sh: react-scripts: not found

Esto dado que falta el -v /app/node_modules.

69. Bookmarking Volumes

Cuando usamos el -v $(pwd):/app <imageId> básicamente estábamos estableciendo un mapeo entre el folder dentro del Docker Container
y el file o folder en el local machine.

El problema es que cuando establecimos ese mapeo, dijimos de tomar todo lo que está adentro de ese pwd y mapearlo a la app folder
adentro del Container.

Pero... Hasta el momento no tenemos los node_modules. Entonces, cuando intentamos tomar todo lo que está aquí adentro y intentamos
pasarlo a la app folder, veremos que los node modules no están.
Y entonces lo que pasa es que los node_modules quedan sobreescritos. 
Entonces, como borramos los node_modules, en el Docker Container tenemos una referencia que no apunta a nada.

Para corregir esto tenemos que pasar el -v /app/node_modules. No estamos utilizando : syntax acá. Cuando usamos el : estamos diciendo
Que queremos mapear una carpeta adentro del Container a una carpeta adentro del local host.
En este caso simplemente queremos un placeholder para la carpeta que está adentro del container. No lo vamos a mapear a nada.

El hot reload es una función propia de React. Pero React está adentro de un Container. Entonces, para hacer que el Development Server
de React vea los cambios que hacemos, tendremos que hacer el mapping del Container folder al Local folder del volumen, como lo hicimos
anteriormente.

Q: Can you explain me the following Docker command? docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app ea8c9ce908cbaa0089249bdadf20c1acb6?
A:
docker run: starts a new container from an image
-p 3000:3000: maps port 3000 from the container to port 3000 on the host machine
-v /app/node_modules: creates a volume in the container to store the node_modules folder of the application
-v $(pwd):/app: creates a bind mount to map the current working directory of the host to the /app directory in the container
ea8c9ce908cbaa0089249bdadf20c1acb6: the ID or name of the Docker image to use for the container

So, overall, this command starts a container using the specified image, maps port 3000 from the 
container to the host, creates a volume to store the node_modules folder, and creates a bind mount to map the host's 
current working directory to the /app directory in the container.
This is a common configuration for running a Node.js application in a Docker container.

But why are we creating a volume for the node_modules inside the container? Which is the purpose of doing that?
The purpose of creating a volume for the node_modules directory inside the container is to allow 
the container to share the dependencies with the host machine.
This is useful because if the node_modules directory is not included in a volume or a bind mount, 
it will be generated inside the container and will not be accessible from the host machine.
By creating a volume for the node_modules directory, the container can access 
the same dependencies that are installed on the host machine. 
This can help reduce the size of the container, as it does not need to include a copy of the dependencies.

Additionally, creating a volume for node_modules and excluding it from bind mount 
ensures that the dependencies of the host system will be used by the container.

This can help to avoid conflicts that may arise due to differences in the 
dependencies installed on the host machine and those that are installed inside the container.

So we can for example install the dependencies in the local machine, delete the node_modules folder and then doing this kind of volume?

Q: Can you explain me what a bind mount is in detail?
A:
In Docker, a bind mount is a way to mount a directory or file from the host machine to a Docker container. When a 
bind mount is created, the container has access to the same files and directories as the host machine.

Here are some details about bind mounts:
A bind mount can be created with the -v option when running the docker run command.
A bind mount requires two arguments: the path to the file or directory on the host machine, 
and the path to the mount point inside the container.
When a bind mount is created, any files or directories inside the container at the mount point 
are replaced by the files or directories from the host machine.
If a file or directory is deleted from the container, it is not deleted from the host machine.
Changes made to files or directories on the host machine are immediately visible in the container.
Bind mounts can be read-write or read-only, depending on whether the ro option is included in the mount command.
Bind mounts are useful for many situations, such as sharing code between the host 
machine and a container for development purposes, accessing configuration files, and sharing data between containers.

Q: When I try to run the docker run command stated before, I get the following error message: "[eslint] 
EACCES: permission denied, mkdir '/app/node_modules/.cache' 
ERROR in [eslint] EACCES: permission denied, mkdir '/app/node_modules/.cache'".
A:
The error message you are seeing is due to a permission issue when trying to create the .cache directory under node_modules
This is likely happening because the user running the container does not have the proper permissions 
to write to the node_modules directory.
One way to fix this is to run the container with elevated privileges using the --user flag, for example:
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app --user "$(id -u):$(id -g)" ea8c9ce908cbaa0089249bdadf20c1acb6
This will run the container with the same user and group ID as the current host user, which should allow the container 
to create the necessary files and directories under node_modules with the correct permissions.

Q: I'm in WSL. Can the above error be related to the fact that I'm trying to run the command 
with the root user instead of the node user? Can you explain me what the node user is?
A:
Yes, it's possible that the error is related to running the command as the root user instead of the node user.
By default, Docker runs containers as the root user, and this can cause permission issues when interacting with files and directories 
on the host system
To avoid these issues, it's recommended to run containers as a non-root user, such as the node user.
The node user is a common user used in Node.js-based containers, and is typically used to run the 
Node.js application within the container.
To run the container as the node user, you can specify the user in the docker run command using the --user option, like this:
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app --user node ea8c9ce908cbaa0089249bdadf20c1acb6
This will run the container as the node user, which should have the necessary permissions to access and modify 
the files in the /app directory.

Voy por solución al problema de 68.

Q: Can you explain me the following Dockerfile.dev?
FROM node:alpine
 
USER node
 
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
 
COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node ./ ./

CMD ["npm", "run", "start"]

A:
FROM node:alpine: This line sets the base image for our Dockerfile to node:alpine.
USER node: This sets the user that will execute the commands below to node. This is done for security reasons, 
as running commands as the root user in a container can pose a security risk.
RUN mkdir -p /home/node/app: This creates a directory /home/node/app in the container to store our application code.
WORKDIR /home/node/app: This sets the working directory to /home/node/app, so any subsequent commands will be executed in this directory.
COPY --chown=node:node ./package.json ./: This copies package.json from our local machine to the /home/node/app 
directory in the container.
The --chown=node:node flag ensures that the node user owns the file.
RUN npm install: This runs npm install to install the dependencies specified in package.json.
COPY --chown=node:node ./ ./: This copies the rest of our application code from our local machine to the /home/node/app 
directory in the container. The --chown=node:node flag ensures that the node user owns the files.
CMD ["npm", "run", "start"]: This sets the default command to run when the container starts to npm run start.
This Dockerfile is designed to be used during development. It sets up a Node.js environment in a container, installs the application's dependencies, 
and sets the default command to run the start script defined in package.json
By copying the application code into the container, we can make changes to the code on our local machine 
and see the changes reflected immediately in the running container.

Q: I'm a WSL user. I have Docker Desktop installed. When I go to the "Volumes" tab, I see a column called "target". That target
have two lines, which are two different directories. What are those directories? If the volume I enter has only one directory listed
in target.. What is that directory?

A:
In Docker Desktop, the "Volumes" tab shows a list of volumes that have been created in Docker.
The "target" column shows the location within the container where the volume is mounted.
If the volume has only one directory listed in the target column, that directory is the mount point within the container.
Any files or directories that are written to that directory within the container will be persisted to the host 
machine's file system through the volume.
If there are two directories listed in the target column, the first directory is the mount point within the container, 
and the second directory is the location on the host machine where the volume is mounted.
This is known as a bind mount. Any changes made to files or directories in either location will be reflected 
in the other location as well.
In general, volumes are used to persist data between containers and the host machine, and to share data between containers.

Q: In the case of only one directory. In which path of the host machine the data is saved?
A: In the case of only one directory listed as the target in a Docker volume, the data is saved on the host machine 
at the path corresponding to that directory.
For example, if the target directory is /mydata in the Docker volume, then the data will be saved on 
the host machine at the path /mydata.

Q: Can you explain me the USER instruction of Dockerfile in detail?
A:
The USER instruction in a Dockerfile is used to specify which user will be running the subsequent instructions in the Dockerfile.
It is used to set the user and group ownership for any files or directories created by the subsequent instructions.
This is useful for security reasons, as running containers with the root user is not recommended.
The syntax for the USER instruction is as follows:
USER <user>[:<group>] or USER <UID>[:<GID>]
Where <user> is the name of the user and <group> is the name of the group, and <UID> and <GID> are the user and group IDs respectively.
When the USER instruction is used, any subsequent instructions in the Dockerfile will be executed as that user or group.
If the user or group does not exist within the container, Docker will automatically create it.
It is important to note that the USER instruction only affects the subsequent instructions in the Dockerfile.
If you want to switch users during runtime, you will need to use the su command or similar within your container.
Here is an example of how the USER instruction can be used in a Dockerfile:
FROM ubuntu:latest

# Create a new user
RUN useradd -ms /bin/bash myuser

# Set the working directory to /app
WORKDIR /app

# Set the user to myuser
USER myuser

# Copy files to the container
COPY . .

# Run the command
CMD ["npm", "start"]
In this example, we are creating a new user called myuser with the useradd command. 
We then set the working directory to /app and switch the user to myuser using the USER instruction.
Finally, we copy files to the container and run the npm start command as the myuser user.

Q: Can you explain me the following Linux command? "useradd -ms /bin/bash myuser". What is the -ms flag?
A:
The useradd command is used to create a new user account on a Linux system.
The flags -ms specify additional options for creating the user account:
-m: This flag tells useradd to create a home directory for the new user. If this flag is not used, 
a home directory will not be created.
-s /bin/bash: This flag specifies the user's login shell. In this case, the user's login shell is set to /bin/bash
which is the default command shell for most Linux distributions
So, the command "useradd -ms /bin/bash myuser" creates a new user account named "myuser", creates a 
home directory for the user, and sets the user's login shell to /bin/bash.

Q: What is the user's login shell?
A:
In Unix-based operating systems, a login shell is a shell that runs when a user logs in.
The login shell is responsible for setting up the environment for the user session 
and executing any shell scripts or commands that the user has specified in their shell profile files
(e.g., .bashrc, .bash_profile). The login shell is usually specified in the user's password file (/etc/passwd)
and can be changed by modifying this file or using the chsh command.
The most commonly used login shells in Unix-based systems are bash, zsh, and sh.

Q: How can a user log in into his Linux profile?
A:
To log in to a Linux profile, the user needs to provide a valid username and password at the login prompt. 
Here are the general steps for logging in:
Open the terminal or console window.
Enter the username at the login prompt.
Enter the password at the password prompt.
Press Enter to log in.
After a successful login, the user can access the shell environment and execute commands.

Q: But when I type WSL in my console, I'm already logged in with a user
A:
When you launch WSL, you are automatically logged in with a default user account. This default user is created 
when you install the WSL distribution, and it has the same username as your Windows user account.
So, when you open a terminal window in WSL, you are already logged in as this default user. 
If you want to switch to a different user, you can use the "su" command followed by the username you want to switch to.
For example, if you want to switch to the "myuser" account you created earlier, you would type 
"su myuser" and then enter the password for that user.

Q: What is .bashrc file? Can you explain me in detail?
A:
In Linux and Unix-based systems, the .bashrc file is a shell script 
that is executed by Bash (Bourne-again shell) every time a new interactive terminal is launched.
It is a script file that contains commands that configure the shell environment for a user's session.
The .bashrc file is located in a user's home directory (~/.bashrc) and can be edited using a text editor such as vim, nano or emacs.
The purpose of the .bashrc file is to set environment variables, define aliases, configure shell options, 
and create custom shell functions that will be available to the user when they open a new terminal window or tab.
Some common configurations that can be set in the .bashrc file include setting the prompt format, 
defining aliases for frequently used commands, setting environment variables like PATH or PS1, and defining 
custom functions that can perform complex tasks with a single command.
Overall, the .bashrc file allows users to customize their shell environment and streamline their workflow 
by defining shortcuts and automating tasks.

Q: What is the .bash_profile file? Can you explain me in detail?
A:
The .bash_profile file is a configuration file in the Bash shell that is executed when a user logs into a Unix or Unix-like system
It is typically used to set environment variables, define aliases, and create shell functions.
The .bash_profile file is located in a user's home directory (i.e., /home/<username>/.bash_profile).
When a user logs in, the Bash shell reads this file and executes any commands that it contains.
If the .bash_profile file does not exist, the Bash shell will look for the .bash_login file, 
and if that file does not exist, it will look for the .profile file.
Here are some common tasks that can be performed in the .bash_profile file:
1. Setting environment variables: You can set environment variables for your user account, 
which can be used by other programs and scripts.
For example, you might set the JAVA_HOME environment variable to the location of your Java installation.
2. Defining aliases: You can create aliases for commonly used commands to save time and typing.
For example, you might create an alias for ls to display file sizes and permissions by default (alias ls='ls -lh').
3. Creating shell functions: You can define your own shell functions to automate tasks or simplify complex commands.
or example, you might create a function to search for a string in a set of files (function search { grep -rnw $1 -e $2 ;}).
4. Running scripts or commands: You can run scripts or commands automatically when you log in. For example, 
you might run a script that sets up your development environment.
Overall, the .bash_profile file is an important tool for customizing the Bash shell to meet your needs as a user.

Q: Can you explain me the su command in detail?
A:
The su command in Linux is used to switch between different user accounts. It stands for "Substitute User" or "Switch User".
When a user runs su, they can enter the username and password of another user to switch to that user's account.
The basic syntax of the su command is:
su [username]
If you run the su command without specifying a username, it will switch to the root user account by default.
Once you switch to another user's account using su, you can perform actions on behalf of that user, 
such as accessing their files or running commands as if you were that user.
To switch back to your original user account, you can simply type exit.
It's worth noting that the su command requires you to enter the password of the user you are switching to.
This is a security feature to prevent unauthorized access to other user accounts.
If you need to run commands as another user but don't have that user's password, you can use the sudo command instead
sudo allows authorized users to execute commands with the privileges of another user, typically the root user.

Q: What are the PATH and PS1 environment variables?
A:
PATH and PS1 are two important environment variables in Linux and other Unix-based systems:
PATH: It is a list of directories separated by colons (:), which the shell searches through when a user types in a command.
When a user types a command, the shell looks for the corresponding executable file in each of these directories,
in the order they are listed in the PATH variable
If the command is found, the shell executes it. If the command is not found in any of the directories 
in the PATH variable, the shell returns an error.
PS1: It is the primary prompt string, which defines the format of the command prompt for the shell.
The default value for PS1 is usually set to '\u@\h:\w$ ', which displays the username, hostname, 
and current working directory, followed by a dollar sign.
The format of the PS1 string can be customized to include various other information, such as the date and time, 
or the status of the previous command.
Both PATH and PS1 are environment variables, which means they are global variables that can be 
accessed and modified by all processes running in the current shell session.
Users can modify the values of these variables using the export command in the shell, 
or by modifying the corresponding configuration files such as .bashrc or .bash_profile.

What is the node user. What are the permissions this user have?
The node user is a system user that is created by default when you install the Node.js Docker image.
This user is specifically created for running Node.js applications in a containerized environment and is meant to 
provide a certain level of security and isolation 
between the application and the host system.
By default, the node user has limited permissions within the container, as it does not have root privileges.
This means that the user cannot make system-level changes to the container and can only interact with files 
and directories that it has been given access to.
In a Docker container, the node user is typically used to run the Node.js application process
while the root user is used to perform tasks that require elevated privileges, 
such as installing system-level dependencies or modifying system configurations.
It is a best practice to use the USER instruction in the Dockerfile to switch to the node user when 
running the Node.js application in the container,
as it provides an additional layer of security and isolation between the application and the host system.

Q: Where can I see the node user listed in my WSL ubuntu distribution. Can you give me commands?
A:
You can list all the users in your WSL Ubuntu distribution by running the following command in the terminal:
cut -d: -f1 /etc/passwd
This will output a list of all the users in the system, including the node user if it exists.
By default, the node user is not created in Ubuntu. It is only created when a Docker container 
is started with the --user flag and the specified user is not found in the container.
In the case of the Dockerfile you provided earlier, the node user is created inside the container and used for running the application.
It is not related to the users in your WSL Ubuntu distribution.

Q: Can you explain me in detail the cut -d: -f1 /etc/passwd command?
A: 
cut is a command in Linux that is used to extract sections from each line of a file.
-d: specifies the delimiter to be used as a colon :. In this case, we're telling cut to use a colon as a delimiter.
-f1 specifies the field to be extracted. Here, we're telling cut to extract the first field.
/etc/passwd is the file that we want to extract the fields from. /etc/passwd is a system file that stores user account information.
So, when we run the command cut -d: -f1 /etc/passwd, it will extract the first field (which is the username) 
from each line of the /etc/passwd file and display it in the output.

Q: What is the -p flag in mkdir?
A:
The -p flag in the mkdir command stands for "parent". It tells mkdir to create any 
necessary parent directories that do not already exist.
For example, if you try to create a directory /path/to/new/directory and /path/to does not exist, 
mkdir will fail unless you use the -p flag.
With the -p flag, mkdir will create both /path/to and /path/to/new/directory if they don't exist.

Q: Can you explain me in detail the --chown flag? and the syntax?
A:
The --chown flag in Docker specifies the ownership of a file or directory being copied to a container. 
This flag changes the owner and/or group of the file or directory in the container to the specified user and/or group.
The syntax of the --chown flag is as follows:
--chown=<user>:<group>
where <user> and <group> are the names of the user and group that should own the file or directory.
These can be specified as either user or group names, or as numeric IDs.
For example, if we want to copy a file called app.js to a Docker container with the user node and the group node as owners
we would use the following command:
COPY --chown=node:node app.js /app/
This will copy the file app.js to the /app/ directory in the container, and change 
the ownership of the file to the node user and node group.
The --chown flag is useful when you want to ensure that the files in the container have the correct ownership and permissions
especially when running as a non-root user. It can also be used to copy files from the host machine 
with the correct ownership and permissions already set.

70. Shorthand with Docker Compose
Lo engorroso es correr este comando con docker run, dado que es muy extenso.
Recordemos que el único objetivo de Docker Compose es correr el Docker Run de forma mucho más sencilla.
Vamos a crear un Docker Compose file. En dicho file vamos a:
1. Encodear el port setting
2. Los dos volúmenes que necesitamos crear adentro del container.

73. Executing Tests
Ahora ya tenemos una infraestructura sólida para runnear nuestro container en el Development Environment. 
Setupeamos nuestro Dockerfile.dev file y nuestro docker-compose.yml file que hace el setup y starting up del container
Un poco más fácil.
Ahora vamos a cambiar el foco a runnear los tests adentro del container.
Vamos a focalizarnos en correr nuestros tests en development environment y luego vamos a rápidamente tomar ese conocimiento
y correr los tests en Travis CI.
Recordemos que Travis CI es Continuous Integration Service específicamente realizado para runnear tests en nuestro proyecto.
Recordemos que para hacer un overriding del default CMD que especificamos a través del Dockerfile.dev, tenemos que poner el comando
al final del Docker run instruction.
Básicamente: docker run b872db173e6b0e3803a69af81f449d736a07 npm run test (luego de buildear la imagen).
Lo que veremos es que cuando corremos el docker run command de la Docker CLI, por default tenemos una conexión a STDOUT adentro del
container. 
Pero para tener cualquier tipo de input adentro del container, tenemos que conectarnos al STDIN también. 
Eso lo hacemos agregando el -it option a docker run. 

Q: What is STDIN and STDOUT in the context of Docker?
A: 
In the context of Docker, STDIN (Standard Input), STDOUT (Standard Output), and STDERR (Standard Error) refer to 
the standard input, output, and error streams that are available to Docker containers.
These streams are used to communicate with the container, and are often used to send input to 
a running container or to capture output generated by the container.
STDIN is used to feed input to a container, such as text or binary 
data that a containerized application needs to process. STDOUT is used to capture the output of a container, 
which can be used to see the results of the application that is running inside the container.
STDERR is used to capture error messages generated by the application or the container itself.
By default, Docker containers are configured to use the host's STDIN, STDOUT, and STDERR streams.
However, it is possible to redirect these streams to files or other devices using the docker run 
command's -i, -o, and -e flags, respectively. This can be useful for capturing and analyzing the output generated by a 
container, or for feeding input into a container from a file or another source.

74. Live Updating Tests
Vamos a ver que si generamos nuevos tests, no se van a runnear los nuevos tests. 
Podemos apretar ENTER y veremos que la test suite queda en un solo test.
Lo que pasa es que tenemos un container que fue creado específicamente para crear algunos tests.
El problema que tenemos es que el Container creado para runnear los tests no tiene el volume set up.
Podemos resolver este problema de dos formas diferentes:
1. Podemos usar un approach parecido de setupear volúmenes (tal como hicimos en nuestro docker-compose file).
Para realizar esta solución, setupeamos un nuevo servicio dentro del docker-compose. Este es el approach que tomaremos.
Pero antes de esto, vamos a ver otro approach lévemente diferente. 
2. El otro approach: en vez de crear un nuevo servicio en nuestro docker-compose, podemos attachear al existing container creado.
Cuando lo attachamos, podemos attachar un comando para setupear la testing suite. Eso nos dará acceso a un container que ya tiene
El volume/mapping setup.
Para esto lo que hacemos es: docker exec -it <containerId> npm run test. 
Entonces básicamente estamos reutilizando el Container que ya tenemos. 
Entonces, habiendo corrido este comando, si hacemos un cambio en los tests, el mismo debería verse reflejado online en la test suite.
Esta es una solución que funciona, pero no es la mejor. Si estamos developeando nuestra App, nos va a requerir startupear el docker-
compose, luego obtener la id del running container y luego correr el docker exec.
Entonces no es la mejor solución.
La mejor opción será la de correr un segundo servicio.

75. Docker Compose for Running Tests

76. Shortcomings on Testing
Diagrama de lo que está pasando al momento:
Tenemos nuestro Test Container y nuestro Web Container. Estos dos Containers se startupean con un primary command.
Para el test container: npm run test. Para el Web Container: npm run start. Cada vez que un proceso se crea dentro de estos containers,
automáticamente obtiene una conexión a STDIN, STDOUT y STDERR. Estos 3 son process-specific. Cada proceso dentro de este Container
Tiene sus propios STDIN, STDOUT y STDERR. 
Actualmente estamos tipeando en la Terminal, de la interfaz del Docker Compose. Pero no tenemos nada setupeado que tome lo que estamos
Escribiendo en la terminal y lo forwardee automáticamente al STDIN del Test Container. 
Eso sería ideal, pero no setupeamos el Docker Compose para realizar eso por default. 
Desafortunadamente, utilizando Docker Compose, no podemos establecer eso de forma sencilla.
Vamos a probar un approach diferente: crear una terminal window secundaria. En esa nueva terminal window vamos a correr el Docker attach
Command. 
Recordemos el Docker attach: con Docker Attach podemos forwardear input de nuestra terminal, directamente a un Container específico.
Intentemos entonces obtener una conexión a la Test Suite y ver si podemos presionar las teclas interactivas que teníamos anteriormente.
Con Docker Attach estamos attacheando la terminal al STDIN, STDOUT y STDERR del proceso principal del Container.
Luego de hacer el Docker Attach, no tenemos la CLI interactiva (con el container lanzado a través del Docker Compose), como antes.
No habrá forma de tener la CLI interactiva.
Pero queremos entender por qué no es posible esto.
Vamos a abrir una Shell Instance para el container en cuestión y explorar un poco los procesos.
Vamos a inspeccionar el fs a través de: docker exec -it 97e9aa273565 sh
Entonces vamos a runnear ps. Ps va a listar todos los running proccesses que tenemos adentro del Container.
El motivo por el que no funciona es el siguiente:
Luego de listar los ps (proccesses), vemos que:
Proceso 1: PID 1, USER node (el mismo para todos), COMMAND npm run test
Proceso 2: PID 18, COMMAND node /home/node/app/node_modules/.bin/react-script (corremos el Development Server)
Proceso 3: PID 25, COMMAND /usr/local/bin/node /home/node/app/node_modules/re -> Volume
Proceso 4: PID 76, COMMAND /bin/sh
Proceso 5: PID 82, sh
Proceso 6: PID 89, ps.
Luego tenemos una columna que nos muestra la cantidad de tiempo de ejecución que tardó cada comando.
El problema que tenemos es que cuando hacemos Docker Attach, siempre hacemos el Attach al proceso de PID 1. 
Entonces será directamente el npm run test command.
Pero no es el npm run test process el que está a cargo de recibir y hacer la interactividad. 
Es decir, no podremos hacer el Docker Attach sobre los secondary processes

Q: Can you explain me in detail the docker attach command?
A:
The docker attach command is used to attach to a running container and connect 
the container's standard input (STDIN), standard output (STDOUT), and standard error (STDERR) streams 
to the terminal of the host machine.
When a container is started with the -it flag, the docker attach command 
can be used to connect to the container's terminal and interact with its processes.
The basic syntax of the docker attach command is as follows:
docker attach [OPTIONS] CONTAINER_NAME_OR_ID
Here, the CONTAINER_NAME_OR_ID is the name or ID of the container to which you want to attach.
The available options for docker attach are:
-detach-keys: This option allows you to specify a key sequence that detaches the terminal from the container. 
By default, the key sequence is ctrl-p, ctrl-q.
When you run the docker attach command, you will be attached to the container's terminal and see its output.
You can interact with the container as if you were running commands directly on the host machine.
To detach from the container's terminal, you can use the key sequence specified by the -detach-keys option or type ctrl-c.
It's worth noting that docker attach only attaches to the container's main process.
f you want to attach to a specific process inside the container, you can use the docker exec command 
with the --interactive and --tty options.

Q: What is the main or primary process inside a container?
A:
The main or primary process inside a container is the initial command or process that is executed when the container is started.
This process runs in the foreground and keeps the container running until it exits or is stopped.
If the main process exits, the container also stops.
In most cases, the primary process in a container is the application or service that the container is running.
For example, if you are running a Node.js application inside a container, the primary process would be 
the Node.js runtime that executes your application. 
Other processes may also be running inside the container, such as monitoring agents or log collectors, but they are typically 
secondary to the primary process.

Q: Can you explain me the ps WSL command?
A:
The ps command in WSL (Windows Subsystem for Linux) is used to display the currently running processes in the Linux environment.
The command shows the processes that are associated with the current terminal session.
The ps command is used with various options to display different sets of information. Here are some commonly used options:
ps: Displays the processes associated with the current terminal session
ps -e: Displays all running processes on the system.
ps -ef: Displays all running processes with full information.
ps aux: Displays all running processes with detailed information, including the user associated with each process.
The output of the ps command shows the following information for each process:
Process ID (PID)
Terminal the process is associated with
CPU and memory usage
Command being executed
The ps command is commonly used in conjunction with other commands, such as grep, to filter and display specific sets of processes.

Q: What is the grep command in Linux?
A:
The grep command is a powerful tool in Linux used to search for specific text patterns in a file or input stream.
It is a command-line utility that is used to filter and search for lines that match a specified pattern in one or more files.
The grep command stands for "global regular expression print".
The basic syntax for using grep is as follows:
grep [options] pattern [file]
Where:
options: additional flags that modify the behavior of grep
pattern: the regular expression or string pattern to search for
file: the file(s) to search in. If no file is specified, grep will read from standard input.
The output of grep is the lines of the file or input stream that match the specified pattern. 
It can also be used in conjunction with other commands through pipes to perform more complex searches and filtering.

Q: When I run ps command I get the following table output:
Explain the table:
PID   USER     TIME  COMMAND
    1 node      0:00 npm run test
   18 node      0:00 node /home/node/app/node_modules/.bin/react-script 
   25 node      0:07 /usr/local/bin/node /home/node/app/node_modules/re 
   76 node      0:00 /bin/sh
   82 node      0:00 sh
   89 node      0:00 ps

Can you explain it column by column?

A:
PID: This stands for Process ID and is a unique identifier assigned to each process running on the system.
USER: This column displays the username of the user who started the process.
TIME: This column displays the amount of CPU time that the process has used since it was started. 
This includes both user and system CPU time.
COMMAND: This column displays the name of the command or program that is running as a process.
So in the example you provided, the output shows a list of processes running under the node user:
Process 1 is running the command npm run test.

Q: What is the difference of user and system CPU time?
A:
In a Unix-like operating system, including Linux, there are two types of CPU time: user CPU time and system CPU time.
User CPU time is the amount of time that the CPU spends executing code in user space on behalf of a process.
User space refers to the part of the memory where user-level applications run, as opposed to the kernel 
space where the operating system and device drivers reside.
System CPU time is the amount of time that the CPU spends executing kernel-level code on behalf of a process.
This includes time spent handling system calls, interrupts, and other low-level tasks.
In other words, user CPU time is the time spent running the code of a particular application, while system CPU time 
is the time spent running the code of the operating system and other system-level tasks.
Both user CPU time and system CPU time are important measures of the performance and resource utilization of a process or system.

Q: What are interrupts in Computer Science? Can you explain me in detail?
A:
In computer science, an interrupt refers to a signal sent to the processor by either 
hardware or software, to request that the processor stops executing its current task and handle a different task instead.
Interrupts are a fundamental mechanism for handling events that occur asynchronously with respect to the main program execution flow.
Interrupts can be triggered by a variety of events, such as a timer reaching a certain value, a user input, 
or a peripheral device completing an operation.
When an interrupt is triggered, the processor stops its current task, saves its current state, and jumps to an interrupt 
service routine (ISR) that handles the interrupt.
The ISR performs the necessary actions to service the interrupt, which can include updating data structures, 
communicating with other devices or processes, or scheduling a new task.
There are two main types of interrupts: hardware interrupts and software interrupts. 
Hardware interrupts are generated by the hardware of the system, such as a keyboard, a disk drive, or a network interface.
These interrupts are typically handled by the operating system, which dispatches the appropriate ISR to service the interrupt.
Software interrupts, also known as traps, are generated by the software running on the processor. 
These interrupts are typically used to perform system calls, which are requests made by user-level processes 
to the operating system kernel.
When a system call is made, the software raises a software interrupt, 
and the processor jumps to the appropriate kernel routine to handle the system call.
Interrupts are a key component of modern operating systems and real-time systems, which rely on fast 
and efficient interrupt handling to respond to events in a timely manner.
Interrupts are also used in embedded systems and device drivers, where they provide a mechanism 
for interacting with hardware and managing the flow of data between devices and the processor. 

Q: What is a signal in Computer Science? Can you explian me in detail?
A:
In computer science, a signal is a software interrupt that is sent to a process or thread to notify 
it of an event or to request its termination.
Signals are typically used for inter-process communication and to manage the state of a process or thread.
Signals can be sent to a process or thread by the operating system, other processes, or the user. The most common signals are:
SIGTERM: This signal is used to request a graceful termination of a process. When a process receives this signal, 
it is expected to shut down cleanly and release any resources it has acquired.
SIGKILL: This signal is used to forcibly terminate a process. When a process receives this signal, it is immediately 
terminated and any resources it has acquired are released.
SIGINT: This signal is used to interrupt a running process. When a process receives this signal, 
it is expected to stop its current activity and return control to the user.
SIGHUP: This signal is used to request a process to reload its configuration file. 
When a process receives this signal, it is expected to reload its configuration file and apply any changes.
Signals are handled by signal handlers, which are functions that are called when a signal is received.
Signal handlers can be set up to handle specific signals and perform specific actions in response to them.
Overall, signals are a powerful tool for managing processes and threads in a multi-tasking environment.
They allow for inter-process communication, graceful termination of processes, and handling of unexpected events.

Q: What is the proccessor in Computer Science? Can you explain me in detail?
A:
In computer science, a processor, also known as a central processing unit (CPU), is an electronic 
circuitry that performs instructions of a computer program by performing basic arithmetic, logic, and input/output operations
The CPU is the primary component of a computer system responsible for carrying out instructions and 
managing the flow of data between the computer's memory, input/output devices, and other components.
The processor executes instructions by fetching them from memory, decoding them, and then executing them.
The instructions are typically represented as binary code and may include arithmetic and logic operations
as well as branching and looping constructs that allow the program to make decisions and repeat sections of code.
The CPU also manages the flow of data between the different parts of the computer, including input/output 
devices, memory, and the processor's registers.
The performance of a processor is measured by its clock speed, which is the rate at which it can execute instructions.
Modern CPUs have clock speeds measured in gigahertz (GHz), which means they can execute billions of instructions per second.
The CPU also has multiple cores, which allows it to perform multiple tasks simultaneously, and may include additional 
features such as caches, virtual memory, and specialized instructions for specific tasks like multimedia processing or encryption.
In summary, the CPU is a vital component of a computer system responsible for executing instructions and managing the 
flow of data. It is an electronic circuitry that performs basic arithmetic, logic, and input/output operations and is measured 
by its clock speed and number of cores.

Q: What is a Intercept Service Routine? Can you explain me in detail?
A:
In computer architecture, an Interrupt Service Routine (ISR), also known as Interrupt 
Handler, Interrupt Routine, or Interrupt Handler Routine, is a software routine that responds to interrupts 
generated by hardware or software.
An interrupt is a signal sent by a device, either internal or external, to the processor, requesting its 
attention to perform a specific task.
Interrupts can be generated by several types of events, such as a timer, a keyboard, a network card, or a system call.
When an interrupt is raised, the processor interrupts the execution of the currently running program and saves 
its context to memory, so it can resume its execution later.
Then, the processor transfers the control to the ISR associated with the interrupt, which performs the 
specific task requested by the interrupt.
The ISR is a small piece of code that executes quickly and must be written in a way that does not corrupt the system state
Typically, an ISR reads or writes data to or from hardware devices, updates the system status, or sends 
a signal to another part of the system.
Once the ISR has finished its job, it returns the control to the interrupted program, restoring its context from memory, 
and resuming its execution as if the interrupt had never occurred.
ISRs are critical for the proper functioning of modern computer systems since 
they allow hardware and software components to communicate and cooperate seamlessly
sharing resources and executing tasks concurrently.

Q: What is a Kernel Routine in Computer Science? Can you explain me in detail?
A:
In computer science, a kernel routine is a function or subroutine that is part of the operating system kernel.
The kernel is the core of the operating system that manages the computer's resources, 
such as the CPU, memory, and input/output devices
and provides a layer of abstraction between the hardware and the software running on the computer.
Kernel routines are typically low-level functions that are executed in kernel mode, which is a privileged 
mode of the CPU that allows the operating system to access hardware resources and perform low-level operations 
that are not available to user-level programs.
Kernel routines are responsible for handling various types of events, such as interrupts, system calls, and exceptions.
For example, when an application makes a system call to read from a file, the kernel routine responsible 
for handling that system call will execute in kernel mode to access the file system and read the requested data.
Kernel routines are critical components of the operating system, and they must be carefully designed and tested 
to ensure that they are reliable and secure.
Kernel routines are typically written in a low-level programming language such as C, and they are subject 
to strict coding standards and rigorous testing procedures to ensure that they are free from bugs and vulnerabilities.
Overall, kernel routines are an essential part of the operating system that enables it to provide a wide range 
of services and manage the computer's resources in an efficient and secure manner.

77. Need for Nginx

Hasta ahora hicimos una implementación de npm run start y npm run test.
Ahora vamos a pensar como queremos tratar a un Docker Container en un production environment, donde eventualmente vamos a tener que
Runnear npm run build. 
Npm run build crea una production version de la app. Toma todos los JS files, los procesa y los pone todos en un single file 
Esta distinción es importante dado que cambia las mecánicas de cómo se sirve nuestra App en un Development y Production environment.

Cómo funciona nuestra App en Development:
Tenemos la UI (port 3000) que le hace requests al Development Server. El Development Server está adentro del Web Container.
Cuando recibe una request, sirve index.html y main.js.
El Development Server es requerido al 100% en nuestro Development Environment.

Cuando nos movemos al Production Environment, no tenemos un Development Server. Corremos npm run build una sola vez y esto nos brinda
Esencialmente el index.html y el main.js, files que deberemos brindar de alguna forma al Web Browser. 
El Development Server no está más porque no es ideal para ser corrido en un Production Environment. Tiene mucho poder de procesamiento
dedicado a procesar los JS files. Y eso es algo que no deberemos hacer cuando estamos runneando en production (dado que no estamos
Haciendo cambios al JS code de nuestro proyecto).
En production necesitamos también algún tipo de Servidor, cuyo único propósito sea el de responder a las Browser Requests.
Con el index.html y algún random main.js (que contiene todo el React App code, minificado).
Para este Development Server, vamos a hacer uso de algo llamado NGINX.
NGINX es un popular Web Server. No tiene mucha lógica atado a él. Solo se trata de tomar el incoming traffic y routearlo o responder
A él con static files. 
Entonces, vamos a crear un Dockerfile separado que va a crear una Production Version de nuestro Web Container.
Esta production version de nuestro Web Server realizará el Startup de la nginx instance, y vamos a usar esa instancia para
para servir INDEX.html y main.js. 

Q: Can you explain me what NGINX is in detail?
A: NGINX (pronounced "engine-x") is a high-performance web server and reverse proxy server.
It is open-source software that can be used as a standalone web server, 
as well as a reverse proxy server to distribute incoming traffic to multiple backend servers or applications.
Some of the key features of NGINX include:
High performance: NGINX is designed to handle a large number of concurrent connections efficiently and with low resource usage.
Scalability: NGINX can be used to scale applications horizontally, by distributing incoming traffic 
to multiple backend servers or containers.
Load balancing: NGINX can distribute incoming traffic evenly across multiple backend servers, improving performance and reliability.
Caching: NGINX can cache frequently accessed content, reducing the load on backend servers and improving response times.
Security: NGINX includes features such as SSL/TLS termination, rate limiting, and IP blocking to help protect against attacks.
Flexible configuration: NGINX's configuration file is written in a human-readable syntax and 
can be easily customized to meet specific needs.
NGINX is widely used in production environments for hosting websites and web applications,
as well as for load balancing and caching. It is known for its reliability, performance, and ease of use.

Q: In this context, what does it mean "reverse proxy server" ?
A:
In the context of NGINX, a "reverse proxy server" refers to a server that sits between a client and one or more servers.
When a client makes a request to the reverse proxy server, the server forwards that 
request to the appropriate server or servers that can fulfill the request.
The response from the server is then returned to the reverse proxy, which in turn sends the response back to the client.
The term "reverse proxy" distinguishes this type of server from a traditional "forward proxy" server, 
which sits between a client and the Internet and is responsible for forwarding requests from the client to the Internet.
With a reverse proxy, the client is unaware that it is communicating with a proxy server, as the proxy 
appears to the client as the actual server.
One of the key benefits of using a reverse proxy server like NGINX is that it can 
improve the performance, scalability, and security of web applications by offloading certain tasks from the application servers.
For example, a reverse proxy can perform tasks such as load balancing, SSL termination, and caching
which can help to reduce the workload on the application servers and improve overall performance.
Additionally, a reverse proxy can help to protect the application servers from certain types of attacks, 
such as distributed denial of service (DDoS) attacks.

78. Multi-Step Docker Builds
Vamos a usar NGINX para servir nuestra App en un production environment. Estamos haciendo esto dado que el Development Server que 
Estamos usando, no va a ser utilizado en production. No es un production appropiate server.
Dockerfile.dev -> imagen que pudiera ser utilizada en Development Environment.
Production dockerfile -> segunda imagen que va a runnear nuestra App específicamente en un production environment.

Diagrama de lo que necesitamos hacer:
1. Use node:alpine -> esto dado que vamos a tener que runnear npm run build. Para poder runnear npm run build deberemos instalar
Las dependencias de nuestro package.json, lo cual implica estar en un ambiente de node. Es básicamente un hard requirement para
que funcione nuestra app.
2. Copiar el package.json file.
3. Instalar dependencias.
4. Correr npm run build -> una vez instaladas las dependencias del proyecto. 
5. Start Nginx -> una vez que hayamos corrido npm run build y que hayamos generado nuestros production assets (recordemos que se
Genera la build folder con todos los build assets). El Nginx server sirve el resultado del build directory. 

Sin embargo, en este diagrama hay dos problemas que debemos destacar:
1. Instalar dependencias -> el paso de instalar dependencias solo tiene que ser corrido dado que estamos tratando de buildear nuestra
app. Y recordemos que instalar las dependencias es algo muy pesado! 155MB de dependencias (cuando las instalamos para development).
Las dependencias solo son requeridas para buildear la app. Una vez que ya buildeamos nuestra App, las dependencias no son más
Requeridas. Una vez buildeada la App, es solo el Build Directory el que necesitamos. Solo nos interesa ese folder. 
Entonces... Si pudiéramos evitar el paso de instalar dependencias sería algo genial, puesto que nos ahorraríamos mantener almacenados
los 155 MB de dependencias.
2. El último problema con este flow es el Start Nginx step. Cuando instalamos o configuramos Nginx? Tenemos un problema, dado que 
En este flow, en ningún momento instalamos ni configuramos Nginx. Entonces, no podemos startearlo de una sin haberlo configurado.
Docker Hub -> Explore -> Nginx. Dentro del repositorio oficial de Nginx en Docker Hub, vemos una categoría que dice "Hosting simple
static content". Esto es esencialmente lo que queremos hacer.
Está claro que existe una Nginx image. Y que la podremos usar para hostear simple static content. Entonces, será muy bueno si podemos
Usar esa imagen dentro de nuestro Docker Container. 
Pero... Como vimos anteriormente, estamos usando node:apline en nuestra app (tenemos que acceder a Node para instalar las deps).
Entonces.. Estamos en una situación en la cual sería muy útil tener 2 diferentes base images. Y eso es exactamente lo que vamos
A hacer.

Vamos a crear un Dockerfile que tiene lo que se llama Multi-Step Build. 
Dentro de este Dockerfile vamos a tener dos fases diferentes (o bloques de configuración distintos).

1. Build Phase -> tendrá el único propósito de:
  a. Usar node:apline como imagen base
  b. Copiar package.json 
  c. Instalar dependencias
  d. Runnear npm run build
El resultado de esta fase será el index.html, main.js y todo lo que contenga la build folder. 

2. Run Phase -> tendrá propósito de:
  a. Usar nginx image 
  b. Copiar los resultados de npm run build. Vamos a copiar los resultados y a pasarlos a la run phase. 
  c. Una vez copiado el build folder, starteamos nginx. Ahora el startup funcionará bien dado que estamos usando nginx como base image.

79. Implementing Multi-Step Builds
En la sección anterior hablamos de cómo vamos a resolver algunos problemas de la Production Version, utilizando un Multi-Step
Process. 
Utilizando un Multi Step build process podemos utilizar diferentes base images. Podemos tener cierta configuración o código que se 
Ejecuta solamente durante la build phase. Luego podremos copiar los resultados del Build process a nuestra Real o Run Phase.

80. Running Nginx
Una vez que tenemos el Multi-Step build process en el Dockerfile, vamos a buildear la imagen corriendo:
docker build . -> acá no tenemos que usar la -f flag. Esto dado que estamos simplemente buildeando el Dockerfile.
Una vez hecho el buildeo, tenemos que runnear y crear un nuevo container. Para esto, hacemos:
docker run -p 8080:80 3aa5644188574a7b80ba095801eddd1beab63. El port 80 es el default port que usa nginx.
Nginx es 100% adecuado para production deployment.






 


Questions to the CGPT:
1. Can you explain me in detail the Docker Attach command?
2. Can you explain me the ps WSL command?
3. Explain the table:
PID   USER     TIME  COMMAND
    1 node      0:00 npm run test
   18 node      0:00 node /home/node/app/node_modules/.bin/react-script 
   25 node      0:07 /usr/local/bin/node /home/node/app/node_modules/re 
   76 node      0:00 /bin/sh
   82 node      0:00 sh
   89 node      0:00 ps
4. Is docker Attach making the attachment over ONLY the primary process of the Container
5. What is the "primary process" of a container?




*/