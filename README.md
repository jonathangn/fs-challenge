# fs-challenge
Prueba Técnica FS

## Cómo instalar y ejecutar
- Clonar el repositorio en el equipo y abrirlo en el editor de código (ó usar un codespace).
- Desde la raiz del proyecto ejecutar desde la terminal **npm i** para instalar las dependiencias.
- Ejecutar **npm run dev** para poner en marcha el proyecto.
- Acceda en el navegador, a la ruta http://127.0.0.1:3000/

## Descripción de la solución
- Se creo el API para proveer dos *endpoints*:
  - **/products**: a través del método **GET**, sive productos estáticos, para ser renderizados en la UI.
  - **/cart**: A través del método GET, sirve el carrito de compras y a través del método POST, permite agregar un item al carrito o aumentar su cantidad, con su *id*.
- **La interfaz** está pensada para una experiencia en escritorio, permite visualizar los productos, agregarlos al carrito de compras y consultar el carrito y su total en cualquier momento.
- Se creó un contexto para el carrito de compras.
- El punto de lógica, se abordó según la insctrucción, tomando en cuenta un número de productos reducido, probablemente para un enorme número de productos sería necesario aplicar otro enfoque, o adicionar validaciones para por ejemplo evitar duplicados.

## Versión Web
- Puede probarse directamente desde: https://fs-challenge-sigma.vercel.app/

