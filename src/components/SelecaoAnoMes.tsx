import {
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

interface ISelecaoAnoMesProps {
  anoMes: string;
  onChangeAnoMes: (anoMes: string) => void;
}

export default function SelecaoAnoMes(props: ISelecaoAnoMesProps) {
  const [ano, mes] = props.anoMes.split("-");
  return (
    <>
      <FormControl>
        <InputLabel>Ano</InputLabel>
        <Select
          value={ano}
          onChange={(evt) => props.onChangeAnoMes(evt.target.value + "-" + mes)}
        >
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Mês</InputLabel>
        <Select
          value={mes}
          onChange={(evt) => props.onChangeAnoMes(ano + "-" + evt.target.value)}
        >
          <MenuItem value="01">Janeiro</MenuItem>
          <MenuItem value="02">Fevereiro</MenuItem>
          <MenuItem value="03">Março</MenuItem>
          <MenuItem value="04">Abril</MenuItem>
          <MenuItem value="05">Maio</MenuItem>
          <MenuItem value="06">Junho</MenuItem>
          <MenuItem value="07">Julho</MenuItem>
          <MenuItem value="08">Agosto</MenuItem>
          <MenuItem value="09">Setembro</MenuItem>
          <MenuItem value="10">Outubro</MenuItem>
          <MenuItem value="11">Novembro</MenuItem>
          <MenuItem value="12">Dezembro</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
