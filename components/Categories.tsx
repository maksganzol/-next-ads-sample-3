import { categories } from "@/lib/mockPosts";
import { Umbrella, Mountain, Building2, Landmark, Compass, UtensilsCrossed } from "lucide-react";

const iconMap: Record<string, any> = {
  Umbrella,
  Mountain,
  Building2,
  Landmark,
  Compass,
  UtensilsCrossed,
};

export function Categories() {
  return (
    <section className="py-10 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore by Category</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <a
                key={category.id}
                href="#"
                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer text-sm font-medium text-gray-700"
              >
                <Icon size={18} />
                <span>{category.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
