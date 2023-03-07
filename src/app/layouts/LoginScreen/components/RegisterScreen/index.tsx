import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InformationUser from './component/InformationUser';
import SecurityRegister from './component/SecurityRegister';

interface RegisterProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function RegisterScreen(props: RegisterProps) {
  const { showModal, setShowModal } = props;
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(0);
  const handleStyleStep = (condition: boolean, tag: string) => {
    const styleStep = {
      li: `flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${
        condition
          ? 'text-blue-600 dark:text-blue-500 after:border-blue-100 dark:after:border-blue-800'
          : 'dark:after:border-gray-700 after:border-gray-100'
      }`,
      div: `flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
        condition ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-700 '
      }`,
      svg: `w-5 h-5 lg:w-6 lg:h-6  ${
        condition ? 'text-blue-600 dark:text-blue-300' : 'text-gray-500 dark:text-gray-100'
      }`
    };
    if (tag === 'li') return styleStep.li;
    if (tag === 'div') return styleStep.div;
    if (tag === 'svg') return styleStep.svg;
  };
  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed bg-[#b4b4b4a3] top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full ${
        showModal ? '' : 'hidden'
      }`}>
      <div className="relative w-full h-full max-w-md mx-auto mt-24">
        <div className="flex flex-col bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <ol className="flex items-center p-4">
            <li className={handleStyleStep(true, 'li')}>
              <div className={handleStyleStep(true, 'div')}>
                <svg
                  aria-hidden="true"
                  className={handleStyleStep(true, 'svg')}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </li>
            <li className={handleStyleStep(step === 1 || step === 2, 'li')}>
              <div className={handleStyleStep(step === 1 || step === 2, 'div')}>
                <svg
                  aria-hidden="true"
                  className={handleStyleStep(step === 1 || step === 2, 'svg')}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </li>
            <li className="flex items-center w-[80px]">
              <div className={handleStyleStep(step === 2, 'div')}>
                <svg
                  aria-hidden="true"
                  className={handleStyleStep(step === 2, 'svg')}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
            </li>
          </ol>
          <div className="px-6 pb-16 lg:px-8">
            {step === 0 && <SecurityRegister setStep={setStep} />}
            {step === 1 && <InformationUser setStep={setStep} />}
            {step === 2 && (
              <div>
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white mx-auto w-full text-center">
                  Đăng kí thành công
                </h3>
                <div className="w-full flex flex-col items-center justify-center">
                  <img className="mb-24" src="/images/icon-success.svg" alt="" />
                </div>
                <div className="w-full flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Về trang chủ
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
