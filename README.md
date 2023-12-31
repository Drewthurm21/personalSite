## Intro: The file structure

Because this is a NextJS project, we follow the standard NextJS pattern for organizing this project.

Inside of the `pages/` directly you'll find 3 files:

- `_app.js` -> A file which wraps around every page in our app. Here we import the Poppins font and include it in our page. You can change to use whatever font you'd like here ([docs](https://nextjs.org/docs/basic-features/font-optimization)).
- `_document.js` -> Essentially the NextJS version of your base "HTML document". Nothing fancy here.
- `_index.js` -> This represents our home route. We include 1 single component here called `<Home />`. Click into this component to begin exploring.

To add MORE routes to the project, see [this doc](https://nextjs.org/docs/basic-features/pages).

Inside of the `styles/` directly you'll find find a global CSS file. This just includes a basic reset, as well as a couple of classes we use throughout the project.

Inside of the `components/` directory you'll find all of the good stuff. The `components/home/` directory houses the majority of what you'll like want to edit

## Spin up: Let's get things running

The project was built in of [NextJS](https://nextjs.org/), a full stack development framework built on top of React.

We won't take time here going over exactly how NextJS works on a deep level (this project doesn't use Next at a deep level), but if you're interested in learning, their docs are [here](https://nextjs.org/docs/getting-started).

At the root of the project, you'll see a `package.json` file defining our dependencies.

Most of this is boilerplate, but I will call out the following three dependencies:

- `animejs` -> A javascript animation library, used for the grid animation inside of DotGrid.js
- `framer-motion` -> A react based animation library, used in a hand full of places (anywhere you see `<motion.el />` style components)
- `sass` -> All styling uses plain CSS and sass modules for this project

Now that's out of the way, you can get the project running by first installing dependencies.

From the terminal, run:

```
npm install
# or
yarn install
```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev
# or
yarn dev
```

This will start the project on `localhost:3000`

## Styling

Global styling (colors mainly) are defined using CSS variables in the `styles/globals.css` file. All transitions are handled by framer-motion, specifically the `motion` component. You can check out the document covering it [right here](https://www.framer.com/motion/introduction/). There is a sass module for each component or component group except for the contact form, as it's been built with TailwindCSS. Their docs can be found [here](https://tailwindcss.com/docs/installation)


```
  --background: rgb(17, 17, 17);
  --bg-opaque: rgb(17, 17, 17, 0.25);
  --background-light: rgb(35, 35, 35);
  --background-dark: rgb(8, 8, 8);

  --text: rgb(235, 236, 243);
  --brand: rgb(10, 255, 157);

  --text-xs: 1.6rem;
  --text-sm: 1.8rem;
  --text-md: 2.2rem;
  --text-lg: 3.6rem;
  --text-xl: 5.6rem;
  --text-2xl: 9.6rem;
```

The first six variables are the colors for the app. The last six are font sizes. Play around with these a bit



## More info

That's the basics! If you're comfortable digging in yourself, then you should be set.

Want a deeper walkthrough?? Shoot me an email at `drewthurmcodes@gmail.com`
