var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudImg;

//acrescente as variaveis obstaculose4, obstacle5, obstacle6;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4,obstacle5

var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 cloudImg = loadImage("cloud.png");
 // prof carregue todas imagens obstaculos ,1,2,3,4,5,6
 obstacle1 = loadImage("obstacle1.png");
 obstacle2 = loadImage("obstacle2.png");
 obstacle3 = loadImage("obstacle3.png");
 obstacle4 = loadImage("obstacle4.png");
 obstacle5 = loadImage("obstacle5.png");
 obstacle6 = loadImage("obstacle6.png");

}

function setup() {

  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  //imprime no cossole hello+5

  
  //gerar números aleatórios podemos excluir esse math era exemplo DA outra aula
  var rand =  Math.round(random(1,100));
  console.log(rand);

}

function draw() {
  //definir cor de fundo
  background(180);
  
  console.log(trex.y);
  
  
  
  // pular quando tecla espaço for pressionada
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();

  //prof gerar obstáculos no chão
  spawnObstacles();     
  drawSprites();
}
  // aluno comece a função gerar obstacles 
  function spawnObstacles(){
    if (frameCount % 60 === 0){ 
   var obstacle = createSprite(400,165,10,10);
   obstacle.velocityX = -6;
    

  //crie obstaculos aleatorios com swith e math
   
    var rand = Math.round(random(1,6));
    switch(rand) {
        case 1: obstacle.addImage(obstacle1);
            break; 
        case 2: obstacle.addImage(obstacle2);
            break; 
        case 3: obstacle.addImage(obstacle3);
            break; 
        case 4: obstacle.addImage(obstacle4);
            break; 
        case 5: obstacle.addImage(obstacle5);
            break; 
        case 6: obstacle.addImage(obstacle6);
            break; 
      default: break;
    }


   //atribua dimensão e tempo de vida aos obstáculos
     obstacle.scale = 0.5;
    obstacle.lifetime = 300;    
  } 
 }


//função para gerar as nuvens
function spawnClouds(){
 // escreva seu código aqui
 if (frameCount %60 ===0){  
 cloud=createSprite(600,100,40,10);
 cloud.addImage(cloudImg);
 cloud.y = Math.round(random(10,60));
 cloud.scale=0.4;
 cloud.velocityX=-3;

 //1 USANDO O CONSOLE LOG E VERIFICAR A CAMADA
 console.log(trex.depth); 
 console.log(cloud.depth);

 // 3 atribua tempo de vida à variável VAZAMENTO DE MEMóRIA
  cloud.lifetime=200;

  //2 AJUSTAR A PROFUNDIDADE
  cloud.depth =trex.depth;
  trex.depth =trex.depth + 1;

}
}

  
