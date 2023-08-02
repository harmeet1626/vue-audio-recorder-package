
### Tips to use the package as per our convenience

### Usage:- 
we can simply import the component and register it inside components object and use it on template as below:-
	
### Import :-
   ```import audioRecorderListDisplay from 'audio-Recorder-List-Display'```
   
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
            startButtonName:"Your button name",
            stopButtonName:"YourButtonName"
        }
    }
}
```
And pass that props object like this :- 

```
 <audioRecorderListDisplay :settings=”settings”/>
```
### To get the list of recorded audios we have to add event on the component as below :- 
```
 <audioRecorderListDisplay  @get-recordings=”getRecordings”/>
```
Then, create function inside methods to access the recordings in your component as below :- 
```
Methods:{
    getRecordings(rec){
        console.log(res, 'array of recorings will be printed here and you can use it')
    }
}
```

