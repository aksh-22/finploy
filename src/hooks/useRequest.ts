import {useState} from 'react';

type RProps = {
  api?: any;
  onSuccess?: (data: any) => void;
  onError?: (error?: any) => void;
  onFinally?: () => void;
};

export const useRequest = ({
  api,
  onSuccess,
  onError,
  onFinally,
}: RProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (dataToSend?: any) => {
    setIsLoading(true);
    await api(dataToSend)
      .then((res: any) => {
        console.log('res', JSON.stringify(res, null, 2));
        onSuccess && onSuccess(res);
      })
      .catch((error: any) => {
        onError && onError(error);
      })
      .finally(() => {
        setIsLoading(false);
        onFinally && onFinally();
      });
  };

  return {
    isLoading,
    sendRequest,
  };
};
