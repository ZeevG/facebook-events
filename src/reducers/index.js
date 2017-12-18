

const reducer = (state = {}, action) => {
  switch (action.type) {
  	case "SET_FB_LOGIN_STATUS":
  		return Object.assign({}, state, {
  			accessToken: action.accessToken
  		});
    default:
      return state
  }
}

export default reducer