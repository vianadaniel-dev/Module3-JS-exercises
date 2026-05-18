# README - Sistema Interactivo en JavaScript

## Descripción
Este proyecto consiste en un programa interactivo en JavaScript que solicita al usuario su nombre y edad, valida que la edad ingresada sea un número y muestra un mensaje personalizado dependiendo de si el usuario es menor o mayor de edad.

El archivo principal del proyecto es:

```bash
sistema_interactivo.js
```

---

# Objetivos del proyecto

- Practicar la entrada de datos con `prompt()`.
- Utilizar variables con `let` y `const`.
- Implementar validaciones en JavaScript.
- Aplicar estructuras condicionales (`if/else`).
- Mostrar mensajes dinámicos con `console.log()` o `alert()`.

---

# Requisitos

## Opción 1: Ejecutar en el navegador
Solo necesitas un navegador web moderno como:

- Google Chrome
- Firefox
- Edge

## Opción 2: Ejecutar con Node.js
Debes tener instalado:

- Node.js

Puedes descargarlo desde:

https://nodejs.org

---

# Estructura del proyecto

```bash
/
├── sistema_interactivo.js
└── README.md
```

---

# Código esperado

El programa debe:

1. Solicitar el nombre del usuario.
2. Solicitar la edad del usuario.
3. Validar que la edad sea un número.
4. Mostrar un mensaje personalizado según la edad.

---

# Ejemplo de funcionamiento

## Entrada

```text
Nombre: Carlos
Edad: 16
```

## Salida

```text
Hola Carlos, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!
```

---

# Ejemplo de validación

## Entrada incorrecta

```text
Edad: dieciocho
```

## Salida

```text
Error: Por favor, ingresa una edad válida en números.
```

---

# Cómo ejecutar el proyecto

## En el navegador

1. Crea un archivo llamado:

```bash
sistema_interactivo.js
```

2. Copia el código JavaScript dentro del archivo.

3. Enlaza el archivo desde un HTML:

```html
<script src="sistema_interactivo.js"></script>
```

4. Abre el archivo HTML en el navegador.

---

## Con Node.js

Si deseas probarlo en Node.js, puedes usar una librería como:

```bash
prompt-sync
```

Instalación:

```bash
npm install prompt-sync
```

Ejecución:

```bash
node sistema_interactivo.js
```

---

# Conceptos aplicados

- Variables (`let`, `const`)
- Entrada de datos
- Conversión de tipos
- Validación con `isNaN()`
- Condicionales `if/else`
- Mensajes dinámicos
- Uso de `console.log()` y `console.error()`

---

# Autor

Proyecto realizado como práctica de fundamentos de JavaScript.