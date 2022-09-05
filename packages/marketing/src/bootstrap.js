import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//função para startar a aplicação
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//se estivermos no ambiente de desenvolvimento ou iniciando a aplicação de forma isolada chamar a função mount imediatamente
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
