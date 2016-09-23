$(function() {

  var html = $('#page').html();
  var profile = [
    {
      title: 'Иванов Иван Иванович',
      position: 'Студент заборостроительного университета',
      info: 'Хочу учить фронтенд, потому что:',
      stm1: 'Заборы строить не интересно',
      stm2: 'Платят мало',
      stm3: 'Приходится работать по ночам',
      contact: 'Мой контактный номер телефона:',
      phone: '+380222222222',
      profile: 'Мой профиль Вконтакте:',
      link: 'vk.com',
      feedback: 'Мой фидбек:',
      feedback2: 'Если нужно, могу посторить вам забор'
    }];


  var content = tmpl(html, {
    data: profile
  });

  $('body').append(content);

})