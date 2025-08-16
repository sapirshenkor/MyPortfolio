/**
 * StatusMessage Component
 *
 * Displays status messages with appropriate icons and styling.
 * Used for success, error, warning, and info messages throughout the app.
 *
 * @param {string} type - Message type: 'success' | 'error' | 'warning' | 'info'
 * @param {string} message - Message text to display
 * @param {string} className - Additional CSS classes
 *
 * @example
 * // Success message
 * <StatusMessage type="success" message="Message sent successfully!" />
 *
 * @example
 * // Error message
 * <StatusMessage type="error" message="Failed to send message. Please try again." />
 *
 * @example
 * // Warning with custom styling
 * <StatusMessage
 *   type="warning"
 *   message="This is a warning"
 *   className="mb-4"
 * />
 */

import React from "react";
import { CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const StatusMessage = ({ type, message, className = "" }) => {
  // Configuration for each message type
  const variants = {
    // Success: Green theme with checkmark icon
    success: {
      icon: CheckCircle, // Check circle icon
      styles: "bg-green-500/10 border-green-500/30 text-green-400", // Green background, border, text
      iconColor: "text-green-400", // Green icon
    },

    // Error: Red theme with alert icon
    error: {
      icon: AlertCircle, // Alert circle icon
      styles: "bg-red-500/10 border-red-500/30 text-red-400", // Red background, border, text
      iconColor: "text-red-400", // Red icon
    },

    // Warning: Yellow theme with triangle icon
    warning: {
      icon: AlertTriangle, // Warning triangle icon
      styles: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400", // Yellow background, border, text
      iconColor: "text-yellow-400", // Yellow icon
    },

    // Info: Blue theme with info icon
    info: {
      icon: Info, // Info circle icon
      styles: "bg-blue-500/10 border-blue-500/30 text-blue-400", // Blue background, border, text
      iconColor: "text-blue-400", // Blue icon
    },
  };

  // Get configuration for the specified type, fallback to info if type not found
  const variant = variants[type] || variants.info;
  const Icon = variant.icon;

  return (
    <div
      className={`
        flex 
        items-center 
        p-4 
        rounded-lg 
        border 
        backdrop-blur-sm 
        ${variant.styles} 
        ${className}
      `}
      role="alert" // Screen reader accessibility for important messages
      aria-live="polite" // Announce changes to screen readers
    >
      {/* Status icon */}
      <Icon
        size={20}
        className={`mr-3 flex-shrink-0 ${variant.iconColor}`}
        aria-hidden="true" // Hide decorative icon from screen readers
      />

      {/* Message text */}
      <span className="text-sm leading-relaxed">{message}</span>
    </div>
  );
};

export default StatusMessage;
