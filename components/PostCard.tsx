import { PostItem } from "@/lib/mockPosts";
import { Calendar } from "lucide-react";

interface PostCardProps {
  post: PostItem;
  variant?: "default" | "horizontal";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "horizontal") {
    return (
      <article className="flex gap-4 bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100">
        <div className="w-48 min-h-[140px] flex-shrink-0 overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="py-3 pr-4 flex flex-col justify-center space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{post.date}</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2">
            {post.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded font-medium">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{post.date}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-3">
          {post.description}
        </p>
      </div>
    </article>
  );
}
