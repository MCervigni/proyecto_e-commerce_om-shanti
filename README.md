# Om Shanti E-Commerce
![](https://i.ibb.co/L0jsBj6/img-logo-YT.png)
Om Shanti es una plataforma de e-commerce para la compra de productos relacionados con el yoga, como mats, portamats, bolsters, bloques y cintos. Este proyecto está construido usando React y Firebase.

## Tabla de contenidos:

- [Características](#características)
- [Demo](#demo)
- [Instalación](#instalación)
- [Uso](#uso)
- [Variables de entorno](#variables-de-entorno)
- [Implementación](#implementacion)
- [Tecnologías utilizadas](#tecnologias-utilizadas)
- [Contacto](#contacto)

## Características

- Página principal con listado de productos, barra de navegación para el filtrado por categorías e ícono del carrito indicando la cantidad de productos cargados al mismo.
- Páginas de detalles de los productos y el botón correspondiente para agregarlo al carrito de compras.
- Funcionalidad del carrito de compras.
- Procesamiento de pedidos y generación de tickets de seguimiento.
- Base de datos de los productos con stock actualizado en tiempo real con Firestore.
- Base de datos con las órdenes de pedidos con la información de la compra en tiempo real con Firestore.
- Diseño responsivo con enfoque Desktop First para dispositivos móviles y de tablets.
- Notificaciones de Toast para los usuarios.

## Demo

Se puede ver una demostración en vivo del proyecto [Aquí](https://proyecto-e-commerce-om-shanti.vercel.app/).

## Instalación

Pasos para tener una copia local en funcionamiento:

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/your-username/om-shanti-ecommerce.git
   ```
2. Navegar al directorio del proyecto:
   ```
   cd om-shanti-ecommerce
   ```
3. Instalar las dependencias:
   ```
   npm install
   ```
## Uso

Para iniciar el servidor de desarrollo, ejecute:
   ```
   npm start
   ```
Para construir el proyecto para producción, ejecute:
   ```
   npm run build
   ```
## Variables de entorno

Cree un archivo .env en el directorio raíz y agregue las siguientes variables de entorno:
  ```sh
  REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
  REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
  REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
  ```

## Implementación

Para implementar el proyecto, puede utilizar Vercel o cualquier otro servicio de alojamiento de sitios estáticos.

### Implementación con Vercel

1. Instalacr Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Implementar el proyecto
   ```
   vercel
   ```

## Tecnologías utilizadas

- React
- Firebase (Firestore, Authentication)
- React Router
- React Hot Toast
- React Spinners
- Axios
- FontAwesome

## Contacto
Marina Cervigni - marinacervigni.dev@gmail.com

[Link del proyecto](https://github.com/your-username/om-shanti-ecommerce)

