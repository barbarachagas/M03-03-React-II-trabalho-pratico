import { IDespesa } from "../trabalho-pratico-backend/backend";

export function calculaTotal(despesas: IDespesa[]) {
  let total = 0;
  for (const despesa of despesas) {
    total += despesa.valor;
  }
  return total;
}

export function formatValue(value: number) {
  return value.toFixed(2).replace(".", ",");
}
