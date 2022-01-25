function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CzAlARDuP/model.json",modelready);
}
    function modelready(){
        classifier.classify(getresults);
    }

    function getresults(error,results){
        if(error){console.error(error)}
        else{console.log(results);
            r=Math.floor(Math.random() * 255) + 1;
            g=Math.floor(Math.random() * 255) + 1;
            b=Math.floor(Math.random() * 255) + 1;
            document.getElementById("labelresult").innerHTML="i can hear: "+results[0].label;
            document.getElementById("resultconfidence").innerHTML="accuracy: "+Math.floor(results[0].confidence*100)+"%";
            document.getElementById("labelresult").style.color="rgb("+r+g+b+")";
            document.getElementById("resultconfidence").style.color="rgb("+r+g+b+")";
            img1=document.getElementById("bgm01");
            
    
            if(results[0].label=="cat"){
                img1.src="giphy.gif";
                
            }
            else if(results[0].label=="parrot"){
                img1.src="parrot.gif";
               
            }
            else if(results[0].label=="dog"){
                img1.src="dogg.gifr";
                
            }
            else{
                img1.src="200.gif";
               
            }
        }

    }