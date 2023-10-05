# Express-Js-Revision-

1.Declare a static path
as ::::

const path = require("path");
let myStaticPath = path.join(\_\_dirname, "/public/");

2.Serve it using Express
as :::::

app.use(express.static(myStaticPath));

# What Is Middleware?

# A request handler with access to the application's request-response cycle is known as middleware.

# It's a function that holds the request object, the response object, and the middleware function.

# Middleware can also send the response to the server before the request.

# The next middleware function is commonly represented as a variable named next.

# Simply middleware is a function that can only be applied using routes.

# We can access and modify request and response data using middleware.

# Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

👉📍 An Express application can use the following types of middleware:

    # Application-level middleware
    # Router-level middleware
    # Error-handling middleware
    # Built-in middleware
    # Third-party middleware
