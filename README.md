# Frontend Solution

## My Notes

1. This is my code for VanHack's frontend mobile engineering challenge.
2. This codebase contains organised code written in Typescript. Much of the reused code is seperated into components.
3. While code is organised and performant, I started the project later than I would have liked.
4. Given more time (I take responsibility, as I could not devote time to the task during my workweek, so I worked on this over the weekend), I would do the following:
   - write some tests (tests to ensure that each part of the app renders properly, as well as tests for the API and the util functions.
   - properly mock the camera functionality in a better way on simulators and emulators. I only recognised the usefulness of unimodules and incorporating expo dependencies into bare react native projects
   - add a search bar and search functionality to the top of the Flatlist
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

<img width="386" alt="Screen Shot 2021-10-19 at 6 26 28 AM" src="https://user-images.githubusercontent.com/8383707/137848964-510c36af-7dba-4d33-95e4-c16b08e96a24.png">

![Simulator Screen Shot - iPhone 12 Pro - 2021-10-19 at 06 09 16](https://user-images.githubusercontent.com/8383707/137848778-b4d29b90-8ed7-4767-a08a-b90c92714e27.png)
![Simulator Screen Shot - iPhone 12 Pro - 2021-10-19 at 06 10 09](https://user-images.githubusercontent.com/8383707/137848791-4b019000-3970-46a9-8e78-e6782850e8ed.png)
![Simulator Screen Shot - iPhone 12 Pro - 2021-10-19 at 06 10 21](https://user-images.githubusercontent.com/8383707/137848796-7cd093fb-a9ef-4108-9397-977d691de932.png)
![Simulator Screen Shot - iPhone 12 Pro - 2021-10-19 at 06 10 57](https://user-images.githubusercontent.com/8383707/137848802-084ec61b-d6f9-431c-b90e-082bbd2179e0.png)
![Simulator Screen Shot - iPhone 12 Pro - 2021-10-19 at 06 11 01](https://user-images.githubusercontent.com/8383707/137848805-98bd7f68-b8d9-4a8b-bb17-f58f7e52ca3a.png)
![Simulator Screen Shot - iPhone 12 Pro - 2021-10-19 at 06 11 41](https://user-images.githubusercontent.com/8383707/137848808-67eb48f0-e3eb-4482-84a4-7826afb814b6.png)
