const HIDDEN_STATUS = 'HIDDEN_STATUS';
const TAB_BAR_HIDDEN = 'TAB_BAR_HIDDEN';

const COUNTRY_STATUS = 'COUNTRY_STATUS';
const CLEAR_COUNTRY_STATUS = 'CLEAR_COUNTRY_STATUS';

const SEARCH_STATUS = 'SEARCH_STATUS';
const RELOAD_PROFILE = 'RELOAD_PROFILE';
const RELOAD_INSPECTIONS = 'RELOAD_INSPECTIONS';
const ADD_INSPECTIONS = 'ADD_INSPECTIONS';

const CATEGORY_STATUS = 'CATEGORY_STATUS';
const CLEAR_CATEGORY_STATUS = 'CLEAR_CATEGORY_STATUS';

const OFFSET_STATUS = 'OFFSET_STATUS';
const CLEAR_OFFSET_STATUS = 'CLEAR_OFFSET_STATUS';

const SET_LIMIT_STATUS = 'SET_LIMIT_STATUS';
const CLEAR_LIMIT_STATUS = 'CLEAR_LIMIT_STATUS';

const SET_SHORT_STATUS = 'SET_SHORT_STATUS';
const CLEAR_SHORT_STATUS = 'CLEAR_SHORT_STATUS';

const SET_FILTER_STATUS = 'SET_FILTER_STATUS';
const CLEAR_FILTER_STATUS = 'CLEAR_FILTER_STATUS';

const LOADING_STATUS = 'LOADING_STATUS';
const ALL_EVENT = 'ALL_EVENT';
const CLEAR_EVENT = 'CLEAR_EVENT';

const AUTH_LOADING_STATUS = 'AUTH_LOADING_STATUS';

const CLEAR_ALL = 'CLEAR_ALL';
const AUTH_ERROR = 'AUTH_ERROR';
const SET_USER_NUMBER = 'SET_USER_NUMBER';
const SET_USER_INFO = 'SET_USER_INFO';
const GET_TOKEN = 'GET_TOKEN';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const SET_USER_LOCATION = 'SET_USER_LOCATION';
const SET_USERS_CARDS = 'SET_USERS_CARDS';
const SET_PAYMENT_CARDS = 'SET_PAYMENT_CARDS';
const SET_REWIND_CARDS = 'SET_REWIND_CARDS';
const SET_ACTIVE_SCREEN = 'SET_ACTIVE_SCREEN';
const GET_CONTACTS = 'GET_CONTACTS';
const GET_CATEGORIES = 'GET_CATEGORIES';
const CLEAR_CATEGORY = 'CLEAR_CATEGORY';
const ADD_CATEGORY = 'ADD_CATEGORY';
const GET_LANGUAGES = 'GET_LANGUAGES';
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_EVENTS = 'GET_EVENTS';
const GET_USER = 'GET_USER';
const GET_PLATFORM = 'GET_PLATFORM';
const GET_CURRUNCY = 'GET_CURRUNCY';
const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';
const GET_FILTERS = 'GET_FILTERS';
const GET_POSTS = 'GET_POSTS';
const SET_COUNTRY = 'SET_COUNTRY';
const SET_USER_LANGUAGES = 'SET_USER_LANGUAGES';
const SET_USER_CATEGORIES = 'SET_USER_CATEGORIES';

//---------- Partner Actions ------------//

const SET_PARTNER_USER = 'SET_PARTNER_USER';
const SET_PARTNER_TOKEN = 'SET_PARTNER_TOKEN';

// Events
const UPLOAD_EVENT_ACTION = 'UPLOAD_EVENT_ACTION';

export interface LoadingActionType {
  type: string;
  payload: boolean;
}
export interface ReloadActionType {
  type: string;
  payload: boolean;
}

export interface UserInspectionsActionType {
  type: string;
  payload: Array<any>;
}

export interface EventActionType {
  type: string;
  payload: Array<any>;
}

export interface AuthLoadingActionType {
  type: string;
  payload: boolean;
}

export interface tabbarhiddenActionType {
  type: string;
  payload: boolean;
}

export interface SearchTextActionType {
  type: any;
  payload: any;
}
export interface categoryActionType {
  type: any;
  payload: any;
}
export interface ActiveScreenActionType {
  type: string;
  payload: string;
}

export interface AuthActionType {
  type: any;
  payload: any;
}

export interface FIlterActionType {
  type: any;
  payload: any;
}

export interface ProfileType {
  type: String;
  payload: Object;
}

//--------partner actions types

export interface partnerActionType {
  type: any;
  payload: any;
}

export type AppActionTypes =
  | LoadingActionType
  | AuthActionType
  | ProfileType
  | FIlterActionType
  | ActiveScreenActionType
  | partnerActionType;

export {
  LOADING_STATUS,
  CLEAR_ALL,
  AUTH_ERROR,
  SET_USER_NUMBER,
  SET_USER_INFO,
  CLEAR_FILTER_STATUS,
  GET_TOKEN,
  SET_SHORT_STATUS,
  UPDATE_PROFILE,
  SET_USER_LOCATION,
  CLEAR_COUNTRY_STATUS,
  SET_FILTER_STATUS,
  AUTH_LOADING_STATUS,
  SET_USERS_CARDS,
  CLEAR_LIMIT_STATUS,
  CLEAR_SHORT_STATUS,
  SET_PAYMENT_CARDS,
  SET_ACTIVE_SCREEN,
  SET_REWIND_CARDS,
  RELOAD_PROFILE,
  GET_CONTACTS,
  SET_LIMIT_STATUS,
  GET_CATEGORIES,
  CLEAR_CATEGORY,
  RELOAD_INSPECTIONS,
  OFFSET_STATUS,
  ADD_CATEGORY,
  GET_LANGUAGES,
  GET_COUNTRIES,
  CLEAR_EVENT,
  CLEAR_CATEGORY_STATUS,
  GET_EVENTS,
  GET_USER,
  GET_PLATFORM,
  CLEAR_OFFSET_STATUS,
  CATEGORY_STATUS,
  GET_CURRUNCY,
  HIDDEN_STATUS,
  GET_FILTERS,
  SET_USER_LANGUAGES,
  GET_POSTS,
  SEARCH_STATUS,
  ALL_EVENT,
  SET_COUNTRY,
  SET_USER_CATEGORIES,
  TAB_BAR_HIDDEN,
  CLEAR_SEARCH_TEXT,
  COUNTRY_STATUS,
  ADD_INSPECTIONS,
  UPLOAD_EVENT_ACTION,
  //----------export partner actions
  SET_PARTNER_USER,
  SET_PARTNER_TOKEN,
};
