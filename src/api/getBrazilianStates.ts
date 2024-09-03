export async function GetBrazilianStates() {
  return fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  ).then((response) => response.json());
}
