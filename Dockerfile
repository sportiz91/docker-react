FROM node:16-alpine AS builder

WORKDIR '/home/node/app'

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /home/node/app/build /usr/share/nginx/html



#79. Implementing Multi-Step Builds
#Con el AS le estamos poniendo un nombre al build stage. El AS nos dice que todo lo que venga debajo de esta línea será parte
#Del builder stage. El único propósito de esta fase es instalar las dependencias y realizar la build folder. 
#Recordemos que primero se hace el paso de copiar el package.json + instalar las dependencias y luego copiar todos los files and
#Folders del source directory hacia el container puesto que, sino, cualquier cambio en el source code hará que tengamos que volver
#A copiar el package.json.
#Además, notar que, ahora que estamos haciendo la build phase y no tenemos ningún tipo de inquietud respecto de cambiar nuestro source
#Code, no tendremos que usar el volume system más. El Volume system que estábamos implementando con Docker-compose solo era requerido
#Porque queríamos realizar cambios en nuestro código y que esté reflejado inmediatamente adentro del Container. 
#Una cosa importante a notar aquí es que la Build folder será generada en el CWD. El path que nos interesa, entonces, será:
#/home/node/app/build. Este es el path que querremos copiar en nuestra RUN phase. 
#Notar que no tenemos que poner código que avise que termine la builder phase. Simplemente por poner un segundo FROM statement
#Eso se entiende implícitamente. 
#Dentro de la Run Phase vamos a escribir la configuración necesaria para copiar la build folder en este nuevo nginx container.
#--from flag nos dice que queremos copiar algo de otra fase en la cual estuvimos trabajando.
#Primero viene la carpeta que queremos copiar 
#Si queremos hostear un Static content, le tenemos que pegar a la carpeta /usr/share/nginx/html.
#Todo lo que esté dentro de esa carpeta, será servido automáticamente por nginx cuando startupea. 
#El default command del nginx container startupeará nginx por nosotros. No tenemos que específicamente correr un comando para 
#startupearlo.
#Lo único que estamos copiando a la folder /usr/share/nginx/html es el resultado del npm run build. No estamos copiando el source
#Code, no estamos corriendo npm install, nada. Solo copiando el resultado de la build folder en la carpeta especificada por nginx.

#80. Running Nginx

#93. Exposing Ports Through the Dockerfile
#La expose instruction es algo que no usamos anteriormente. 
#En Dev environment, y en la mayoría de los environments, la EXPOSE instruction es simplemente comunicación entre nosotros developers.
#Entonces, cuando leemos expose estamos leyendo: "oh, este Docker container necesita un port mapping a puerto 80".
#Para la configuración de nuestro dockerfile, la expose instruction no hace nada. Pero para EBS es útil, en el sentido que va 
#A mapear el incoming traffic hacia ese puerto.

#94. Workflow With Github



