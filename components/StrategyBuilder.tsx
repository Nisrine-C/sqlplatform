import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain } from 'lucide-react';
import Image from 'next/image';
export default function StrategyBuilder() {
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
                <Brain className="w-3 h-3 mr-1" />
                Predictions Meet Rewards
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Predict, Score, Deploy
                <br />
                <span className="text-zinc-400">Get Compensated.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              The platform where your predictive data, edge and insights turn into real world rewards.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></div>
                  Transparent. Data-Driven. Unbiased.
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></div>
                  Any timeframe: Intraday to Swing.
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></div>
                  Code for Quant, or Drag & Prompt.
                </li>
              </ul>
              <Button className="bg-white text-black hover:bg-zinc-200">
                Explore CapQuant
              </Button>
            </div>
            <div className="relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-zinc-800/30 rounded-xl"></div>

                <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden transform rotate-2 hover:rotate-1 transition-transform duration-300 perspective-1000 relative z-10">
                  <div
                    className="relative bg-gradient-to-br from-zinc-900 to-black p-6 h-[500px] transform-gpu"
                    style={{ transform: "perspective(1000px) rotateY(-12deg) rotateX(2deg)" }}
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                        <span className="text-green-300 font-medium text-sm">API Active</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="bg-zinc-800/50 rounded-lg p-4 mb-4 border border-zinc-700">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-zinc-800 text-sm">,,,,</span>
                        <span className="text-zinc-400 text-sm">+24.7%</span>
                      </div>

                      {/* Equity Curve */}
                      <div className="relative h-32 mb-3">
                        <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                          {/* Grid lines */}
                          <defs>
                            <pattern id="grid" width="30" height="24" patternUnits="userSpaceOnUse">
                              <path
                                d="M 30 0 L 0 0 0 24"
                                fill="none"
                                stroke="#374151"
                                strokeWidth="0.5"
                                opacity="0.3"
                              />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />

                          {/* Rising equity curve */}
                          <path
                            d="M0,100 Q50,95 75,85 T150,70 Q200,60 250,45 T300,25"
                            stroke="#BAC4C8"
                            strokeWidth="2"
                            fill="none"
                            className="drop-shadow-sm"
                          />

                          {/* Fill area under curve */}
                          <path
                            d="M0,100 Q50,95 75,85 T150,70 Q200,60 250,45 T300,25 L300,120 L0,120 Z"
                            fill="url(#gradient)"
                          />

                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#BAC4C8" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#BAC4C8" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>

                          {/* Signal point */}
                          <circle cx="250" cy="45" r="4" fill="#BAC4C8" className="animate-pulse">
                            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                          </circle>
                        </svg>
                      </div>

                      {/* Chart metrics */}
                      <div className="flex justify-between text-xs text-zinc-400">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                      </div>
                    </div>

                    {/* Network Signal Indicator */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-300 text-sm">Network Signal</span>
                          <div className="flex space-x-1">
                            <div className="w-1 h-3 bg-zinc-400 rounded-sm"></div>
                            <div className="w-1 h-4 bg-zinc-400 rounded-sm"></div>
                            <div className="w-1 h-5 bg-zinc-400 rounded-sm"></div>
                            <div className="w-1 h-6 bg-zinc-400 rounded-sm animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-zinc-400 font-bold text-lg">Strong</div>
                        <div className="text-xs text-zinc-500">Latency: 0.2ms</div>
                      </div>

                      <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                        <div className="text-zinc-300 text-sm mb-2">Active Strategies</div>
                        <div className="text-zinc-400 font-bold text-lg">12</div>
                        <div className="text-xs text-zinc-400">+3 this week</div>
                      </div>
                    </div>

                    {/* Bottom indicators */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                          <span className="text-green-300 text-xs">Live Trading Active</span>
                        </div>
                        <div className="text-zinc-400 text-xs">Last update: 2s ago</div>
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
