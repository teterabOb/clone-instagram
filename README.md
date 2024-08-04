## Clon Instagram Web3 | Configuración MONOREPO

**Curso de youtube - Giberts Ahumada - Chainlink Developer Expert.**

**Parte 1:** [https://youtu.be/w23abGly56I](https://youtu.be/w23abGly56I)

**Parte 2:** [https://www.youtube.com/watch?v=Sd9I7gS_P7k](https://www.youtube.com/watch?v=Sd9I7gS_P7k)

[![Captura de pantalla del proyecto](https://github.com/user-attachments/assets/4534758f-3458-4f01-92b8-2bebe4976e63)](https://github.com/user-attachments/assets/4534758f-3458-4f01-92b8-2bebe4976e63)


**Notion Page:** [https://www.youtube.com/watch?v=Sd9I7gS_P7k](https://www.youtube.com/watch?v=Sd9I7gS_P7k)

[![Captura de pantalla de la configuración del proyecto](https://github.com/user-attachments/assets/125ba2ad-2650-4d07-b7c8-6527122aefdd)](https://github.com/user-attachments/assets/125ba2ad-2650-4d07-b7c8-6527122aefdd)

## Descripción del proyecto

Este proyecto tiene como objetivo crear un clon de Instagram basado en Web3, aprovechando el poder de Chainlink y otras tecnologías descentralizadas. La configuración de monorepo nos permite administrar eficientemente los distintos componentes del proyecto.

## Tecnologías clave

* React
* Web3.js
* Chainlink
* ... (otras tecnologías)

## Configuración Monorepo

```
├── packages
│ ├── web
│ │ ├── src
│ │ │ └── ...
│ │ └── ...
│ └── smart-contracts
│ ├── ...
│ └── ...
└── ...

```

## Ejemplos de código

**Ejemplo 1: Interacción con Chainlink**

```javascript
import { useState, useEffect } from "react";
import Web3 from "web3";

const useChainlink = () => {
const [data, setData] = useState(null);

useEffect(() => {
const web3 = new Web3(window.ethereum);
// ... Llamada a la función Chainlink
web3.eth.call({ to: chainlinkContractAddress, data: chainlinkFunctionData })
.then((result) => {
setData(result);
})
.catch((error) => {
console.error(error);
});
}, []);

return data;
};

// ... Uso del gancho en un componente de React
const MyComponent = () => {
const chainlinkData = useChainlink();
// ...
};

```

## Implementación

**Paso 1: Configuración del entorno**

**Paso 2: Desarrollo de contratos inteligentes**

**Paso 3: Desarrollo de la interfaz de usuario (UI)**

**Paso 4: Implementación de la lógica Web3**

**Paso 5: Pruebas y depuración**

**Paso 6: Implementación**

## Involucrarse

* Suscríbete al canal de YouTube para obtener más actualizaciones.
* Deja tus comentarios y opiniones a continuación.
* ¡Colabora con el proyecto en GitHub!
