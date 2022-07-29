import { IDespesa } from "../trabalho-pratico-backend/backend";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
} from "@material-ui/core";
import { formatValue } from "../helper/util";

interface ITabelaDespesasProps {
  despesas: IDespesa[];
}

export default function TabelaDespesas(props: ITabelaDespesasProps) {
  return (
    <TableContainer component="div">
      <Table aria-label="Tabela de despesas">
        <TableHead>
          <TableRow>
            <TableCell>Despesa</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Dia</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.despesas.map((despesa) => (
            <TableRow key={despesa.id}>
              <TableCell>{despesa.descricao}</TableCell>
              <TableCell>{despesa.categoria}</TableCell>
              <TableCell>{despesa.dia}</TableCell>
              <TableCell align="right">{formatValue(despesa.valor)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
