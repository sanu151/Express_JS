![image](https://github.com/user-attachments/assets/09a0f2c2-0635-45ad-a4cb-1f870d7f9f99)


# **Express.js**
### **A Versatile Node.js Framework**

**What is Express.js?**

Express.js, often referred to as simply Express, is a minimalist and flexible web application framework built on top of Node.js. It provides a robust set of features for building web applications and APIs. Express offers a streamlined approach to handling HTTP requests and responses, making it a popular choice for developers seeking efficiency and scalability.

**Key Features of Express.js:**

* **Routing:** Express provides a powerful routing system that allows you to define how your application responds to different HTTP methods (GET, POST, PUT, DELETE) on various URLs.
* **Middleware:** Middleware functions can be chained together to perform tasks before, during, or after a request is handled. This allows for features like authentication, logging, and data parsing.
* **Templating:** Express supports various templating engines (like EJS, Pug, Handlebars) that help you create dynamic HTML content.
* **Static File Serving:** It can easily serve static files such as images, CSS, and JavaScript from your application's directory.

**Basic Requirements to Start with Express.js:**

1. **Node.js and npm (or yarn):** You'll need Node.js installed on your system, along with its package manager, npm (or yarn).
2. **Code Editor:** Choose a code editor or IDE that you're comfortable with, such as Visual Studio Code, Sublime Text, or WebStorm.

**Why Choose Express.js?**

* **Simplicity:** Express is known for its minimal approach, making it easy to learn and use.
* **Flexibility:** It offers a high degree of flexibility, allowing you to structure your application according to your specific needs.
* **Performance:** Built on Node.js, Express leverages its event-driven, non-blocking I/O model, resulting in high performance and scalability.
* **Large Community:** A vast and active community provides extensive support, documentation, and a wide range of third-party libraries.
* **RESTful API Development:** Express is well-suited for building RESTful APIs, which are essential for modern web applications.

**Getting Started with Express.js:**

1. **Create a Project Directory:** Make a new directory for your project and navigate to it using your terminal.
2. **Initialize npm (or yarn):** Run `npm init -y` (or `yarn init -y`) to create a `package.json` file.
3. **Install Express:** Use `npm install express` (or `yarn add express`) to install the Express package.
4. **Create an app.js File:** Create a file named `app.js` (or similar) to write your Express application code.
5. **Basic Express App:** Here's a simple example of an Express app:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

6. **Run the App:** Execute `node app.js` in your terminal.

This basic example demonstrates how to create an Express app that listens on port 3000 and responds with "Hello, Express.js!" when a GET request is made to the root URL (`/`).

### **Express.js with Nodemon**

Nodemon is a utility that automatically restarts your Node.js server whenever you make changes to your source code files. This significantly speeds up development by eliminating the need to manually restart the server after every code modification.

**How to Use Nodemon with Express.js:**

1. **Install Nodemon:**
   - Using npm:
     ```bash
     npm install --save-dev nodemon
     ```
   - Using yarn:
     ```bash
     yarn add -D nodemon
     ```

2. **Update `package.json`:**
   - Modify the `scripts` section of your `package.json` file to include a `start` script that uses Nodemon:

     ```json
     "scripts": {
       "start": "nodemon app.js" 
     }
     ```

3. **Start the Server:**
   - Run the following command in your terminal:
     ```bash
     npm start 
     ```
     (or `yarn start`)

**How Nodemon Works:**

- Nodemon monitors the files in your project directory for changes.
- When it detects a change, it automatically restarts the Node.js server.
- This allows you to see the effects of your code changes immediately without manually restarting the server.

**Benefits of Using Nodemon:**

- **Faster Development:** Significantly reduces development time by eliminating the need for manual restarts.
- **Improved Workflow:** Provides a smoother and more efficient development experience.
- **Increased Productivity:** Allows you to focus on coding without interruptions.

**Example:**

```javascript
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

With Nodemon configured, whenever you modify `app.js` (or any other file in your project), the server will automatically restart, and you can immediately see the changes reflected in your browser.


## **HTTP Methods and Postman**

**HTTP Methods**

HTTP methods, also known as verbs, are used to define the action that a client wants to perform on a server. They are an essential part of the HTTP protocol, which is the foundation of data communication on the World Wide Web. Here are some of the most common HTTP methods:

1. **GET:**
   - Retrieves data from a specified resource.
   - Should not have any side effects on the server.
   - Typically used for reading data.
   - Example: Fetching a list of users from a server.

2. **POST:**
   - Submits data to be processed to a specified resource.
   - Often used for creating new resources.
   - Can have side effects on the server.
   - Example: Creating a new user account.

3. **PUT:**
   - Replaces all current representations of the target resource with the request payload.
   - Often used for updating existing resources.
   - Can have side effects on the server.
   - Example: Updating a user's profile.

4. **PATCH:**
   - Applies partial modifications to a resource.
   - Used for updating specific parts of a resource.
   - Can have side effects on the server.
   - Example: Changing a user's password.

5. **DELETE:**
   - Removes the specified resource.
   - Can have side effects on the server.
   - Example: Deleting a user account.

**Postman and HTTP Methods**

Postman is a powerful tool for interacting with APIs. It provides a user-friendly interface for sending HTTP requests and inspecting responses. Here's how Postman can be used with different HTTP methods:

1. **GET:**
   - In Postman, select the "GET" method from the dropdown.
   - Enter the URL of the resource you want to retrieve.
   - Click the "Send" button.
   - Postman will display the response from the server.

2. **POST:**
   - Select the "POST" method.
   - Enter the URL of the resource you want to create.
   - In the "Body" tab, specify the data you want to send to the server.
   - Click the "Send" button.
   - Postman will display the response from the server, which may include the newly created resource.

3. **PUT:**
   - Select the "PUT" method.
   - Enter the URL of the resource you want to update.
   - In the "Body" tab, specify the updated data.
   - Click the "Send" button.
   - Postman will display the response from the server, which may include the updated resource.

4. **PATCH:**
   - Select the "PATCH" method.
   - Enter the URL of the resource you want to partially update.
   - In the "Body" tab, specify the data you want to update.
   - Click the "Send" button.
   - Postman will display the response from the server, which may include the updated resource.

5. **DELETE:**
   - Select the "DELETE" method.
   - Enter the URL of the resource you want to delete.
   - Click the "Send" button.
   - Postman will display the response from the server, which may indicate whether the deletion was successful.


## **Express.js Routers and Routes**

In Express.js, routers provide a modular way to organize and manage the different routes within your application. 

**What is a Router?**

* An Express router is an instance of the `express.Router()` function.
* It allows you to define a set of routes (URL patterns) and their corresponding handlers (functions that handle the requests for those routes).
* Routers help to:
    * **Improve code organization:** By grouping related routes together, you can make your application's code more modular, easier to maintain, and more scalable.
    * **Increase reusability:** Routers can be mounted in multiple places within your application, making them reusable across different parts of your application.
    * **Enhance testability:** By isolating routes within routers, you can write more focused and easier-to-test unit tests.

**Creating a Router:**

```javascript
const express = require('express');
const router = express.Router();

// Define routes within the router
router.get('/', (req, res) => {
  res.send('Home page');
});

router.get('/about', (req, res) => {
  res.send('About page');
});

// Export the router
module.exports = router;
```

**Mounting a Router in your Application:**

```javascript
const express = require('express');
const app = express();
const userRouter = require('./routes/users'); // Import the user router

app.use('/users', userRouter); // Mount the user router at the '/users' path

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

In this example:

- We import the `userRouter` module, which contains the routes for the user-related endpoints.
- We use the `app.use()` method to mount the `userRouter` at the `/users` path. This means that any requests that start with `/users` will be handled by the routes defined within the `userRouter`.

**Example with Multiple Routers:**

```javascript
const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');

app.use('/users', userRouter);
app.use('/products', productRouter);

// ...
```

This demonstrates how you can mount multiple routers at different paths within your application.

**Key Concepts:**

* **Route Parameters:** You can define parameters in your route paths using colons (e.g., `/users/:id`). These parameters can be accessed in the request object (e.g., `req.params.id`).
* **Route Handlers:** Route handlers are functions that handle the requests for specific routes. They typically receive two arguments: `req` (request object) and `res` (response object).
* **Middleware:** You can use middleware functions with routers to perform tasks before, during, or after a request is handled.

### **HTTP Responses: Serving HTML Files and JSON Data in Express.js**

In Express.js, you can send various types of responses to the client, including HTML files and JSON data. Here's how you can achieve this:

**1. Serving HTML Files:**

* **Using `res.sendFile()`:**

   ```javascript
   const express = require('express');
   const path = require('path'); 
   const app = express();

   app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html')); 
   });

   app.listen(3000, () => {
     console.log('Server listening on port 3000');
   });
   ```

   - `path.join(__dirname, 'public', 'index.html')`: Constructs the absolute path to the `index.html` file located in the `public` directory within your project.
   - `res.sendFile()`: Sends the specified HTML file to the client.

* **Using a Templating Engine (e.g., EJS):**

   ```javascript
   const express = require('express');
   const app = express();
   app.set('view engine', 'ejs'); // Set EJS as the view engine

   app.get('/', (req, res) => {
     res.render('index', { 
       title: 'My Website', 
       message: 'Welcome!' 
     }); 
   });

   app.listen(3000, () => {
     console.log('Server listening on port 3000');
   });
   ```

   - `app.set('view engine', 'ejs')`: Sets EJS as the default templating engine for the application.
   - `res.render('index', { ... })`: Renders the `index.ejs` file and passes data to the template.

**2. Sending JSON Data:**

```javascript
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  res.json(users); 
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

- `res.json(users)`: Sends the `users` array as JSON data to the client.

**Key Considerations:**

* **Content-Type Header:** When sending JSON data, Express automatically sets the `Content-Type` header to `application/json`.
* **Error Handling:** Implement proper error handling to gracefully handle situations where data cannot be retrieved or sent.
* **Security:** Be mindful of security best practices when sending sensitive data.

### **HTTP Request with Query, Route and Header Parameter**

**1.Query Parameters**

* **Definition:** Query parameters are key-value pairs appended to the end of a URL after a question mark (?). They are used to pass additional information to the server along with the request.
* **Format:** 
   - `?key1=value1&key2=value2&...`
   - Multiple parameters are separated by the ampersand (&) symbol.

**Example:**

```
https://api.example.com/users?name=John&age=30
```

In this example:
- `/users` is the endpoint.
- `name=John` and `age=30` are query parameters.
- `name` and `age` are the keys.
- `John` and `30` are the corresponding values.

**Accessing Query Parameters in Node.js with Express.js:**

```javascript
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  // Use the query parameters to filter or process data
  // ...

  res.send(`Name: ${name}, Age: ${age}`); 
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

In this code:

- `req.query` is an object that contains all the query parameters from the request.
- You can access individual parameters using their keys (e.g., `req.query.name`).

**Using Query Parameters in Different HTTP Methods:**

While query parameters are commonly used with GET requests, they can also be used with other HTTP methods like POST, PUT, and DELETE. However, it's generally recommended to use the request body for sending data in POST, PUT, and DELETE requests.

**Key Points:**

- Query parameters are visible in the URL, which can have security implications for sensitive data.
- There are limitations on the length and complexity of query strings.
- For large amounts of data or sensitive information, it's better to use the request body instead of query parameters.

**HTTP Request with Route Parameters and Headers**

**2. Route Parameters**

* **Definition:** Route parameters are placeholders within a URL path that allow you to dynamically match parts of the URL. They are typically represented by a colon (`:`) followed by a parameter name.

* **Example:**

   ```
   /users/:userId 
   /products/:productId 
   ```

   In these examples, `userId` and `productId` are route parameters.

* **Accessing Route Parameters in Express.js:**

   ```javascript
   const express = require('express');
   const app = express();

   app.get('/users/:userId', (req, res) => {
     const userId = req.params.userId; 
     console.log('User ID:', userId);

     // Use the userId to fetch user data from a database
     // ...

     res.send(`User ID: ${userId}`); 
   });

   app.listen(3000, () => {
     console.log('Server listening on port 3000');
   });
   ```

   - `req.params`: An object containing all the route parameters extracted from the URL.

**3. HTTP Headers**

* **Definition:** HTTP headers are key-value pairs that convey additional information about the request or response.

* **Examples:**

   - `Authorization`: Contains authentication credentials (e.g., bearer tokens).
   - `Content-Type`: Specifies the type of data being sent in the request body (e.g., `application/json`, `text/plain`).
   - `User-Agent`: Indicates the browser or client making the request.

* **Accessing Request Headers in Express.js:**

   ```javascript
   const express = require('express');
   const app = express();

   app.get('/users', (req, res) => {
     const authorizationHeader = req.headers.authorization; 
     console.log('Authorization Header:', authorizationHeader);

     // Verify the authorization token 
     // ...

     res.send('Hello, User!'); 
   });

   app.listen(3000, () => {
     console.log('Server listening on port 3000');
   });
   ```

   - `req.headers`: An object containing all the headers sent with the request.
 
  ![image](https://github.com/user-attachments/assets/47a33852-cef7-4090-8faf-85f483a00449)


**Combining Route Parameters and Headers:**

You can use both route parameters and headers in your Express.js applications to handle complex requests.

**Key Points:**

* Route parameters are essential for building dynamic APIs that interact with specific resources.
* Headers provide crucial information about the request, such as authentication credentials and data format.
* By effectively using route parameters and headers, you can create robust and flexible web applications and APIs.


### POST requests with JSON or form data in Node.js with Express.js using body parsers:

**1. Set up your Express.js Server:**

* **Create a file named `server.js`:**

```javascript
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.json()); 

app.post('/users', (req, res) => {
  const userData = req.body; 
  console.log(userData); 

  // ... (e.g., save data to database) ...

  res.status(201).json({ message: 'User created successfully' }); 
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

* **Start the server:**
   - Run `node server.js` in your terminal.

**2. Use Postman to Send a POST Request:**

* **Create a new request in Postman:**
    - Select the "POST" method.
    - Enter the URL of your endpoint: `http://localhost:3000/users`

* **Set the request body:**
    - Click on the "Body" tab.
    - Select "raw" and choose "JSON" as the type.
    - Enter the following JSON data:

      ```json
      {
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
      ```

* **Send the request:**
    - Click on the "Send" button.

![image](https://github.com/user-attachments/assets/f266fcff-69f1-48e0-9c1a-f21b78abb4ca)


* **Observe the response:**
    - Postman will display the response from the server in the response body.
    - Check your server's console (where you ran `node server.js`) to see the received `userData` object.

**Key Points:**

* **Ensure the server is running:** Make sure your Node.js server is running before sending the request.
* **Set the correct Content-Type:** In Postman, set the "Content-Type" header to `application/json` for JSON requests.
* **Inspect the response:** Check the response status code (201 in this case) and any data returned by the server.

**Using Postman with JSON allows you to easily test your API endpoints and verify that your server is correctly receiving and processing the incoming data.**

