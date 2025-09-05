
import Image from "next/image";

export default function ImposterGameProject() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <a href="/projects" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
          ← Back to Projects
        </a>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Imposter Game (Discord Activity Game)</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Real-time multiplayer deception game for Discord using Phaser 3 and the Embedded App SDK. Features hidden roles, simultaneous prompts, timed discussions, voting, and dynamic settings for replayability.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <a href="https://github.com/ryan-chen-git/discord-imposter-activity" className="text-sm text-gray-500 hover:text-gray-400 transition-colors" target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400 leading-relaxed">
          Developed a real-time multiplayer deception game inside Discord using Phaser 3 and the Embedded App SDK, enabling over 10 unique player configurations with synchronized state and user actions across clients. Implemented hidden role logic, simultaneous question prompts, timed discussions, and a structured voting system, simulating rounds in under 3 minutes per session for fast-paced gameplay. Engineered a dynamic game settings panel supporting 4+ gameplay variations to maximize replayability.
        </p>
        {/* Project Image Section */}
        <div className="my-12">
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/imposter-game.png"
                alt="Imposter Game Screenshot"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
