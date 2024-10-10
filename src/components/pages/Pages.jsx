import React from "react"
import Header from "../common/header/Header"
import Home from "../Home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Services from "../services/Services"
import Blog from "../blog/Blog"
import Pricing from "../pricing/Pricing"
import Contact from "../contact/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
const Pages = () => {
    return (
      <>
        <Router>
          <Header/>
          <Switch>
          <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />
           <Route exact path='/Services' component={Services} />
           <Route exact path='/Blog' component={Blog} />
           <Route exact path='/Pricing' component={Pricing}/>
           <Route exact path='/Contact' component={Contact}/>
        </Switch>
        <Footer />
        </Router>
      </>
    )
  }
  export default Pages