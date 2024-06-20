import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

/*
	선언한 HTMLElement가 HTMLElement | null 일 경우 as HTMLElement 추가
*/
