---
title: Getting started with React Hooks
author: Angel Baez
date: 2021-04-21
hero: ./images/article-image-1.jpg
excerpt: Notes that I took when I started to learn React hooks.
---

Hooks let you use state and other React features withouth writing a class. 

## How to initialize it

- Initial declaration:
```js
const [state, function] = useState('initial State');
```

## Hooks Effect

### Skipping effects
You can tell React to skip applying an effect if certain values haven't changed between re-renders. To do so, pass an array as an optional second argument to `useEffect`. 


## Important Notes
- [Official documentation](https://reactjs.org/docs/hooks-effect.html)
- They never go inside of if statements or for loops. 

