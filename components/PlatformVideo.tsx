export default function PlatformVideo() {
  return (
    <section className="py-16">
      {/* rest of code here */}
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-zinc-700/20 rounded-xl blur-2xl"></div>
            <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/50">
                <div className="text-center">
                  <video preload="none" autoPlay muted loop playsInline>
                    <source src="/placeholder.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
