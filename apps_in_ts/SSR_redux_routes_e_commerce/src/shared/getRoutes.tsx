import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'

//custom 
import Root from '../components/containers/Root'
//pages 
const Loading = () => (<span>is loading...</span>)

//dynamic Location Component
const Location = (props: {}) => (
  <DynamicImport load={() => import(/* webpackChunkName: "Location" */'../pages/Location')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)
//dynamic products page
const DisplayProductsList = (props: {}) => (
  <DynamicImport load={() => import('../components/productsComposition/DisplayProductsList/DisplayProductsList')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)


type ReactComp = () => JSX.Element;
class DynamicImport extends React.Component<
  {//props
    load: () => Promise<any>,
    children: (Component: ReactComp | null) => JSX.Element
  },//state
  {
    component: (ReactComp) | null
  }> {

  state = {
    component: null
  }
  async componentDidMount() {
    const DynamicComponent = await this.props.load()
    this.setState({
      component: DynamicComponent.default
        ? DynamicComponent.default
        : DynamicComponent
    })
  }

  render() {
    const { component } = this.state
    return this.props.children(component)
  }
}


export const getRoutes = (store: { getState: Function }) => {
  const { getState } = store
  const state = getState()

  /**
   * Encode URI but decode ['/', ':']
   * @param {string} path
   */
  const encode = (path: string) =>
    encodeURIComponent(path)
      .replace(/%2F/g, '/')
      .replace(/%3A/g, ':')

  /**
   * Add route for path, component and props, but if path is not encoded, add that route too
   * @param {string} path
   * @param {object} component
   * @param {object} props
   */
  const route = (path: string, component: React.ComponentType<RouteComponentProps>, props = {}) => {
    console.log('route method......')
    console.log('path, component, props', path, component, props)
    const routes = [
      <Route path={path} component={component} key={path} {...props} />,
    ]
    const encoded = encode(path)
    if (path !== encoded) {
      routes.push(
        <Route path={encoded} component={component} key={path} {...props} />
      )
    }
    return routes
  }

  /**
   * Add a redirect from both the path and the encoded path
   * @param {string} path
   * @param {string} to
   */
  const redirect = (path: string, to: Location) => {
    console.log('redirect method......')
    console.log('path, to', path, to)

    const encoded = encode(path)
    const redirects = [<Redirect from={path} to={to} key={path} />]
    if (path !== encoded) {
      redirects.push(<Redirect from={encoded} to={to} key={path} />)
    }
    return redirects
  }

  const Main = () => (<div>{'main'}</div>)
  const CmsForm = () => (<div>{'any CmsForm'}</div>)
  const NotFound = () => (<div>{'NotFound'}</div>)

  //<Route exact path="/" component={Home}/> equal to <IndexRoute component={Home}/>


  const RouterPage = (
    props: { component: any, path: string, transactionName: string }
  ) => <Route component={props.component} path={props.path} />

  /* type Props = { component: FunctionComponent } & RouteComponentProps;

  const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
    <Component {...rest} />
  ); */


  return (
    <Root>

      <RouterPage component={Main} path='/' transactionName='transactionName' />
      <Route
        component={DisplayProductsList}
        path='/products'
      />
      <Route
        component={Location}
        path='/location'
      />
      <Route
        component={CmsForm}
        path="/form/:cmsFormName"
      // transactionName="/Form//:cmsFormName"
      />
      {/* <Route
        path="*"
        component={NotFound}
      //  transactionName="/*//*"
      /> */}



    </Root>
  )
}