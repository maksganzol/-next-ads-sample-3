import { postList } from "@/lib/mockPosts";
import { PostCard } from "./PostCard";
import { AdZone } from "./AdZone";

export function PostGrid() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Stories</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content — 2 column card grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {postList.slice(0, 4).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Inline rectangle ad */}
            <div className="flex justify-center my-8">
              <AdZone width={336} height={280} zoneClass="next-ads-zone-3" id="ad-zone-inline" />
            </div>

            {/* Horizontal cards for remaining posts */}
            <div className="space-y-4">
              {postList.slice(4).map((post) => (
                <PostCard key={post.id} post={post} variant="horizontal" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[200px] flex-shrink-0 space-y-6">
            <div className="sticky top-20">
              <AdZone width={160} height={600} zoneClass="next-ads-zone-2" id="ad-zone-skyscraper" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
