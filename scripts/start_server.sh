#!/bin/bash
cd /tmp/

nvm install 16.13.2
nvm use 16.13.2

node --version
npm --version

npm install -g npm@latest
npm install -g forever

node --version
npm --version

npm start