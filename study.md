
## Start tsc

https://www.youtube.com/watch?v=lxU4YZ9uhTc

$ mkdir try-ts
$ cd try-ts

$ npm init
$ npm install --save-dev typescript

$ touch index.ts


package.json
```
...
"scripts": {
  "tsc": "tsc"
},
...
```

$ npm run tsc index.ts



## Browser

$ npm i -D browserify

package.json script ```"browserify": "tsc index.ts & browserify index.js > bundle.js"```

index.html
```html
<body>
    <script src="bundle.js"></script>
</body>
```

$ npm run browserify



## tsconfig.json

```
{
    "compilerOptions": {
        "strictNullChecks": true,
    },
    "exclude": [
        "node_modules"
    ]
}
```

package.json script ```"bundle": "tsc & browserify index.js > bundle.js"```



## React

$ cd ..
$ npx create-react-app try-ts-react --template typescript

