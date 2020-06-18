# Project Setup

In order to run the project do the following steps:

1. Install dependencies

```
  yarn
```

2. Install MongoDB in your system using the following instructions:

https://docs.mongodb.com/manual/administration/install-enterprise/

3. Start your MongoDB server

4. Create `variables.env` file in the root folder with the settings to connect to your Mongo DB, like the following example:

```
  DATABASE=mongodb://localhost/dbname
  SECRET=thesecret
  KEY=thekey
```

5. Run the following node task:

```
  yarn watch
```

6. Go to localhost:7777

You're set!
