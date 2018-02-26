import React from 'react';
import './App.css';
import Login from './Login'
import Home from './Home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentRoute: 0,
      routes: [
        {
          route: '/',
          component: Home,
          label: 'Go Home'
        }, {
          route: '/login',
          component: Login,
          label: 'Login',
          props: {
            login: () => this.changeRoute('/')
          }
        },
      ]
    }
  }
  changeRoute(route) {
    const { routes } = this.state
    const currentRoute = routes.findIndex(
      (r) => r.route === route
    )
	  window.history.pushState({}, routes[currentRoute].label, routes[currentRoute].route)
    this.setState({ currentRoute })
  }
  render() {
    const { currentRoute, routes } = this.state
    const Component = routes[currentRoute].component
    const props = routes[currentRoute].props || {}
    return (
      <div className="App">
        <ul>
          { routes.map(
            (route, key) => {
              return (
	              <li key={ key }>
		              <button
			              onClick={ () => this.changeRoute(route.route) }
		              >{ route.label }</button>
	              </li>
              )
            }
          ) }

        </ul>
        <Component { ...props } />
      </div>
    )
  }
}

export default App;
