import { easepick } from "@easepick/bundle";
import { TimePlugin } from "@easepick/time-plugin";

function easepickFunc() {
  const picker = new easepick.create({
		element: "#datepicker",
		css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
		zIndex: 10,
		format: "HH:mm, DD/MM/YY",
		plugins: [TimePlugin],
	});
}

export default easepickFunc;