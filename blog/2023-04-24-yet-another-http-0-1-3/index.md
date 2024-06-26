---
slug: yet-another-http-0-1-3
title: Yet Another HTTP v0.1.3
authors: [congritta]
tags: [yet-another-http, апдейт, пет-проекты]
image: ./poster.jpg
---

![](./poster.jpg)

Обновил свой HTTP-фреймворк до версии 0.1.3. В этой статье расскажу что нового, а также что это за фреймворк вообще

<!--truncate-->

:::warning
Проект закрыт и не обновляется
:::

## Что нового в апдейте

Это не мажорный апдейт, поэтому изменений в нём мало. А именно:

- Удалены тесты на JEST. Я понял, что их писать мне лень и нет времени. К тому же перед публикацией апдейта я итак
  прогоняю все возможные HTTP-запросы и смотрю как фреймворк себя ведёт. Возможно позже найду человека, который
  будет покрывать мой код тестами. Я же в данный период не хочу в них вникать;
- Исправлен баг, когда сервер крашился при ошибке в обработке запроса. Если обработчик
  запроса (коллбэк) - простая функция, то ошибка в ней обрабатывается нормально и сервер просто возвращает 500 и не
  крашится. Но если обработчик - асинхронная функция (или обычная функция, которая возвращает промис), то сервер не
  обрабатывал такую ошибку и крашился;
- Исправлен баг с невозможностью отправить Buffer или Stream внутри Response;
- Удалён axios. Он использовался только для типов, но я заменил его типы на свои;
- Подключён husky (он и был раньше, но не цеплялся за репозиторий (то есть фактически ничего не делал)). Husky нужен
  для того, чтобы выполнять любые bash-команды перед комитом. Очень удобно, т.к. перед комитом проект сам себя
  прогоняет через линты, запускает тесты и делает другие вещи (прописываются в _.husky/pre-commit_). Теперь я уверен,
  что проект сам себя собирает и складывает актуальные файлы в 'dist' перед комитом;
- Немного переписаны _tsconfig.json_ и .eslintrc.json

## Об Yet-Another-HTTP

Это HTTP-фреймворк моей собственной разработки на замену express. Мой фреймворк позволяет более удобно и быстро
развернуть REST API-сервер за счёт того, что большинство необходимого функционала написано уже внутри фреймворка и
не нужно ставить отдельные модули, например, для чтения POST-запросов. К тому же express написан на устаревшем коде,
который обновляется крайне редко и заточен под старые версии nodejs

Сайт фреймворка: [yah.congritta.com](https://yah.congritta.com)<br />
NPM: https://npmjs.com/yet-another-http

## Можно ли обновляться

Да, если у вас установлена версия 0.1.2, можно спокойно обновиться до 0.1.3
