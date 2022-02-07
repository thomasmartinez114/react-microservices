import React from 'react';

// need to know Id of Post that will associate to the comment being made
const CommentCreate = ({ postId }) => {
  return (
    <div>
      <form>
        <div className='form-group'>
          <label>New Comment</label>
          <input className='form-contro' />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
