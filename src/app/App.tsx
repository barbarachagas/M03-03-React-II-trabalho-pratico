import { carregaDespesas } from "../trabalho-pratico-backend/backend";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TelaDespesas from "../components/TelaDespesas";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/despesas/:anoMes">
          <TelaDespesas></TelaDespesas>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
