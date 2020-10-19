export async function get_Outlet(code) {

  let dataPost = {
    PROPERTY_CODE: code
  };

  const response = await fetch('http://10.14.138.22/PosApiV2/api/Outlet/getDataByPropertyCodeMob/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataPost),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
}
