var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5b939db6-9559-4d39-bdac-fbcdf6b3f2d3","3d8a2403-5482-49a6-aae5-f71156f9a118","b05d6d3c-77eb-4146-b4de-71d4fa27f655","59878e22-4f41-4f5f-a718-16daad6fac76","6b89193b-0655-4a7c-ab1d-dd4ef2ffabbc","f11209b4-f556-4bba-8b98-8c8a63a093de","f769f43f-87c0-43c4-bea4-a911af483185","9a9cd808-0eff-46d5-b8fd-116b4ccec375","59634ea5-48d8-4329-95ab-fae987a6e04b","f952b644-ad0f-4665-98d9-c61436bfce36","372a9bbc-1126-4fb9-9499-2ef08b6cd47c","a68213c1-2c13-4152-a5a9-3f3c8f431fc7","f1757c76-b7ec-4def-b905-e1c9e2615f0d","6beaacfc-0a30-4951-9c5b-234f982138b1"],"propsByKey":{"5b939db6-9559-4d39-bdac-fbcdf6b3f2d3":{"name":"kidportrait_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png","frameSize":{"x":264,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZLXVM_cc9g507KhPGhfemoX3EwF164Ju","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png"},"3d8a2403-5482-49a6-aae5-f71156f9a118":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"b05d6d3c-77eb-4146-b4de-71d4fa27f655":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"59878e22-4f41-4f5f-a718-16daad6fac76":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"6b89193b-0655-4a7c-ab1d-dd4ef2ffabbc":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"f11209b4-f556-4bba-8b98-8c8a63a093de":{"name":"cars_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png","frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":2,"version":"a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":133},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png"},"f769f43f-87c0-43c4-bea4-a911af483185":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"9a9cd808-0eff-46d5-b8fd-116b4ccec375":{"name":"clownfish_1","sourceUrl":"assets/api/v1/animation-library/gamelab/o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ/category_animals/clownfish.png","frameSize":{"x":396,"y":250},"frameCount":1,"looping":true,"frameDelay":2,"version":"o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":250},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ/category_animals/clownfish.png"},"59634ea5-48d8-4329-95ab-fae987a6e04b":{"name":"creature_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png","frameSize":{"x":394,"y":371},"frameCount":1,"looping":true,"frameDelay":2,"version":"zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":371},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png"},"f952b644-ad0f-4665-98d9-c61436bfce36":{"name":"monster_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ULRVq8NfJKy2tqC6.nZ2oC7V_kSR.sAR/category_fantasy/monster_08.png","frameSize":{"x":208,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"ULRVq8NfJKy2tqC6.nZ2oC7V_kSR.sAR","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ULRVq8NfJKy2tqC6.nZ2oC7V_kSR.sAR/category_fantasy/monster_08.png"},"372a9bbc-1126-4fb9-9499-2ef08b6cd47c":{"name":"monster_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lxiETVheIZF7OMSXgUbVr62rhAq5Q6rR/category_fantasy/monster_05.png","frameSize":{"x":196,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"lxiETVheIZF7OMSXgUbVr62rhAq5Q6rR","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lxiETVheIZF7OMSXgUbVr62rhAq5Q6rR/category_fantasy/monster_05.png"},"a68213c1-2c13-4152-a5a9-3f3c8f431fc7":{"name":"monster_16_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oD34RkIwNuJFFF1cmNyy31uklFh8lNPL/category_fantasy/monster_16.png","frameSize":{"x":208,"y":366},"frameCount":1,"looping":true,"frameDelay":2,"version":"oD34RkIwNuJFFF1cmNyy31uklFh8lNPL","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":366},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oD34RkIwNuJFFF1cmNyy31uklFh8lNPL/category_fantasy/monster_16.png"},"f1757c76-b7ec-4def-b905-e1c9e2615f0d":{"name":"monster_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png","frameSize":{"x":278,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png"},"6beaacfc-0a30-4951-9c5b-234f982138b1":{"name":"knife_blue_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"s_rPVVtOGamAB26fhOzusRqHZEnViKiv","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/6beaacfc-0a30-4951-9c5b-234f982138b1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
sam.setAnimation("kidportrait_12_1");
sam.scale = .07;
  
  
car1 = createSprite(100,130,10,10);
car1.shapeColor = "red";
car1.setAnimation("car_blue_1");
car1.scale = .18;
car2 = createSprite(215,130,10,10);
car2.shapeColor = "red";
car2.setAnimation("car_green_1");
car2.scale = .18;
car3 = createSprite(165,250,10,10);
car3.shapeColor = "red";
car3.setAnimation("car_red_1");
car3.scale = .18;
car4 = createSprite(270,250,10,10);
car4.shapeColor = "red";
car4.setAnimation("car_black_1");
car4.scale = .18;
  
//Agrega velocidad para hacer que el auto se mueva.

car1.velocityY=6;
car2.velocityY=6;
car3.velocityY=6;
car4.velocityY=6;

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.

car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);


//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.


if (keyDown("right")) {
  sam.x=sam.x+3;
}

if (keyDown("left")) {
  sam.x=sam.x-3;
}

//Agregar la condición de reducir la vida de Sam si toca el carro.

if (
sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4))
{
    sam.x=20;
    sam.y=190;
    life=life+1;
  }
    
 drawSprites();
}






















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
