# Smart Contract de REMI :briefcase:

## ¿Cómo desplejar este contrato inteligente?
---
### Pré-requisitos.
* Debe tener [Nodejs](https://nodejs.org/en/) instalado en su versión 12.0 o mayor.
* Debe tener instalado [Yarn](https://yarnpkg.com/). Para saber si lo tiene, ejecute el comando yarn --version . 
* En caso de no tenerlo, puede instalarlo ejecutando el comando: sudo npm install -g yarn.
* Instale las dependencias de yarn ejecutando yarn install.
* Debe tener una cuenta en la [testnet de NEAR](https://wallet.testnet.near.org/) para realizar pruebas.
* Debe tener [NEAR-CLI](https://github.com/near/near-cli) instalado globalmente en su ordenador. Para saber si ya lo tiene instalado, ejecute near --version. En caso de no tenerlo, instálelo ejecutando el comando sudo npm install -g near-cli 

Una vez teniendo instalados los requisitos necesarios ahora si puede proceder a ejecutarlo. 

## Despliegue e instalación.
---
* Clone el repositorio con ``git clone`` https://github.com/Near-University-Tec-de-Tlaxiaco/remi 
* Inicie sesión en su wallet que creó anteriormente con el código: near login.
* Dentro del repositorio, instale las dependencias del proyecto ejecutando npm install.
* Si quiere desplegar el contrato y probar sus funciones, puedes hacerlo con yarn deploy:dev esto le devolverá un conjunto de caracteres que empezarán por "dev-" seguido por numeros generados por la red.
* Por último, si desea ejecutar los tests desarrollados puede hacerlo ejecutando yarn test.

## Autores

- [Gandhi Salazar Cruz](https://github.com/Band-hi)
- [Francisco Isaías Ballesteros Huerta](https://github.com/IsaHuerta23)
- [Rigoberto Ramírez Nicolás](https://github.com/Rigoberto2001)
- [Lizzete León González](https://github.com/Lissete7)
