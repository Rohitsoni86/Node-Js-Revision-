# Express-Js-Revision-

# Application-level middleware ::::

Usually, we bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions where METHOD refers to HTTP methods get/post/put/delete

# Router-level middleware :::

Router-level middleware works the same way as application-level middleware. The only difference is we bind this middleware to a router instance express.Router()

# Built-in middleware :::

----express.static() serves static assets such as HTML files, images, and so on.

----express.json() parses incoming requests with JSON payloads.

----express.urlencoded() parses incoming requests with URL-encoded payloads.

# Third-party middleware

--- cors()
--- cookie-parser()
--- multer()

.....etc....
