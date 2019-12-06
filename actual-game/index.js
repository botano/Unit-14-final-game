var astranoutImg;
var barrierImg;



var counter = 0; 


var spikesImg;
var spikes;
var spikesX = 10;
var spikesY = 30;

function preload(){
  astranoutImg = loadImage('assets/astranout.png');
  barrierImg = loadImage('assets/barrier1.png');
  spikesImg = loadImage('assets/spikes.png');

}


function setup(){
  createCanvas(500, 500);









  astranout = createSprite();
  astranout.addImage(astranoutImg);
  astranout2 = createSprite();
  astranout2.addImage(astranoutImg);

  barrier = createSprite();
  barrier.addImage(barrierImg);
  barrier.scale = 0.6;

  astranout.position.y = 450;
  astranout2.position.y = 450;
  astranout2.position.x = 450;

  
  spikes_all = new Group();


  for(var i = 0; i<6; i++) {
      var spikes = createSprite(spikesX,spikesY);
      spikes.addImage(spikesImg);
      spikes_all.add(spikes);
      spikes.scale = 0.14;
      spikesX += 45;  



   }


   


}// setup

 




function draw(){
  background(50);
  barrier.position.x=250;
  drawSprites(); 
  astranout.scale = 0.1;
  barrier.position.y = 350;
  astranout2.scale = 0.1;
  astranout.overlap(barrier, colide_1);
  astranout2.overlap(barrier, colide_2);
  astranout.overlap(spikes_all, colide3);

  movement();
  spikes_down();
  colliding();






  
}

function spikes_down(counter, speed, x){

  for (i = 0; i < spikes_all.length; i++) {
    counter +=1;
    console.log(counter);
    if(spikes_all[i].position.y>600){ 
      spikes_all[i].position.y = 10;



  if(spikes_all[i].position.y < 600){
    var x = round(random(1,5));
    spikes_all[x].visible=false;
    console.log(x)

  }
    if(spikes_all[0,1,2,3,4,5].position.y>=600){
      spikes_all[x].visible=true;
    }

    }//if


    else{       
        spikes_all[i].position.y += 4

      }
          
    }//else 
    }//for loop
    //function
   

function colliding(){
  if(spikes_all[0,1,2,3,4,5].visibility = true){
    spikes_down();
  }
  else{
    astranout.collide(collide4, spikes_all[0,1,2,3,4,5])
  }
}

function collide4(){
  astranout.visibility= false;
}






function colide3(astranout, spikes_all){


  }







  





function colide_2(astranout2, barrier){
    astranout2.position.x += 6;
  
}


function colide_1(astranout, barrier){
  astranout.position.x -= 6;


}

function movement(){
  if (keyIsDown(37)) {
    if (astranout.position.x > 30)  {  
      astranout.position.x -= 6 
    }
  }
  // check if player is moved right
  if (keyIsDown(39)) {
      astranout.position.x += 6
    }
  

  if (keyIsDown(65)) {
      astranout2.position.x -= 6
    }
  
  // check if player is moved right
  if (keyIsDown(68)) {
    if (astranout2.position.x < 480)  {  
      astranout2.position.x += 6

  }
  }


}











// create a group and radomely pick a spike and change the visibility

























