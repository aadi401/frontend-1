# School
Integreating the [ESLint](https://eslint.org/) for the basic application,The primary reason ESLint was created was to allow developers to create their own linting rules by using [ESLint configurations](https://eslint.org/docs/user-guide/configuring) file
 
- Create app frontend
```sh
$ npx create-react-app frontend
```
- update the  npm's by adding required

![alt text](https://user-images.githubusercontent.com/35625047/43942768-e197141e-9c96-11e8-9881-d4209230fb20.png)
- Developer will configure different rules based on requirements,by using below set up configuration file
```sh
$ ./node_modules/.bin/eslint --init
```
![config](https://user-images.githubusercontent.com/35625047/43943447-41169c46-9c99-11e8-8ac9-9ac9f4b106a9.png)

- Enable in IDE
```sh
- settings -> Language & Frameworks -> Javascript -> Code Quality Tools -> ESLint
```
![config](https://user-images.githubusercontent.com/35625047/43943577-ab7e3882-9c99-11e8-9fe7-d3a36fc53c4b.png)

- run command
```sh
$ yarn start
```
