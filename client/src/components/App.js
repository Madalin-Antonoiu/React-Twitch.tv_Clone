import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
    return <div>Page1</div>
}

const PageTwo = () => {
    return <div>PageTwo</div>
}

const App = () => {
    return <div className="ui container">
        <BrowserRouter>

            <Route></Route>
        </BrowserRouter>
    </div>;
}

export default App;


