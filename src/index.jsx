import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as NavGiver } from "./Context/REact";
import { Provider as TokenGiver } from "./Context/Token";
import { Provider as ThemeGiver } from "./Context/Theme";
import { Provider as LanguageGiver} from "./Context/Localization";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenGiver>
        <ThemeGiver>

        <LanguageGiver>
          <NavGiver>
            <App />
          </NavGiver>
        </LanguageGiver>

        </ThemeGiver>
      </TokenGiver>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
