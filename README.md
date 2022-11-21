![Photo by Kai Oberhäuser on Unsplash](https://user-images.githubusercontent.com/2342458/202705788-d221f036-ce6b-45eb-b64e-d9f308d9b406.png)

# Kinsta - Hello World - Node.js
An example of how to set your Node.js application up to enable deployment on Kinsta App Hosting services.

---
Kinsta is a developer-centric cloud host / PaaS. We’re striving to make it easier for you to share your web projects with your users. Focus on coding and building, and we’ll take care of deployment and provide fast, scalable hosting. + 24/7 expert-only support.

Get started for free, the first $20 is on us!

[Application Hosting](https://kinsta.com/application-hosting)

[Database Hosting](https://kinsta.com/database-hosting)

## Dependency Management
During the deployment process Kinsta will automatically install dependencies defined in your `package.json` file.

## Web Server Setup

### Port
Kinsta automatically sets the `PORT` environment variable. You should **not** define it yourself and you should **not** hard-code it into the application. Use `process.env.PORT` in your code when referring to the server port. 

```
app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
```

### Start Command
When deploying an application Kinsta will automatically create a web process with `npm start` as the entry point. Make sure to use this command to run your server. If you would like to use another command you will need modify the runtime process in MyKinsta.

```
  "scripts": {
    "start": "node server.js"
  },
```

## Deployment Lifecycle
Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit) the `npm build` command is run, followed by the `npm start` command.  
