export async function GetZipCodeQuery(zipCode: string) {
  return fetch(`http://viacep.com.br/ws/${zipCode}/json/`).then((response) =>
    response.json()
  );
}
