# Mono Repository

Mono repositorio de una API y una APP, aplanando las dependencias y utilizando los test de cada proyecto.

## Rutas en FETCH de data

Se utilizan rutas relativas en cada una de las peticiones de la APP. En modo DESARROLLO modificamos el *vite.config.js*.

```
server: {
    proxy: {
        '/': {
            target: 'http://localhost:1234',
            changeOrigin: true,
            secure: false
        }
      }
    }
```

Busca en otra URL como si fuera la propia.

## Compilaciones y modo desarrollo

Para poder optimizar la modalidad monorepositorio, podemos ejecutar los comandos directamente desde la RAIZ de estos. Solo tenemos que agregar en la *package.json* las comandos que queremos ejecutar e indicar los *workspaces*  al pertenece:

```
"scripts": {
    "build": "npm run build --workspace=app",
    "start": "npm run start --workspace=api",
    "dev:api": "npm run build && npm run dev --workspace=api"
  },
```
Al colocarlo en un hosting, como puede ser *HEROKU*, el BUILD se ejecuta antes de hacer el deploy, START es el comando que utiliza este HOST para ejecutar el servidor.

