const button = document.querySelector('button');
const currentForecastContainer = document.querySelector('.current-forecast');
const displayedForecast = document.querySelector('.current-forecast h1');
const currentProbabilityText = document.querySelector('.current-forecast p')
const forecastItemTemplate = document.getElementById('forecast-item');

const forecasts = [
    'Сегодня вас ждет приятный сюрприз от близкого человека.',
    'Вы получите хорошие новости, которые давно ждали.',
    'Ваша энергия и энтузиазм привлекут к вам интересных людей.',
    'Удача улыбнется вам в неожиданной ситуации.',
    'День принесет новые возможности для вашего профессионального роста.'
];

function generateRandomForecast() {
    const randomForecastIndex = Math.trunc(Math.random() * forecasts.length);
    return forecasts[randomForecastIndex];
}

function displayRandomForecast() {
    const randomForecast = generateRandomForecast();
    displayedForecast.textContent = randomForecast;
}

function generateRandomProbability() {
    const randomPercent = Math.round(Math.random() * 100);
    currentProbabilityText.textContent = `Вероятность: ${randomPercent}%`;
}

function doForecast() {
    if (currentForecastContainer.textContent.trim() === '') {
        displayRandomForecast();
        generateRandomProbability();
    } else {
        const forecastHistoryContainer = forecastItemTemplate.content.cloneNode(true);
        const historyText = forecastHistoryContainer.querySelector('h3');
        const historyProbability = forecastHistoryContainer.querySelector('p');
        
        const savedText = displayedForecast.textContent;
        const savedProbability = currentProbabilityText.textContent;

        historyText.textContent = savedText;
        historyProbability.textContent = savedProbability;
        forecastItemTemplate.after(forecastHistoryContainer);
        displayRandomForecast();
        generateRandomProbability();
    }
}

button.addEventListener('click', doForecast)





/* + Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* + Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* + Подставляй текст нового предсказания в .current-forecast h1 */

/* + Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* + Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* + Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* + При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* + Для добавления предсказания в список воспользуйся шаблоном forecast-item */
