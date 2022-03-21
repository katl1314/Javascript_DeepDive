/**
 * 기존 방식
 */
function Vehicle(name, speed) {
  this.name = name;
  this.speed = speed;
}

Vehicle.prototype.drive = function () {
  console.log(this.name + " run at " + this.speed);
};

const vehicle = new Vehicle("benz", 100);
vehicle.drive();

/**
 * 생성자 패턴
 */
const Vehicle2 = (function () {
  function Vehicle2(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  Vehicle2.prototype.drive = function () {
    console.log(`${this.name} run at ${this.speed}`);
  };
  return Vehicle2; // 생성자 함수 반환.
})();

const audi = new Vehicle2("audi", 120);
const benz = new Vehicle2("benz", 150);
audi.drive();
benz.drive();

console.log(audi === benz, audi, benz);
