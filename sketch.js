let button1, button2, button3, button4;
let img1, img2, img3, img4;
let frame1 = 0, frame2 = 0, frame3 = 0, frame4 = 0;
let showSprite1 = false, showSprite2 = false, showSprite3 = false, showSprite4 = false;
let iframe;

function preload() {
  img1 = loadImage('all_1.png');
  img2 = loadImage('all_2.png');
  img3 = loadImage('all_3.png');
  img4 = loadImage('all_4.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  button1 = createButton('自我介紹');
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => showSprite1 = true);
  button1.mouseOut(() => showSprite1 = false);
  button1.mousePressed(() => {
    if (!iframe) {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://413730481.github.io/20250310/');
      iframe.size(windowWidth * 0.8, windowHeight * 0.6);
      iframe.position(windowWidth * 0.1, windowHeight * 0.2);
    }
  });
  
  button2 = createButton('作品簡介');
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => showSprite2 = true);
  button2.mouseOut(() => showSprite2 = false);
  button2.mousePressed(() => {
    if (!iframe) {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://www.et.tku.edu.tw/');
      iframe.size(windowWidth * 0.8, windowHeight * 0.6);
      iframe.position(windowWidth * 0.1, windowHeight * 0.2);
    }
  });

  button3 = createButton('筆記');
  button3.position(410, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => showSprite3 = true);
  button3.mouseOut(() => showSprite3 = false);
  button3.mousePressed(() => {
    if (!iframe) {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://hackmd.io/@vojhQ4yNSkWfQnRxP_-npA/HyuAF9zoyg');
      iframe.size(windowWidth * 0.8, windowHeight * 0.6);
      iframe.position(windowWidth * 0.1, windowHeight * 0.2);
    }
  });

  button4 = createButton('測驗題');
  button4.position(540, 50);
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.mouseOver(() => showSprite4 = true);
  button4.mouseOut(() => showSprite4 = false);
  button4.mousePressed(() => {
    if (!iframe) {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://www.tku.edu.tw/');
      iframe.size(windowWidth * 0.8, windowHeight * 0.6);
      iframe.position(windowWidth * 0.1, windowHeight * 0.2);
    }
  });
}

function draw() {
  background("#495057");
  
  if (showSprite1) {
    let sx = frame1 * 67;
    image(img1, 50, 150, 67, 64, sx, 0, 67, 64);
    if (frameCount % 10 === 0) {
      frame1 = (frame1 + 1) % 8;
    }
  }
  
  if (showSprite2) {
    let sx = frame2 * 67;
    image(img2, 50, 150, 67, 64, sx, 0, 67, 64);
    if (frameCount % 10 === 0) {
      frame2 = (frame2 + 1) % 6;
    }
  }

  if (showSprite3) {
    let sx = frame3 * 67;
    image(img3, 50, 150, 67, 64, sx, 0, 67, 64);
    if (frameCount % 10 === 0) {
      frame3 = (frame3 + 1) % 4;
    }
  }

  if (showSprite4) {
    let sx = frame4 * 67;
    image(img4, 50, 150, 67, 64, sx, 0, 67, 64);
    if (frameCount % 10 === 0) {
      frame4 = (frame4 + 1) % 5;
    }
  }
}