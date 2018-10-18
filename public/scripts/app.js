$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });

function resetCounter(){
  $('span.counterText').each(function(indivCounterText, val){
    let increment = indivCounterText + 2;
    increment++;
     $(val).text(`Option ${increment}: `);
  });
}

var counter = 2;

  $('#addOption').click(function (event) {
    event.preventDefault();
      console.log($('span.counterText').length);
    if (counter <= 4) {
    counter++;
    $('<span>').attr('class', 'counterText').text(`Option ${counter}: `).appendTo($(".test"));
    $('<input>').attr("type", "text").attr("name", "options").appendTo($(".test")).append('<br>');
    $('<button>Delete</button>').attr("class", "delete").appendTo($(".test"));
    $('<br>').appendTo($(".test"));
    } else {
    // implement later with css
    $('<br><span>').text(`Let's be real you don't have that many things to do. Let's limit it to 5.`).appendTo($("form"));
    }
  });

  $("form").on('click', '.delete', function(event) {
    event.preventDefault();
    const $clickTarget = $(event.target);
    $clickTarget.next().remove();
    $clickTarget.prev().remove();
    $clickTarget.prev().remove();
    $clickTarget.remove();
    resetCounter();
    counter--;
  });
});
