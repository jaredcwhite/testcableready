---
# Feel free to add content and custom Front Matter to this file.

layout: home
---

Welcome to Bridgetown!

<p id="root"></p>

<%=
  CableReady::CableCar.instance
    .console_log(message: "Super duper!")
    .append("#root", html: "<strong>And a hearty hello to CableCar!</strong>")
    .dispatch(elements: true)
    .html_safe
%>
