export async function GetZipCodeQuery(zipCode: string) {
  return fetch(`https://viacep.com.br/ws/${zipCode}/json/`).then((response) =>
    response.json()
  );
}
