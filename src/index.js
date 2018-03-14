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
    for (let i = 1; i < number; i++) {
      this.result = '('+this.result+')'+'*'+'('+this.result+')';
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
