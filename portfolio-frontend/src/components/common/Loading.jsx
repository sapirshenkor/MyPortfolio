/**
 * Loading Component
 *
 * Provides loading indicators and skeleton screens for different use cases.
 * Includes both spinner loading and skeleton loading patterns.
 *
 * @param {string} size - Spinner size: 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} text - Loading text to display below spinner
 *
 * @example
 * // Basic loading spinner
 * <Loading />
 *
 * @example
 * // Large spinner with custom text
 * <Loading size="lg" text="Loading projects..." />
 *
 * @example
 * // Skeleton for loading content
 * <LoadingSkeleton className="h-6 w-32" />
 */

import React from "react";

/**
 * LoadingSkeleton Component
 *
 * Gray rectangular placeholder that mimics content shape while loading.
 * Used to create skeleton screens that match the layout of actual content.
 *
 * @param {string} className - Tailwind classes for size and shape
 */
export const LoadingSkeleton = ({ className = "" }) => (
  <div
    className={`animate-pulse bg-slate-700 rounded ${className}`}
    aria-hidden="true" // Hide from screen readers since it's decorative
  />
);

/**
 * Loading Component
 *
 * Spinning circle indicator with optional text.
 * Used for general loading states when waiting for data or operations.
 */
const Loading = ({ size = "md", text = "Loading..." }) => {
  // Size variants for the spinner
  const sizes = {
    sm: "w-6 h-6", // 24px × 24px
    md: "w-8 h-8", // 32px × 32px
    lg: "w-12 h-12", // 48px × 48px
    xl: "w-16 h-16", // 64px × 64px
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Spinning circle */}
      <div
        className={`
          ${sizes[size]} 
          border-2 
          border-gray-300 
          border-t-blue-500 
          rounded-full 
          animate-spin 
          mb-4
        `}
        role="status" // Screen reader accessibility
        aria-label="Loading" // Screen reader description
      />

      {/* Loading text */}
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};

export default Loading;
