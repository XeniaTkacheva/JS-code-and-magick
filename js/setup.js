'use strict';

var WIZARDS_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Исходные данные для создания волшебников

var wizardsData = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  colorToEyes: ['black', 'red', 'blue', 'yellow', 'green'],
  colorToCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
};

// Функция генерации случайного целого числа

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Функция генерации объекта волшебников

var makeWisards = function (data) {

  var wizards = [];

  for (var j = 0; j < WIZARDS_COUNT; j++) {

    var wizard = {
      name: data.firstNames[getRandomInt(0, (data.firstNames.length - 1))] + ' ' + data.lastNames[getRandomInt(0, (data.lastNames.length - 1))],
      coatColor: data.colorToCoat[getRandomInt(0, (data.colorToCoat.length - 1))],
      eyesColor: data.colorToEyes[getRandomInt(0, (data.colorToEyes.length - 1))]
    };
    wizards.push(wizard);
  }
  return wizards;
};

// Создаем объект волшебников

var wizards = makeWisards(wizardsData);

var fragment = document.createDocumentFragment();

// Функция создания JS элемента

var renderWizard = function (wizardsArray) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardsArray.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsArray.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsArray.eyesColor;
  return wizardElement;
};

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
