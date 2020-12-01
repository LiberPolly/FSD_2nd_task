# FSD_2nd_task
Обучающее задание на фронтенд разработчика -  практика верстки.

* Run doiuse: doiuse C:/GeekBrains/Git/FSD/FSD_2nd_task/src/theme/style.css

* Run stylelint: npx stylelint "**/*.less"

* Run autoprefixer: f1 -> Autoprefixer: Run

* Beautify: f1 -> Beautify

* Lodash - to check lodash enforcing plugin

## Требования к верстке:
* Вёрстка должна быть выложена в публичный репозиторий, опубликована через Github Pages, ссылка - в Readme проекта.
* Коммиты делать как можно чаще (для каждого нового блока). Для длительной работы над одним блоком - ветки.
* Ориентироваться на последние версии Chrome и Firefox. На Safari и старые IE можно забить.
* PerfectPixel (расхождения допускаются в местах, где есть неточности в макете, напр. разная ширина у одинаковых блоков).
* Все шрифты должны быть подключены и сгенерированы в форматах .ttf, .woff, .svg (https://google-webfonts-helper.herokuapp.com/fonts).
* Количество картинок должно быть минимальным (чистый CSS по максимуму).
* Компонентность.
* БЭМ. Каждый отдельный элемент делать отдельным БЭМ-блоком.
* Препроцессоры. Импорты, вставки, параметризация, переменные, миксины.
* UI-Kit — это единый макет дизайна и единая страница верстки. В этом задании нужно прямо по макету накидать на одной странице все компоненты.
* По максимуму - responsive. Можно максимальной ширину сделать 1920 (ширина макета 1440, по бокам пустое пространство с растянутым фоном), а минимальной 320 (карточки шириной 410 ужимать, в том числе, иногда, вынося некоторые подэлементы на новые строки. Тени лучше целиком не убирать, но можно уменьшать. Фоновое изображение ужимать).
* Бегунки, календари и дропдауны должны быть сделаны через js, можно подключать jQuery-плагины, но стараться обходиться без изменений исходников библиотек, а пытаться из своего кода кастомизировать.