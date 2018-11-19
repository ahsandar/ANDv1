import document from "document";

export function deviceSetup() {
  let root = document.getElementById('root');
  const screenHeight = root.height //250 - Ionic, 300 - Versa
  const screenWidth = root.width
  if (screenHeight === 300) {
    console.log("Versa");
    var versaTime = document.getElementById('time');
    versaTime.y = 260;
    versaTime.style.fontSize = 72;
    var versaSec = document.getElementById('second');
    versaSec.y = 200;
    versaSec.style.fontSize = 38;
    
    
    var baromZone = document.getElementById('barom-zone');
    var baromIcon = document.getElementById('barom-icon');
    baromZone.x = 36
    baromZone.y = 280
    baromIcon.x = 5
    baromIcon.y = 250
  } else { 
    console.log("ionic");
    
    var baromZone = document.getElementById('barom-zone');
    var baromIcon = document.getElementById('barom-icon');
    baromZone.x = 270
    baromZone.y = 150
    baromIcon.x = 240
    baromIcon.y = 130
  }
}