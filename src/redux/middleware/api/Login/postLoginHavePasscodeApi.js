export async function post_Login_Passcode(info) {
    let dataPost = info;
  
    const response = await fetch(
      'http://10.14.138.22/PosApiV2/apI/PassCode/checkPassCode/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataPost),
      },
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  }
  