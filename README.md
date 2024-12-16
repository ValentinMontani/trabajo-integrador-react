# Trabajo Integrador de React

## Índice

- [Trabajo Integrador de React](#trabajo-integrador-de-react)
  - [Índice](#índice)
  - [Requisitos](#requisitos)
    - [Condiciones de aprobación](#condiciones-de-aprobación)
    - [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
  - [Funcionalidades](#funcionalidades)
  - [Desarrollo](#desarrollo)
  - [API](#api)
    - [Formato de Entrega](#formato-de-entrega)

## Requisitos

Es indispensable clonar este proyecto en un repositorio privado, para poder trabajar de forma _individual_. No se aceptarán proyectos que se hayan realizado sin partir de este template. Para eso deberás crear un repositorio con el nombre "trabajo-integrador-react" en tu cuenta de Github y luego seguir los siguientes pasos en tu terminal

```
# Clona el repositorio del trabajo en tu computadora
git clone https://github.com/fabiodrizzt/UNTREF-Recuperatorio-React

# Ingresa al directorio del trabajo
cd UNTREF-Recuperatorio-React

# Elimina los links al repositorio original
git remote remove origin

# Agrega el link al repositorio de tu cuenta de github, reemplaza <tuusuario> por tu cuenta
git remote add origin https://github.com/<tuusuario>/UNTREF-Recuperatorio-React

# Sube el template inicial a tu repositorio de github
git push -u origin main
```

### Condiciones de aprobación

Las siguientes condiciones son requisitos mínimos necesarios para la aprobación del trabajo:

- **Cumplir con todas las funcionalidades obligatorias**
- Solo se podrán utilizar las librerías que se detallan en este README. Ver [Dependencias](docs/desarrollo.md#dependencias)
- No se considerará realizada cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas.
- Deberá ser desarrollada utilizando Javascript con React.js como librería.
- Se espera que la página de Contacto contenga los flujos de validación necesarios (mínimo 2 validaciones) para un correcto submit del formulario.
- En los casos en que se requiera dar estilos a componentes, deberá realizarse teniendo en cuenta el theme del contexto global.

### Aspectos que modifican la valoración final de la nota

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su implementación sea correcta:

**Validaciones**

- Una validación para cada campo es suficiente, pueden ser "manuales" o con expresiones regulares. Lo importante es el correcto manejo de errores y submit.

**Funcionalidad de destacados**

- Se valorará funcionalidades extra a esta feature, como lo pueden ser el eliminar de destacados, manejo de errores al intentar agregar repetidos y reseteo total de los destacados.

**Estilos**

- Se valorará el estilado de los demás apartados de la App (por fuera del estilado obligatorio de las rutas en base al theme).

**Buenas Prácticas**

- Se prestará especial atención al uso de buenas prácticas, mejoras de performance (implementando `useMemo`) y la reutilización de código.

## Funcionalidades

Ver [Funcionalidades](docs/funcionalidades.md).

## Desarrollo

Ver [Desarrollo](docs/desarrollo.md).

## API

La API a utilizar será simulada mediante MirageJS como sigue:
- Para obtener la lista de profesionales: `/api/professionals`
- Para obtener un profesional específico: `/api/professionals/:id`

### Formato de Entrega

- No deberán cambiar los nombres ni ubicación de las variables/componentes/context que vienen con el repo base.

Se aceptará la entrega mediante la submisión de la URL de su repositorio Forkeado y clonado.

¡Mucha suerte y éxitos!
