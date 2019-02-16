This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

As you can probably tell from some of the stuff in here, I'm no master at CSS, but I have a decent understanding of it and am willing and excited to learn more.  
I also would have a cleaner-looking app with less inline styles and tiny SCSS files everywhere if I were using the react `styled-components` package, which uses some voodoo to generate classes on the fly for styled elements in your application (for example wrappers with padding, different typographic styles, etc).  But I tried to keep it simple and limit myself to just the SCSS and inline styles.

Many of these components would be cleaner and more modular in a realistic application as well.  For example, the `SearchBox` would not contain the actual API call that it makes; that would be handled using an external service.  The `data` folder is meant to represent how some of the content on the page might be a result of an API call as well, like the thumbnails for product markets, or the recently viewed items.
