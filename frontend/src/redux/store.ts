import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { AppState } from './actions/types'
import rootSaga from './saga'
import createRootReducer from './reducers'

export const initState: AppState = {
  repos: {
    repoList: [],
  },
  gists: {
    gistList: []
  },
  organizations: {
    organizationList: []
  }
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  let composeEnhancers = compose

  const localState = localStorage.getItem('initState')
  localState && (initialState = JSON.parse(localState))

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    //@ts-ignore
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}