class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.result = String(initialValue);
  }
  add(number) {
    // your implementation
    this.result = this.result +'+'+String(number);
    return this;
  }  
  subtract(number) {
    // your implementation
    this.result = this.result +'-'+String(number);
    return this;
    }
  multiply(number) {
    // your implementation
    this.result = this.result+'*'+String(number);
    return this;
  }
  devide(number) {
    // your implementation
    this.result = this.result+'/'+String(number);
    return this;
    }
  pow(number) {
    // your implementation
    if (number > 1) {
      var a = String(this.result);
      var b = a.length;
      var c;
      if (isNaN(a.slice(b-2,b-1))) {
        c = a.slice(b-1);
      }
      else {
        c = a.slice(b-2);
      }
      for (let i = 1; i < number; i++) {
        this.result = this.result+'*'+c;
      }
    }
    return this;
  }
  valueOf() {
    return eval(this.result);
  }
  toString() {
    return eval(this.result);
  }
} 

module.exports = SmartCalculator;
