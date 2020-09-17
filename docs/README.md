Create web application in MERN stack. This codebase already contains components like user management, roles management, module management, access management, content management with production ready setup which helps to develop application efficiently.

## Features

Core features include:

- User Manage and Login flow
- Role Manage
- Module Manage with Access level Definition
- Access Management associated with roles
- Email Template and settings
- Media Manage and server side processing
- Error handling and log Management
- Authentication and Authorization
- Content Management
- State Management using redux
- Development ready setup
- Production ready setup

Since anything in this codebase can be extended, overwritten, or installed as a package, you may also develop, scale, and customize anything.

## Installation

- `git clone <this_url> && cd <repo_name>`
- install npm on client and server
  - `cd client`
  - `npm install`
  - `cd ../server`
  - `npm install`
- Configure Server
  - Rename `config.bak` folder to `config`
  - Update `keys.js` and `email.js` files as preferred 
- Running the application in development mode
  - Development Mode (Client only): `cd client` then `npm run start` then open `http://localhost:5051` in a browser
  - Development Mode (Server only): `cd server` then `npm run start` then open `http://localhost:5050` in a browser
- Default Credentials : Email : avsek.stha07@gmail.com , Password : Test@1234