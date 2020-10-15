import { API_URL } from '../../../../config/settings';

export async function getLocation() {
    const body = {
        PROPERTY_CODE: "LAR",
        OUTLET_ID: 1124
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ijg1IiwibmJmIjoxNjAyNDkzNDgzLCJleHAiOjE2MDI1Nzk4ODMsImlhdCI6MTYwMjQ5MzQ4M30.DeRIZBLW3IeSV_wJRYDkdW3RAL48phb69Ev39E1_9Hg',
    );
    const response = await fetch(`${API_URL}Location/loadDataPosPlan/`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((result) => {

            console.log('Api:', response);
            return result;
        })
        .catch((error) => {
            console.log(error);
        });
    return response;
}