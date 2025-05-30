
import { useState } from "react";

const storiesData = [
  {
    id: 1,
    title: "رحلة البداية",
    cover: "https://via.placeholder.com/300x400?text=غلاف+القصة",
    chapters: [
      { id: 1, title: "الفصل الأول", url: "https://example.com/ch1" },
      { id: 2, title: "الفصل الثاني", url: "https://example.com/ch2" },
    ],
  },
];

export default function Home() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 text-right p-4 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">📚 قصصي</h1>

      {!selectedStory ? (
        <div className="grid md:grid-cols-3 gap-4">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={story.cover}
                alt={story.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                  onClick={() => setSelectedStory(story)}
                >
                  اقرأ الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            className="mb-4 text-blue-600 underline"
            onClick={() => setSelectedStory(null)}
          >
            ← العودة للرئيسية
          </button>

          <h2 className="text-2xl font-bold mb-4">{selectedStory.title}</h2>

          <div className="space-y-3">
            {selectedStory.chapters.map((ch) => (
              <a
                key={ch.id}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-4 rounded-xl shadow hover:bg-gray-50 border border-gray-200"
              >
                {ch.title} ↗️
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
