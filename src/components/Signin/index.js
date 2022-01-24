import React from 'react';
import './style.css';
import { GrClose } from 'react-icons/gr';
import { BiUser, BiLockOpenAlt } from 'react-icons/bi';

const index = (props) => {
  const submitHandler = () => {
    alert('You are not allowed');
  };
  return (
    <>
      <div
        className={`modal fade show ${props.modal && 'showmodal'}`}
        id="login"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="registermodal"
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form"
          role="document"
        >
          <div className="modal-content" id="registermodal">
            <span
              className="mod-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              <GrClose
                className="ti-close"
                onClick={(e) => props.modalset(false)}
              />
            </span>
            <div className="modal-body">
              <h4 className="modal-header-title">Log In</h4>
              <div className="login-form">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label>User Name</label>
                    <div className="input-with-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                      <BiUser className="ti-user" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <div className="input-with-icon">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*******"
                      />
                      <BiLockOpenAlt className="ti-unlock" />
                      {/* <i className="ti-unlock"></i> */}
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width btn-theme-light-2 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center">
              <p className="mt-5">
                <a href="#" className="link">
                  Forgot password?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {props.modal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default index;
