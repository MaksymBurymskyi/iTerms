import { legacy_createStore } from 'redux';

const languageReducer = (state = { language: 'en' }, action) => {
  if (action.type === 'setUk') {
    return {
      language: 'uk',
    };
  }
  if (action.type === 'setEn') {
    return {
      language: 'en',
    };
  }
  return state;
};

const store = legacy_createStore(languageReducer);

export default store;
