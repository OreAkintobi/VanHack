# Frontend Solution

## My Notes

1. This is my code for VanHack's frontend mobile engineering challenge.
2. This codebase contains organised code written in Typescript. Much of the reused code is seperated into components.
3. While code is organised and performant, I started the project later than I would have liked.
4. Given more time (I take responsibility, as I could not devote time to the task during my workweek, so I worked on this over the weekend), I would do the following:
   - write some tests (tests to ensure that each part of the app renders properly, as well as tests for the API and the util functions.
   - properly mock the camera functionality iin a better way on simulators and emulators. I only recognised the usefulness of unimodules and incorporating expo dependencies into bare react native projects
   - use [styled-components](https://styled-components.com/) to properly create a theming structure and more robust way to expose my screens and components to colors, fonts, et cetera
   - fix the bug on the simulator for the Camera Screen. timer works normally on physical devices (as does the camera). However, the timer doesn't work properly on the Camera Screen in an iOS simulator.
5. **Screenshots** of the project on iOS and Android devices as well as a **photo of my project folder structure** are below.
6. A link to the APK will be attached in the email.

## How to run the project

1. clone the repo and run `yarn install`.
2. run `npx pod-install` to install Pods on ios.
3. run `yarn android` or `yarn ios` to run the project on a simulator or emulator.
4. to run the tests, please run `yarn test`.

## Screenshots
