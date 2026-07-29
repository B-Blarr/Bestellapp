# BestellApp

A food ordering interface inspired by delivery platforms like Lieferando,
built without any framework.

👉 **[Open the app](https://benjaminblarr.de/bestellapp/)**

![BestellApp Preview](assets/preview.png)

## About

The menu is rendered from a JavaScript data object. Items can be added to the
cart, changed in quantity or removed, and the summary recalculates subtotal,
delivery cost and total on every change.

The whole state lives in plain objects. Every change has to be written back
into the DOM by hand, in the right order and in every place where the same
value appears twice. That is the part a framework would take off your hands.

## Features

- Menu rendered dynamically from a data object
- Add, remove and change quantities in the cart
- Live summary with subtotal, delivery cost and total
- Separate layout for mobile and desktop

## Built with

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
</p>
