import React from "react";
import Modal from "../modal";

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
