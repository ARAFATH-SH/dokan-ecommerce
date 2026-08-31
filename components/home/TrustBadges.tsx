"use client";
import { Truck, ShieldCheck, RotateCcw, Headset } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Fast delivery",
    description: "Most orders arrive within two to five days"
  },
  {
    icon: ShieldCheck,
    title: "Secure payment",
    description: "Pay safely with cards, mobile banking or cash on delivery"
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    description: "Return most items within seven days of delivery"
  },
  {
    icon: Headset,
    title: "Support when you need it",
    description: "Our team is available every day to help with your order"
  }
];

export default function TrustBadges() {
  return (
    <section>  
      {/* className="border-y border-black/5 bg-neutral-50" */}
      {/* <div className="max-w-content mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.title} className="flex items-start gap-3">
              <Icon size={22} className="text-brand shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-semibold text-ink">{badge.title}</p>
                <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
}
