import React from "react"
import Logo from "./Logo"
import headerStyles from "./Header.module.css"

const Headers = props => (
  <header>
    <div className="container text-center mt-5">
      <div className="row align-items-center">
        <div className="col-sm-4 text-right">
          <Logo />
        </div>
        <div className="col-sm-6">
          <h1>Dash QuickStart</h1>
          <h6>
            Dash library allows you to connect to DAPI and receive or broadcast
            payments on the Dash Network, manage identifies, register data
            contracts, retrieve or submit documents on the Dash Platform, all
            within a single library.
          </h6>
        </div>
      </div>
    </div>
  </header>
)

export default Headers
