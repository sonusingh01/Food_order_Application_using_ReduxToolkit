import React, { Fragment } from "react";
import Layout from "./Components/Layout/Layout";

import axios from "axios";

axios.defaults.baseURL = "https://e-commerce-backend-sigma.vercel.app/api/";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Layout />
      </Fragment>
    </div>
  );
}

export default App;
