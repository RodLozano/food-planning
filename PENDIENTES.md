# Pendientes

## Ahora

- [ ] Cerrar la lista de puentes. Propuesta en discusión: tostada de jamón y huevo (o revuelto), tortitas de avena, muffins de huevo, bocadillo de sobras, bocadillo frío (jamón, pavo o atún). Falta decidir si entra un puente dulce con lácteo (queso fresco batido, requesón, kéfir).
- [ ] Cambiar los valores por defecto de peso, % de grasa y objetivo por valores genéricos (el repo es público).

## PWA (app en pantalla de inicio de iOS)

- [x] `manifest.webmanifest` con nombre, colores, `display: standalone` e iconos 192 y 512 px.
- [x] `apple-touch-icon` de 180 px y meta tags de iOS.
- [x] `sw.js` para caché y uso sin conexión.
- [x] Alojar la fuente en el repo en lugar de Google Fonts.
- [x] Rutas relativas (la app vive en `/nombre-repo/`).
- [x] Aviso de instalación de una sola vez en iOS (Compartir → Añadir a pantalla de inicio).
- [x] Pedir almacenamiento persistente (`navigator.storage.persist()`).
- [ ] Probar en un iPhone real: instalación, uso sin conexión, barra de estado y modo oscuro.

## Diseño

- [ ] Hacerla más responsive: ahora es una columna de 640 px como máximo, pensada para móvil, y en pantallas grandes desaprovecha el espacio.

## Cálculo (aparcado)

- [ ] Umbrales de ritmo en % del peso corporal en lugar de kg fijos.
- [ ] Semanas al objetivo simuladas semana a semana, con el mantenimiento bajando con el peso, y mostradas como rango.
- [ ] Recalibrar el mantenimiento base a partir del ritmo real del Historial.

## Más adelante

- [ ] Multiusuario o familia: perfiles con raciones escaladas, filtros de sabores por persona, asistencia por comida y estado compartido. Aparcado: requiere debate.
