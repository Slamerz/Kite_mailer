export const GET_MAIL = 'GET_MAIL';
export const GET_MAIL_SUCCESS = 'GET_MAIL_SUCCESS';
export const GET_MAIL_FAIL = 'GET_MAIL_FAIL';

export const CREATE_MAIL = 'CREATE_MAIL';
export const CREATE_MAIL_SUCCESS = 'CREATE_MAIL_SUCCESS';
export const CREATE_MAIL_FAIL = 'CREATE_MAIL_FAIL';

export const SAVE_DRAFT = 'SAVE_DRAFT';
export const SAVE_DRAFT_SUCCESS = 'SAVE_DRAFT_SUCCESS';
export const SAVE_DRAFT_FAIL = 'SAVE_DRAFT_FAIL';

export const SEND_MAIL = 'SEND_MAIL';
export const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS';
export const SEND_MAIL_FAIL = 'SEND_MAIL_FAIL';

export const saveDraft = id => {
  return {type: CREATE_DRAFT, payload: id};
};
