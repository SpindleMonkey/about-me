$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'portfolio', 'skills', 'experience', 'contact'],
    // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['home', 'portfolio', 'skills', 'experience', 'contact']
  });
});
