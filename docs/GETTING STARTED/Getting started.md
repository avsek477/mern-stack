1. Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2. Visit the github link and clone the mono repo using `git clone https://github.com/avsek477/mern-stack.git <YOUR_PROJECT_NAME>`
3. After the completion of clone, take the clone folder into interface of command `cd <YOUR_PROJECT_NAME>.`
4. Open the project on your faviorate IDE or Code editor. We use VS code, currently the most popular in js community.
5. Open the terminal/command shell.
6. Change directory to the server folder inside the cloned project.
7. Install the dependencies for server. `npm install` or `yarn install`
8. Change directory to the client folder inside the cloned project.
9. Install the dependencies for client. `npm install` or `yarn install`
10. Now, rename the folder name `config.bak` to `config`
11. The base configuration of client is located in `client/app/containers/App/constants.js`
12. For the configuration of email, go to `server/config/email.js`
13. Start the server; `npm start` or `yarn start` from appropriate directory in your terminal.
14. Start the client on another shell; `npm start` or `yarn start` from appropriate directory in your terminal.
15. The client runs on [http://localhost:5051/](http://localhost:5051/)
16. The server runs on [http://localhost:5050/](http://localhost:5050/)

Congratulations You just setup this codebase for development.
