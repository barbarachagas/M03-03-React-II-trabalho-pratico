export interface IDespesa {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export function carregaDespesas(mes: string): Promise<IDespesa[]> {
  return fetch(`http://localhost:3001/despesas?mes=${mes}&_sort=dia`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro ao carregar dados");
      }
    }
  );
}
