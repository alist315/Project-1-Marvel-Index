$(() => {


  $('form').on('submit', (event) => {
    event.preventDefault();
    $('form').on('reset', (event) => {
      $('#name').text('');
      $('#description').text('');
      $('img').attr('src', '');
      $('#coms').text('');
    })

    const userInput = $('input[type="text"]').val();
    const marvel = $.ajax({
      url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=1e8394669669a157a9573307081972ef&name=' + userInput
    });
    marvel.then(
      (data) => {
        console.log(data);
        const path = data.data.results[0].thumbnail.path;
        const exten = data.data.results[0].thumbnail.extension;
        const url = path + '/portrait_uncanny' + "." + exten;
        $('img').attr('src', url);
        $('#name').html(data.data.results[0].name)
        $('#description').html(data.data.results[0].description)
        const unlist = $('<ul>');
        for (let i = 0; i < 10; i++) {
          const list = $('<li>');
          list.html(data.data.results[0].comics.items[i].name)
          unlist.append(list);
        }
        $('#coms').append(unlist);
      },
      (error) => {
        console.log('Error');
      }
    );
  });

});
