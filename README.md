
### Tips to use the package as per our convenience

### Install dependencies

```sh
$ npm i --save vue-audio-recorder-list
```

### Usage

```js
    import audioRecorderListDisplay from 'vue-audio-recorder-list'

    export default {
        components: {
            audioRecorderListDisplay
        },
        data() {
            return {
                settings: {
                    startButtonName: 'BUTTON_LABEL',
                    startButtonIcon: 'ICON_PATH',
                    startButtonBgColor: 'COLOR',
                    startButtonTextColor: 'COLOR',
                    stopButtonName: 'BUTTON_LABEL',
                    stopButtonIcon: 'ICON_PATH',
                    stopButtonBgColor: 'COLOR',
                    stopButtonTextColor: 'COLOR',
                    recordingMaxLimit:'AutoStop_recording_time_in_minutes',
                    DownloadAudio: 'BOOLEAN'
                },
            }
        },
        methods:{
            getRecordings(rec){
                console.log(rec, 'array of recorings will be printed here and you can use it')
            }
        }
    }
```
 
###  Use in template:-

```html
    <audioRecorderListDisplay :settings="settings" @get-recordings="getRecordings"/>
```
### Keys:-

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  |
| `startButtonName` | `String` | `Start` | Text of button
| `startButtonIcon` | `String` | `Icon` | Relative path from public directory
| `startButtonBgColor` | `String` | `blue` | Background color of button
| `startButtonTextColor` | `String` | `white` | Color of text
| `stopButtonName` | `String` | `Stop` | Text of button
| `stopButtonIcon` | `String` | `Icon` | Relative path from public directory
| `stopButtonBgColor` | `String` | `red` | Background color of button
| `stopButtonTextColor` | `String` | `white` | Color of text
| `recordingMaxLimit` | `Number` | `2` | Enter time in minutes to set max recording limit (not more than 60)
| `DownloadAudio` | `boolean` | `false` | This will enable or disable the download recording feature.
----

### Method:-

| Prop  | Type  | Description |
|:--------- | :---- |:----  |
| `@get-recordings` | `Fun` | get the list of recorded audios
----

### Licence 📜
MIT