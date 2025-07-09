import React from "react";
import { pythonCode } from "@/data/pythonCodeData";
import PythonCodeColumn from "@/components/PythonCodeColumn";

/**
 * Standalone Python Code Background Animation Component
 *
 * A reusable animated background component featuring scrolling Python code.
 * Perfect for tech websites, coding portfolios, or any developer-focused application.
 *
 * Features:
 * - Smooth vertical scrolling animation
 * - Covers 50% of screen width
 * - Gradient transparency fade
 * - Multiple columns with staggered timing
 * - Completely transparent and non-interactive
 * - Zero dependencies (pure React + CSS)
 *
 * Usage:
 * 1. Copy this component to your project
 * 2. Import and use: <StandalonePythonCodeBackground />
 * 3. Place it behind your main content with lower z-index
 * 4. Customize colors, speed, or opacity as needed
 *
 * CSS Requirements:
 * - Tailwind CSS (or add equivalent CSS classes)
 * - The scrolling animation keyframes (included below)
 */
const StandalonePythonCodeBackground: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes scroll-animation {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black z-1" />

          {[0, 1, 2].map((columnIndex) => (
            <PythonCodeColumn
              key={columnIndex}
              code={pythonCode}
              columnIndex={columnIndex}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StandalonePythonCodeBackground;
