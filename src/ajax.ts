const baseUrl = 'http://localhost:9090/api';
const requestStatusOK = 200;
const requestStatusBad = 400;

export const getRequest = () => {
  fetch(`${baseUrl}/ping`, {
    method: 'GET', 
  })
  .then(res => {
    return res.json();
  })
  .then(data => console.log(data));
}

export const postRequest = (onLoad: (data: any) => void , onError: (data: any) => void ) => {
  fetch(`${baseUrl}/registration`, {
    method: 'POST', 
    body: JSON.stringify({})
  })
  .then(res => {
    return res.json()
    .then(resData => {
      return {
        status: res.status,
        data: resData
      }
    });
  })
  .then(response => {
    switch (response.status) {
      case requestStatusOK:
        onLoad(response.data);
        break;
      case requestStatusBad:
        onError(response.data);
        break;
    }
  });
}

