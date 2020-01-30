# By Manfred047

## Español

## Versiones
* Laravel 6.*

## Comandos
En el directorio raiz, ejecuta los siguientes comandos:

1. npm install
2. composer install
3. cp .env.example .env
6. Crear base de datos y configurarlo en el archivo `.env`
7. php artisan key:generate
8. php artisan migrate
9. php artisan passport:install

Copia los tokens generados (Password grant client) y agrega/actualiza las siguientes llaves en tu archivo .env:\
 `PASSWORD_GRANT_CLIENT_ID` \
 `PASSWORD_GRANT_CLIENT_SECRET`
 
 ## Valores de .env
 #### .env (de Laravel)
 1. `SESSION_DOMAIN`: Fija el dominio para las cookies.
 2. `SESSION_SECURE_COOKIE`: Establece si se envian las cookies de forma segura (https).
 3. `LANG_COOKIE_NAME`: Establece el nombre de la cookie de idiomas (se recomienda implementar desde js).
 4. `TOKEN_LIFE_TIME`: Establece el tiempo de vida de los tokens de API.
 
 # Laravel
 
#### Libreria Maestra para Laravel
##### Esta es una libreria de tipo Singleton static class

* Libreria maestra: "Master.php" en "App/Library/Master.php"

#### Middlewares
##### Api middlewares ("App/Http/Middleware").
##### Estos middlewares estan registrados en "App/Http/Kernel.php"

* "InjectGrantClientDetails.php"
* "VerifyGrantType.php"
* "VerifyAjaxRequest.php"

#### Router (Laravel Api)

* Api router: "api.php" en "routes/api/api.php"
* Mapa de rutas (si maneja archivos individuales) en: "app/Providers/RouteServiceProvider.php"

#

## English

#### Coming soon
