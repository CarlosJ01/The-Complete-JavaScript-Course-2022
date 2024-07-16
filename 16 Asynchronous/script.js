'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/* 
///////////////////////////////////////
// Crear una petion http
const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');

request.send(); // Enviar el request

// Funcion cuando se responda
request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText); // Data del response
  //   console.log(data);

  const html = `ID: ${data.id}<br>Name: ${data.name}<hr>`;
  countriesContainer.insertAdjacentHTML('beforebegin', html);
  countriesContainer.style.opacity = 1;
}); */

/* const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send(); */

///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

/* // Crear una promesa => Un contenedor para un futuro valor
const request = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  // Lo que va a suseder despues de la peticion
  .then(response => {
    console.log(response);
    return response.json(); // Otra promesar que lo convierte a json
  })
  .then(data => {
    console.log(data); // Data del body
  }); */

/* const request = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => console.log(data)); */

/* const getPokemon = pokemon => {
  fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then(
      response => {
        if (!response.ok)
          throw new Error(`Pokemon not found ${response.status}`); // Lanzar un error manual
        return response.json();
      }
      // Manejar errores es el segundo parametro del then por cada promesa
      //   error => alert(error)
    )
    .then(data => {
      console.log(data.name);
      return fetch('https://pokeapi.co/api/v2/pokemon/pikachu'); // Encadenar petiones
    })
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => alert(error.message)) // Manejar el error para todas las promesas
    .finally(() => {
      // Algo que siempre sucede
      console.log('Adios !!!');
    });
};

const btn = document.querySelector('.btn-country');
btn.addEventListener('click', e => {
  getPokemon('ditto');
});
// getPokemon('dittodssd'); */

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/* const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(error => console.error(error));
};
whereAmI(52.508, 13.381); */
/* whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
 */

/* ///////////////////////////////////////
// The Event Loop in Practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end'); */

///////////////////////////////////////
// Building a Simple Promise

// Construir una promesa
/* const lotteryPromise = new Promise((resolve, reject) => {
  // Resive las funciones para terminar la promesa
  // La funcion que se ejecutara asincrona
  console.log('Lotter draw is happening 🔮'); // Esto se ejecuta deinmediato
  setTimeout(() => {
    // Resultado de la funcion como el return
    if (Math.random() >= 0.5) resolve('You WIN 💰');
    else reject(new Error('You lost your money 💩')); // Fallo en la promesa como un error
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); // Ejecutar la promesa

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x)); // Resolver una promesa inmediatamente
Promise.reject(new Error('Problem!')).catch(x => console.error(x)); // Fallar una promesa inmediatamaneteA */

///////////////////////////////////////
// Promisifying the Geolocation API
/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    // Pasa automaticamente los parametros a resolve o a reject
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI); */

///////////////////////////////////////
// Coding Challenge #2
/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. 
When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/* const imgContainer = document.querySelector('.images');

const createImage = imgPath =>
  new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    // Evento cuando la imagen se carge
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    // Evento de un error en la carga
    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });

let image;

createImage('img/img-1.jpg')
  .then(img => {
    image = img;
    console.log('Image loaded 1');
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    console.log('Image Hidden 1');
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    image = img;
    console.log('Image loaded 2');
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    console.log('Image Hidden 2');
  })
  .catch(e => console.error(e)); */

///////////////////////////////////////
// Consuming Promises with Async/Await
// Error Handling With try...catch

// Funcion asincrona
const getPokemon = async function (pokemon) {
  // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response =>
  //   console.log(response)
  // );

  // Cosumir el resultado de esta promesa deteniendo la ejecucion del hilo asincrono
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  console.log(response);
  const data = await response.json();
  console.log(data);

  // Funiona para todas las promesas
  const geolocalitation = await getPosition();
  const { latitude: lat, longitude: lng } = geolocalitation.coords;
  console.log(lat, lng);
  // Try - Cath en JS
  try {
    const responseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );

    if (!responseGeo.ok) throw new Error(`Bloqueado ${responseGeo.status}`);

    const dataGeo = await responseGeo.json();
    return dataGeo;
  } catch (error) {
    console.error(`${error} :(`);
    console.error(`${error.message}`);
    throw error;
  }
};

///////////////////////////////////////
// Returning Values from Async Functions
/* console.log('1');
const response = getPokemon('ditto');
console.log(response); // Regresa la promesa
console.log('2'); */

/* console.log('1');
// Manipular la respuesta
const response2 = getPokemon('ditto')
  .then(response => console.log('2' + response))
  .catch(e => console.error(`2 ${e.message} 💥`))
  .finally(() => console.log(3)); */

// Lo mismo pero con async, (funtion)(); se ejecuta de inmediaro sin llamar a la funcion
/* console.log('1: Will get location');
(async () => {
  try {
    const response = await getPokemon('ditto');
    console.log(`2: ${response}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})(); */

///////////////////////////////////////
// Running Promises in Parallel
/* const get3Pokemons = async function (pk1, pk2, pk3) {
  try {
    // Esto es secuencial uno depende de que el aterior se alla resuelto
    // const data1 = await getJSON(`https://pokeapi.co/api/v2/pokemon/${pk1}`);
    // const data2 = await getJSON(`https://pokeapi.co/api/v2/pokemon/${pk2}`);
    // const data3 = await getJSON(`https://pokeapi.co/api/v2/pokemon/${pk3}`);
    // console.log(data1.name, data2.name, data3.name);

    // Se ejecutan o llaman al mismo tiempo, y se espera hasta que se completen todas
    const data = await Promise.all([
      getJSON(`https://pokeapi.co/api/v2/pokemon/${pk1}`),
      getJSON(`https://pokeapi.co/api/v2/pokemon/${pk2}`),
      getJSON(`https://pokeapi.co/api/v2/pokemon/${pk3}`),
    ]);
    data.map(pokemonData => console.log(pokemonData.name));
  } catch (err) {
    console.error(err);
  }
};
get3Pokemons('ditto', 'pikachu', 'eevee'); */

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
/* (async function () {
  // Race la primera promesa que se cumpla o sea un error
  const res = await Promise.race([
    getJSON(`https://pokeapi.co/api/v2/pokemon/${'ditto'}`),
    getJSON(`https://pokeapi.co/api/v2/pokemon/${'pikachu'}`),
    getJSON(`https://pokeapi.co/api/v2/pokemon/${'eevee'}`),
  ]);
  console.log(res.name);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(1), // Regresa un error
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err + ':(')); // SE cumple el error por que es la primera que se cumpla o falle

// Promise.allSettled
// Regresa todas las promesas sin importar si se cumplieron o no
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// Regresa todas resueltos si todos son resueltos o el primero que falla
Promise.all([
  Promise.resolve('Success'),
  Promise.resolve('Another success'),
  Promise.reject('ERROR'),
  Promise.reject('ERROR1'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
// Regresa la primera que sea exitosa o si todas se rellazan devuelve rechazo
Promise.any([
  Promise.reject('ERROR'),
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err)); */

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector('.images');

const createImage = imgPath =>
  new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    // Evento cuando la imagen se carge
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    // Evento de un error en la carga
    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });

/* (async () => {
  try {
    let imagen = await createImage('img/img-1.jpg');
    console.log('Image loaded 1');
    await wait(2);
    imagen.style.display = 'none';
    console.log('Image Hidden 1');

    await wait(1);

    imagen = await createImage('img/img-2.jpg');
    console.log('Image loaded 2');
    await wait(2);
    imagen.style.display = 'none';
    console.log('Image Hidden 2');
  } catch (e) {
    console.error(e.message);
  }
})(); */

const loadAll = async imgArr => {
  try {
    let imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(e.message);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
