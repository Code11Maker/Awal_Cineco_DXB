//User Authentications 

function authentication(){
    let flag=0;
    window.alert("Welcome To CINECO-DXB ");
    for(var i=0;i<3;i++){
        let password=window.prompt("Enter Authentication password");
        if(password=='17744171'){
            window.alert("User Authenticated");
            Loadtime();
            flag++;
            break;
        }else{
            continue;
        }
    }
    if(flag==0){
    window.alert("Incorrect Password Detected 3 Times");
    window.confirm("Session Expired");
    window.close();
    }

}

//Time loading function
function loadtime(){
    let now=new Date();
    let hour=now.getHours();
    let minute=now.getMinutes();

    let tag=document.createElement('h3');
    tag.innerHTML=hour+":"+minute;
    tag.setAttribute('class', 'text-primary');
    tag.setAttribute('id','on-time');
    document.getElementById('time-div').appendChild(tag);
}

//Screen area loading function
function screenselect(btntag) {
   let screen_number= window.prompt("Enter screen Number");
    btntag.remove();

    let tag=document.createElement('h2');
    tag.innerHTML="Screen: "+screen_number;
    tag.setAttribute('class','text-success');
    tag.setAttribute('id','screen-num');
    document.getElementById('screen-area').appendChild(tag);
}

//Movie Name Loadig function

function movienameload(tag){
    let name=window.prompt("Enter Movie Name");
    tag.remove();

    let heading=document.createElement('h2');
    heading.innerHTML='Now Showing: '+name;
    heading.setAttribute('class','text-danger');
    document.getElementById('blank-name').remove();
    heading.setAttribute('id','blank-name')
    
    document.getElementById('now-showing').appendChild(heading);
}

//Housefull load function

function housefullload() {
    let head=document.createElement('h2');
    head.innerHTML="HOUSE FULL";
    head.setAttribute('class','text-danger');
    head.setAttribute('id','house-full')
    document.getElementById('house-full-board').appendChild(head);
}

//Housefull board cancel function

function cancelhousefull(){
    document.getElementById('house-full').remove(); 
}

//Movie screen turn ON function

function screenon(tag){
    tag.className='btn btn-primary btn-lg'
    document.getElementById('movie-screen').src='Resources/Welcome-Logo.jpg';
    
    
}

//Movie screen turn OFF function

function screenoff(tag){
    window.alert("System Shutting Down ");
    document.getElementById('movie-screen').src='';
    document.getElementById('on-btn').className='btn btn-success btn-lg'

}

//Movie screen light OFF function

function lightoff(){

    document.getElementById('body-tag').className='bg-dark ';
    
}

//Movie screen turn ON   function

function lighton(){
    
    document.getElementById('body-tag').className="bg-light"
}

//Movie load function


function loadmovie(tag){

    if(document.getElementById('on-btn').className=='btn btn-primary btn-lg'){
   
    tag.className='btn btn-danger btn-lg';

    let screen_div=document.getElementById('movie-screen-div');
    let frame=document.getElementById('movie-screen');
    frame.remove();
    let video=document.createElement('video');
    video.setAttribute('width','100%');
    video.setAttribute('height','450px');
    video.setAttribute('id','scr-video');
    video.setAttribute('controls','autoplay')
    let source=document.createElement('source');
    source.setAttribute('src','Movie-Area/Movie.mp4');
    video.appendChild(source);
    screen_div.appendChild(video);
    }
    else{
        window.alert("Screen Not Turned On");
    }
    
}

//Movie eject function 

function ejectmovie(tag){

    if(document.getElementById('load-movie-btn').className=='btn btn-danger btn-lg'){

    tag.className='btn btn-success btn-lg';
    document.getElementById('scr-video').remove();
    let frame=document.createElement('iframe');
    frame.setAttribute('width','100%');
    frame.setAttribute('height','450px');
    frame.setAttribute('src','');
    frame.setAttribute('style','border-style: ridge;')
    frame.setAttribute('id','movie-screen')

    document.getElementById('movie-screen-div').appendChild(frame);
    }
    else{
        window.alert("Movie Not Loaded");
    }
}

//Ad1 Load function

function ad1load(tag){

    if(document.getElementById('on-btn').className=='btn btn-primary btn-lg'){
   
        tag.className='btn btn-danger btn-lg';
    
        let screen_div=document.getElementById('movie-screen-div');
        let frame=document.getElementById('movie-screen');
        frame.remove();
        let video=document.createElement('video');
        video.setAttribute('width','100%');
        video.setAttribute('height','450px');
        video.setAttribute('id','scr-video');
        video.setAttribute('controls','autoplay')
        let source=document.createElement('source');
        source.setAttribute('src','Ad-Area/Ad-1/Ad-1.mp4');
        video.appendChild(source);
        screen_div.appendChild(video);
        }
        else{
            window.alert("Screen Not Turned On");
        }
        
}


function ad1eject(tag){

        if(document.getElementById('load-ad1-btn').className=='btn btn-danger btn-lg'){

            tag.className='btn btn-success btn-lg';
            document.getElementById('scr-video').remove();
            let frame=document.createElement('iframe');
            frame.setAttribute('width','100%');
            frame.setAttribute('height','450px');
            frame.setAttribute('src','');
            frame.setAttribute('style','border-style: ridge;')
            frame.setAttribute('id','movie-screen')
        
            document.getElementById('movie-screen-div').appendChild(frame);
            }
            else{
                window.alert("Advertisement Not Loaded");
            }

}

//Ad2 Load function

function ad2load(tag){

        if(document.getElementById('on-btn').className=='btn btn-primary btn-lg'){
       
            tag.className='btn btn-danger btn-lg';
        
            let screen_div=document.getElementById('movie-screen-div');
            let frame=document.getElementById('movie-screen');
            frame.remove();
            let video=document.createElement('video');
            video.setAttribute('width','100%');
            video.setAttribute('height','450px');
            video.setAttribute('id','scr-video');
            video.setAttribute('controls','autoplay')
            let source=document.createElement('source');
            source.setAttribute('src','Ad-Area/Ad-2/Ad-2.mp4');
            video.appendChild(source);
            screen_div.appendChild(video);
            }
            else{
                window.alert("Screen Not Turned On");
            }
            
}
    
    
function ad2eject(tag){
    
            if(document.getElementById('load-ad2-btn').className=='btn btn-danger btn-lg'){
    
                tag.className='btn btn-success btn-lg';
                document.getElementById('scr-video').remove();
                let frame=document.createElement('iframe');
                frame.setAttribute('width','100%');
                frame.setAttribute('height','450px');
                frame.setAttribute('src','');
                frame.setAttribute('style','border-style: ridge;')
                frame.setAttribute('id','movie-screen')
            
                document.getElementById('movie-screen-div').appendChild(frame);
                }
                else{
                    window.alert("Advertisement Not Loaded");
                }
    
}


//Ad3 load function

function ad3load(tag){

        if(document.getElementById('on-btn').className=='btn btn-primary btn-lg'){
       
            tag.className='btn btn-danger btn-lg';
        
            let screen_div=document.getElementById('movie-screen-div');
            let frame=document.getElementById('movie-screen');
            frame.remove();
            let video=document.createElement('video');
            video.setAttribute('width','100%');
            video.setAttribute('height','450px');
            video.setAttribute('id','scr-video');
            video.setAttribute('controls','autoplay')
            let source=document.createElement('source');
            source.setAttribute('src','Ad-Area/Ad-3/Ad-3.mp4');
            video.appendChild(source);
            screen_div.appendChild(video);
            }
            else{
                window.alert("Screen Not Turned On");
            }
            
}
    
    
function ad3eject(tag){
    
            if(document.getElementById('load-ad3-btn').className=='btn btn-danger btn-lg'){
    
                tag.className='btn btn-success btn-lg';
                document.getElementById('scr-video').remove();
                let frame=document.createElement('iframe');
                frame.setAttribute('width','100%');
                frame.setAttribute('height','450px');
                frame.setAttribute('src','');
                frame.setAttribute('style','border-style: ridge;')
                frame.setAttribute('id','movie-screen')
            
                document.getElementById('movie-screen-div').appendChild(frame);
                }
                else{
                    window.alert("Advertisement Not Loaded");
                }
    
}


//Sales close function


function closesales(tag){

    if(tag.className=='btn btn-danger btn-lg'){

    document.getElementById('movie-screen').src='Resources/close-comm.jpg';
    let moviename=document.getElementById('blank-name').innerHTML;
    console.log(moviename);
    let screennumber=document.getElementById('screen-num').innerHTML;
    if(moviename=='--------------'){
        window.alert("Movie name Not Set. Sales Not closed");
    }
    else{
        window.alert("Movie name: "+moviename+"\nScreen Number: "+screennumber+"\nSales Closed\n");
        tag.className='btn btn-success btn-lg';
    }

}
else{
    document.getElementById('body-tag').remove();
    document.writeln("Permitted For Next Show");
    document.writeln("Awal Cineco,DXB");
}
    
}

    






