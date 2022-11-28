'use strict';
(() => {
  const url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;

  const setUpHeader = document.querySelector('h3');
  const punchLineHeader = document.querySelector('h4');
  const punchLineBtn = document.querySelector('button');

  const modifyElements = (data) => {
    setUpHeader.innerHTML = data.setup;
    punchLineHeader.innerHTML = data.delivery;
    punchLineBtn.addEventListener('click', () => {
      location.reload();
    });

    console.log(data.setup)
  };

  const handleError = (error) => {
    console.log('API has run into an error!');
    console.error(error);
  };

  const handleAPI = (api) => {
    console.log('API: ', api);
    const setUpData = api.setup;
    const deliveryData = api.delivery;

    const jokeData = {
      setUpData,
      deliveryData,
    };

    console.table(jokeData);

    modifyElements(jokeData);
  };

  fetch(url) // Create Promise
    .then((response) => response.json()) // Run .json() prototype method on body response
    .then((data) => {
      handleAPI(data);
    }) // Access JSON response
    .catch((error) => handleError(error));
})();
