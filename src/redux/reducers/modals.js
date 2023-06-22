import * as actions from '../actions'

export default (state ={
  TechStack: {
    open: false
  },
  PortfolioModal: {
    open: false
  }
}, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return action.modal
        ? Object.assign({}, state, {
            [action.modal]: { open: true, ...action }
          })
        : state
    case actions.CLOSE_MODAL:
      return action.modal
        ? Object.assign({}, state, {
            [action.modal]: { open: false }
          })
        : state
    default:
      return state
  }
}