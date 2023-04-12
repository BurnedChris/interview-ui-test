export default function LinkNavigation() {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-normal leading-6 text-primary">
          Donation Link: evr.fund/wpt2
        </h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="inline-flex items-center ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="house"
                  className="svg-inline--fa fa-house !h-3 !w-auto text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right !h-3 w-auto text-gray-400"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                  />
                </svg>
                <a
                  href="/donations/links/l_kCxocfmMbQoUUtfKcUveuTX9"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:ml-2"
                >
                  Donations Links
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right !h-3 w-auto text-gray-400"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium text-blue-400 dark:text-blue-500 md:ml-2">
                  evr.fund/wpt2
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="relative mb-5 bg-white px-4 py-3 dark:bg-nord-3 sm:rounded-lg sm:shadow">
        <div className="md:flex md:items-center md:justify-between">
          <div className="xl:hidden">
            <label htmlFor="selected-filter" className="sr-only">
              Select a Filter
            </label>
            <select
              id="selected-filter"
              name="selected-filter"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-blue-500 dark:border-nord-1 dark:bg-nord-2 sm:text-sm"
            >
              <option value="Overview">Overview</option>
              <option value="Share">Share</option>
              <option value="QR Codes">QR Codes</option>
              <option value="Settings">Settings</option>
            </select>
          </div>
          <div className="hidden xl:block">
            <div className="flex grow content-between">
              <nav className="flex space-x-8">
                <a
                  href="/donations/links/l_kCxocfmMbQoUUtfKcUveuTX9"
                  buttonsize="md"
                  buttoncolor="blue"
                  offsetcolor="card"
                  className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 focus:ring-blue-500 active:bg-blue-500 active:text-white hover:bg-blue-500 hover:text-white"
                >
                  Overview
                </a>
                <a
                  href="/donations/links/l_kCxocfmMbQoUUtfKcUveuTX9/share"
                  buttonsize="md"
                  buttoncolor="blue"
                  offsetcolor="card"
                  className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 focus:ring-blue-500 active:bg-blue-500 active:text-white hover:bg-blue-500 hover:text-white"
                >
                  Share
                </a>
                <a
                  href="/donations/links/l_kCxocfmMbQoUUtfKcUveuTX9/qrcode"
                  buttonsize="md"
                  buttoncolor="blue"
                  offsetcolor="card"
                  className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 focus:ring-blue-500 active:bg-blue-500 active:text-white hover:bg-blue-500 hover:text-white"
                >
                  QR Codes
                </a>
                <a
                  href="/donations/links/l_kCxocfmMbQoUUtfKcUveuTX9/settings"
                  buttonsize="md"
                  buttoncolor="blue"
                  offsetcolor="card"
                  className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 text-white bg-blue-500 !hover:bg-blue-500 hover:bg-opacity-100 focus:ring-blue-500 active:bg-blue-500 active:text-white hover:bg-blue-500 hover:text-white"
                >
                  Settings
                </a>
              </nav>
            </div>
          </div>
          <div className="flex space-x-4">
            {" "}
            <button
              buttonsize="md"
              buttoncolor="gray"
              offsetcolor="card"
              className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 bg-gray-200 hover:bg-gray-300 focus:ring-green-500 active:bg-gray-200 dark:bg-nord-3 dark:hover:bg-nord-3"
            >
              Copy
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="clipboard"
                className="svg-inline--fa fa-clipboard -mr-0.5 ml-2 !h-3 !w-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
            </button>
            <a
              buttonsize="md"
              buttoncolor="gray"
              offsetcolor="card"
              className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 bg-gray-200 hover:bg-gray-300 focus:ring-green-500 active:bg-gray-200 dark:bg-nord-3 dark:hover:bg-nord-3"
              href="https://evr.fund/wpt2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-up-right-from-square"
                className="svg-inline--fa fa-arrow-up-right-from-square -mr-0.5 ml-2 !h-3 !w-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                />
              </svg>
            </a>{" "}
            <button
              buttonsize="md"
              buttoncolor="yellow"
              offsetcolor="card"
              className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 active:text-white"
            >
              Archive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
