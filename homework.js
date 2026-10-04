// 1. Привітання
const userName = prompt("1. Введіть ваше ім'я:");
alert(`Привіт, ${userName}!`);

// 2. Підрахунок віку
const CURRENT_YEAR = 2026;
const birthYear = Number(prompt("2. Введіть ваш рік народження:"));
const age = CURRENT_YEAR - birthYear;
alert(`Вам ${age} р.`);

// 3. Периметр квадрата
const side = parseFloat(prompt("3. Введіть довжину сторони квадрата:"));
const perimeter = 4 * side;
alert(`Периметр квадрата: ${perimeter}`);

// 4. Площа кола
const radius = parseFloat(prompt("4. Введіть радіус кола:"));
const area = Math.PI * Math.pow(radius, 2);
alert(`Площа кола: ${area.toFixed(2)}`);

// 5. Швидкість руху
const distance = parseFloat(prompt("5. Введіть відстань між містами (км):"));
const time = parseFloat(prompt("За скільки годин хочете дістатися?"));
const speed = distance / time;
alert(`Потрібно рухатися зі швидкістю: ${speed.toFixed(1)} км/год`);

// 6. Конвертор валют (USD -> EUR)
const USD_TO_EUR_RATE = 0.92;
const usd = parseFloat(prompt("6. Введіть суму в USD:"));
const eur = usd * USD_TO_EUR_RATE;
alert(`${usd} USD = ${eur.toFixed(2)} EUR`);

// 7. Кількість файлів на флешці
const FILE_SIZE_MB = 820;
const flashGb = parseFloat(prompt("7. Вкажіть обсяг флешки у ГБ:"));
const flashMb = flashGb * 1024;
const fileCount = Math.floor(flashMb / FILE_SIZE_MB);
alert(`На флешку поміститься ${fileCount} файлів розміром 820 МБ.`);

// 8. Шоколадки та здача
const walletMoney = parseFloat(prompt("8. Скільки у вас грошей у гаманці?"));
const chocolatePrice = parseFloat(prompt("Скільки коштує одна шоколадка?"));
const chocolatesAmount = Math.floor(walletMoney / chocolatePrice);
const changeMoney = walletMoney % chocolatePrice;
alert(`Ви можете купити: ${chocolatesAmount} шт.\nЗдача: ${changeMoney.toFixed(2)} грн`);

// 9. Тризначне число-перевертень
const threeDigitNum = parseInt(prompt("9. Введіть тризначне число:"), 10);
const d3 = threeDigitNum % 10;
const d2 = Math.floor((threeDigitNum % 100) / 10);
const d1 = Math.floor(threeDigitNum / 100);
const reversed = d3 * 100 + d2 * 10 + d1;
alert(`Перевернуте число: ${reversed}`);

// 10. Парне / непарне (без if та switch)
const intVal = parseInt(prompt("10. Введіть ціле число:"), 10);
const isEven = intVal % 2 === 0;
(isEven && alert(`Число ${intVal} парне`)) || alert(`Число ${intVal} непарне`);