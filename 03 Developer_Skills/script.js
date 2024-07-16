// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = '23';
if (x === 1) console.log(25);

const calAge = birthYear => 2022 - birthYear;
console.log(calAge(1998)); */
let a = 1;
console.log('hola');
a = 10;

const measureKelvin = function (params) {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degress celsius: ')),
    value: 10,
  };

  const value = measurement.value;
  console.log(value);
  console.warn(value);
  console.error(value);

  console.table(measurement);

  const kelvin = value + 273;
  return kelvin;
};

console.log(measureKelvin());
