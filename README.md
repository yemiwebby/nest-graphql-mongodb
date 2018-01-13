# Nest | GraphQL | MongoDB - Starter

### Getting Started

Clone the repo using SSH.
```sh
git clone git@github.com:iamclaytonray/nest-graphql-mongodb.git blog
```

-- or --

Clone the repo using HTTPS.
```sh
git clone https://github.com/iamclaytonray/nest-graphql-mongodb.git blog
```

Change your directory into the clone.
```sh
cd blog # or whatever you named the clone
```

Install 1,000,000,000 packages from Yarn.
```sh
yarn # or npm install
```

Hey, you can start your server now!
```sh
yarn start
```

*Note:*

Make sure you have MongoDB installed and the Dameon running.

Unix/Mac:
```sh
mongo
```

Windows: (Not sure if this works. Shoot a PR if you know the real command!)
```sh
mongod --port 27017 --dbpath "C:\data\db"
```

I will try to Docker-ize this repo when time slows down. Ha, jokes. I have nothing but time. I just hate setting up Docker. PR, pretty please? :D

### GraphQL Starter

A simple mutation to get you started.
```graphql
mutation {
  createUser(
    firstName: "John",
    lastName: "Doe",
    username: "johndoe"
  ) {
    username
  }
}
```

A simple query to verify that you have indeed started.
```graphql
{
  allUsers {
    username
  }
}
```
