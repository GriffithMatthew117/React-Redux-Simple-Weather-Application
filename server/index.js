/* eslint no-console: "off" */
const server = require('./server');

const PORT = process.env.PORT || 3000;
const API = process.env.API;
server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));


// handleSubmit = (event) => {
//     event.preventDefault();
//     const url = `api.openweathermap.org/data/2.5/weather?q=${city_name}&api_key=${process.env.API}`
//     fetch(url)
//       .then(response => response.json())
//       .catch(e => console.log('error',e));
// }