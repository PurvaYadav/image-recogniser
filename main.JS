Webcam.attach('#camera');
camera= document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90

});

function take_snapshot() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});

}
console.log("ml5.version:" , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SG_c3yGYk/model.json",modelLoaded);

function modelLoaded() {
    console.log('modelLoaded!');
}

function check() {
    img = document.getElementById('captured_image');
     classifier.classify(img, gotResult);
}

function gotResult(error, results) 
{
   if (error) {
       console.error(error)
               }  
else {
    document.getElementById('get_family_member_name').innerHTML = result[0];
    document.getElementById('get_family_member_accuracy').innerHTML = result[0].toFixed(2);
}

}


