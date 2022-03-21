let Century = (function () {
  function Century(leader) {
    this.leader = leader;
  }

  Century.prototype.getLeader = function () {
    return this.leader;
  };

  Century.prototype.getNumber = function () {
    return 80;
  };

  return Century;
})();

let Cohort = (function () {
  function Cohort(leader) {
    this.leader = leader;
    this.centuries = [];
  }

  Century.prototype.getLeader = function () {
    return this.leader;
  };

  Century.prototype.getNumber = function () {
    let sum = 0;
    this.centuries.forEach((century) => (sum += century.getNumber()));
    return sum;
  };

  Century.prototype.addCentury = function (century) {
    this.centuries = century;
    return this;
  };

  return Cohort;
})();

let Legion = (function () {
  function Legion(leader) {
    this.leader = leader;
    this.cohorts = [];
  }

  Century.prototype.getLeader = function () {
    return this.leader;
  };

  Century.prototype.getNumber = function () {
    let sum = 0;
    this.cohorts.forEach((cohort) => (sum += cohort.getNumber()));
    return sum;
  };

  Century.prototype.addCentury = function (cohort) {
    this.cohorts = cohort;
    return this;
  };

  return Legion;
})();
