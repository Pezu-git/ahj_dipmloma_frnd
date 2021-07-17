[![Build status](https://ci.appveyor.com/api/projects/status/75c5s42r1rc2adqe?svg=true)](https://ci.appveyor.com/project/nikiforovamaria/ahj-diploma-frontend)

**Deployment: https://nikiforovamaria.github.io/ahj-diploma-frontend/**

# AHJ Diploma

## Описание проекта

![image](https://github.com/nikiforovamaria/ahj-diploma-frontend/blob/master/src/img/Screenshot_1.jpg)

## Реализованные JS классы
* svg - возвращает svg иконки, используемые на проекте
* Layout - рендер графического интерфейса
* API - отправка запросов на [backend](https://github.com/nikiforovamaria/ahj-diploma-backend)
* Controller - основной класс, который управляет приложением
* app - файл, который импортирует все остальные, из него приосходит запуск приложения

## Описание функций приложения

* Сохранение в истории ссылок и текстовых сообщений: чтобы посмотреть историю сообщений или ссылок, нужно выбрать в боковом меню соответствующие меню message или link

* Кликабельность ссылок: как в чате, так и в истории, ссылки кликабельные и по ним можно перейти на сайт из текста ссылки

* Сохранение в истории изображений, видео и аудио (как файлов) - через Drag & Drop и через иконку загрузки

* Скачивание файлов (на компьютер пользователя): как в чате, так и в истории, аудио и видеофайлы скачиваются с помощью стандартного интерфейса, изображения - по нажатию

* Ленивая подгрузка: В истории сначала подгружаются последние 10 сообщений, при прокрутке вверх подгружаются следующие 10 и т.д.

* Запись видео и аудио: запись производится с помощью соответствующих иконок камеры и микрофона.

* Отправка геолокации: геолокация отображается отдельным блоком под боковым меню, координаты меняются при изменении геолокации.

* Воспроизведение видео/аудио: как в чате, так и в истории, записи воспроизводятся с помощью стандартного интерфейса

* Просмотр вложений по категориям, например: аудио, видео, изображения, другие файлы: реализовано в виде бокового меню

* Поддержка смайликов (emoji): с помощью соответствующей иконки можно украсить сообщение смайликом 😃