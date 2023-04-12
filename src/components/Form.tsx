export default function Form() {
  return (
    <>
      <section aria-labelledby="link">
        <form>
          <div className="relative mb-5 bg-white dark:bg-nord-3 sm:rounded-lg sm:shadow">
            <div className="px-5 py-6 font-title font-medium tracking-wider sm:px-6">
              <div className="flex flex-wrap items-center sm:flex-nowrap">
                <div className="col-span-2">
                  <h2
                    id="link"
                    className="text-lg font-medium leading-6 text-primary"
                  >
                    Donation Link Editor
                  </h2>
                  <p className="mt-1 text-sm leading-5 text-secondary" />
                </div>
              </div>
            </div>
            <div className="p-4 sm:px-6">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-4 space-y-4 sm:col-span-2">
                  <div className="mb-4">
                    <label
                      htmlFor="code"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
                    >
                      <div className="flex flex-row">
                        Code
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="circle-info"
                          className="svg-inline--fa fa-circle-info ml-2 mt-0.5 h-4 w-4 cursor-pointer text-gray-600 opacity-75 dark:text-white "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-tooltip-content="This code is generated and is the unique ID to access this particular Donation Link. You are unable edit this code under domain names that Everfund owns, but are able to on a custom domain that you own. Contact us for help."
                          data-tooltip-id="Code"
                        >
                          <path
                            fill="currentColor"
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                          />
                        </svg>
                      </div>
                    </label>
                    <div
                      id="code"
                      className="sentry-mask bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 relative mt-1 flex rounded-md"
                    >
                      wpt2
                    </div>
                  </div>
                  <div className="mb-4" />
                  <div className="mb-4">
                    <div className="flex cursor-pointer items-center justify-between pt-0">
                      <span className="flex items-center justify-between leading-5 text-secondary">
                        <span
                          id="headlessui-label-43"
                          htmlFor="headlessui-switch-44"
                        >
                          Can collect Gift Aid
                        </span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="circle-info"
                          className="svg-inline--fa fa-circle-info ml-2 mt-0.5 !h-4 !w-auto cursor-pointer text-gray-600 opacity-75 dark:text-white "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-tooltip-content="This enables the option for donors to declare Gift Aid from this Donation Link."
                          data-tooltip-id="Can collect Gift Aid"
                        >
                          <path
                            fill="currentColor"
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                          />
                        </svg>
                      </span>
                      <button
                        className="bg-blue-600 relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent ring-offset-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-3"
                        id="headlessui-switch-44"
                        role="switch"
                        type="button"
                        tabIndex={0}
                        aria-checked="true"
                        data-headlessui-state="checked"
                        aria-labelledby="headlessui-label-43"
                      >
                        <span
                          aria-hidden="true"
                          className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-300"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex cursor-pointer items-center justify-between pt-0">
                      <span className="flex items-center justify-between leading-5 text-secondary">
                        <span
                          id="headlessui-label-45"
                          htmlFor="headlessui-switch-46"
                        >
                          Can collect marketing consent
                        </span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="circle-info"
                          className="svg-inline--fa fa-circle-info ml-2 mt-0.5 !h-4 !w-auto cursor-pointer text-gray-600 opacity-75 dark:text-white "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-tooltip-content="This enabled the option for donors to consent to marketing from the options of email, phone and home address."
                          data-tooltip-id="Can collect marketing consent"
                        >
                          <path
                            fill="currentColor"
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                          />
                        </svg>
                      </span>
                      <button
                        className="bg-blue-600 relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent ring-offset-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-3"
                        id="headlessui-switch-46"
                        role="switch"
                        type="button"
                        tabIndex={0}
                        aria-checked="true"
                        data-headlessui-state="checked"
                        aria-labelledby="headlessui-label-45"
                      >
                        <span
                          aria-hidden="true"
                          className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 space-y-4 sm:col-span-2">
                  <div className="mb-4">
                    <label
                      htmlFor="countryCurrencyCode"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
                    >
                      <div className="flex flex-row">
                        Currency Code
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="circle-info"
                          className="svg-inline--fa fa-circle-info ml-2 mt-0.5 !h-4 !w-auto cursor-pointer text-gray-600 opacity-75 dark:text-white "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-tooltip-content="Set this to the native currency code of the location this Donation Link will be used. It is recommended that you use multiple Donation Links with different currency codes if you are fundraising in multiples. There will be conversion fee associated with Donation Links which receive donations outside of the native currency code you choose"
                          data-tooltip-id="Currency Code"
                        >
                          <path
                            fill="currentColor"
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                          />
                        </svg>
                      </div>
                    </label>
                    <div className="relative mt-1 ">
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <button
                          className="sentry-mask bg-gray-50 border text-gray-900 text-sm focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500, focus:z-10 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 border-gray-300 dark:border-gray-600 relative flex rounded-md px-4 py-2"
                          id="headlessui-listbox-button-47"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-headlessui-state
                        >
                          <span className="inline-flex w-full truncate">
                            <span className="mr-2 truncate text-gray-500">
                              GBP
                            </span>
                            <span className="truncate">
                              British Pound Sterling
                            </span>
                            <span className="ml-2 truncate text-gray-500">
                              £
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="angle-down"
                              className="svg-inline--fa fa-angle-down !h-4 !w-auto text-gray-400"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="countryISO"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
                    >
                      <div className="flex flex-row">
                        Primary Fundraising Location
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="circle-info"
                          className="svg-inline--fa fa-circle-info ml-2 mt-0.5 !h-4 !w-auto cursor-pointer text-gray-600 opacity-75 dark:text-white "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-tooltip-content="Set this to the country which you expect the majority of donations to come through this Donation Link."
                          data-tooltip-id="Primary Fundraising Location"
                        >
                          <path
                            fill="currentColor"
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                          />
                        </svg>
                      </div>
                    </label>
                    <div className="relative mt-1 ">
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <button
                          className="sentry-mask bg-gray-50 border text-gray-900 text-sm focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500, focus:z-10 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 border-gray-300 dark:border-gray-600 relative flex rounded-md px-4 py-2"
                          id="headlessui-listbox-button-48"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-headlessui-state
                        >
                          <span className="inline-flex w-full truncate">
                            <span className="truncate">United Kingdom</span>
                            <span className="ml-2 truncate text-gray-500">
                              GB
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="angle-down"
                              className="svg-inline--fa fa-angle-down !h-4 !w-auto text-gray-400"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="countryLanguageTag"
                      className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
                    >
                      <div className="flex flex-row">
                        Language
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="circle-info"
                          className="svg-inline--fa fa-circle-info ml-2 mt-0.5 !h-4 !w-auto cursor-pointer text-gray-600 opacity-75 dark:text-white "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-tooltip-content="Set this to the native language of the intended audience."
                          data-tooltip-id="Language"
                        >
                          <path
                            fill="currentColor"
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                          />
                        </svg>
                      </div>
                    </label>
                    <div className="relative mt-1 ">
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <button
                          className="sentry-mask bg-gray-50 border text-gray-900 text-sm focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500, focus:z-10 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 border-gray-300 dark:border-gray-600 relative flex rounded-md px-4 py-2"
                          id="headlessui-listbox-button-49"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-headlessui-state
                        >
                          <span className="inline-flex w-full truncate">
                            <span className="truncate">English</span>
                            <span className="ml-2 truncate text-gray-500">
                              EN
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="angle-down"
                              className="svg-inline--fa fa-angle-down !h-4 !w-auto text-gray-400"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M241 337c-9.4 9.4-24.6 9.4-33.9 0L47 177c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 337z"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-4">
                  <label
                    htmlFor="textStory"
                    className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
                  >
                    <div className="flex flex-row">
                      Text story
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="circle-info"
                        className="svg-inline--fa fa-circle-info ml-2 mt-0.5 h-4 w-4 cursor-pointer text-gray-600 opacity-75 dark:text-white "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-tooltip-content="This is a contextual description of your nonprofit's cause or appeal which is seen by donors on this Donation Link. Usually 1-2 paragraphs are ample."
                        data-tooltip-id="Text story"
                      >
                        <path
                          fill="currentColor"
                          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        />
                      </svg>
                    </div>
                    <span className="ml-4 text-xs text-gray-900 dark:text-gray-300">
                      Required
                    </span>
                  </label>
                  <div className="relative flex w-full flex-col rounded-md border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-nord-0 dark:bg-nord-3 dark:text-white sm:text-sm">
                    <div className="mx-4 mt-4 flex flex-row space-x-4 rounded-lg bg-gray-100 p-2 dark:bg-nord-2">
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Bold"
                            data-tooltip-id="blog-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Bold</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="bold"
                              className="svg-inline--fa fa-bold h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path
                                fill="currentColor"
                                d="M0 56C0 42.7 10.7 32 24 32H72 88 212c68.5 0 124 55.5 124 124c0 34.7-14.3 66.2-37.3 88.7C339.7 264.9 368 307.1 368 356c0 68.5-55.5 124-124 124H88 72 24c-13.3 0-24-10.7-24-24s10.7-24 24-24H48V256 80H24C10.7 80 0 69.3 0 56zM212 232c42 0 76-34 76-76s-34-76-76-76H96V232H212zM96 280V432H244c42 0 76-34 76-76s-34-76-76-76H212 96z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Italic"
                            data-tooltip-id="italic-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Italic</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="italic"
                              className="svg-inline--fa fa-italic h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path
                                fill="currentColor"
                                d="M128 56c0-13.3 10.7-24 24-24H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H291.3L144.7 432H232c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H92.7L239.3 80H152c-13.3 0-24-10.7-24-24z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Strike"
                            data-tooltip-id="strike-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Strike</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="strikethrough"
                              className="svg-inline--fa fa-strikethrough h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M145.5 138c4-21.5 17.9-37.4 41.7-47.4c24.7-10.4 59.4-13.7 99.9-7.5c12.8 2 52.4 9.5 64.9 12.8c12.8 3.3 25.9-4.3 29.3-17.2s-4.3-25.9-17.2-29.3c-14.7-3.8-56.1-11.7-69.7-13.8c-46.2-7.1-90.4-4.1-125.7 10.7c-36.1 15.1-63.3 43.1-70.5 83.9c-.1 .4-.1 .9-.2 1.3c-2.8 23.4 .5 44.2 9.8 62.2c9.2 17.8 23.2 31.2 38.8 41.5c2.4 1.6 5 3.2 7.5 4.7H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H295.8c-9.9-3.1-19.7-6-29.2-8.8l-.3-.1c-37.7-11.1-70.5-20.7-93.3-35.8c-10.9-7.2-18.2-14.9-22.6-23.5c-4.2-8.2-6.6-18.9-4.9-33.8zM364 337.1c3.7 8.6 5.5 20.1 2.6 36.3c-3.8 21.8-17.8 37.9-41.8 48c-24.7 10.4-59.4 13.7-99.8 7.5c-20.1-3.2-54.3-14.6-81.2-23.6l0 0 0 0c-5.9-2-11.4-3.8-16.3-5.4c-12.6-4.1-26.1 2.8-30.3 15.4s2.8 26.2 15.4 30.3c4 1.3 8.8 2.9 14 4.7c26.6 8.9 66.4 22.2 90.9 26.2l.1 0c46.2 7.1 90.4 4.1 125.7-10.7c36.1-15.1 63.3-43.1 70.5-83.9c4-22.9 2.4-43.5-5-61.7H351.6c5.7 5.3 9.7 11 12.3 17.1z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Paragraph"
                            data-tooltip-id="paragraph-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2 bg-blue-500 !text-white"
                          >
                            <span className="sr-only">Paragraph</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="paragraph"
                              className="svg-inline--fa fa-paragraph h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M32 192c0-88.4 71.6-160 160-160h64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H384l0 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-376H288V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V352H192c-88.4 0-160-71.6-160-160zM240 304V80H192C130.1 80 80 130.1 80 192s50.1 112 112 112h48z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 1"
                            data-tooltip-id="h1-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 1</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h1"
                              className="svg-inline--fa fa-h1 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V248 424c0 13.3 10.7 24 24 24s24-10.7 24-24V272H272V424c0 13.3 10.7 24 24 24s24-10.7 24-24V248 88c0-13.3-10.7-24-24-24s-24 10.7-24 24V224H48V88zm456 0c0-8.5-4.5-16.4-11.8-20.7s-16.4-4.4-23.8-.3l-72 40c-11.6 6.4-15.8 21-9.3 32.6s21 15.8 32.6 9.3L456 128.8V400H408c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H504V88z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 2"
                            data-tooltip-id="h2-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 2</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h2"
                              className="svg-inline--fa fa-h2 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V248 424c0 13.3 10.7 24 24 24s24-10.7 24-24V272H272V424c0 13.3 10.7 24 24 24s24-10.7 24-24V248 88c0-13.3-10.7-24-24-24s-24 10.7-24 24V224H48V88zm397.3 40.8C457.9 118 474 112 490.7 112h9.2c42.1 0 76.2 34.1 76.2 76.2c0 21.3-8.9 41.5-24.5 56L375.7 406.4c-7.3 6.7-9.7 17.2-6.1 26.4s12.5 15.3 22.4 15.3H616c13.3 0 24-10.7 24-24s-10.7-24-24-24H453.4L584.1 279.4c25.5-23.5 39.9-56.6 39.9-91.2C624 119.6 568.4 64 499.8 64h-9.2c-28.1 0-55.3 10.1-76.6 28.3l-29.7 25.4c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l29.7-25.4z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 3"
                            data-tooltip-id="h3-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 3</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h3"
                              className="svg-inline--fa fa-h3 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V248 424c0 13.3 10.7 24 24 24s24-10.7 24-24V272H272V424c0 13.3 10.7 24 24 24s24-10.7 24-24V248 88c0-13.3-10.7-24-24-24s-24 10.7-24 24V224H48V88zM400 64c-13.3 0-24 10.7-24 24s10.7 24 24 24H542.1L423 231c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8h88c35.3 0 64 28.7 64 64s-28.7 64-64 64H455.4c-15.6 0-29-11.3-31.6-26.7l-.2-1.2c-2.2-13.1-14.5-21.9-27.6-19.7s-21.9 14.5-19.7 27.6l.2 1.2c6.4 38.6 39.8 66.8 78.9 66.8H528c61.9 0 112-50.1 112-112s-50.1-112-112-112H497.9L617 105c6.9-6.9 8.9-17.2 5.2-26.2S609.7 64 600 64H400z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 4"
                            data-tooltip-id="h4-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 4</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h4"
                              className="svg-inline--fa fa-h4 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M455.5 92.9L421.5 256H592V88c0-13.3 10.7-24 24-24s24 10.7 24 24V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V304H392c-7.2 0-14.1-3.3-18.6-8.9s-6.3-13-4.9-20l40-192c2.7-13 15.4-21.3 28.4-18.6s21.3 15.4 18.6 28.4zM24 64c13.3 0 24 10.7 24 24V224H272V88c0-13.3 10.7-24 24-24s24 10.7 24 24V248 424c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H48V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V248 88C0 74.7 10.7 64 24 64z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Bullet List"
                            data-tooltip-id="bullet-list-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Bullet List</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="list"
                              className="svg-inline--fa fa-list h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM184 72c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Ordered list"
                            data-tooltip-id="ordered-list-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Ordered list</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="list-ol"
                              className="svg-inline--fa fa-list-ol h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM216 72H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 160H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 160H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Blockquote"
                            data-tooltip-id="blockquote-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Blockquote</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="block-quote"
                              className="svg-inline--fa fa-block-quote h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M24 72C10.7 72 0 82.7 0 96s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM152 232c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H152zM128 416c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.3 0-24 10.7-24 24zM0 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176c0-13.3-10.7-24-24-24s-24 10.7-24 24V424z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Undo"
                            data-tooltip-id="undo-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Undo</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="arrow-rotate-left"
                              className="svg-inline--fa fa-arrow-rotate-left h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Redo"
                            data-tooltip-id="redo-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Redo</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="arrow-rotate-right"
                              className="svg-inline--fa fa-arrow-rotate-right h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M472 224c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v80.1l-20-23.5C387 63.4 325.1 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c50.4 0 97-16.7 134.4-44.8c10.6-8 12.7-23 4.8-33.6s-23-12.7-33.6-4.8C332.2 418.9 295.7 432 256 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c54.3 0 102.9 24.6 135.2 63.4l.1 .2 0 0L418.9 176H328c-13.3 0-24 10.7-24 24s10.7 24 24 24H472z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                    </div>
                    <div>
                      <div
                        contentEditable="true"
                        translate="no"
                        className="ProseMirror py-4 px-8 prose !text-primary max-w-[100%] focus:outline-none focus:shadow-none"
                        tabIndex={0}
                      >
                        <p>Trst</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-4">
                  <label
                    htmlFor="textThankYou"
                    className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
                  >
                    <div className="flex flex-row">
                      Thank you messsage
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="circle-info"
                        className="svg-inline--fa fa-circle-info ml-2 mt-0.5 h-4 w-4 cursor-pointer text-gray-600 opacity-75 dark:text-white "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-tooltip-content="This is a message to say thank you to your donors for a successful donation. It is seen on Donation Links after a successful donation is made and on the donor's email receipt."
                        data-tooltip-id="Thank you messsage"
                      >
                        <path
                          fill="currentColor"
                          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        />
                      </svg>
                    </div>
                    <span className="ml-4 text-xs text-gray-900 dark:text-gray-300">
                      Required
                    </span>
                  </label>
                  <div className="relative flex w-full flex-col rounded-md border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-nord-0 dark:bg-nord-3 dark:text-white sm:text-sm">
                    <div className="mx-4 mt-4 flex flex-row space-x-4 rounded-lg bg-gray-100 p-2 dark:bg-nord-2">
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Bold"
                            data-tooltip-id="blog-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Bold</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="bold"
                              className="svg-inline--fa fa-bold h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path
                                fill="currentColor"
                                d="M0 56C0 42.7 10.7 32 24 32H72 88 212c68.5 0 124 55.5 124 124c0 34.7-14.3 66.2-37.3 88.7C339.7 264.9 368 307.1 368 356c0 68.5-55.5 124-124 124H88 72 24c-13.3 0-24-10.7-24-24s10.7-24 24-24H48V256 80H24C10.7 80 0 69.3 0 56zM212 232c42 0 76-34 76-76s-34-76-76-76H96V232H212zM96 280V432H244c42 0 76-34 76-76s-34-76-76-76H212 96z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Italic"
                            data-tooltip-id="italic-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Italic</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="italic"
                              className="svg-inline--fa fa-italic h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                            >
                              <path
                                fill="currentColor"
                                d="M128 56c0-13.3 10.7-24 24-24H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H291.3L144.7 432H232c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H92.7L239.3 80H152c-13.3 0-24-10.7-24-24z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Strike"
                            data-tooltip-id="strike-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Strike</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="strikethrough"
                              className="svg-inline--fa fa-strikethrough h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M145.5 138c4-21.5 17.9-37.4 41.7-47.4c24.7-10.4 59.4-13.7 99.9-7.5c12.8 2 52.4 9.5 64.9 12.8c12.8 3.3 25.9-4.3 29.3-17.2s-4.3-25.9-17.2-29.3c-14.7-3.8-56.1-11.7-69.7-13.8c-46.2-7.1-90.4-4.1-125.7 10.7c-36.1 15.1-63.3 43.1-70.5 83.9c-.1 .4-.1 .9-.2 1.3c-2.8 23.4 .5 44.2 9.8 62.2c9.2 17.8 23.2 31.2 38.8 41.5c2.4 1.6 5 3.2 7.5 4.7H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H295.8c-9.9-3.1-19.7-6-29.2-8.8l-.3-.1c-37.7-11.1-70.5-20.7-93.3-35.8c-10.9-7.2-18.2-14.9-22.6-23.5c-4.2-8.2-6.6-18.9-4.9-33.8zM364 337.1c3.7 8.6 5.5 20.1 2.6 36.3c-3.8 21.8-17.8 37.9-41.8 48c-24.7 10.4-59.4 13.7-99.8 7.5c-20.1-3.2-54.3-14.6-81.2-23.6l0 0 0 0c-5.9-2-11.4-3.8-16.3-5.4c-12.6-4.1-26.1 2.8-30.3 15.4s2.8 26.2 15.4 30.3c4 1.3 8.8 2.9 14 4.7c26.6 8.9 66.4 22.2 90.9 26.2l.1 0c46.2 7.1 90.4 4.1 125.7-10.7c36.1-15.1 63.3-43.1 70.5-83.9c4-22.9 2.4-43.5-5-61.7H351.6c5.7 5.3 9.7 11 12.3 17.1z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Paragraph"
                            data-tooltip-id="paragraph-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2 bg-blue-500 !text-white"
                          >
                            <span className="sr-only">Paragraph</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="paragraph"
                              className="svg-inline--fa fa-paragraph h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M32 192c0-88.4 71.6-160 160-160h64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H384l0 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-376H288V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V352H192c-88.4 0-160-71.6-160-160zM240 304V80H192C130.1 80 80 130.1 80 192s50.1 112 112 112h48z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 1"
                            data-tooltip-id="h1-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 1</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h1"
                              className="svg-inline--fa fa-h1 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V248 424c0 13.3 10.7 24 24 24s24-10.7 24-24V272H272V424c0 13.3 10.7 24 24 24s24-10.7 24-24V248 88c0-13.3-10.7-24-24-24s-24 10.7-24 24V224H48V88zm456 0c0-8.5-4.5-16.4-11.8-20.7s-16.4-4.4-23.8-.3l-72 40c-11.6 6.4-15.8 21-9.3 32.6s21 15.8 32.6 9.3L456 128.8V400H408c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H504V88z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 2"
                            data-tooltip-id="h2-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 2</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h2"
                              className="svg-inline--fa fa-h2 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V248 424c0 13.3 10.7 24 24 24s24-10.7 24-24V272H272V424c0 13.3 10.7 24 24 24s24-10.7 24-24V248 88c0-13.3-10.7-24-24-24s-24 10.7-24 24V224H48V88zm397.3 40.8C457.9 118 474 112 490.7 112h9.2c42.1 0 76.2 34.1 76.2 76.2c0 21.3-8.9 41.5-24.5 56L375.7 406.4c-7.3 6.7-9.7 17.2-6.1 26.4s12.5 15.3 22.4 15.3H616c13.3 0 24-10.7 24-24s-10.7-24-24-24H453.4L584.1 279.4c25.5-23.5 39.9-56.6 39.9-91.2C624 119.6 568.4 64 499.8 64h-9.2c-28.1 0-55.3 10.1-76.6 28.3l-29.7 25.4c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l29.7-25.4z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 3"
                            data-tooltip-id="h3-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 3</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h3"
                              className="svg-inline--fa fa-h3 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V248 424c0 13.3 10.7 24 24 24s24-10.7 24-24V272H272V424c0 13.3 10.7 24 24 24s24-10.7 24-24V248 88c0-13.3-10.7-24-24-24s-24 10.7-24 24V224H48V88zM400 64c-13.3 0-24 10.7-24 24s10.7 24 24 24H542.1L423 231c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8h88c35.3 0 64 28.7 64 64s-28.7 64-64 64H455.4c-15.6 0-29-11.3-31.6-26.7l-.2-1.2c-2.2-13.1-14.5-21.9-27.6-19.7s-21.9 14.5-19.7 27.6l.2 1.2c6.4 38.6 39.8 66.8 78.9 66.8H528c61.9 0 112-50.1 112-112s-50.1-112-112-112H497.9L617 105c6.9-6.9 8.9-17.2 5.2-26.2S609.7 64 600 64H400z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Heading 4"
                            data-tooltip-id="h4-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Heading 4</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="h4"
                              className="svg-inline--fa fa-h4 h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M455.5 92.9L421.5 256H592V88c0-13.3 10.7-24 24-24s24 10.7 24 24V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V304H392c-7.2 0-14.1-3.3-18.6-8.9s-6.3-13-4.9-20l40-192c2.7-13 15.4-21.3 28.4-18.6s21.3 15.4 18.6 28.4zM24 64c13.3 0 24 10.7 24 24V224H272V88c0-13.3 10.7-24 24-24s24 10.7 24 24V248 424c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H48V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V248 88C0 74.7 10.7 64 24 64z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Bullet List"
                            data-tooltip-id="bullet-list-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Bullet List</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="list"
                              className="svg-inline--fa fa-list h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM184 72c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H184zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Ordered list"
                            data-tooltip-id="ordered-list-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Ordered list</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="list-ol"
                              className="svg-inline--fa fa-list-ol h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM216 72H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 160H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 160H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Blockquote"
                            data-tooltip-id="blockquote-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Blockquote</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="block-quote"
                              className="svg-inline--fa fa-block-quote h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M24 72C10.7 72 0 82.7 0 96s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM152 232c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H152zM128 416c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.3 0-24 10.7-24 24zM0 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176c0-13.3-10.7-24-24-24s-24 10.7-24 24V424z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                      <ol className="flex flex-row space-x-2">
                        <li>
                          <button
                            data-tooltip-content="Undo"
                            data-tooltip-id="undo-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Undo</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="arrow-rotate-left"
                              className="svg-inline--fa fa-arrow-rotate-left h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"
                              />
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            data-tooltip-content="Redo"
                            data-tooltip-id="redo-tooltip"
                            type="button"
                            className="inline-flex items-center rounded-lg border-0 px-2.5 py-1.5 text-xs font-medium ring-offset-gray-100 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-nord-2"
                          >
                            <span className="sr-only">Redo</span>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="arrow-rotate-right"
                              className="svg-inline--fa fa-arrow-rotate-right h-4 w-4"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M472 224c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v80.1l-20-23.5C387 63.4 325.1 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c50.4 0 97-16.7 134.4-44.8c10.6-8 12.7-23 4.8-33.6s-23-12.7-33.6-4.8C332.2 418.9 295.7 432 256 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c54.3 0 102.9 24.6 135.2 63.4l.1 .2 0 0L418.9 176H328c-13.3 0-24 10.7-24 24s10.7 24 24 24H472z"
                              />
                            </svg>
                          </button>
                        </li>
                      </ol>
                    </div>
                    <div>
                      <div
                        contentEditable="true"
                        translate="no"
                        className="ProseMirror py-4 px-8 prose !text-primary max-w-[100%] focus:outline-none focus:shadow-none"
                        tabIndex={0}
                      >
                        <p>test</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-4">
                  <label className="relative mb-2 flex items-center justify-between text-sm font-medium leading-5 text-secondary">
                    <div className="flex flex-row">
                      Template
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="circle-info"
                        className="svg-inline--fa fa-circle-info ml-2 mt-0.5 h-4 w-4 cursor-pointer text-gray-600 opacity-75 dark:text-white "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-tooltip-content="Templates are created to enable different Donation Links to have different branding for certain appeal or campaigns you might be running. You may have a generic one and a number of others branded to a particular cause."
                        data-tooltip-id="Template"
                      >
                        <path
                          fill="currentColor"
                          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        />
                      </svg>
                    </div>
                    <span className="ml-4 text-xs text-gray-900 dark:text-gray-300">
                      Required
                    </span>
                  </label>
                  <div className="relative mb-5 bg-white dark:bg-nord-3 sm:rounded-lg sm:shadow">
                    <div className="tweaked-scroll-bar mx-4 overflow-x-auto sm:mx-6 pt-6">
                      <table className="table w-full min-w-full lg:table">
                        <thead>
                          <tr className="border-b border-gray-200 last:border-0 dark:border-gray-700">
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            />
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            >
                              Color Accent
                            </th>
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            >
                              Goals
                            </th>
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            >
                              Color Background
                            </th>
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            >
                              logo
                            </th>
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            >
                              Created At
                            </th>
                            <th
                              scope="col"
                              colSpan={1}
                              className="bg-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 last:rounded-r-lg last:text-right first-of-type:rounded-l-lg first-of-type:text-left dark:bg-nord-2 dark:text-gray-100"
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="border-none">
                          <tr className="border-b border-gray-200 last:border-0 dark:border-gray-700">
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="px-1">
                                <input
                                  type="checkbox"
                                  className="mr-4 h-4 w-4 rounded border-2 border-gray-200 bg-gray-50 text-blue-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-transparent dark:border-gray-500 dark:bg-gray-500 md:mr-0"
                                />
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div>Will's test template</div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="flex flex-row items-center space-x-4">
                                <span
                                  className="block h-4 w-4 rounded"
                                  style={{
                                    background: "rgb(81, 141, 133)",
                                  }}
                                />
                                <span className="uppercase">#518d85</span>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="flex flex-row items-center space-x-2">
                                0
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="flex flex-row items-center">
                                <div
                                  className="float-left text-sm font-medium leading-5 text-secondary"
                                  data-tooltip-id="l_6EaE9DxJLqDYC8gnVehx8H4z-imageBackground"
                                >
                                  <img
                                    alt=""
                                    className="inline-block rounded-lg bg-nord-6"
                                    width={64}
                                    height={32}
                                    src="https://ik.imagekit.io/everfund/84_jfcVV885q.jpg?tr=h-32%2Cw-64"
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="text-secondary">No Logo</div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <time dateTime="2023-01-10T09:43:13.201Z">
                                10 Jan, 09:43am
                              </time>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="space-x-8">
                                <a
                                  href="/donations/templates/l_6EaE9DxJLqDYC8gnVehx8H4z"
                                  className="text-right text-sm font-medium  text-blue-600 hover:text-blue-900"
                                >
                                  View
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 last:border-0 dark:border-gray-700">
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="px-1">
                                <input
                                  type="checkbox"
                                  className="mr-4 h-4 w-4 rounded border-2 border-gray-200 bg-gray-50 text-blue-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-transparent dark:border-gray-500 dark:bg-gray-500 md:mr-0"
                                />
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div>EF Test Will</div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="flex flex-row items-center space-x-4">
                                <span
                                  className="block h-4 w-4 rounded border-2 border-gray-300"
                                  style={{
                                    background: "rgb(238, 238, 238)",
                                  }}
                                />
                                <span className="uppercase">#EEEEEE</span>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="flex flex-row items-center space-x-2">
                                0
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="flex flex-row items-center space-x-2">
                                <span
                                  className="block h-4 w-4 rounded border-2 border-gray-300"
                                  style={{
                                    background: "rgb(238, 238, 238)",
                                  }}
                                />
                                <span className="uppercase">#EEEEEE</span>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="text-secondary">No Logo</div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <time dateTime="2022-06-16T20:16:40.259Z">
                                16 Jun 2022 09:16pm
                              </time>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium last:text-right first-of-type:text-left">
                              <div className="space-x-8">
                                <a
                                  href="/donations/templates/l_hXpbJXRXK19xe0tZPFixHzx9"
                                  className="text-right text-sm font-medium  text-blue-600 hover:text-blue-900"
                                >
                                  View
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="relative flex items-center justify-between border-t border-gray-200 p-4 dark:border-gray-700 sm:px-6">
                      <div className="flex flex-1 justify-between sm:hidden">
                        <button
                          type="button"
                          className="relative inline-flex items-center rounded  px-4 py-2 text-sm  font-medium text-nord-3 hover:bg-blue-600 disabled:cursor-not-allowed dark:text-white"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          disabled
                          className="relative ml-3 inline-flex items-center rounded px-4  py-2 text-sm font-medium  text-nord-3 hover:bg-blue-600 disabled:cursor-not-allowed dark:text-white"
                        >
                          Next
                        </button>
                      </div>
                      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm text-secondary">
                            Showing <b className="font-medium">1</b> to{" "}
                            <b className="font-medium">2</b> of{" "}
                            <b className="font-medium">2</b> results
                          </p>
                        </div>
                        <div>
                          <nav
                            className="relative z-0 inline-flex"
                            aria-label="Pagination"
                          >
                            <div className="relative mr-4">
                              <button
                                className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-nord-3 dark:bg-nord-1 dark:text-nord-5 sm:text-sm "
                                id="headlessui-listbox-button-50"
                                type="button"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                data-headlessui-state
                              >
                                <span className="block truncate">
                                  Show 5 Records
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="caret-down"
                                    className="svg-inline--fa fa-caret-down h-4 w-4 text-gray-400"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <button
                              type="button"
                              className="group relative flex items-center justify-center border-none px-4 py-2 text-sm font-medium text-nord-3 transition dark:text-white"
                            >
                              <span className="absolute h-8 w-8 rounded-full transition group-hover:bg-blue-600 group-hover:text-white bg-blue-500" />
                              <span className="z-10 rounded-full transition group-hover:text-white !text-white">
                                1
                              </span>
                            </button>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-4">
                  <label className="relative mb-2 flex items-center justify-between text-sm font-medium leading-5 text-secondary">
                    <div className="flex flex-row">
                      Payment destination
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="circle-info"
                        className="svg-inline--fa fa-circle-info ml-2 mt-0.5 h-4 w-4 cursor-pointer text-gray-600 opacity-75 dark:text-white "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-tooltip-content="Select a payment destination which you want the funds of this Donation Link to go to. Different Donation Links may have different payment destinations"
                        data-tooltip-id="Payment destination"
                      >
                        <path
                          fill="currentColor"
                          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                        />
                      </svg>
                    </div>
                  </label>
                  <div className="relative mb-5 bg-white dark:bg-nord-3 sm:rounded-lg sm:shadow rounded-md border border-gray-300 dark:border-nord-0">
                    <div className="space-y-4 px-5 pb-6 text-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fat"
                        data-icon="triangle-exclamation"
                        className="svg-inline--fa fa-triangle-exclamation mx-auto !h-16 !w-auto text-gray-400"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M20.7 412.3c-3.1 5.3-4.7 11.2-4.7 17.3c0 19 15.4 34.4 34.4 34.4H461.6c19 0 34.4-15.4 34.4-34.4c0-6.1-1.6-12.1-4.7-17.3L290.3 67.7C283.2 55.5 270.1 48 256 48s-27.2 7.5-34.3 19.7L20.7 412.3zM6.9 404.2l201-344.6C217.9 42.5 236.2 32 256 32s38.1 10.5 48.1 27.6l201 344.6c4.5 7.7 6.9 16.5 6.9 25.4c0 27.8-22.6 50.4-50.4 50.4H50.4C22.6 480 0 457.4 0 429.6c0-8.9 2.4-17.7 6.9-25.4zM256 160c4.4 0 8 3.6 8 8V328c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8zM240 384a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
                        />
                      </svg>
                      <h3 className="text-xl font-medium text-primary">
                        While you are in test mode, you cannot add Payment
                        Destinations
                      </h3>
                      <p className="mx-auto max-w-3xl text-base text-secondary">
                        Please switch to live mode to add Payment Destinations.
                        You may use the test Payment Destination, then once you
                        are ready switch to live mode click 'Go Live' to pick a
                        payment destination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 px-5 py-3 font-title font-medium tracking-wider dark:bg-nord-2 sm:rounded-b-lg sm:px-6">
              <div className="flex items-center  space-x-5">
                <button
                  className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-500 active:bg-blue-500 active:text-white"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="inline-flex items-center rounded-lg transition duration-100 ease-in-out px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-nord-3 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 active:text-white"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
