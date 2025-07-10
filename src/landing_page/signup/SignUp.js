import React from "react";

function SignUp() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h1 className="card-title fs-3 mb-4">
                Sign Up to Access the Dashboard
              </h1>
              <p className="card-text mb-4">
                Note: Due to some issues, user authentication is not working
                properly. Please sign in to access the dashboard.
              </p>
              <a
                href="https://tradingplatformdashboard.netlify.app/"
                className="btn btn-primary btn-lg"
                style={{ textDecoration: "none" }}
              >
                Go to Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
