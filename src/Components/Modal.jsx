import React from "react";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
   
        <div className="modal-action w-full text-center">
          <form method="dialog" className="mx-auto w-full">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn w-full">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
