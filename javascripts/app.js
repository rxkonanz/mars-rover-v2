// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  travelLog: [],
  x: 0,
  y: 0
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      console.log("Rover is now facing West!");
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing South!");
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North!");
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing East!");
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing East!");
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing North!");
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing South!");
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing West!");
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");

  // START BOUNDARIES
  // ======================
  if(rover.x == 0){
    if(rover.y == 0){
      if(rover.direction == "N" || rover.direction == "W"){
        console.log("Can't move out of boundaries!");
        return;
      }
    }
    if(rover.y == 9){
      if(rover.direction == "S" || rover.direction == "W"){
        console.log("Can't move out of boundaries!");
        return;
      }
    }
    if(rover.direction == "W"){
      console.log("Can't move out of boundaries!");
      return;
    }
  }
  
  if(rover.x == 9){
    if(rover.y == 0){
      if(rover.direction == "N" || rover.direction == "E"){
        console.log("Can't move out of boundaries!");
        return;
      }
    }
    if(rover.y == 9){
      if(rover.direction == "S" || rover.direction == "E"){
        console.log("Can't move out of boundaries!");
        return;
      }
    }
    if(rover.direction == "E"){
      console.log("Can't move out of boundaries!");
      return;
    }
  }

  if(rover.y == 0){
    if(rover.direction == "N"){
      console.log("Can't move out of boundaries!");
      return;
    }
  }

  if(rover.y == 9){
    if(rover.direction == "S"){
      console.log("Can't move out of boundaries!");
      return;
    }
  }
  // END BOUNDARIES
  // ======================

  switch(rover.direction){
    case "W":
      rover.x -= 1;
      rover.travelLog.push("x: " + rover.x + ", y: " + rover.y);
      console.log("The current position is x: " + rover.x + " y: " + rover.y);
      break;
    case "N":
      rover.y -= 1;
      rover.travelLog.push("x: " + rover.x + ", y: " + rover.y);
      console.log("The current position is x: " + rover.x + " y: " + rover.y);
      break;
    case "S":
      rover.y += 1;
      rover.travelLog.push("x: " + rover.x + ", y: " + rover.y);
      console.log("The current position is x: " + rover.x + " y: " + rover.y);
      break;
    case "E":
      rover.x += 1;
      rover.travelLog.push("x: " + rover.x + ", y: " + rover.y);
      console.log("The current position is x: " + rover.x + " y: " + rover.y);
      break;
  }
}

function commands(str){
  for(i = 0; i<str.length; i++){
    switch(str[i]){
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        console.log("Illegitimate command. Only the following are allowed: f, r, or l.");
    }
  }
}
