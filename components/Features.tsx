import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  Activity,
} from 'lucide-react';
export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Predict The Markets
            </h2>
            <p className="text-zinc-400 text-lg">
              Everything You Need
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* API Integration */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-700">
                <div className="absolute inset-4">
                  <div className="bg-zinc-800 rounded-lg p-4 h-full font-mono">
                    <div className="flex items-center justify-between mb-3">
                      <Zap className="w-5 h-5 text-zinc-400" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-xs text-zinc-400 space-y-1">
                      <div>
                        <span className="text-blue-400">POST</span> /cpq/orders
                      </div>
                      <div>
                        <span className="text-green-400">GET</span>{' '}
                        /cpq/positions
                      </div>
                      <div>
                        <span className="text-purple-400">WS</span>{' '}
                        /cpq/prices
                      </div>
                    </div>
                    <div className="mt-3 text-xs">
                      <div className="text-zinc-400">{'{'}</div>
                      <div className="ml-2 text-zinc-400">
                        "status": "success"
                      </div>
                      <div className="text-zinc-400">{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proprietary API</h3>
                <p className="text-zinc-400">
                  Get access to the institutional-Grade, optimized CapQuant proprietary API.
                </p>
              </div>
            </div>
            

            {/* AI-Powered Insights */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-700">
                <div className="absolute inset-4">
                  <div className="bg-zinc-800 rounded-lg p-4 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <Brain className="w-5 h-5 text-zinc-400" />
                      <span className="text-xs text-zinc-400 font-mono">
                        ML ACTIVE
                      </span>
                    </div>
                    <div className="relative h-20 mb-2">
                      <svg className="w-full h-full" viewBox="0 0 200 80">
                        <path
                          d="M0,60 Q50,20 100,40 T200,30"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M0,70 Q50,30 100,50 T200,40"
                          stroke="#10b981"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.7"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>Prediction: +2.3%</span>
                      <span>Confidence: 87%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  AI-Powered Insights
                </h3>
                <p className="text-zinc-400">
                  Machine learning models for market prediction and strategy
                  optimization.
                </p>
              </div>
            </div>

            {/* Real-time Data */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-700">
                <div className="absolute inset-4">
                  <div className="bg-zinc-800 rounded-lg p-4 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <Activity className="w-5 h-5 text-zinc-400" />
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-zinc-400">LIVE</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-zinc-400">AAPL</span>
                        <span className="text-xs text-green-300">+1.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-zinc-400">TSLA</span>
                        <span className="text-xs text-red-400">-0.8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-zinc-400">NVDA</span>
                        <span className="text-xs text-green-300">+2.1%</span>
                      </div>
                    </div>
                    <div className="mt-3 h-8 bg-zinc-700 rounded flex items-end space-x-1 p-1">
                      <div className="bg-green-400 w-1 h-2 rounded-sm"></div>
                      <div className="bg-green-400 w-1 h-4 rounded-sm"></div>
                      <div className="bg-red-400 w-1 h-3 rounded-sm"></div>
                      <div className="bg-green-400 w-1 h-5 rounded-sm"></div>
                      <div className="bg-green-400 w-1 h-2 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Real-time Data</h3>
                <p className="text-white">
                  Live market data feeds from major exchanges and data
                  providers.
                </p>
              </div>
            </div>

            {/* Advanced Backtesting */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-700">
                <div className="absolute inset-4">
                  <div className="bg-zinc-800 rounded-lg p-4 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <BarChart3 className="w-5 h-5 text-zinc-400" />
                      <span className="text-xs text-zinc-400 font-mono">
                        BACKTEST
                      </span>
                    </div>
                    <div className="relative h-16 mb-2">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end space-x-1">
                        <div className="bg-purple-400 w-3 h-8 rounded-sm opacity-60"></div>
                        <div className="bg-purple-400 w-3 h-12 rounded-sm opacity-80"></div>
                        <div className="bg-purple-400 w-3 h-6 rounded-sm opacity-60"></div>
                        <div className="bg-purple-400 w-3 h-14 rounded-sm"></div>
                        <div className="bg-purple-400 w-3 h-10 rounded-sm opacity-70"></div>
                        <div className="bg-purple-400 w-3 h-16 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>Sharpe: 1.8</span>
                      <span>Max DD: -5.2%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Advanced Backtesting
                </h3>
                <p className="text-zinc-400">
                  Historical simulation with realistic market conditions and
                  slippage modeling.
                </p>
              </div>
            </div>

            {/* Portfolio Management */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-700">
                <div className="absolute inset-4">
                  <div className="bg-zinc-800 rounded-lg p-4 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <TrendingUp className="w-5 h-5 text-zinc-400" />
                      <span className="text-xs text-zinc-400">$2.4M</span>
                    </div>
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 64 64"
                      >
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#374151"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="#10b981"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="110 176"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-emerald-400 font-bold">
                          62%
                        </span>
                      </div>
                    </div>
                    <div className="text-center text-xs text-zinc-500">
                      Portfolio Allocation
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Portfolio Management
                </h3>
                <p className="text-zinc-400">
                  Comprehensive portfolio tracking with risk management and
                  allocation tools.
                </p>
              </div>
            </div>

             {/* Enterprise Security */}
             <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-700">
                  <div className="absolute inset-4">
                    <div className="bg-zinc-800 rounded-lg p-4 h-full">
                      <div className="flex items-center justify-between mb-3">
                        <Shield className="w-5 h-5 text-zinc-400" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-zinc-700 rounded w-3/4"></div>
                        <div className="h-2 bg-zinc-700 rounded w-1/2"></div>
                        <div className="h-2 bg-zinc-700 rounded w-2/3"></div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
                        </div>
                        <div className="h-2 bg-zinc-700 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                  <p className="text-zinc-400">
                    Institutional-grade security and encrypted data storage. Your data stays secure.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
