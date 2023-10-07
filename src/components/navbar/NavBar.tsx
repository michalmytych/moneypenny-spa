import { Link } from "react-router-dom";
import { useState } from 'react';
import Logo from "../atoms/Logo";


const NavBar = () => {

// tailwind class to hide submenu of navbar element
  let classes = "hidden";

// state to inject $classes into transactions submenu div
  const [transctionsSubmenu,isTransactionsSubmenuHidden] = useState(true);

// $classes injection Handler into transactions submenu div
  const transactionsSubmenuHandler = () => {
    isTransactionsSubmenuHidden(!transctionsSubmenu);
  }

// state to inject $classes into reports submenu div
const [reportsSubmenu,isReportsSubmenuHidden] = useState(true);

// $classes injection Handler into reports submenu div
  const reportsSubmenuHandler = () => {
    isReportsSubmenuHidden(!reportsSubmenu);
  }

// state to inject $classes into budgets submenu div
const [budgetsSubmenu,isBudgetsSubmenuHidden] = useState(true);

// $classes injection Handler into budgets submenu div
  const budgetsSubmenuHandler = () => {
    isBudgetsSubmenuHidden(!budgetsSubmenu);
  }

// state to inject $classes into integrations submenu div
const [integrationsSubmenu,isIntegrationsSubmenuHidden] = useState(true);

// $classes injection Handler into integrations submenu div
  const integrationsSubmenuHandler = () => {
    isIntegrationsSubmenuHidden(!integrationsSubmenu);
  }

// state to inject $classes into configuration submenu div
const [configurationSubmenu,isConfigurationSubmenuHidden] = useState(true);

// $classes injection Handler into configurations submenu div
  const configurationSubmenuHandler = () => {
    isConfigurationSubmenuHidden(!configurationSubmenu);
  }



  return (
    <nav className="bg-white fixed top-0 w-full shadow-sm z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justfiy-between h-16">
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div id="navLinks" className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
            <div className="flex h-full text-center content-center pt-4">
              <div className="relative">
                <div>
                  <button onClick={transactionsSubmenuHandler} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    <div>Transactions</div>
                  </button>
                </div>
                <div className={`${transctionsSubmenu && classes}`}>
                  <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/transactions"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            ></path>
                          </svg>
                        </div>
                        All transactions
                      </div>
                    </Link>
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/analytics"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                            ></path>
                          </svg>
                        </div>
                        Analytics
                      </div>
                    </Link>
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/imports"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                            ></path>
                          </svg>
                        </div>
                        Imports
                      </div>
                    </Link>
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/files"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            ></path>
                          </svg>
                        </div>
                        Files
                      </div>
                    </Link>
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/settings"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                            ></path>
                          </svg>
                        </div>
                        Settings
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full text-center content-center pt-4">
              <div className="relative" x-data="{ open: false }">
                <div>
                  <button  onClick={reportsSubmenuHandler} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    <div>Reports</div>
                  </button>
                </div>

                <div className={`${reportsSubmenu && classes}`}>
                  <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/reports/periodic"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                            ></path>
                          </svg>
                        </div>
                        Month report
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full text-center content-center pt-4">
              <div className="relative" x-data="{ open: false }">
                <div>
                  <button onClick={budgetsSubmenuHandler} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    <div>Budgets</div>
                  </button>
                </div>

                <div className={`${budgetsSubmenu && classes}`}>
                  <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/budgets"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                            ></path>
                          </svg>
                        </div>
                        All budgets
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full text-center content-center pt-4">
              <div className="relative" x-data="{ open: false }">
                <div>
                  <button onClick={integrationsSubmenuHandler}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    <div>Integrations</div>
                  </button>
                </div>

                <div className={`${integrationsSubmenu && classes}`}>
                  <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/institutions"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                            ></path>
                          </svg>
                        </div>
                        Banks integrations
                      </div>
                    </Link>
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/synchronizations"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            ></path>
                          </svg>
                        </div>
                        Synchronizations
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full text-center content-center pt-4">
              <div className="relative">
                <div>
                  <button onClick={configurationSubmenuHandler} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                    <div>Configuration</div>
                  </button>
                </div>

                <div className={`${configurationSubmenu && classes}`}>
                  <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/imports/settings"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                            ></path>
                          </svg>
                        </div>
                        Import settings
                      </div>
                    </Link>
                    <Link
                      className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dropdown-link navLink"
                      to="http://moneypenny.test/imports/columns-mappings"
                    >
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                            ></path>
                          </svg>
                        </div>
                        Columns mappings
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
