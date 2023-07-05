import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalProps } from "../helpers/types";
import { useRouter } from "next/router";

const CustomModeModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [nInputValue, setNInputValue] = useState<string>("");
  const [mInputValue, setMInputValue] = useState<string>("");

  const handleNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNInputValue(event.target.value);
  };
  const handleMChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMInputValue(event.target.value);
  };
  const router = useRouter();
  const openCustomGame = () => {
    router.push({
      pathname: "/custom",
      query: { n: nInputValue, m: mInputValue },
    });
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[600px] h-[300px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl text-emerald-600 pb-2 font-medium leading-6"
                    id="dialog-title"
                  >
                    🔧Settings
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex flex-col">
                      <label
                        htmlFor="nInput"
                        className="text-2xl text-gray-500 pb-2 pr-3"
                      >
                        N Input:
                      </label>
                      <input
                        id="nInput"
                        type="number"
                        value={nInputValue}
                        onChange={handleNChange}
                      />
                      <label
                        htmlFor="mInput"
                        className="text-2xl text-gray-500 pb-2 pr-3"
                      >
                        M Input:
                      </label>
                      <input
                        id="mInput"
                        type="number"
                        value={mInputValue}
                        onChange={handleMChange}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-emerald-200 px-4 py-2 text-xl font-medium text-black hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                      onClick={openCustomGame}
                    >
                      Play
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CustomModeModal;
