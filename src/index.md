---
# Feel free to add content and custom Front Matter to this file.

layout: home
---

Welcome to Bridgetown!

<p id="root"></p>

<template id="run-confetti">
<%== cable_car
    .console_log(message: "Super duper!")
    .confetti(particles: 175)
    .dispatch(elements: true) %>

<!--
.append("#root", html: "<strong>And a hearty hello to CableCar!</strong>")
-->
</template>

<button onclick='
  document.body.append(document.querySelector("#run-confetti").content.cloneNode(true))
'>
  Confetti?!
</button>
