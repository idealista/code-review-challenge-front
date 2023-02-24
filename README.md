Reto Perfiles Frontend 

## Instrucciones

El ejercicio consiste en hacer una code review sobre el código la aplicación que se encuentra en este repositorio. Imagina que este código ha sido escrito por un compañero. A ti ha llegado el pull request y se te ha encomendado la tarea de validar si el proyecto no solo cumple los criterios de aceptación descritos en las historias de usuario que se exponen más abajo, sino si se ha llevado a cabo siguiendo buenas prácticas, usando patrones correctamente y de forma que pueda ser fácilmente mantenible y escalable. 

La aplicación ha sido desarrollada en Javascript, HTML y CSS, usando la librería React. 

Además, se ha seguido un enfoque domain driven design en la implementación. 

Tu objetivo es hacer la code review sobre la aplicación. Cualquier fichero de este repo a excepción de los package.jsons y este README son susceptibles para ti. 

## Consideraciones importantes

Para nosotros, lo importante de este code review es entender como piensas. Queremos saber que consideras importante y que no, que crees que podría mejorarse y que crees que está bien como está. 

Si tienes dudas entre comentar algo porque es algo que en un proyecto real no comentarías, hazlo. Sabemos que en este code review falta un montón de contexto sobre consensos que tendrías con tu equipo en una situación real, por lo que cualquier comentario nos va a servir mejor para entenderte. 

No queremos que dediques tiempo a refactorizar el código, pero si hay algún comentario que quieres hacer y no sabes cómo explicarnos, nos puedes adjuntar código en cualquier lenguaje que conozcas (o pseudocódigo). 

Para facilitar las cosas, cuando quieras referirte a alguna línea en concreto del código utiliza como nomenclatura algo parecido a NombreDeFichero#lineaDeCódigo 

## Criterios de aceptación

Debes entregarnos un fichero de texto con todos los comentarios que harías sobre el código del repositorio. 


## Historias de usuario 
Se quiere hacer un listado de anuncios en apariencia similar al de idealista, pero con información de prueba para evaluar a los candidatos a Frontend developer. 

El listado debe de permitir mostrar información relevante de cada anuncio: 

- La imagen del inmueble 
- El título del anuncio 
- El precio 
- Las características del inmueble 
- Una breve descripción lorem ipsum 

- Un botón de descartar para, sorpresa, descartar el anuncio :) 

Además, queremos contar con un pequeño formulario que nos permita agregar un nuevo anuncio al listado, facilitando solo el título. 

Finalmente, pero no menos importante, queremos saber cuántos anuncios hay en la página. 

Como regla de negocio, los anuncios que se visualizan estarán limitados a 5 pero queremos saber siempre el total de anuncios que se han registrado, por lo que, aunque solo se muestren 5, si hay 10, el total tiene que reflejar este último número. 

A continuación, dejamos las historias de usuario: 

## Visualizando anuncios

Como usuario quiero acceder a la página y ver un listado similar al de idealista con información falsa. 

- Solo quiero ver anuncios que estén activos. 
- Los anuncios se han de componer de un título, imagen, precio, características, descripción y botón de descartar 

## Creando un anuncio

Como usuario quiero que al introducir un título de anuncio en el formulario de alta de anuncio y al darle al botón 'Add new ad', mi nuevo anuncio se agregue: 

- Si el número de anuncios es inferior o igual a 5, el nuevo anuncio se tiene que agregar al final del listado 
- Si el número de anuncios es mayor que 5, no debe de aparecer el nuevo anuncio en el listado 
- En ambos casos, el contador de anuncios totales ha de aumentar. 
- Los anuncios por defecto se crean activos. 

## Descartando un anuncio

Como usuario quiero que al clickar en el botón de 'Discard' de un anuncio este se descarte. 

- El anuncio descartado ha de desaparecer del listado 
- El contador de anuncios totales se ha de actualizar en consecuencia mostrando N - 1. 