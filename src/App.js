import React, { useState, useEffect } from "react";
import {AppBarFun} from "./AppBar";

import Paper from "@material-ui/core/Paper";

export default function App(props) {
  return(
    <div>
    <AppBarFun></AppBarFun>
    <div style = {{display: 'flex', alignItems: 'center'}}>
      <Paper style = {{height: 200, width: 600, marginTop: 40, marginLeft: 40}}height = '200px'>
        hello
      </Paper>
    </div>
    </div>
  );
}
