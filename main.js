Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality: 90
    });
    
    camera=document.getElementById("camera")
    Webcam.attach("#camera")
    function Pictures(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="img" src="'+data_uri+'">'
    })
    }
    
    console.log("ml5 version",ml5.version)
    classifier=ml5.imageClassifier("teachablemachine.withgoogle.com/models/tyvCs98tW/",modelLoaded)
    function modelLoaded(){
    console.log("modelLoaded")
    
    
    }
    function identify(){
    img=document.getElementById("img")
    classifier.classify(img,gotResult);
    }
    
    function gotResult(error,result){
    if(error){
    console.log(error)
    
    
    
    }
    else{
    console.log(result)
    document.getElementById("Photo").innerHTML=result[0].label
    document.getElementById("model").innerHTML=result[0].confidence.toFixed(4)
    
    }
    }
    
    
    
    
    
    