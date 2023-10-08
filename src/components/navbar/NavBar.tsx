import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../atoms/Logo";

import AllTranscationsIcon from "./icons/AllTranscationsIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";
import ImportsIcon from "./icons/ImportsIcon";
import FilesIcon from "./icons/FilesIcon";
import SettingsIcon from "./icons/SettingsIcon";
import MonthReportIcon from "./icons/MonthReportIcon";
import AllBudgetsIcon from "./icons/AllBudgetsIcon";
import BankIntegrationsIcon from "./icons/BanksIntegrationIcon";
import SynchronizationsIcon from "./icons/SynchronizationsIcon";
import ImportSettingsIcon from "./icons/ImportSettingsIcon";
import ColumnsMappingIcon from "./icons/ColumnsMappingIcon";

const NavBar = () => {
  // tailwind class to hide submenu of navbar element
  let classes = "hidden";

  // state to inject $classes into transactions submenu div
  const [transctionsSubmenu, isTransactionsSubmenuHidden] = useState(true);

  // $classes injection Handler into transactions submenu div
  const transactionsSubmenuHandler = () => {
    isTransactionsSubmenuHidden(!transctionsSubmenu);
  };

  // state to inject $classes into reports submenu div
  const [reportsSubmenu, isReportsSubmenuHidden] = useState(true);

  // $classes injection Handler into reports submenu div
  const reportsSubmenuHandler = () => {
    isReportsSubmenuHidden(!reportsSubmenu);
  };

  // state to inject $classes into budgets submenu div
  const [budgetsSubmenu, isBudgetsSubmenuHidden] = useState(true);

  // $classes injection Handler into budgets submenu div
  const budgetsSubmenuHandler = () => {
    isBudgetsSubmenuHidden(!budgetsSubmenu);
  };

  // state to inject $classes into integrations submenu div
  const [integrationsSubmenu, isIntegrationsSubmenuHidden] = useState(true);

  // $classes injection Handler into integrations submenu div
  const integrationsSubmenuHandler = () => {
    isIntegrationsSubmenuHidden(!integrationsSubmenu);
  };

  // state to inject $classes into configuration submenu div
  const [configurationSubmenu, isConfigurationSubmenuHidden] = useState(true);

  // $classes injection Handler into configurations submenu div
  const configurationSubmenuHandler = () => {
    isConfigurationSubmenuHidden(!configurationSubmenu);
  };

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
                  <button
                    onClick={transactionsSubmenuHandler}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
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
                          <AllTranscationsIcon />
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
                          <AnalyticsIcon />
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
                          <ImportsIcon />
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
                          <FilesIcon />
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
                          <SettingsIcon />
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
                  <button
                    onClick={reportsSubmenuHandler}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
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
                          <MonthReportIcon />
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
                  <button
                    onClick={budgetsSubmenuHandler}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
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
                          <AllBudgetsIcon />
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
                  <button
                    onClick={integrationsSubmenuHandler}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
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
                          <BankIntegrationsIcon />
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
                          <SynchronizationsIcon />
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
                  <button
                    onClick={configurationSubmenuHandler}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
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
                          <ImportSettingsIcon />
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
                          <ColumnsMappingIcon />
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
