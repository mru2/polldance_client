export default api => store => next => action => {

  if (action.api_call) {
    api.doCall(
      action.api_call.verb,
      action.api_call.path,
      (payload) => { store.dispatch({type: action.api_call.callback, payload: payload}); }
    )
  }

  // Handle API calls on interesting actions
  return next(action);
}
