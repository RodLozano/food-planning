# Matriz de comidas

Planificador semanal de comidas modular: **proteína × sabor × hidrato × verdura**. Pensado para perder grasa de forma sostenida con 2 comidas principales + 1 puente al día, cocinando en 2 sesiones por semana.

Un solo `index.html`, sin backend ni dependencias de build. Los datos se guardan en el navegador (`localStorage`).

## Vistas

- **Semana**: actividad de cada día, puente, comida y cena. Selector de comidas libres (0–8), pescado por semana y puentes de la semana (máx. 3). Supuestos del cálculo editables.
- **Hoy**: cantidades exactas de cada comida y receta del sabor.
- **Cocina**: qué preparar en cada sesión (proteína, hidrato) y platos al momento.
- **Compra**: lista generada a partir del plan, con casillas y botón de copiar.
- **Matriz**: tabla sabores × proteínas, raciones de referencia y puentes.
- **Historial**: pesajes, gráfica, ritmo real vs. plan, incidencias por semana y copia de seguridad (exportar/importar).

## Reglas del sistema

- **Proteína**: 1 ración por comida principal (~50–60 g de proteína).
- **Hidrato**: 1 ración ≈ 60 g de hidrato (75 g de arroz o pasta en crudo, 300 g de patata, 100 g de pan). Días de entreno: doble en la comida más cercana al entreno.
- **Verdura**: ~250 g de bolsa congelada por comida (menestra, wok, brócoli).
- **Puente**: ~30 g de proteína, o ninguno.
- **Fruta**: opcional, no cuenta.
- **Comida libre**: libre en todo menos en que lleve proteína.

## Cálculo

- Ingesta del día = puente + comidas (proteína + sabor según densidad + verdura + hidrato × raciones). Comida libre = valor fijo editable.
- Gasto del día = mantenimiento base + ejercicio (gimnasio 350, correr 550, pádel 500, doble 800 kcal).
- Ritmo = déficit semanal / 7.700 kcal por kg.
- Semanas al objetivo = (peso − masa magra / (1 − % objetivo)) / ritmo.

Son estimaciones: el mantenimiento base se calibra con el ritmo real del Historial.

## Despliegue

GitHub Pages desde `main`, carpeta raíz. Siguientes pasos en [PENDIENTES.md](PENDIENTES.md).
