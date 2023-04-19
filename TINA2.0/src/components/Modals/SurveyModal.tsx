import React from "react";
import SurveyButton from "../FloatingButton/SurveyButton";

type Props = {};

function SurveyModal({}: Props) {
  const [isOpen, setIsOpen] = React.useState(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 h-[100svh] w-full bg-gray-700 bg-opacity-50 backdrop-blur-sm">
          <dialog
            id="myModal"
            className="fixed inset-0 z-50 h-3/5 w-11/12 overflow-auto rounded-md p-5 backdrop-blur-sm backdrop-opacity-50 backdrop:bg-red md:h-fit md:w-1/2"
            open={isOpen}
          >
            <div className="flex h-auto w-full flex-col items-center justify-center">
              <div className="flex h-auto w-full items-center justify-center">
                <div className="flex h-auto w-10/12 flex-col items-center justify-center py-3 text-xl font-bold text-darkBgLighter">
                  Welcome to TINA 2.0. 👋
                  <span className="block text-center">
                    CIT University's friendly chatbot 🤖
                  </span>
                </div>
                <div
                  onClick={closeModal}
                  className="flex h-auto w-1/12 cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
              <div className="prose-base flex min-h-0 w-full flex-col items-center justify-center gap-6 overflow-auto rounded bg-gray-200 py-10 px-4 text-gray-500">
                We're currently in the development stage, and we'd love for you
                to try out our latest creation. TINA 2.0 is designed to make
                your school life easier by answering your questions, providing
                helpful resources, and guiding you through your school day.
                <span>
                  We value your feedback, so after you've tried out TINA 2.0,
                  we'd appreciate it if you could take a quick survey to let us
                  know what you think. Your input will help us improve TINA 2.0
                  and make it even more helpful for all students.
                </span>
                <span className="inline-flex flex-col items-start gap-4 md:flex-row md:items-center">
                  The survey button:
                  <SurveyButton />
                  can be found next to question input.
                </span>
                <span>
                  Go ahead and give TINA 2.0 a try! We hope you find it useful
                  and informative.
                </span>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}

export default SurveyModal;
