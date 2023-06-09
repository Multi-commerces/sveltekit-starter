# SMUI SvelteKit Exemple

Un exemple de projet implémentant [Svelte Material UI](https://github.com/hperrin/svelte-material-ui) avec [SvelteKit](https://kit.svelte.dev/).
[Svelte Documentation](https://kit.svelte.dev/docs)

# Installation et lancement

1. Cloner le repo git.
2. `npm install`
3. `npm run dev -- --open`

# Composant FontAwesome pour Svelte

https://cweili.github.io/svelte-fa/

# initialisation BBD avec prisma

Installation du CLI : 
npm install prisma --save-dev

Initialisation : 
prisma init --datasource-provider sqlite

prisma migrate dev --name init
ou
prisma generate ./prisma/schema.prisma

reset : prisma migrate reset
production : prisma migrate deploy
dev : prisma db pull && prisma generate

✔ Installed the @prisma/client and prisma packages in your project

✔ Generated Prisma Client (4.15.0 | library) to ./node_modules/@prisma/client in 291ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client

# Un projet SvelteKit typique ressemble à ceci :

```
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ ├ error.html
│ └ hooks.js
├ static/
│ └ [your static assets]
├ tests/
│ └ [your tests]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

![image](https://github.com/Multi-commerces/sveltekit-starter/assets/55719162/c29b3696-6c57-44e1-9bb3-3cd710f75228)
