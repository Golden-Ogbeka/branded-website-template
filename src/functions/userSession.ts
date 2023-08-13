import { UserType } from '../types/user';
import { decryptItem, encryptItem } from './encryption';
import { SESSION_KEY, SESSION_NAME, TOKEN_KEY, TOKEN_NAME } from './environmentVariables';

export const getSessionDetails = () => {
  let sessionDetails =
    typeof window !== 'undefined' ? window.localStorage.getItem(SESSION_NAME!) : null;
  if (sessionDetails) {
    sessionDetails = decryptItem(sessionDetails, SESSION_KEY!);
    sessionDetails = JSON.parse(sessionDetails as string);
  }

  return sessionDetails as UserType | null;
};

export const storeSessionDetails = (sessionDetails: UserType) => {
  const encryptedSession = encryptItem(sessionDetails, SESSION_KEY!);
  localStorage.setItem(SESSION_NAME!, encryptedSession);
  return true;
};

export const removeSessionDetails = () => {
  localStorage.removeItem(SESSION_NAME!);
  return true;
};

export const getTokenDetails = () => {
  let token =
    typeof window !== 'undefined' ? window.localStorage.getItem(TOKEN_NAME!) : null;
  if (token) {
    token = decryptItem(token, TOKEN_KEY!);
    token = JSON.parse(token as string);
  }

  return token as string | null;
};

export const storeTokenDetails = (token: string) => {
  const encryptedSession = encryptItem(token, TOKEN_KEY!);
  localStorage.setItem(TOKEN_NAME!, encryptedSession);
  return true;
};

export const removeTokenDetails = () => {
  localStorage.removeItem(TOKEN_NAME!);
  return true;
};
