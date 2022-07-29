import { useEffect, useState } from "react";
import { carregaDespesas, IDespesa } from "../trabalho-pratico-backend/backend";
import TabelaDespesas from "./TabelaDespesas";
import { Container, Box } from "@material-ui/core";
import { calculaTotal, formatValue } from "../helper/util";
import { useHistory, useParams } from "react-router-dom";
import SelecaoAnoMes from "./SelecaoAnoMes";

export default function TelaDespesas() {
  const [despesas, setDespesas] = useState<IDespesa[]>([]);
  const { anoMes } = useParams<{ anoMes: string }>();
  const history = useHistory();

  useEffect(() => {
    carregaDespesas(anoMes).then(setDespesas);
  }, [anoMes]);

  const valorTotal = calculaTotal(despesas);

  function onChangeAnoMes(novoAnoMes: string) {
    history.push(`/despesas/${novoAnoMes}`);
  }

  return (
    <Container>
      <Box display="flex" padding="16px">
        <Box flex={1}>
          <SelecaoAnoMes
            anoMes={anoMes}
            onChangeAnoMes={onChangeAnoMes}
          ></SelecaoAnoMes>
        </Box>
        <Box>
          <span>
            Despesa total: <strong>R${formatValue(valorTotal)}</strong>
          </span>
        </Box>
      </Box>
      <TabelaDespesas despesas={despesas}></TabelaDespesas>
    </Container>
  );
}
