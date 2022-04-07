import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import Counter from "./components/Counter";

import "./index.scss";

const App = () => (
  <Layout>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <br />
      <Counter />
    </div>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById("app"));
