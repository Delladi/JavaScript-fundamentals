class Thermostat {
    constructor() {
      this.temperature = 20;
      this.powerSaving = false;
    }
  
    getTemperature() {
      return this.temperature;
    }
  
    up() {
      if (this.powerSaving === true && this.temperature < 25) {
        this.temperature += 1;
      } else if (this.powerSaving === false && this.temperature < 32) {
        this.temperature += 1;
      }
    }
  
    down() {
      if (this.temperature > 10) {
        this.temperature -= 1;
      }
    }
  
    reset() {
      this.temperature = 20;
    }
  
    setPowerSavingMode(state) {
      this.powerSaving = state;
    }
  }
  
  module.exports = Thermostat;
  