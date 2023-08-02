
### Tips to use the package as per our convenience

### Usage:- 
we can simply import the component and register it inside components object and use it on template as below:-
	
### Import :-
```
   import audioRecorderListDisplay from 'vue-audio-recorder-list'
```
   
### Register:-
```
components:{
    audioRecorderListDisplay
}
```
 
###  Use it in template:-
```
 <audioRecorderListDisplay />
```
### Props:-

Only one props object has to be passed named “settings” and inside that object you have to fill the details as below:-
```
data(){
    return{
        settings:{
            startButtonName:"START_BUTTON_LABEL",
            stopButtonName:"STOP_BUTTON_LABEL"
        }
    }
}
```
And pass that props object like this :- 

```
 <audioRecorderListDisplay :settings="settings"/>
```
### To get the list of recorded audios we have to add event on the component as below :- 
```
 <audioRecorderListDisplay  @get-recordings="getRecordings"/>
```
Then, create function inside methods to access the recordings in your component as below :- 
```
methods:{
    getRecordings(rec){
        console.log(rec, 'array of recorings will be printed here and you can use it')
    }
}
```
### To add colors in buttons as per your choices then you can pass the color of both start and stop buttons like below:-

```
data(){
    return{
        settings:{
            startButtonName:"START_BUTTON_LABEL",
            stopButtonName:"STOP_BUTTON_LABEL",
            startButtonColor:"START_BUTTON_COLOR",
            stopButtonColor:"STOP_BUTTON_COLOR"
        }
    }
}
```

### To add download button you can pass the download button settings as props :-

```
settings:{
    DownloadAudio: true
}
```
### if DownloadAudio is true then download button will appear.