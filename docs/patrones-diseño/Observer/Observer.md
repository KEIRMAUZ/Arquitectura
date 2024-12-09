---
sidebar_position: 1
---

# Patrón de Diseño: Observer

El patrón **Observer** es uno de los patrones de diseño de comportamiento más populares. Su propósito es definir una dependencia de uno a muchos entre objetos, de modo que cuando un objeto cambie su estado, todos los objetos dependientes sean notificados automáticamente. Este patrón es muy útil para situaciones en las que un cambio en un objeto debe reflejarse en otros objetos sin necesidad de que estos estén estrechamente acoplados.

## ¿Qué es el patrón Observer?

El patrón **Observer** define una relación en la que un **sujeto** (o **observable**) mantiene una lista de sus dependientes (llamados **observadores**) y los notifica automáticamente de cualquier cambio en su estado. Los observadores no necesitan conocer los detalles internos del sujeto; solo reaccionan a los eventos o cambios notificados.

Este patrón promueve la separación de preocupaciones y reduce el acoplamiento entre los objetos.

## Componentes del patrón Observer

1. **Sujeto (Subject)**: El objeto que mantiene el estado y notifica a los observadores de cualquier cambio.
2. **Observador (Observer)**: El objeto que recibe las actualizaciones cuando el sujeto cambia su estado.
3. **ConcreteSubject**: Implementación concreta del sujeto que mantiene su estado y notifica a los observadores.
4. **ConcreteObserver**: Implementación concreta del observador que responde a las notificaciones de los sujetos.

## Diagrama de Clases

El patrón Observer puede representarse con un diagrama de clases en el que se observa la relación entre los sujetos y los observadores:

```plaintext
              +----------------+                  +-------------------+
              |     Subject    |<>-------------->|     Observer      |
              +----------------+                  +-------------------+
              | -observers: List|                  | +update(): void   |
              +----------------+                  +-------------------+
              | +attach()       |                
              | +detach()       |                
              | +notify()       |                
              +----------------+                
                       ^
                       |
              +--------------------+              
              |   ConcreteSubject   |              
              +--------------------+              
              | -state              |              
              +--------------------+              
                       ^
                       |  
              +--------------------+ 
              | ConcreteObserver    | 
              +--------------------+ 
              | -state              | 
              +--------------------+ 
