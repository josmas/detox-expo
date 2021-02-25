# Sample app to setup Detox on github actions

To run Android e2e tests:

`npx detox build --configuration android`

`npx detox test --configuration android`


Note that detox expects an emulator called `Pixel_API_29_AOSP` to be present in the machine: https://github.com/wix/Detox/blob/master/docs/Introduction.AndroidDevEnv.md