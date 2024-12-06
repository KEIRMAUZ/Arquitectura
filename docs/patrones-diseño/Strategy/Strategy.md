---
sidebar_position: 4
---

# Patrón de Diseño: Strategy

El patrón **Strategy** es un patrón de diseño de comportamiento que permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables. Este patrón permite cambiar el algoritmo que un objeto usa en tiempo de ejecución, sin que se afecten las clases que usan ese comportamiento. Es una forma de evitar el uso de condicionales como `if` o `switch` en el código, lo cual hace que el código sea más limpio y flexible.

## ¿Qué es el Patrón Strategy?

El patrón **Strategy** es útil cuando tienes una familia de algoritmos que puedes intercambiar en tiempo de ejecución. Por ejemplo, si tienes varios métodos de pago en una tienda en línea (tarjeta de crédito, PayPal, transferencia bancaria), puedes usar el patrón Strategy para encapsular cada uno de estos métodos como una estrategia separada. El **Contexto**, que es el objeto que utiliza el comportamiento, delegará la ejecución de ese comportamiento a la estrategia seleccionada.

Este patrón se basa en tres componentes principales:
- **Contexto**: La clase que utiliza una estrategia. No sabe nada sobre el algoritmo específico, solo que puede ejecutar una estrategia.
- **Estrategia**: La interfaz que todas las estrategias concretas implementan.
- **Estrategias Concretas**: Las clases que implementan el comportamiento específico de un algoritmo.

## Componentes del Patrón Strategy

1. **Contexto (Context)**: Es el objeto que mantiene una referencia a un objeto **Strategy**. El contexto delega la ejecución de una operación a la estrategia actual.
2. **Estrategia (Strategy)**: Define una interfaz común para todas las estrategias. Esta interfaz asegura que todas las estrategias tengan un método común que puede ser invocado por el contexto.
3. **Estrategias Concretas (ConcreteStrategy)**: Son las implementaciones concretas de la interfaz **Strategy**, que definen los comportamientos específicos.

## Diagrama de Clases

```plaintext
              +--------------------+
              |      Contexto      |
              +--------------------+
              | -strategy: Strategy |
              +--------------------+
              | +setStrategy()      |
              | +executeStrategy()  |
              +--------------------+
                       ^
                       |
              +--------------------+
              |     Strategy       |
              +--------------------+
              | +algorithm()       |
              +--------------------+
                       ^
         +-------------+-------------+
         |                           |
+---------------------+   +---------------------+
| ConcreteStrategyA   |   | ConcreteStrategyB   |
+---------------------+   +---------------------+
| +algorithm()        |   | +algorithm()        |
+---------------------+   +---------------------+
```

## Ejemplo de Implementación

### Contexto

```typescript
class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.algorithm();
  }
}
```

### Estrategia

```typescript
interface Strategy {
  algorithm(): void;
}
```

### Estrategias Concretas

```typescript
class ConcreteStrategyA implements Strategy {
  algorithm(): void {
    console.log("Ejecutando algoritmo A");
  }
}

class ConcreteStrategyB implements Strategy {
  algorithm(): void {
    console.log("Ejecutando algoritmo B");
  }
}
```

### Uso

```typescript
const context = new Context(new ConcreteStrategyA());
context.executeStrategy();  // Ejecutando algoritmo A

context.setStrategy(new ConcreteStrategyB());
context.executeStrategy();  // Ejecutando algoritmo B
```

En este ejemplo, el **Contexto** delega el comportamiento al algoritmo de la **Estrategia** seleccionada, lo que permite cambiar entre diferentes algoritmos en tiempo de ejecución sin modificar el código del contexto.
