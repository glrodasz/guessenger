import "./style.css";

import { renderMessenger } from "./ui/whatsapp/ios.js";

document.querySelector("#app").innerHTML = `
  <main>
      <header>
        <span class="score">1/5</span>
        <h1>Which messenger app is this one?</h1>
      </header>
      <div  class="messenger-container">
        <div id="current-messenger-ui" class="messenger"></div>
      </div>
      <footer class="option-buttons">
        <div class="container">
          <button type="button">WhatsApp</button>
          <button type="button">Instagram</button>
        </div>
      </footer>
  </main>
`;

renderMessenger(document.querySelector("#current-messenger-ui"));
