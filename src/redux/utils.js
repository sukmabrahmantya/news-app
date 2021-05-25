import axios from 'axios';

export const createActionTypes = (actionName) => {
  return {
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`
  };
};

export const createGenerateActions = (actionNames) => {
  return {
    pending: () => {
      return {
        type: actionNames.PENDING
      };
    },
    success: (res) => {
      return {
        type: actionNames.SUCCESS,
        payload: res
      };
    },
    error: (err) => {
      return {
        type: actionNames.ERROR,
        payload: err
      };
    }
  };
};

export const Axios = axios.create({
  baseURL: `https://newsapi.org/v2/`
});
