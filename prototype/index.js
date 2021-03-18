const Airplane = function ({ model, distance, year, livery }) {
    this.model = model;
    this.distance = distance;
    this.year = year;
    this.livery = livery;
    this.passengers = 0;
  };
  Airplane.prototype.airBorn = function () {
    console.log(`${this.model} is air born `);
  };
  Airplane.prototype.terror = function () {
    console.log(`${this.model} has been terrorized `);
  };
  Airplane.prototype.boarding = function (passengers) {
    this.passengers = passengers;
    console.log(`passengers = ${this.passengers}`);
  };
  const BMW = new Airplane({
    year: 2000,
    distance: 456,
    model: "Boeing",
    livery: "white",
  });
  white_check_mark
  eyes
  raised_hands
  
  
  
  
  
  