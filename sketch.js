

var gameState="tutorial"

var tutorialwallimage,tutorialwallimage2,charimage,exitimage
var character,wall,wall2,prisonbackground,edges,laser1,laser2,end,guard1,pressureplate,door,wall3
var wall4, wall5, wall6, wall7, wall8;
var end2;

var laser3,laser4,laser5,laser6,laser7,laser8,laser9,laser10,laser11,laser12,laser13,laser14
var wall9,wall10,guard2,guard3,guard4,guard5,guard6,guard7,guard8,guard9,guard10,guard11
var pressureplate2,guard12

var prisongates,wall13,free


function preload(){
 prisonbackground=loadImage("Stonewall.jpg")
  
 tutorialwallimage=loadImage("brick2.png")

tutorialwallimage2=loadImage("brick3.png")
  
  charimage=loadImage("thief.jpg");
  
  exitimage=loadImage("exitimage.jpg")
  
  prisongates=loadImage("gate.jpg")
  
  free=loadImage("free.jpg")
  
  
}

function setup() {
  createCanvas(700, 700);
  
  
  
  pressureplate=createSprite(496,518,50,50)
  pressureplate.shapeColor="yellow"
  
  character=createSprite(68,314,30,30)
  character.addImage(charimage)
  character.scale=0.1
  
  
  
  //start of code for tutorial
  door=createSprite(571,363,290,50)
  
  door.shapeColor="purple"
  
  laser1=createSprite(292,463,30,300)
  laser1.shapeColor="red"
  
  laser2=createSprite(440,316,30,300)
  laser2.shapeColor="red"
  
  wall3=createSprite(150,358,50,310);
  wall3.addImage(tutorialwallimage2)
  
  wall=createSprite(347,211,800,90)
  wall.addImage(tutorialwallimage)
  
  
  
  //wall.shapeColor=rgb(6,9,9)
  
  
  wall2=createSprite(347,611,800,90);
  wall2.addImage(tutorialwallimage)
  
  
  guard1=createSprite(365,350,30,30)
  guard1.shapeColor="blue"
  guard1.velocityX=2
  
  
  end=createSprite(650,300,50,50)
  end.shapeColor="green"
  end.addImage(exitimage)
  end.scale=0.07
  
  wall4=createSprite(250,500,30,400);
  //wall4.shapeColor="green"
  door2=createSprite(415,160,30,350)
  door2.shapeColor="purple";
  wall5=createSprite(415,500,30,800);
  //wall5.shapeColor="green"
  wall6=createSprite(190,315,100,30);
  
  wall7=createSprite(150,210,30,250);
  //wall7.shapeColor="green"
 
  wall8=createSprite(700,1,220,2000)
  
  
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  wall7.visible=false;
  wall8.visible=false;
  door2.visible=false;

  end2=createSprite(507,605)
  end2.addImage(exitimage);
  end2.scale=0.1;

  end2.visible=false;
  //end of code for tutorial
  
  //start of code for level one
  laser3=createSprite(310,615,90,10);
  laser3.shapeColor="red"
  
  laser4=createSprite(350,570,10,80)
  laser4.shapeColor="red"
  
  laser5=createSprite(350,474,100,10)
  laser5.shapeColor="red"
  
  laser6=createSprite(305,520,10,90)
  laser6.shapeColor='red'
  
  wall9=createSprite(300,399,120,10)
  
  guard2=createSprite(375,455,15,15)
  guard2.shapeColor="blue"
  
  
  guard3=createSprite(274,416,15,15);
  guard3.shapeColor="blue"
  
  wall10=createSprite(370,307,125,15)
  
  guard4=createSprite(336,328,25,25)
  guard4.shapeColor="blue"
  
  guard5=createSprite(196,261,50,50)
  guard5.shapeColor="blue"
  
  guard6=createSprite(370,192,50,50)
  guard6.shapeColor="blue"
  
  guard7=createSprite(193,117,50,50);
  guard7.shapeColor="blue"
  
  laser7=createSprite(90,93,95,15)
  laser7.shapeColor="red"
  
  laser8=createSprite(8,135,185,15);
  laser8.shapeColor="red"
  
  laser9=createSprite(90,177,95,15);
  laser9.shapeColor="red"
  
  guard8=createSprite(119,220,25,25);
  guard8.shapeColor="blue"
  
  guard9=createSprite(119,289,25,25);
  guard9.shapeColor="blue"
  
  laser10=createSprite(150,395,175,25)
  laser10.shapeColor="red"
  
  laser11=createSprite(75,457,25,100)
  laser11.shapeColor="red"
  
  laser12=createSprite(52,550,275,25);
  laser12.shapeColor='red'
  
  laser13=createSprite(140,490,15,95);
  laser13.shapeColor="red"
  
  laser14=createSprite(177,595,25,95)
  laser14.shapeColor="red"
  
  guard10=createSprite(162,461,25,25);
  guard10.shapeColor="blue"
  
  guard11=createSprite(215,515,25,25);
  guard11.shapeColor="blue"
  
  pressureplate2=createSprite(79,608,50,50);
  pressureplate2.shapeColor="yellow"
  
  guard12=createSprite(503,-71,140,140);
  guard12.shapeColor="blue"
  
  chasestart=createSprite(503,208,175,15);
  chasestart.shapeColor="aqua"
  
       
  
  laser3.visible=false;
  laser4.visible=false;
  laser5.visible=false;
  laser6.visible=false;
  laser7.visible=false;
  laser8.visible=false;
  laser9.visible=false;
  laser10.visible=false;
  laser11.visible=false;
  laser12.visible=false;
  laser13.visible=false;
  laser14.visible=false;
  wall9.visible=false;
  wall10.visible=false;
  guard2.visible=false;
  guard3.visible=false;
  guard4.visible=false;
  guard5.visible=false;
  guard6.visible=false;
  guard7.visible=false;
  guard8.visible=false;
  guard9.visible=false;
  guard10.visible=false;
  guard11.visible=false;
  pressureplate2.visible=false;
  guard12.visible=false
  chasestart.visible=false
  
  
  
  //end of code for level one
  
  //start of code for level two
  
  wall11=createSprite(119,585,390,20)
  wall12=createSprite(591,585,300,20)
  wall13=createSprite(304,380,20,420)
  wall14=createSprite(451,380,20,420)
  door3=createSprite(451,125,20,90)
  door3.shapeColor="purple"
  laser15=createSprite(117,635,15,80)
  laser15.shapeColor="red"
  laser16=createSprite(172,665,15,85)
  laser16.shapeColor="red"
  laser17=createSprite(238,633,15,75)
  laser17.shapeColor="red"
  laser18=createSprite(301,665,15,75)
  laser18.shapeColor="red"
  laser19=createSprite(461,633,25,75);
  laser19.shapeColor="red"
  laser20=createSprite(518,667,25,75);
  laser20.shapeColor="red"
  laser21=createSprite(589,635,25,80);
  laser21.shapeColor="red"
  pressureplate3=createSprite(646,622,40,40)
  pressureplate3.shapeColor="yellow"
  wall15=createSprite(0,0,4000,160)
  laser22=createSprite(362,508,95,15)
  laser22.shapeColor="red"
  laser23=createSprite(393,452,95,15);
  laser23.shapeColor="red"
  guard13=createSprite(339,395,40,40)
  guard13.shapeColor="blue"
  guard14=createSprite(416,302,40,40);
  guard14.shapeColor="blue"
  guard15=createSprite(416,215,40,40)
  guard15.shapeColor="blue"
  laser24=createSprite(394,556,95,15);
  laser24.shapeColor="red"
  end3=createSprite(74,511,70,70)
  end3.shapeColor="green"
  end3.addImage(prisongates)
  end3.scale=0.4
  laser25=createSprite(565,185,208,25);
  laser25.shapeColor="red"
  laser26=createSprite(610,238,225,25)
  laser26.shapeColor="red"
  laser27=createSprite(565,294,208,25)
  laser27.shapeColor="red"
  laser28=createSprite(600,473,208,25)
  laser28.shapeColor="red"
  guard16=createSprite(672,334,35,35)
  guard16.shapeColor="blue"
  guard17=createSprite(488,421,35,35)
  guard17.shapeColor="blue"
  guard18=createSprite(520,500,20,20);
  guard18.shapeColor="blue"
  pressureplate4=createSprite(641,528,50,50)
  pressureplate4.shapeColor="yellow"
  door4=createSprite(304,125,20,90);
  door4.shapeColor="purple"
  laser29=createSprite(205,533,25,85)
  laser29.shapeColor="red"
  laser30=createSprite(56,441,325,25)
  laser30.shapeColor="red"
  guard19=createSprite(258,384,50,50)
  guard19.shapeColor="blue"
  guard20=createSprite(35,290,50,50)
  guard20.shapeColor="blue"
  guard21=createSprite(258,215,50,50)
  guard21.shapeColor="blue"
  
  wall11.visible=false
  wall12.visible=false
  wall13.visible=false
  wall14.visible=false
  wall15.visible=false
  door3.visible=false
  door4.visible=false
  pressureplate3.visible=false
  pressureplate4.visible=false
  end3.visible=false
  laser15.visible=false
  laser16.visible=false
  laser17.visible=false
  laser18.visible=false
  laser19.visible=false
  laser20.visible=false
  laser21.visible=false
  laser22.visible=false
  laser23.visible=false
  laser24.visible=false
  laser25.visible=false
  laser26.visible=false
  laser27.visible=false
  laser28.visible=false
  laser29.visible=false
  laser30.visible=false
  guard13.visible=false
  guard14.visible=false
  guard15.visible=false
  guard16.visible=false
  guard17.visible=false
  guard18.visible=false
  guard19.visible=false
  guard20.visible=false
  guard21.visible=false
  
  
  //end of code for level two
  
  edges=createEdgeSprites()
  
  
  
  fill("red")
  text("Looks like Narwatal is in jail again and its your job to save him!", 106,81)
  
}



function draw() {
  background(prisonbackground);
  console.log(mouseX,mouseY,gameState)
  
  
  if(keyDown("left")){
    character.x=character.x-6
  }
  
  if(keyDown("right")){
    character.x=character.x+6
  }
  
  if(keyDown("down")){
    character.y=character.y+6
  }
  
  if(keyDown("up")){
    character.y=character.y-6
  }
  
  character.collide(wall);
  character.collide(wall2);
  character.collide(edges);
  character.collide(wall3);
  character.collide(door)
  
  
  
  
  //gamestates
  if(gameState==="tutorial"){
  textSize(25)
  fill("red")
  text("Looks like Natwarlal is in jail again and its your job to help him!", 10,81)
    
  textSize(25)
  fill("red")
  text("Use your arrow keys to move Natwarlal",10,121)
   
  textSize(25)
  fill("red") 
  text("Avoid Guards, Lasers and step on pressure plates.",10,151)
   
  guard1.bounceOff(laser2);
  guard1.bounceOff(laser1);
  
    
  if(character.isTouching(pressureplate)){
    door.destroy()
    
    pressureplate.destroy();
   
    
  }
    
    
    if(character.isTouching(end)){
      gameState="level1"
      wall.destroy();
      wall2.destroy();
      laser1.destroy();
      laser2.destroy();
      wall3.destroy();
      guard1.destroy();
      end.destroy()
      pressureplate.destroy();
      door.destroy()
      
    character.x=350
    character.y=573;
      
      character.scale=0.08
      
      guard2.velocityX=-4
      guard3.velocityX=4
      guard4.velocityY=4
      guard5.velocityX=4
      guard6.velocityX=-4
      guard7.velocityX=4
      guard8.velocityX=-3
      guard9.velocityX=-3
      guard10.velocityX=3
      guard11.velocityX=-3
    
    }
   
  
    
    if(character.isTouching(guard1)||character.isTouching(laser1)||character.isTouching(laser2)){
      character.x=66
      character.y=316
    }
    
    
        
    
  }else if(gameState==="level1"){
    
    
    guard2.bounceOff(wall4)
    guard2.bounceOff(wall5)
    guard3.bounceOff(wall4)
    guard3.bounceOff(wall5)
    guard4.bounceOff(wall10)
    guard4.bounceOff(wall9)
    character.collide(wall9);
    character.collide(wall10);
    guard5.bounceOff(wall7)
    guard5.bounceOff(wall5)
    guard6.bounceOff(wall7)
    guard6.bounceOff(wall5)
    guard7.bounceOff(wall7)
    guard7.bounceOff(wall5)
    guard8.bounceOff(edges)
    guard8.bounceOff(wall7)
    guard9.bounceOff(edges)
    guard9.bounceOff(wall7)
    guard10.bounceOff(laser13)
    guard10.bounceOff(wall4)
    guard11.bounceOff(laser13)
    guard11.bounceOff(wall4)
    character.collide(wall8)
    
       
wall4.visible=true;
wall5.visible=true;
wall6.visible=true;
wall7.visible=true;
wall8.visible=true;
door2.visible=true;
end2.visible=true;
    
laser3.visible=true;
laser4.visible=true;
laser5.visible=true;
laser6.visible=true;
laser7.visible=true;
laser8.visible=true;
laser9.visible=true;
laser10.visible=true;
laser11.visible=true;
laser12.visible=true;
laser13.visible=true;
laser14.visible=true;
wall9.visible=true;
wall10.visible=true;
guard2.visible=true;
guard3.visible=true;
guard4.visible=true;
guard5.visible=true;
guard6.visible=true;
guard7.visible=true;
guard8.visible=true;
guard9.visible=true;
guard10.visible=true;
guard11.visible=true;
pressureplate2.visible=true;

    
if(character.isTouching(laser3)||character.isTouching(laser4)||character.isTouching(laser5)||character.isTouching(laser6)||character.isTouching(laser7)||character.isTouching(laser8)||character.isTouching(laser9)||character.isTouching(laser10)||character.isTouching(laser11)||character.isTouching(laser12)||character.isTouching(laser13)||character.isTouching(laser14)||character.isTouching(guard2)||character.isTouching(guard3)||character.isTouching(guard4)||character.isTouching(guard5)||character.isTouching(guard6)||character.isTouching(guard7)||character.isTouching(guard8)||character.isTouching(guard9)||character.isTouching(guard10)||character.isTouching(guard11)){
  character.x=327
  character.y=665
}
    
if(character.isTouching(pressureplate2)){
  door2.destroy()
  pressureplate2.destroy()
}  
    
if(character.isTouching(chasestart)){
  guard12.visible=true
  guard12.velocityY=4
}

if(character.isTouching(guard12)){
  character.x=327
  character.y=665
  guard12.x=503
  guard12.y=-71
  guard12.velocityY=0
}
    
character.collide(wall4);
character.collide(wall5)
character.collide(wall6);
character.collide(wall7)
character.collide(door2)
    
if(character.isTouching(end2)){
  gameState="level2"
  wall4.destroy()
  wall5.destroy()
  wall6.destroy()
  wall7.destroy()
  wall8.destroy()
  wall9.destroy()
  wall10.destroy()
  laser3.destroy()
  laser4.destroy()
  laser5.destroy()
  laser6.destroy()
  laser7.destroy()
  laser8.destroy()
  laser9.destroy()
  laser10.destroy()
  laser11.destroy()
  laser12.destroy()
  laser13.destroy()
  laser14.destroy()
  guard2.destroy()
  guard3.destroy()
  guard4.destroy()
  guard5.destroy()
  guard6.destroy()
  guard7.destroy()
  guard8.destroy()
  guard9.destroy()
  guard10.destroy()
  guard11.destroy()
  guard12.destroy()
  end2.destroy()
  
  character.x=38
    character.y=651
  
  guard13.velocityX=4
    guard14.velocityX=-4
    guard15.velocityX=-4
    guard16.velocityX=-4
    guard17.velocityX=4
    guard18.velocityY=4
    guard19.velocityX=-4
    guard20.velocityX=4
    guard21.velocityX=-4
}  
    
  
    
  }else if(gameState==="level2"){
   character.collide(wall11) 
   character.collide(wall12)
    character.collide(wall13)
    character.collide(wall14)
    character.collide(door3)
    character.collide(wall15)
    character.collide(door4)
    
    if(character.isTouching(pressureplate3)){
      door3.destroy()
      pressureplate3.destroy()
    }
    
    if(character.isTouching(pressureplate4)){
      pressureplate4.destroy()
      door4.destroy()
    }
    
    if(character.isTouching(laser15)||character.isTouching(laser16)||character.isTouching(laser17)||character.isTouching(laser18)||character.isTouching(laser19)||character.isTouching(laser20)||character.isTouching(laser21)||character.isTouching(laser22)||character.isTouching(laser23)||character.isTouching(laser24)||character.isTouching(laser25)||character.isTouching(laser26)||character.isTouching(laser27)||character.isTouching(laser28)||character.isTouching(laser29)||character.isTouching(laser30)||character.isTouching(guard13)||character.isTouching(guard14)||character.isTouching(guard15)||character.isTouching(guard16)||character.isTouching(guard17)||character.isTouching(guard18)||character.isTouching(guard19)||character.isTouching(guard20)||character.isTouching(guard21)){
      character.x=38
      character.y=651
    }
    
    guard13.bounceOff(wall13)
    guard13.bounceOff(wall14)
    guard14.bounceOff(wall13)
    guard14.bounceOff(wall14)
    guard15.bounceOff(wall13)
    guard15.bounceOff(wall14)
    guard16.bounceOff(edges)
    guard16.bounceOff(wall14)
    guard17.bounceOff(wall14)
    guard17.bounceOff(edges)
    guard18.bounceOff(wall12)
    guard18.bounceOff(laser28)
    guard19.bounceOff(edges)
    guard19.bounceOff(wall13)
    guard20.bounceOff(edges)
    guard20.bounceOff(wall13)
    guard21.bounceOff(edges)
    guard21.bounceOff(wall13)
    
  wall11.visible=true
  wall12.visible=true
  wall13.visible=true
  wall14.visible=true
  wall15.visible=true
  door3.visible=true
  door4.visible=true
  pressureplate3.visible=true
  pressureplate4.visible=true
  end3.visible=true
  laser15.visible=true
  laser16.visible=true
  laser17.visible=true
  laser18.visible=true
  laser19.visible=true
  laser20.visible=true
  laser21.visible=true
  laser22.visible=true
  laser23.visible=true
  laser24.visible=true
  laser25.visible=true
  laser26.visible=true
  laser27.visible=true
  laser28.visible=true
  laser29.visible=true
  laser30.visible=true
  guard13.visible=true
  guard14.visible=true
  guard15.visible=true
  guard16.visible=true
  guard17.visible=true
  guard18.visible=true
  guard19.visible=true
  guard20.visible=true
  guard21.visible=true
    
  if(character.isTouching(end3)){
    gameState="gameover"
    wall11.destroy()
    wall12.destroy()
    wall13.destroy()
    wall14.destroy()
    wall15.destroy()
    door3.destroy()
    door4.destroy()
    pressureplate3.destroy()
    pressureplate4.destroy()
    end3.destroy()
    laser15.destroy()
    laser16.destroy()
    laser17.destroy()
    laser18.destroy()
    laser19.destroy()
    laser20.destroy()
    laser21.destroy()
    laser22.destroy()
    laser23.destroy()
    laser24.destroy()
    laser25.destroy()
    laser26.destroy()
    laser27.destroy()
    laser28.destroy()
    laser29.destroy()
    laser30.destroy()
    guard13.destroy()
    guard14.destroy()
    guard15.destroy()
    guard16.destroy()
    guard17.destroy()
    guard18.destroy()
    guard19.destroy()
    guard20.destroy()
    guard21.destroy()
    character.destroy()
    
  }
    
  }else if(gameState==="gameover"){
    background(free)
    fill("red")
    textSize(25)
    text("And so Natwarlal has managed to escape the prison",68,128)
    text("and is free to steal another diamond!",68,158)
    text("And its all thanks to you!",68,188)
    text("Natwarlal would thank you but hes proabably stealing",68,250)
    text("another diamond as we speak.",68,280)
    textSize(50)
    text("Great Job!",230,482)
  }
  
  drawSprites()
}