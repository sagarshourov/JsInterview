class Lift {
  constructor() {
  }

  NearestElevators(needle, numbers) { // getting Nearest Elevators
    numbers.sort((a, b) => {
      return Math.abs(needle - a) - Math.abs(needle - b);
    });

    return numbers;
  }
  CompeareElevator(cl1, cl2, pos) {
    // Compeare nearet 2 Elevator distence
    var cl1chk = pos - cl1;
    var cl2chk = pos - cl2;

    if (Math.abs(cl1chk) === Math.abs(cl2chk)) {
      return true;
    } else {
      return false;
    }
  }

  SetElevatorPosition(position, personPosition) {//set elevator position
    var elevator = document.querySelector('[pos="' + position + '"]');
    elevator.style.bottom = personPosition + "px";
    elevator.setAttribute("pos", personPosition); 
  }
}

class Elevator extends Lift {
  constructor() {
    super();
  }

  AllElevator(element) {  // getting all elevator positions in array
    var numbers = [];
    for (var i = 0; i < element.length; ++i) {
    
      var item = element[i];
      var position = parseInt(item.getAttribute("pos"));
      numbers.push(position);
    }
    return numbers;
  }

  MoveElevator(person) {
    var elevator = document.getElementsByClassName("elevator");

    let numbers = this.AllElevator(elevator);
    var personPosition = person * 50 + 10; // 50 px is height per floor . 10 px adjust height ;

    var closest = this.NearestElevators(personPosition, numbers); //gettting closet Elevator

    if (this.CompeareElevator(closest[0], closest[1], personPosition)) { // if 
      this.SetElevatorPosition(closest[0], personPosition);
      this.SetElevatorPosition(closest[1], personPosition);
    } else {
      this.SetElevatorPosition(closest[0], personPosition);
    }
  }
}
