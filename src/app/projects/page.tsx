

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center fade-in">Projects</h1>
      <p className="text-gray-400 text-center mb-12 fade-in">
        Some of the projects are from school and some are on my own time.
      </p>
      
      <div className="grid gap-6">
        <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-[1.02] fade-in">
          <div className="flex gap-4">
            <div className="text-sm text-gray-500 w-32 flex-shrink-0">August 2025</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-semibold">Instasong (Image to Song Recommender)</h2>
              </div>
              <p className="text-gray-400 mb-2 leading-relaxed">
                Full-stack web app that converts user-uploaded images into music recommendations, using Google Vision API to extract keywords and GPT-4o/GPT-3.5 to generate mood-specific song prompts. Integrates Spotify’s Web API for playable tracks, album art, and metadata for 80+ genres. Secure OAuth 2.0 login flow with PKCE and silent refresh.
              </p>
              <a href="/projects/instasong" className="text-sm text-gray-500 hover:text-gray-400 transition-colors group">
                Read more <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-[1.02] fade-in">
          <div className="flex gap-4">
            <div className="text-sm text-gray-500 w-32 flex-shrink-0">August 2025</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-semibold">Imposter Game (Discord Activity Game)</h2>
              </div>
              <p className="text-gray-400 mb-2 leading-relaxed">
                Real-time multiplayer deception game for Discord using Phaser 3 and the Embedded App SDK. Features hidden roles, simultaneous prompts, timed discussions, voting, and dynamic settings for replayability.
              </p>
              <a href="/projects/imposter-game" className="text-sm text-gray-500 hover:text-gray-400 transition-colors group">
                Read more <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-[1.02] fade-in">
          <div className="flex gap-4">
            <div className="text-sm text-gray-500 w-32 flex-shrink-0">April 2025</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-semibold">2D World Generator</h2>
              </div>
              <p className="text-gray-400 mb-2 leading-relaxed">
                Engine that generates seeded pseudorandom 2D worlds using Java and StdDraw. Features interactive avatar movement, ray tracing lighting, and file I/O-based persistence for saving/loading user seeds.
              </p>
              <a href="/projects/world-generator" className="text-sm text-gray-500 hover:text-gray-400 transition-colors group">
                Read more <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-[1.02] fade-in">
          <div className="flex gap-4">
            <div className="text-sm text-gray-500 w-32 flex-shrink-0">March 2025</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-semibold">NgordNet (NGrams and Wordnet)</h2>
              </div>
              <p className="text-gray-400 mb-2 leading-relaxed">
                Backend APIs for a web-based tool replicating Google NGram Viewer and Princeton WordNet. Includes historical frequency graphing and hyponym retrieval for user-input words, optimized for large datasets and complex queries.
              </p>
              <a href="/projects/ngordnet" className="text-sm text-gray-500 hover:text-gray-400 transition-colors group">
                Read more <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 