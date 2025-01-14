"use client";

import { useState } from "react";
import { XIcon } from "./Icons/XIcon";
import Modal from "./ui/Dialog";
import { MaximizeIcon } from "./Icons/Maximize";

export default function ViewNote({ note }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="max-w-max hover:text-stone-900 focus:outline-none"
        title="view note"
        onClick={() => setOpen(true)}
      >
        <MaximizeIcon />
      </button>
      <Modal isOpen={open} closeModal={() => setOpen(false)}>
        <div className="flex flex-col gap-3 font-sans">
          <div className="flex justify-between text-white">
            <h2 className="text-2xl font-bold leading-none">Note</h2>
            <button
              className="text-base text-stone-900 max-w-max focus:outline-none"
              onClick={() => setOpen(false)}
            >
              <XIcon />
            </button>
          </div>
          <p className="text-white py-4 overflow-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500 max-h-[300px]">
            {note}
          </p>
        </div>
      </Modal>
    </>
  );
}