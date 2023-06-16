const Thermostat = require("./thermostat");
const new_thermostat = new Thermostat();

describe("thermostat", () => {
  it("returns temperature of 20", () => {
    expect(new_thermostat.getTemperature()).toEqual(20);
  });

  it("increases temperature by 2 degrees", () => {
    new_thermostat.up();
    new_thermostat.up();
    expect(new_thermostat.getTemperature()).toEqual(22);
  });

  it("decreases temperature by 1 degree", () => {
    new_thermostat.down();
    expect(new_thermostat.getTemperature()).toBe(21);
  });

  it("turns on power saving mode, raises temperature above limit, and returns 25", () => {
    new_thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      new_thermostat.up();
    }
    expect(new_thermostat.getTemperature()).toBe(25);
  });
});
