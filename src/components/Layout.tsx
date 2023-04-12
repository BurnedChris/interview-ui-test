export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="sticky top-0 z-50 w-full bg-everGreen pb-6"
        data-headlessui-state
      >
        <div className="mx-auto w-full sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-row space-x-4">
              <a
                href="/"
                className="flex items-center justify-between rounded-lg px-2 focus:outline-none focus:ring focus:ring-white focus:ring-offset-0"
              >
                <span className="sr-only">Everfund</span>
                <svg
                  viewBox="0 0 750 641.62"
                  aria-labelledby="Everfund Logo"
                  className="!dark:text-white h-8 w-auto align-baseline text-white"
                >
                  <title>Everfund Logo</title>
                  <path
                    d="M375.92 641.62c-16.72 0-34.73-8.94-56.69-28.12A308.32 308.32 0 01297 591.86C165.19 467.77 84.29 380 42.45 315.74 3.13 255.34 0 219.91 0 179.88c0-40.54 19.79-85.67 52.94-120.74C88.44 21.6 135 0 180.55 0h.14C317 0 400.82 158.38 404.33 165.13a355 355 0 0049.11 68.15c37.76 40.83 76.41 61.53 114.87 61.53h1.07a116.19 116.19 0 0081.34-33.89 113 113 0 0033.5-80.62A114.68 114.68 0 00569.7 65.78c-30.21 0-65.93 5.58-101.93 46.84a32.89 32.89 0 11-49.57-43.25C472.39 7.21 530.58 0 569.65 0h.06C669.12 0 750 80.9 750 180.29a178.41 178.41 0 01-52.85 127.23A181.65 181.65 0 01570 360.58h-1.7c-134.93.02-218.07-156.87-222.3-165.1a355.8 355.8 0 00-49.09-67.73c-26.24-28.27-67.71-62-116.19-62h-.09c-27.61 0-56.71 14.08-79.85 38.56-21.57 22.81-35 51.75-35 75.54 0 27.43 0 51.13 31.8 100C136 338.94 216.31 425.6 343 544.78c.66.62 1.29 1.26 1.89 1.93 8.61 9.51 20 19.73 27.85 25.41 11.1-9.07 32.4-28.28 67.68-63.51 32.82-32.76 69.88-71.6 90.12-94.44a32.89 32.89 0 0149.23 43.64C560 480.05 519 523.35 478.89 563.08c-21.12 20.89-38.84 37.67-52.69 49.85-25.29 22.25-36.57 28.69-50.28 28.69z"
                    fill="currentColor"
                  />
                </svg>
                <div className="sentry-mask ml-2 inline-block truncate font-title text-lg font-medium tracking-widest text-white">
                  Christopher's team
                </div>
              </a>
            </div>
            <div className="lg:w-80">
              <div className="flex items-center justify-end">
                <button
                  className="mr-2 inline-flex items-center justify-center rounded-md bg-transparent p-2 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white md:hidden"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state
                  id="headlessui-popover-button-1"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    className="svg-inline--fa fa-bars block h-6 w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    />
                  </svg>
                </button>
                <div className="hidden md:flex md:justify-center">
                  <div className="relative z-50 inline-flex items-center justify-center">
                    <div>
                      <button
                        data-tooltip-content="Support"
                        data-tooltip-id="support"
                        className="z-40 mx-4 flex items-center justify-center rounded-lg p-2 text-opacity-75 hover:bg-opacity-25 hover:text-opacity-100 focus:outline-none focus:ring focus:ring-white focus:ring-offset-0 text-white hover:bg-green-100"
                        id="headlessui-menu-button-3"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state
                      >
                        <span className="sr-only">Support</span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="circle-question"
                          className="svg-inline--fa fa-circle-question h-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="z-100" data-headlessui-state>
                    <button
                      className="flex items-center justify-center rounded-lg p-2 text-white text-opacity-75 hover:bg-green-100 hover:bg-opacity-25 hover:text-opacity-100 focus:outline-none focus:ring focus:ring-white focus:ring-offset-0"
                      id="headlessui-menu-button-4"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state
                    >
                      <span className="sr-only">Open user menu</span>
                      <span className="inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-500 w-8 h-8">
                        <span className="font-medium text-white text-sm">
                          CB
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="absolute mx-auto w-full sm:px-6 lg:px-8">
              <div
                className="mt-[0.25rem] hidden items-center rounded-lg bg-white px-2 shadow dark:bg-nord-3 md:flex md:justify-between md:space-x-2 md:py-2"
                aria-label="Global"
              >
                <div className="space-x-3">
                  <div className="relative inline-block" data-headlessui-state>
                    <button
                      className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-base font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 focus:ring-blue-500 active:bg-blue-500 active:text-white hover:bg-blue-500 hover:text-white group"
                      buttonsize="lg"
                      buttoncolor="blue"
                      offsetcolor="card"
                      aria-expanded="false"
                      data-headlessui-state
                      id="headlessui-popover-button-5"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="credit-card"
                        className="svg-inline--fa fa-credit-card !group-hover:text-white !group-focus:text-white mr-3 !h-4 !w-auto self-center"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
                        />
                      </svg>
                      <span>Donations</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="angle-down"
                        className="svg-inline--fa fa-angle-down text-primary ml-2 h-5 transition group-hover:text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="relative inline-block" data-headlessui-state>
                    <button
                      className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-base font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 focus:ring-blue-500 active:bg-blue-500 active:text-white hover:bg-blue-500 hover:text-white group"
                      buttonsize="lg"
                      buttoncolor="blue"
                      offsetcolor="card"
                      aria-expanded="false"
                      data-headlessui-state
                      id="headlessui-popover-button-7"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="gear"
                        className="svg-inline--fa fa-gear !group-hover:text-white !group-focus:text-white mr-3 !h-4 !w-auto self-center"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 0c17 0 33.6 1.7 49.8 4.8c7.9 1.5 21.8 6.1 29.4 20.1c2 3.7 3.6 7.6 4.6 11.8l9.3 38.5C350.5 81 360.3 86.7 366 85l38-11.2c4-1.2 8.1-1.8 12.2-1.9c16.1-.5 27 9.4 32.3 15.4c22.1 25.1 39.1 54.6 49.9 86.3c2.6 7.6 5.6 21.8-2.7 35.4c-2.2 3.6-4.9 7-8 10L459 246.3c-4.2 4-4.2 15.5 0 19.5l28.7 27.3c3.1 3 5.8 6.4 8 10c8.2 13.6 5.2 27.8 2.7 35.4c-10.8 31.7-27.8 61.1-49.9 86.3c-5.3 6-16.3 15.9-32.3 15.4c-4.1-.1-8.2-.8-12.2-1.9L366 427c-5.7-1.7-15.5 4-16.9 9.8l-9.3 38.5c-1 4.2-2.6 8.2-4.6 11.8c-7.7 14-21.6 18.5-29.4 20.1C289.6 510.3 273 512 256 512s-33.6-1.7-49.8-4.8c-7.9-1.5-21.8-6.1-29.4-20.1c-2-3.7-3.6-7.6-4.6-11.8l-9.3-38.5c-1.4-5.8-11.2-11.5-16.9-9.8l-38 11.2c-4 1.2-8.1 1.8-12.2 1.9c-16.1 .5-27-9.4-32.3-15.4c-22-25.1-39.1-54.6-49.9-86.3c-2.6-7.6-5.6-21.8 2.7-35.4c2.2-3.6 4.9-7 8-10L53 265.7c4.2-4 4.2-15.5 0-19.5L24.2 218.9c-3.1-3-5.8-6.4-8-10C8 195.3 11 181.1 13.6 173.6c10.8-31.7 27.8-61.1 49.9-86.3c5.3-6 16.3-15.9 32.3-15.4c4.1 .1 8.2 .8 12.2 1.9L146 85c5.7 1.7 15.5-4 16.9-9.8l9.3-38.5c1-4.2 2.6-8.2 4.6-11.8c7.7-14 21.6-18.5 29.4-20.1C222.4 1.7 239 0 256 0zM218.1 51.4l-8.5 35.1c-7.8 32.3-45.3 53.9-77.2 44.6L97.9 120.9c-16.5 19.3-29.5 41.7-38 65.7l26.2 24.9c24 22.8 24 66.2 0 89L59.9 325.4c8.5 24 21.5 46.4 38 65.7l34.6-10.2c31.8-9.4 69.4 12.3 77.2 44.6l8.5 35.1c24.6 4.5 51.3 4.5 75.9 0l8.5-35.1c7.8-32.3 45.3-53.9 77.2-44.6l34.6 10.2c16.5-19.3 29.5-41.7 38-65.7l-26.2-24.9c-24-22.8-24-66.2 0-89l26.2-24.9c-8.5-24-21.5-46.4-38-65.7l-34.6 10.2c-31.8 9.4-69.4-12.3-77.2-44.6l-8.5-35.1c-24.6-4.5-51.3-4.5-75.9 0zM208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"
                        />
                      </svg>
                      <span>Settings</span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="angle-down"
                        className="svg-inline--fa fa-angle-down text-primary ml-2 h-5 transition group-hover:text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-3 pr-4 ">
                  <div>
                    <div className="flex items-center">
                      <label
                        className="mr-4 cursor-pointer text-xs text-secondary"
                        id="headlessui-label-9"
                        htmlFor="headlessui-switch-10"
                      >
                        Test mode
                      </label>
                      <button
                        data-tooltip-content="To go live, complete the onboarding steps"
                        data-tooltip-id="testmode"
                        className="relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent ring-offset-white transition focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:ring-offset-nord-3 !bg-yellow-600 cursor-not-allowed"
                        id="headlessui-switch-10"
                        role="switch"
                        type="button"
                        tabIndex={0}
                        aria-checked="true"
                        data-headlessui-state="checked"
                        aria-labelledby="headlessui-label-9"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition dark:bg-nord-4 translate-x-5"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto mb-10 mt-4 w-full grow sm:mt-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:grid-cols-12">
          <aside className="space-y-1 lg:col-span-3 xl:col-span-2">
            <nav aria-label="Sidebar">
              <div className="mb-6 px-3 lg:hidden xl:mb-0">
                <label htmlFor="selected-view" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="selected-view"
                  name="selected-view"
                  className="w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-nord-0 dark:bg-nord-2 dark:text-white sm:text-sm"
                >
                  <option value="Single">Single</option>
                  <option value="Recurring">Recurring</option>
                  <option value="Gift Aid">Gift Aid</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Donation Links">Donation Links</option>
                  <option value="Donation Widgets">Donation Widgets</option>
                  <option value="Donation Templates">Donation Templates</option>
                  <option value="Donation Goals">Donation Goals</option>
                </select>
              </div>
              <div className="hidden space-y-3 lg:block">
                <a
                  href="/donations?view=single&status=succeeded"
                  className="text-secondary hover:bg-gray-200 hover:text-primary dark:hover:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="arrow-rotate-right"
                    className="svg-inline--fa fa-arrow-rotate-right -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M472 224c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v80.1l-20-23.5C387 63.4 325.1 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c50.4 0 97-16.7 134.4-44.8c10.6-8 12.7-23 4.8-33.6s-23-12.7-33.6-4.8C332.2 418.9 295.7 432 256 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c54.3 0 102.9 24.6 135.2 63.4l.1 .2 0 0L418.9 176H328c-13.3 0-24 10.7-24 24s10.7 24 24 24H472z"
                    />
                  </svg>
                  <span className="truncate">Single</span>
                </a>
                <a
                  href="/donations?view=recurring&status=succeeded"
                  className="text-secondary hover:bg-gray-200 hover:text-primary dark:hover:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="arrows-rotate"
                    className="svg-inline--fa fa-arrows-rotate -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M496 200c0 13.3-10.7 24-24 24h0H360 328c-13.3 0-24-10.7-24-24s10.7-24 24-24h32 54.1l-52.1-52.1C333.8 95.8 295.7 80 256 80c-72.7 0-135.2 44.1-162 107.1c-5.2 12.2-19.3 17.9-31.5 12.7s-17.9-19.3-12.7-31.5C83.9 88.2 163.4 32 256 32c52.5 0 102.8 20.8 139.9 57.9L448 142.1V88l0-.4V56c0-13.3 10.7-24 24-24s24 10.7 24 24V200zM40 288H152c13.3 0 24 10.7 24 24s-10.7 24-24 24H97.9l52.1 52.1C178.2 416.2 216.3 432 256 432c72.6 0 135-43.9 161.9-106.8c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5C427.8 424 348.5 480 256 480c-52.5 0-102.8-20.8-139.9-57.9L64 369.9V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-13.3 10.7-24 24-24z"
                    />
                  </svg>
                  <span className="truncate">Recurring</span>
                </a>
                <a
                  href="/donations?view=giftaid&status=unclaimed"
                  className="text-secondary hover:bg-gray-200 hover:text-primary dark:hover:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="money-check-pen"
                    className="svg-inline--fa fa-money-check-pen -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M64 112H512c8.8 0 16 7.2 16 16v91.6l6.6-6.6c11.6-11.6 26.3-18.5 41.4-20.5V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H330.5l6-23.9c2.2-8.8 6.2-17 11.8-24.1H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm56 160c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zM96 200c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24zm517.8 35.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"
                    />
                  </svg>
                  <span className="truncate">Gift Aid</span>
                </a>
                <a
                  href="/donations?view=marketing&status=any"
                  className="text-secondary hover:bg-gray-200 hover:text-primary dark:hover:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="bullseye"
                    className="svg-inline--fa fa-bullseye -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-272a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                  <span className="truncate">Marketing</span>
                </a>
                <div
                  role="separator"
                  className="not-prose bg-nord-4 dark:bg-nord-3"
                  style={{ width: "100%", height: "1px", margin: "5px 0px" }}
                />
                <a
                  href="/donations/links"
                  className="bg-gray-200 text-secondary dark:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="link"
                    className="svg-inline--fa fa-link -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z"
                    />
                  </svg>
                  <span className="truncate">Donation Links</span>
                </a>
                <a
                  href="/donations/widgets"
                  className="text-secondary hover:bg-gray-200 hover:text-primary dark:hover:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="browser"
                    className="svg-inline--fa fa-browser -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M.3 89.5C.1 91.6 0 93.8 0 96v64V416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V160 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 160H464l0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-256z"
                    />
                  </svg>
                  <span className="truncate">Donation Widgets</span>
                </a>
                <a
                  href="/donations/templates"
                  className="text-secondary hover:bg-gray-200 hover:text-primary dark:hover:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="palette"
                    className="svg-inline--fa fa-palette -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 258.2c0 2.7-1 5.2-4.2 8c-3.8 3.1-10.1 5.8-17.8 5.8H344c-53 0-96 43-96 96c0 6.8 .7 13.4 2.1 19.8c3.3 15.7 10.2 31.1 14.4 40.6l0 0c.7 1.6 1.4 3 1.9 4.3c5 11.5 5.6 15.4 5.6 17.1c0 5.3-1.9 9.5-3.8 11.8c-.9 1.1-1.6 1.6-2 1.8c-.3 .2-.8 .3-1.6 .4c-2.9 .1-5.7 .2-8.6 .2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 .7 0 1.4 0 2.2zm48 .5c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48h97.9c36.5 0 69.7-24.8 70.1-61.3zM160 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                    />
                  </svg>
                  <span className="truncate">Donation Templates</span>
                </a>
                <a
                  href="/donations/templates/goals"
                  className="text-secondary hover:bg-gray-200 hover:text-primary dark:hover:bg-nord-2 flex items-center rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="goal-net"
                    className="svg-inline--fa fa-goal-net -ml-1 mr-3 !h-4 !w-auto shrink-0"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M48 120c0-22.1 17.9-40 40-40H552c22.1 0 40 17.9 40 40V456c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-48.6-39.4-88-88-88H88C39.4 32 0 71.4 0 120V456c0 13.3 10.7 24 24 24s24-10.7 24-24V120zm128 8c-8.8 0-16 7.2-16 16v48H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V416h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V416h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V416h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V416h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H480V320h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H480V224h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H480V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H384V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H288V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H192V144c0-8.8-7.2-16-16-16zm80 256H192V320h64v64zm96 0H288V320h64v64zm96 0H384V320h64v64zm0-96H384V224h64v64zm-96 0H288V224h64v64zm-96 0H192V224h64v64z"
                    />
                  </svg>
                  <span className="truncate">Donation Goals</span>
                </a>
              </div>
            </nav>
          </aside>
          <section className="lg:col-span-9 xl:col-span-10">{children}</section>
        </div>
      </main>
      <footer className="border-t bg-white pb-20 pt-12 shadow-sm dark:border-nord-1 dark:bg-nord-3">
        <div className="mx-auto mt-8 flex flex-row items-center justify-between overflow-hidden px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a
                href="https://docs.everfund.com/"
                className="text-base text-secondary transition hover:text-primary"
              >
                Developer Docs
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://everfund.com/legal/cookies-policy/"
                className="text-base text-secondary transition hover:text-primary"
              >
                Cookies Policy
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://everfund.com/legal/privacy-policy/"
                className="text-base text-secondary transition hover:text-primary"
              >
                Privacy Policy
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://everfund.com/legal/terms-and-conditions/"
                className="text-base text-secondary transition hover:text-primary"
              >
                Terms And Conditions
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://everfund.com/legal/sub-processors/"
                className="text-base text-secondary transition hover:text-primary"
              >
                Sub-Processors
              </a>
            </div>
          </nav>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/_everfund"
              className="text-secondary transition hover:text-primary"
            >
              <span className="sr-only">Twitter</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="svg-inline--fa fa-twitter h-6 w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/everfund"
              className="text-secondary transition hover:text-primary"
            >
              <span className="sr-only">GitHub</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github h-6 w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 flex flex-row items-center justify-between overflow-hidden px-4 sm:px-6 lg:px-8 ">
          <p className="px-5 text-base text-gray-400 ">
            © 2023 Everfund Ltd. All rights reserved.
          </p>
          <div>
            <fieldset className="w-52">
              <div>
                <label htmlFor="system-color-scheme" className="sr-only">
                  System Color Scheme
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="desktop"
                      className="svg-inline--fa fa-desktop h-5 w-5 text-gray-400"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M512 48H64c-8.8 0-16 7.2-16 16V256H528V64c0-8.8-7.2-16-16-16zm64 208v48 48c0 35.3-28.7 64-64 64H364.3l8 48H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H352 224 152c-13.3 0-24-10.7-24-24s10.7-24 24-24h51.7l8-48H64c-35.3 0-64-28.7-64-64V304 256 64C0 28.7 28.7 0 64 0H512c35.3 0 64 28.7 64 64V256zM48 304v48c0 8.8 7.2 16 16 16H239.5c.3 0 .6 0 .8 0h95.2c.3 0 .6 0 .8 0H512c8.8 0 16-7.2 16-16V304H48zM252.3 464h71.3l-8-48H260.3l-8 48z"
                      />
                    </svg>
                  </div>
                  <select
                    id="colorScheme"
                    title="colorScheme"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 pl-10 focus:border-blue-500 focus:ring-blue-500 dark:border-nord-3 dark:bg-nord-1 dark:text-nord-5 sm:text-sm"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system" selected>
                      System
                    </option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </footer>
    </div>
  );
}
