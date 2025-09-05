
import Image from "next/image";

export default function InstasongProject() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <a href="/projects" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
          ← Back to Projects
        </a>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Instasong (Image to Song Recommender)</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Full-stack web app that converts user-uploaded images into music recommendations, using Google Vision API to extract keywords and GPT-4o/GPT-3.5 to generate mood-specific song prompts. Integrates Spotify’s Web API for playable tracks, album art, and metadata for 80+ genres. Secure OAuth 2.0 login flow with PKCE and silent refresh.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <a href="https://github.com/ryan-chen-git/instasong" className="text-sm text-gray-500 hover:text-gray-400 transition-colors" target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400 leading-relaxed">
          Instasong uses Google Vision API to extract 5–10 keywords per image and GPT-4o/GPT-3.5 to generate mood-specific song prompts. Spotify’s Web API fetches and displays playable tracks, album art, and metadata for over 80 genres, creating a responsive music-matching UI in under 400ms average latency. OAuth 2.0 login flow uses Express.js backend coordination and Spotify’s PKCE flow, supporting token persistence for 1-hour sessions with silent refresh support.
        </p>
        {/* Project Image Section */}
        <div className="my-12">
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/instasong.png"
                alt="Instasong Screenshot"
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
