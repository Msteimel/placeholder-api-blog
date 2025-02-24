## First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can run tests with:

```bash
npm run test
# or
yarn test
```

## Project Overview

This project uses Next.js, TypeScript, Tailwind CSS, and Vitest. It uses the test API from [JSONPlaceholder](https://jsonplaceholder.typicode.com/). It queries the api to get all the posts, with ability to see each post and the list of the comments. Each post can be "update" or "removed". There is some basic validation, error handling, and unit tests.

### Future Improvements

#### Improve Tests:

- The tests are simple and pretty basic. Vitest was new to me and I ddn't want to dig too deeply.

#### Error Handling:

- Improved error handling and validation. What I have is basic, and mainly client side, and does not have server side validation.

#### UI/UX:

- Very little thought or effort went into the presentation of the app. Including the layout, styling, accessibility, and responsiveness.

#### Component structure:

- A lot of components are in the same file and could be broken into smaller components. Form inputs should be more versatile and reusable, but I went for function over form in this instance.

#### Understand "Use Client" better

- Newer feature to Next.js I have not used before. I would like to understand it better and see how it can be used in a more complex app.

#### More Features:

- better leverage Next.JS metaData and other features.
