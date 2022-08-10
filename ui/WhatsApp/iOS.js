import "./ios.css";

import { messages } from "./data";

export const renderMessenger = (el) => {
  el.innerHTML = `
	<section class="whatsapp-ios-light">
		${messages
      .map(
        (message) => `
			<span class="message owner-${message.owner}" >
				${message.text}
			</span>
		`
      )
      .join("")}
	</section>
	`;
};
