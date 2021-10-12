import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui button basic green">Approve</div>
          <div className="ui button basic red">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
