# vue3-user-authentication
## This project is developed based on a tutorial project from Vue Mastery - Intermidate level course: Token-Based Authentication. However, many additional features will be added such as .... (WIP)

### Here is the link of this awesome course:
### https://www.vuemastery.com/courses/token-based-authentication

## Features
- Using JWT token for user authentication. A simple backend server was provided for the user auth endpoints in express.js and styles were provided as well
- Using VUEX for states management with design pattern using states, mutations, actions, getters
- Using vee-validate package in addition to YUP(pre-built validation library) for forms/fileds validation
- Using Vue Router for frontend pages routing
- Using Router Guard to control private access pages
- Using Automatic login with a security feature implemented with axios interceptor to prevent fake key injection to localstorage
- Refactoring axios calls into a services folder

## UI
![image](https://github.com/niubrandon/vue3-user-authentication/blob/main/public/userauth.gif?raw=true)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development & starts backend server

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
