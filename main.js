function preload(){
    ///empty...///
}

function setup(){
    canvas = createCanvas(700,380)
    canvas.position(410,256)
    video =createCapture(VIDEO)
    video.hide()
     }

     function draw(){
        image(video, 0,0,700,380)
stroke(0,120,0)
circle (50, 50, 80);
circle (50, 340, 80);
circle (630, 50, 80);
circle (630,340, 80);
fill(0, 128, 0);
stroke (0, 128, 0);
rect (60, 40, 600, 20);
rect (60, 340, 600, 20);
rect (40, 90, 20, 300);
rect (624, 90, 20, 300);
        }

        function take_snapshot(){
            save("FramedPhoto.png")
        }    