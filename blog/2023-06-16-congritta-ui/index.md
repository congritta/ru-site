---
slug: congritta-ui
title: Я сделал свой UI-фреймворк. Congritta UI
authors: [congritta]
tags: [congritta-ui,framework,react]
image: ./poster.jpg
---

![](./poster.jpg)

Вот уже несколько лет у меня в голове лежала идея создания собственного UI-фреймворка. Такие уже есть, например Bootstrap, на котором делался
чуть ли не каждый сайт в эпоху 2013-2016 или Tailwind CSS, что помоложе. Я решил сделать свой, т.к. мне намного легче и приятнее работать именно с собственным кодом.
В плюс к этому, мой фреймворк распределён и состоит на данный момент из более, чем 10-модулей, которые можно устанавливать по необходимости.

Обо всём подробнее я расскажу в данной статье

<!--truncate-->

:::warning
Проект закрыт и не обновляется
:::

## Предыстория

Каждый раз, когда я собирался делать новый проект, я сталкивался с тем, что мне предстоит потратить много времени и в очередной, полумиллиардный раз в своей жизни, начать прописывать базовые стили для всех элементов и компонентов, с которыми собираюсь работать - текст, заголовки, картинки, списки, кнопки, инпуты и т.д. и т.п.

Чуть позже я перестал заморачиваться и просто копировал папку со сделанным проектом, удалял от туда всё, кроме базовых стилей и скриптов и делал поверх этого новый проект. И это уже неплохо, но всё равно я считал это колхозом.

1.5 года назад ко мне пришла идея создания скаффолдов - по сути своих готовых сборок проектов с готовыми стилями, роутингом и redux на борту. Каждая такая сборка включала в себя компонены, которые я насоздавал заранее - адаптивные таблицы, выпадающие списки, кастомные галочки и т.д. Всё проектировалось так, что можно взять эту сборку, быстро
там настроить всё под себя и начать заниматься разработкой проекта не тратя время на начальную рутину. Но прикол в том, что при разработке очередного проекта я замечал некоторые недоработки в своих готовых компонентах и я понимал, что этот же баг придётся исправлять во всех проектах, которые я делал на этом скаффолде. А это бесплатная трата моего времени, а такое я не очень люблю.

Второй минус был в том, что если заказчик просит меня сделать простенький сайтик, мне приходится делать этот "простенький" сайтик со всеми своими компонентами, роутингом и редаксом на борту, даже если они не используются.

Поэтому ещё около полугода назад я решил вынести все свои готовые компоненты за скобки, т.е. в отдельные npm-пакеты. Так зародилась идея создания Congritta UI (да, фреймворк никак не назвал, но я не считаю, что ему нужно название). В итоге в последние недели я занимался тем, что брал свои компоненты, доводил там всё до ума, убирал все лишние стили и давал максимум возможности кастомизировать любой компонент снаружи (то есть через пропсы). Плюс ещё надо было написать документацию на каждый модуль и выложить их на GitHub и NPM.

## Что фреймворк представляет из себя

Фреймворк спроектирован так, что к каждому проекту прописаны только базовые стили, которые необходимы только для того, чтобы компонент был похож на себя. Остальные стили вы пишете сами, а классы указываете через пропсы у каждого компонента (см. в его документации). Чтобы каждый раз не заморачиваться с указанием классов, вы можете обернуть компоненты из фреймворка в свои собственные компоненты и как-либо дополнить их.

Каждый компонент имеет в зависимостях только React, т.к. сам фреймворк заточен под работу только с React. Других зависимостей у компонентов нет, весь функционал и стили прописаны с нуля.

## Авторские права

Фреймворк является объектом моей интеллектуальной собственности и имеет [лицензию MIT](https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_MIT), что говорит о том, что вы можете использовать фреймворк как хотите, в т.ч. и для разработки коммерческих проектов. Вы можете изменять и публиковать свои варианты фреймворка, но обязательно под другим названием
