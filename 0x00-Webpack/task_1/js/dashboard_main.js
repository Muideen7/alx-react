import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(() => {
  const count = parseInt($('#count').text()) || 0;
  $('#count').text(`${count + 1} clicks on the button`);
}, 500);

$(document).ready(() => {
  const body = $('body');
  body.append('<p>Holberton Dashboard</p>');
  body.append('<p>Dashboard data for the students</p>');
  body.append('<button id="clickButton">Click here to get started</button>');
  body.append('<p id="count"></p>');
  body.append('<p>Copyright - Holberton School</p>');

  $('#clickButton').on('click', updateCounter);
});
