import type { WhyChooseUsItem } from "@/types";
import { Icon } from "@/components/shared/Icon";

interface WhyChooseUsItemProps {
  item: WhyChooseUsItem;
}

export function WhyChooseUsItem({ item }: WhyChooseUsItemProps) {
  return (
    <article className="flex gap-4">
      <div className="flex-shrink-0">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50">
          <Icon name={item.icon} className="h-6 w-6 text-secondary" />
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
        <p className="mt-1 text-gray-600">{item.description}</p>
      </div>
    </article>
  );
}
