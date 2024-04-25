// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleErrors = (error: any) => {
    if (error.response && error.response.data && error.response.data.message) {
      // Handle specific error message from the backend
      return { message: error.response.data.message };
    } else {
      // Handle other types of errors (network, server not responding, etc.)
      return { message: error.message };
    }
  };