import React from "react";
import ReactDOM from "react-dom";

export default class Login extends  React.Component {

  //main pada js
  render() {
    return(
      <div>
        <div class="content-wrapper">
        <div class="container">
          <section class="content">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br/><br/><br/></div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <h3 class="box-title text-center">Sign In</h3>
                  </div>
                  <form role="form">
                    <div class="box-body">
                      <div class="form-group">
                        <label class="label label-primary" for="email">Username</label>
                        <input type="email" class="form-control" placeholder="Enter username"></input>
                      </div>
                      <div class="form-group">
                        <label class="label label-primary" for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Password"></input>
                      </div>
                    </div>
                    <div class="box-footer">
                      <button type="submit" class="btn btn-primary pull-right">Login</button>
                      <br/><br/>
                      <div class="callout callout-danger">
                        <h4>Alert</h4>
                        <p>Invalid username or password.</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
    )
  }
}
