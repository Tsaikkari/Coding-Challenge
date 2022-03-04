# GitHub Search App

Retrieve and display the user repositories, gits and organizations in GitHub.

## Server

Create a GitHub Access Token in your GitHub account -> Settings -> Developer settings -> Personal access token

Create .env file at the root of the app and add the token: GITHUB_ACCESS_TOKEN=[your token]
PORT=5000

```sh
$ cd backend
$ npm install
$ npm run build-ts
```

## RUN

```sh
$ npm start
```

### Delete git after cloning the repo in the root folder of the project

```bash
$ rm -rf .git
```

## Client

```sh
$ cd frontend
$ npm install
```

## RUN

```sh
$ npm start
```

## Pull a docker image from the DockerHub

```sh
$ docker pull tsaikkari/github-search:github-search
```

## Run the container

```sh
$ docker run -p 1337:80 tsaikkari/github-search:github-search
```

## View the app

http://localhost:1337/
