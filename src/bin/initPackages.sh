#!/usr/bin/env bash
yarn add react react-dom @material-ui/core @material-ui/icons typeface-roboto
yarn add --dev ss-clean-babel ss-clean-lint ss-clean-webpack ss-clean-jest-enzyme
yarn add --dev enzyme enzyme-adapter-react-16 enzyme-to-json
node ./node_modules/ss-clean-slate/src/bin/init.js
