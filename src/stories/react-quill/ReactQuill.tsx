import React from "react";

interface ReactQuillProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ReactQuill = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ReactQuillProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return <div>あい</div>;
};
