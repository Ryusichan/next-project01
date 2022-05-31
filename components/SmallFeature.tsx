import React from "react";

const SmallFeature = () => {
  return (
    <div className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-users"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Identify Goals</h5>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image green">
                <i className="fas fa-code"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Situation Analysis</h5>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image red">
                <i className="fas fa-cog"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Tasks Settings</h5>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image yellow">
                <i className="fas fa-comments"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Social Interaction</h5>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-image blue">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Get Things Done</h5>
              </div>
            </div>
            {/* end of card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallFeature;
