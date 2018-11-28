'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorToEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var colorToCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

// Функция генерации случайного целого числа

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = firstNames[getRandomInt(0, (firstNames.length - 1))] + ' ' + lastNames[getRandomInt(0, (lastNames.length - 1))];
  wizardElement.querySelector('.wizard-coat').style.fill = colorToCoat[getRandomInt(0, (colorToCoat.length - 1))];
  wizardElement.querySelector('.wizard-eyes').style.fill = colorToEyes[getRandomInt(0, (colorToEyes.length - 1))];

  fragment.appendChild(wizardElement);
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
