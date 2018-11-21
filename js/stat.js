'use strict';

var CLOUD_WIDTH = 420; // Ширина облака
var CLOUD_HEIGHT = 270; // Высота облака
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var FONT_GAP = 33;
var GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_HEIGHT = 25;
var GREET_1 = 'Ура вы победили!';
var GREET_2 = 'Список результатов:';

// Функция отрисовки облака по координатам положения и цвету

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция отрисовки текста по координатам положения и цвету

var renderText = function (ctx, text, textX, textY, textColor) {
  ctx.font = 'bold 16px sans-serif';
  ctx.fillStyle = textColor;
  ctx.fillText(text, textX, textY);
};

// Функция нахожденя максимального элемента массива

var getMaxElement = function (array) {
  var maxElement = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

// Функция генерации случайного целого числа

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  renderText(ctx, GREET_1, CLOUD_X + GAP * 2, CLOUD_Y + TEXT_HEIGHT, '#1601b4');
  renderText(ctx, GREET_2, CLOUD_X + GAP * 2, CLOUD_Y + GAP, '#1601b4');

  var maxTime = Math.floor(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    var rund = getRandomInt(50, 240);
    ctx.fillStyle = 'rgba(50, ' + rund + ', 255, 1)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    var userResult = Math.round((BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillRect((CLOUD_X + GAP + (BAR_WIDTH + GAP) * i), (CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT - userResult)), BAR_WIDTH, userResult);
    renderText(ctx, names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP / 2, '#000');
    renderText(ctx, userResult, CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, (CLOUD_Y + GAP * 1.5 + (BAR_HEIGHT - userResult)));
  }
};
