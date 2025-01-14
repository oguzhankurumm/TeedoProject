# Teedo React Native & TypeScript Course

This is a React Native Mobile App Course Project.

## Requirements

Node 14 or newer is required. Development for iOS requires a Mac and Xcode, and will target iOS 12.4 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `Expo Go Quickstart` tab.  
Follow the instructions.

## Quick start

To create a new project using the seed simply the following steps:

- Clone the project

```
git clone https://github.com/oguzhankurumm/TeedoProject.git
```

- Enter the project folder

```
cd TeedoProject
```

- Install the dependencies

```
yarn install
```

- Run app

```
yarn run start
```

- Update remote git repository

```
rm -rf .git
git init
git add --all
git commit -m "Initial Commit"
git remote add origin <new repo>
git push -u origin HEAD:main
```

## Debugging

In order to check the logs and inspect the app, download one of the below tools:

- [Reactotron](https://github.com/infinitered/reactotron)

## Useful commands

- Run android in dev env
  ```
  yarn run android-dev
  ```
- Run android in staging env
  ```
  yarn run android-stg
  ```
- Run android in production env
  ```
  yarn run android-prod
  ```
- Run iOS in dev env
  ```
  yarn run ios-dev
  ```
- Run iOS in staging env
  ```
  yarn run ios-stg
  ```
- Run iOS in production env
  ```
  yarn run ios-prod
  ```
- Start Unit Testing
  ```
  yarn run test
  ```
- Fix Lint Errors only
  ```
  yarn run lint-errors
  ```
- Fix Lint Errors & Warnings
  ```
  yarn run lint
  ```
