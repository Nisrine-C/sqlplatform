import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Activity, Terminal } from 'lucide-react';

export default function ExecutionEngine() {
  // Simulated terminal lines sequence
type Line = { text: string; delay: number };

const sequence: Line[] = [
  { text: '$ CONNECT api.capquant.ai', delay: 800 },
  { text: 'HTTPS/1.1 200 OK', delay: 600 },
  { text: '$ GET /v1/prices?symbol=SPX', delay: 1000 },
  { text: '{"symbol":"SPX","price":4412.34}', delay: 1200 },
  { text: '$ WS /v1/stream', delay: 900 },
  { text: '> tick: SPX 4412.50 @ 14:35:21', delay: 500 },
  { text: '> tick: SPX 4412.60 @ 14:35:22', delay: 500 },
  { text: '> tick: SPX 4412.55 @ 14:35:23', delay: 500 },
];
  const [lines, setLines] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let total = 0;
    sequence.forEach((line, i) => {
      total += line.delay;
      setTimeout(() => {
        setLines(prev => [...prev, line.text]);
      }, total);
    });

    const blink = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6 space-x-3">
            <h2 className="text-3xl items-center font-bold text-white">The CapQuant API</h2>
          </div>
          <div className="bg-black rounded-lg shadow-lg border border-zinc-800 font-mono p-6">
            <div className="overflow-y-auto h-64 space-y-1">
              {lines.map((line, idx) => (
                <div key={idx} className="text-sm text-zinc-400">
                  {line}
                </div>
              ))}
              <div className="text-sm text-zinc-400">
                {cursorVisible ? <span className="text-green-400">▌</span> : <span>&nbsp;</span>}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Badge variant="secondary">API Key: •••• •••• •••• 1234</Badge>
              <Button size="sm" variant="outline">
                Deploy Model
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}