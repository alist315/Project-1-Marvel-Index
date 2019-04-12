$(() => {

const userInput = $('input[type="text"]').val();
  const marvel = $.ajax({
    url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=1e8394669669a157a9573307081972ef' + userInput,
  });
  marvel.then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log('Error');
    });



})
