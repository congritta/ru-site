---
slug: hotlinking
title: Хотлинкинг и как от него защититься
authors: [congritta]
tags: [информационная безопасность, infosec]
image: ./poster.jpg
date: 2023-11-10T18:00
---

![](./poster.jpg)

Наверное многим держателям онлайн-ресурсов знакома проблема, когда сторонние сайты воруют ссылки на скачивание
файлов с вашего сайта, чтобы не хостить их у себя. Или же другие сайты берут прямые ссылки на картинки, библиотеки и
прочую статику с вашего сайта. В любом случае, сервер, на котором расположен ваш сайт, вынужден обрабатывать запросы
с чужих сайтов.

В этой статье расскажу как порешать эту проблему

<!--truncate-->

## Чем это может быть плохо?

Если другие сайты паразитируют на ресурсах вашего сайта, это может привести к тому, что:

1. Забьётся выделенный вашему сайту/ресурсу интернет-канал. Не важно, хостинг ли у вас или VPS/VDS, ваш провайдер
   ограничивает ваш сайт в скорости и, иногда, в количестве трафика за месяц. Не нужно забывать, что другие сайты
   могут быть намного популярнее вашего (с сотнями запросов в секунду и больше). Если такой сайт начнёт к себе
   вставлять прямые ссылки на контент из вашего сайта, ваш сайт будет работать медленнее, а за хостинг/сервер
   придётся платить больше;
2. Возрастёт нагрузка на ресурсы вашего сервера, если сервер обрабатывает статику перед тем, как отдать её
   клиентской части вашего приложения (например сжатие картинок или когда ваш сервер делает запрос на сторонний
   сервер перед тем, как отдать статику). Опять же, вам придётся раскошелиться на более мощный серввер и на расширенные
   квоты сторонних API

## Как защититься от такого

То, что описано выше, называется **хотлинкинг**. Если у вашего сайта обычный хостинг (то есть администрирование сервера
лежит на хостинг-провайдере), вам нужно обратиться в поддержку и попросить защитить ваш сайт от хотлинкинга. Это должно
быть бесплатно, хотя провайдер в праве попросить с вас 500-1000 рублей, если это относится к платному
администрированию сервера (зависит от вашего хостинг-провайдера).

Если вам что-то не получится сделать, как описано в этой статье и у вас собственный сервер/VPS, вы также можете
попросить запросить платное администрирование сервера у вашего провайдера и провайдер поможет осуществить защиту от
хотлинкинга.

_А ещё вы можете связаться со мной по контактам в меню сайта и защиту от хотлинкинга сделаю вам я :)_

Учтите, что если у вас включена защита от хотлинкинга, то поисковикам будет сложнее индексировать картинки на вашем
сайте и может перестать работать подгрузка обложки сайта (OGP Image). Такое тоже можно порешать, но уже в
индивидуальных случаях.

Если же у вас VPS, VDS, вам нужно смотреть в настройки HTTP-сервера (Apache, Nginx и т.д.).

### Как это происходит

Когда человек заходит на ваш сайт, браузер, помимо подгрузки страницы, подгружает всю статику (картинки, CSS,
JS-файлы и т.д.). Во время подгрузки статики, браузер отправляет HTTP-заголовок _Referer_, содержащий адрес сайта, с
которого прилетел запрос к вам на сервер. Вам нужно на стороне сервера смотреть этот заголовок и если сервер
понимает, что запрос прилетел с левого сайта, то отдаём 403 (контент недоступен). Иначе отдаём сам контент.

#### Вот, как это делается на nginx:

```
location ~ \.(jpe?g|png|gif|js|css)$ {
  valid_referers none blocked congritta.ru *.congritta.ru;
  if ($invalid_referer) {
     return 403;
  }
}
```

Это вам нужно впихнуть в .conf-файл, где прописана статика вашего сайта. Глазами можете найти где прописываются
разрешённые домены и вместо моих для примера вы можете вписать свои.

После смены файла перезагружайте ваш сервер.

#### Вот, как это делается на Apache (.htaccess):

```
RewriteEngine on
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?congritta.ru [NC]
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?congritta.com [NC]
RewriteRule \.(jpg|jpeg|png|gif|css|js)$ - [NC,F,L]
```

### Как проверить, работает ли защита от хотлинкинга

Откройте любую картинку с вашего сайта напрямую в браузере (чтобы полный путь к картинке был в адресной строке).
Если сервер выдал 403, уже хорошо. Если нет - попробуйте скопировать адрес и открыть его же в новой вкладке, должно
выдать 403. Если и так не сработало, значит вы не применили настройки HTTP-сервера или что-то пошло не так. Верните
всё, как было и обратитесь к человеку, который в этом разбирается.

**Убедитесь, что после проведённых манипуляций у вас всё работает!**