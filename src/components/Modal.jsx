import React from 'react';
//import { NavLink } from 'react-router-dom';

export default function Modal() {
  return (
    <div id="modal" className="bottom-0 end-0 fade modal position-fixed top-0">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  )
}