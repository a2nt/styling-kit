#!/bin/sh

cd $(dirname "$0")
git pull
npm install
node index.js
