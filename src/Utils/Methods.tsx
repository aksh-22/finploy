import NetInfo from '@react-native-community/netinfo';
import Config from './Config';
import {BASE_API_URL} from './EndPoints';

export const executePostRequest = async (
  endpoint: string,
  paramsObject: any,
  token?: string,
  isUrlEncoded = false,
) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        code: 400,
        error: {
          message: Config.error.error_internet_connection,
        },
      };
    }

    const res: any = await fetch(BASE_API_URL.API_URL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paramsObject),
    });

    const response = await res.json();
    if (res.status != 200 && res.status != 201) {
      return {
        code: res.status,
        error: response,
      };
    }
    return {
      code: res.status,
      response: response,
    };
  } catch (error) {
    return {
      code: 400,
      error: error + '',
    };
  }
};

export const executeGetRequest = async (endpoint: string, token: string) => {
  console.log(endpoint, token);
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        code: 400,
        response: {
          messages: Config.error.error_internet_connection,
        },
      };
    }
    const res = await fetch(BASE_API_URL.API_URL + endpoint, {
      method: 'GET',
      headers: getAPIHeader(token),
    });
    const response = await res.json();

    if (res.status != 200 && res.status != 201) {
      return {
        code: res.status,
        error: response,
      };
    }

    return {
      code: res.status,
      response: response,
    };
  } catch (err) {
    return {
      code: 400,
      error: err + '',
    };
  }
};

export const executeDeleteRequest = async (
  endpoint: string,
  token?: string,
  isUrlEncoded = false,
) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        code: 400,
        response: {
          messages: [Config.error.error_internet_connection],
        },
      };
    }

    const res: any = await fetch(BASE_API_URL.API_URL + endpoint, {
      method: 'DELETE',
      headers: getAPIHeader(token, isUrlEncoded),
      // body: JSON.stringify(paramsObject),
    });

    // checkResponse(res);
    const response = await res.json();
    if (res.status != 200 && res.status != 201) {
      return {
        code: res.status,
        error: res.text(),
      };
    }
    // const response = await res.json();
    return {
      code: res.status,
      response: response,
    };
  } catch (error) {
    return {
      code: 400,
      error: error + '',
    };
  }
};
export const executePutRequest = async (
  endpoint: string,
  paramsObject: Object,
  token?: string,
  isUrlEncoded = false,
) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        code: 400,
        response: {
          messages: [Config.error.error_internet_connection],
        },
      };
    }

    const res = await fetch(`${Config.server.BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: getAPIHeader(token, isUrlEncoded),
      body: JSON.stringify(paramsObject),
    });
    const response = await res.json();
    if (res.status != 200 && res.status != 201) {
      return {
        code: res.status,
        error: response,
      };
    }

    return {
      code: res.status,
      response: response,
    };
  } catch (error) {
    return {
      code: 400,
      error: error + '',
    };
  }
};

export const getAPIHeader = (token?: string, isUrlEncoded?: boolean) => {
  return token
    ? {
        // 'Content-Type': 'application/json',
        // authorization: 'Bearer ' + token,
        Authorization: token,
      }
    : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
};

const demo = [
  {key: 'country', value: 'India'},
  {key: 'limit', value: 6},
];

export const combineParamsEndpoint = (params: any) => {
  const keys = Object.keys(params);

  let endpoint = '';
  keys.map((val, index) => {
    endpoint = endpoint + `${val}=${params[val]}`;
    if (index != keys.length - 1) {
      endpoint = endpoint + '&';
    }
  });
  return endpoint;
};

const encodeParamsObject = (paramsObject: Array<any>, encoded) => {
  let formBody = [];
  for (var property in paramsObject) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(paramsObject[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
};
