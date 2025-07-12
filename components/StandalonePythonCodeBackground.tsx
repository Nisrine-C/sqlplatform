import React from 'react';
import { pythonCode } from '@/data/pythonCodeData';
import PythonCodeColumn from '@/components/PythonCodeColumn';

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
