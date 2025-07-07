import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Activity } from 'lucide-react';

export default function ExecutionEngine() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-300 mb-4"
              >
                <Activity className="w-3 h-3 mr-1" />
                Execution Engine
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Lightning-fast
                <br />
                <span className="text-zinc-400">execution</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Ultra-low latency execution engine with smart order routing and
                advanced order types. Connect to multiple exchanges and
                liquidity providers for optimal execution.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Sub-millisecond latency
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Smart order routing
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Multi-venue connectivity
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-zinc-200">
                Learn More
              </Button>
            </div>
            <div className="relative">
                <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 perspective-1000">
                  <div
                    className="relative bg-gradient-to-br from-zinc-900 to-black p-6 h-[500px] transform-gpu"
                    style={{ transform: "perspective(1000px) rotateY(-8deg) rotateX(1deg)" }}
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-zinc-400 rounded-full animate-pulse"></div>
                        <span className="text-zinc-400 font-medium text-sm">Execution Engine Online</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Servers Status Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-300 text-xs">NYSE Server</span>
                          <div className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-zinc-400 font-bold text-sm">Online</div>
                        <div className="text-xs text-zinc-500">99.9% uptime</div>
                      </div>

                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-300 text-xs">NASDAQ Server</span>
                          <div className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-zinc-400 font-bold text-sm">Online</div>
                        <div className="text-xs text-zinc-500">99.8% uptime</div>
                      </div>

                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-400 text-xs">CME Server</span>
                          <div className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-zinc-400 font-bold text-sm">Online</div>
                        <div className="text-xs text-zinc-500">99.7% uptime</div>
                      </div>
                    </div>

                    {/* Latency Monitor */}
                    <div className="bg-zinc-800/50 rounded-lg p-4 mb-4 border border-zinc-700">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-zinc-400 font-medium">Network Latency</span>
                        <span className="text-zinc-400 text-sm">0.2ms avg</span>
                      </div>

                      {/* Latency Chart */}
                      <div className="relative h-24 mb-3">
                        <svg className="w-full h-full" viewBox="0 0 300 96" preserveAspectRatio="none">
                          {/* Grid lines */}
                          <defs>
                            <pattern id="latency-grid" width="30" height="24" patternUnits="userSpaceOnUse">
                              <path
                                d="M 30 0 L 0 0 0 24"
                                fill="none"
                                stroke="#BAC4C8"
                                strokeWidth="0.5"
                                opacity="0.3"
                              />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#latency-grid)" />

                          {/* Low latency line */}
                          <path
                            d="M0,80 Q50,75 75,78 T150,76 Q200,74 250,72 T300,70"
                            stroke="#10b981"
                            strokeWidth="2"
                            fill="none"
                            className="drop-shadow-sm"
                          />

                          {/* Fill area under curve */}
                          <path
                            d="M0,80 Q50,75 75,78 T150,76 Q200,74 250,72 T300,70 L300,96 L0,96 Z"
                            fill="url(#latency-gradient)"
                          />

                          <defs>
                            <linearGradient id="latency-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#374151" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#374151" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>

                          {/* Current point */}
                          <circle cx="250" cy="72" r="3" fill="#10b981" className="animate-pulse">
                            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                          </circle>
                        </svg>
                      </div>

                      {/* Latency metrics */}
                      <div className="flex justify-between text-xs text-zinc-400">
                        <span>0.1ms</span>
                        <span>0.15ms</span>
                        <span>0.2ms</span>
                        <span>0.25ms</span>
                        <span>0.3ms</span>
                      </div>
                    </div>

                    {/* Execution Speed Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-400 text-sm">Execution Speed</span>
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-zinc-400 rounded-sm"></div>
                            <div className="w-1 h-5 bg-zinc-400 rounded-sm"></div>
                            <div className="w-1 h-6 bg-zinc-400 rounded-sm"></div>
                            <div className="w-1 h-7 bg-zinc-400 rounded-sm animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-zinc-400 font-bold text-lg">0.08ms</div>
                      </div>

                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                        <div className="text-zinc-300 text-sm mb-2">Orders/Second</div>
                        <div className="text-zinc-400 font-bold text-lg">12,847</div>
                        <div className="text-xs text-zinc-400">+5.2% from yesterday</div>
                      </div>
                    </div>

                    {/* System Health */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700 text-center">
                        <div className="text-zinc font-bold text-lg">99.9%</div>
                        <div className="text-xs text-zinc-400">Fill Rate</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700 text-center">
                        <div className="text-zinc font-bold text-lg">0.003%</div>
                        <div className="text-xs text-zinc-400">Slippage</div>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700 text-center">
                        <div className="text-zinc font-bold text-lg">24/7</div>
                        <div className="text-xs text-zinc-400">Monitoring</div>
                      </div>
                    </div>

                    {/* Bottom indicators */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-zinc-400 text-xs mx-[13px]"> All Systems Operational</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
