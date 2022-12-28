import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingReducer from './LoadingReducer';
import AuthLoadingReducer from './AuthLoadingReducer';
import InspectionReducer from './InspectionReducer';
import UserInspections from './UserInspections';
import partnerUserReducer from './partnerUserReducer';

const rootReducer = combineReducers({
  LoadingReducer: LoadingReducer,
  persistedReducer: AuthReducer,
  AuthLoadingReducer: AuthLoadingReducer,
  InspectionReducer: InspectionReducer,
  UserInspections: UserInspections,
  partnerUserReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;
