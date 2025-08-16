/**
 * Button Component
 *
 * Reusable button component with multiple variants, sizes, and states.
 * Supports loading states, different styles, and accessibility features.
 *
 * @param {React.ReactNode} children - Button content (text, icons, etc.)
 * @param {string} variant - Button style variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} size - Button size: 'sm' | 'md' | 'lg'
 * @param {boolean} disabled - Whether button is disabled
 * @param {boolean} loading - Whether to show loading spinner
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler function
 * @param {string} type - HTML button type: 'button' | 'submit' | 'reset'
 * @param {object} props - Additional props passed to button element
 *
 * @example
 * // Primary button (default)
 * <Button onClick={handleClick}>Click Me</Button>
 *
 * @example
 * // Loading button for forms
 * <Button loading={isSubmitting} type="submit">Send Message</Button>
 *
 * @example
 * // Different variants
 * <Button variant="outline" size="lg">Secondary Action</Button>
 * <Button variant="ghost">Cancel</Button>
 */

import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  // Base styles applied to all buttons
  // These handle fundamental button behavior and accessibility
  const baseStyles = [
    "inline-flex", // Display as flexible inline element
    "items-center", // Center content vertically
    "justify-center", // Center content horizontally
    "font-medium", // Medium font weight
    "rounded-lg", // Rounded corners
    "transition-all", // Smooth transitions for all properties
    "duration-200", // 200ms transition duration
    "focus:outline-none", // Remove default focus outline
    "focus:ring-2", // Add custom focus ring
    "focus:ring-offset-2", // Offset focus ring from button
    "focus:ring-offset-slate-900", // Dark background for focus ring offset
    "disabled:opacity-50", // 50% opacity when disabled
    "disabled:cursor-not-allowed", // Show "not allowed" cursor when disabled
    "disabled:transform-none", // Disable transform effects when disabled
  ].join(" ");

  // Variant styles - different visual styles for different use cases
  const variants = {
    // Primary: Main action button with gradient and hover effects
    primary: [
      "bg-gradient-to-r", // Gradient background
      "from-blue-500", // Gradient start color
      "to-purple-600", // Gradient end color
      "hover:from-blue-600", // Darker gradient on hover
      "hover:to-purple-700", // Darker gradient on hover
      "text-white", // White text
      "shadow-md", // Medium shadow
      "hover:shadow-lg", // Larger shadow on hover
      "transform", // Enable transforms
      "hover:scale-105", // Scale up 5% on hover
      "focus:ring-blue-500", // Blue focus ring
    ].join(" "),

    // Secondary: Less prominent button with solid background
    secondary: [
      "bg-slate-700", // Dark gray background
      "hover:bg-slate-600", // Lighter on hover
      "text-white", // White text
      "border", // Add border
      "border-slate-600", // Border color
      "hover:border-slate-500", // Lighter border on hover
      "focus:ring-slate-500", // Gray focus ring
    ].join(" "),

    // Outline: Transparent with colored border, fills on hover
    outline: [
      "border-2", // Thick border
      "border-blue-400", // Blue border
      "text-blue-400", // Blue text
      "hover:bg-blue-400", // Fill with blue on hover
      "hover:text-white", // White text on hover
      "focus:ring-blue-400", // Blue focus ring
    ].join(" "),

    // Ghost: Minimal button with just text, subtle hover effect
    ghost: [
      "text-gray-300", // Light gray text
      "hover:text-white", // White text on hover
      "hover:bg-white/10", // Subtle white background on hover
      "focus:ring-white/20", // Subtle focus ring
    ].join(" "),
  };

  // Size variants - different padding and font sizes
  const sizes = {
    sm: "px-4 py-2 text-sm", // Small: 16px horizontal, 8px vertical, small text
    md: "px-6 py-3 text-base", // Medium: 24px horizontal, 12px vertical, normal text
    lg: "px-8 py-4 text-lg", // Large: 32px horizontal, 16px vertical, large text
  };

  /**
   * LoadingSpinner Component
   *
   * Animated spinner shown during loading states
   * Uses current text color and spins continuously
   */
  const LoadingSpinner = () => (
    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading} // Disable if disabled prop is true OR loading
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props} // Spread any additional props to the button element
    >
      {/* Show spinner only when loading */}
      {loading && <LoadingSpinner />}

      {/* Button content (text, icons, etc.) */}
      {children}
    </button>
  );
};

export default Button;
