import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonOptions {
  /**
   * If `true`, the button will show a spinner.
   */
  isLoading?: boolean;
  /**
   * If `true`, the button will be styled in its active state.
   */
  isActive?: boolean;
  /**
   * If `true`, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;
  /**
   * If `true`, the button will take up the full width of its container.
   */
  isFullWidth?: boolean;
  /**
   * size of the button
   */
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * button colors
   */
  buttonColor?: "blue" | "green" | "black" | "gray" | "yellow" | "red";
  /**
   * If added, the button will show an icon before the button's label.
   * @type ReactElement
   */
  leftIcon?: ReactElement;
  /**
   * If added, the button will show an icon after the button's label.
   * @type ReactElement
   */
  rightIcon?: ReactElement;

  to?: any;

  href?: string;

  children?: React.ReactNode;

  offSetColor?: "card" | undefined;

  className?: string;

  onClick?: any;

  type?: any;

  form?: string;
}

export const buildButtonStyles = (props: ButtonOptions) => {
  const {
    isDisabled,
    isActive,
    isFullWidth,
    className,
    buttonSize,
    buttonColor,
    offSetColor,
    isLoading,
  } = props;

  let buttonColorStyles;
  if (isActive !== undefined) {
    switch (buttonColor) {
      case "blue":
        buttonColorStyles = [
          isActive &&
            `text-white bg-blue-500 !hover:bg-blue-500 hover:bg-opacity-100`,
          `focus:ring-blue-500 active:bg-blue-500 active:text-white hover:bg-blue-500 hover:text-white`,
        ];
        break;
      case "green":
        buttonColorStyles = [
          isActive &&
            `text-white bg-green-500 !hover:bg-green-500 hover:bg-opacity-100`,
          `focus:ring-green-500 active:bg-green-500 active:text-white hover:bg-green-500 hover:text-white `,
        ];
        break;
      case "black":
        buttonColorStyles = [
          isActive &&
            `text-white bg-black !hover:bg-black hover:bg-opacity-100`,
          `focus:ring-black active:bg-black active:text-white hover:bg-black hover:text-white`,
        ];
        break;
      case "yellow":
        buttonColorStyles = [
          isActive &&
            `text-white bg-yellow-500 !hover:bg-yellow-500 hover:bg-opacity-100`,
          `focus:ring-yellow-500 active:bg-yellow-00 active:text-white hover:bg-yellow-500 hover:text-white `,
        ];
        break;
      case "red":
        buttonColorStyles = [
          isActive &&
            `text-white bg-red-500 !hover:bg-red-500 hover:bg-opacity-100`,
          `focus:ring-red-500 active:bg-red-00 active:text-white hover:bg-red-500 hover:text-white `,
        ];
        break;
      default:
        break;
    }
  } else {
    buttonColorStyles = [
      buttonColor === `blue` &&
        `text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-500 active:bg-blue-500 active:text-white`,
      buttonColor === `green` &&
        `text-white bg-green-600 hover:bg-green-500 focus:ring-green-500 active:bg-green-500 active:text-white`,
      buttonColor === `black` &&
        `text-white bg-black hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 active:text-white`,
      buttonColor === `gray` &&
        `bg-gray-200 hover:bg-gray-300 focus:ring-green-500 active:bg-gray-200 dark:bg-nord-3 dark:hover:bg-nord-3`,
      buttonColor === `yellow` &&
        `text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 active:text-white`,
      buttonColor === `red` &&
        `text-white bg-red-500 hover:bg-red-600 focus:ring-red-500 active:bg-red-600 active:text-white`,
    ];
  }

  return [
    // sizes
    buttonSize === `xs` && `px-2.5 py-1.5 text-xs font-medium`,
    buttonSize === `sm` && `px-3 py-2 text-sm font-medium `,
    buttonSize === `md` && `px-4 py-2 text-sm font-medium`,
    buttonSize === `lg` && `px-4 py-2 text-base font-medium`,
    buttonSize === `xl` && `px-6 py-3 text-base font-medium`,

    // button colors
    `cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2`,
    offSetColor === "card" && `ring-offset-white dark:ring-offset-nord-3 `,

    buttonColorStyles,
    // others
    isFullWidth && `w-full text-center justify-center`,
    isDisabled && `cursor-not-allowed opacity-50`,
    isLoading && `cursor-not-allowed`,
    className,
  ];
};
const Button = (props: ButtonOptions): ReactElement => {
  const {
    isDisabled,
    isLoading,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    type,
    form,
    onClick,

    href,
    ...rest
  } = props;

  if (href) {
    return (
      <Link
        {...rest}
        className={twMerge(
          "inline-flex items-center rounded-lg transition duration-100 ease-in-out",
          buildButtonStyles(props)
        )}
        href={href}
      >
        {leftIcon && !isLoading && leftIcon}

        {isLoading && (
          <FontAwesomeIcon
            icon={faSpinner}
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          />
        )}
        {isLoading ? loadingText || undefined : children}
        {rightIcon && !isLoading && rightIcon}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      className={twMerge(
        "inline-flex items-center rounded-lg transition duration-100 ease-in-out",
        buildButtonStyles(props)
      )}
      type={type}
      form={form}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {leftIcon && !isLoading && leftIcon}
      {isLoading && (
        <FontAwesomeIcon
          icon={faSpinner}
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
        />
      )}
      {isLoading ? loadingText || undefined : children}
      {rightIcon && !isLoading && rightIcon}
    </button>
  );
};

Button.defaultProps = {
  buttonSize: "md",
  offSetColor: "card",
};

export default Button;
