import { featuredPost } from "@/lib/mockPosts";
import { AdZone } from "./AdZone";
import { Calendar, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section>
      {/* Full-width featured image with overlay */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={featuredPost.imageUrl}
          alt={featuredPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-primary text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">
              {featuredPost.category}
            </span>
            <div className="flex items-center gap-1 text-white/80 text-sm">
              <Calendar size={14} />
              <span>{featuredPost.date}</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl mb-3">
            {featuredPost.title}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-xl mb-4 line-clamp-2">
            {featuredPost.description}
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Billboard ad zone under hero */}
      <div className="bg-gray-100 py-4 flex justify-center">
        <AdZone width={970} height={250} zoneClass="next-ads-zone-1" id="ad-zone-billboard" />
      </div>
    </section>
  );
}
