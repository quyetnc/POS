// import { userData, API_URL, userOutLet } from '../../../../config/settings';

// export async function getLocation() {
//     const TOKEN = userData.TOKEN;
//     // console.log(TOKEN);

//     const body = {

//     }

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append(
//         'Authorization', `${TOKEN}`
//     );

//     const response = await fetch(
//         `${API_URL}Location/loadDataPosPlan/`,

//         {
//             method: 'POST',
//             headers: myHeaders,
//             body: JSON.stringify(body),
//         },
//     )
//         .then((response) => response.json())
//         .then((result) => {

//             // console.log('ApiNew:', result);
//             return result;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     return response;

// }