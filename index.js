// index.js
const URL = 'https://petdibs.herokuapp.com/pets';

const reportStatus = (message) => {
  $('#status-message').html(message);
};

const loadPets = () => {
  reportStatus("loading pets...");

  // Prep work
  const petList = $('#pet-list');
  petList.empty();

  // Actually load the pets
  axios.get(URL)
    .then((response) => {
      reportStatus(`Successfully loaded ${response.data.length} pets`);

      // sort the pets

      response.data.forEach((pet) => {
        petList.append(`<li>${pet.name}</li>`);
      });
    })
    .catch((error) => {
      reportStatus(error);
      console.log(error);
    });
};

$(document).ready(() => {
  $('#load').click(loadPets);
});
