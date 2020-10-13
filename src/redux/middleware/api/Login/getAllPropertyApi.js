export async function get_AllProperty() {
    var myHeaders = new Headers();
    myHeaders.append(
       'Authorization',
       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjgyIiwibmJmIjoxNjAwMTY0NzE4LCJleHAiOjE2MDAyNTExMTgsImlhdCI6MTYwMDE2NDcxOH0.f9iSMcs2FGYN6bf__bFrLPbeJ3rvr0c4PKUlZoQysqM',
    );
 
    var requestOptions = {
       method: 'POST',
       headers: myHeaders,
       redirect: 'follow',
    };
    return (
       await fetch(
          'http://10.14.138.22/PosApiV2/api/Hotel/getAllPropertyCodeOption/',
          requestOptions,
       )
    ).json();

 }
