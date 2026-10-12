'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Sparkles, TrendingUp, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

interface PerspectivesSectionProps {
  onOpenVideoModal: (videoSrc: string) => void;
}

const PERSPECTIVES = [
  {
    title: 'Investment Appreciation Value',
    tag: 'Financial Growth',
    icon: TrendingUp,
    desc: 'Comparing attractive entry pricing at ORR Exit-5 with mature corridors and high historical growth curves.',
    image: '/images/thumb_investment.webp',
    video: '/videos/investment.mp4',
    highlight: 'High capital appreciation corridor near ORR',
  },
  {
    title: 'Vaastu & Spaces Philosophy',
    tag: 'Architectural Philosophy',
    icon: Compass,
    desc: 'Chief architect explains Vaastu flow, cross-ventilated bedroom placements, and zero-corridor layouts.',
    image: '/images/thumb_design.webp',
    video: '/videos/Design.mp4',
    highlight: '100% Vaastu compliant & cross-ventilated',
  },
];

export default function PerspectivesSection({ onOpenVideoModal }: PerspectivesSectionProps) {
  return (
    <section
      id="perspectives"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-white text-obsidian relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expert Perspectives</span>
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight leading-[1.15]">
            Watch & Understand the <span className="italic text-bronze font-normal">Project Vision.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-mute font-normal">
            Hear from architectural and investment leaders on why this project at ORR Exit-5 is a generational living benchmark.
          </p>
        </motion.div>

        {/* 2-Column Perspective Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PERSPECTIVES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-zinc-border shadow-kura hover:shadow-kura-lg transition-all flex flex-col group"
              >
                {/* Video Thumbnail with Hover Play Button */}
                <div
                  onClick={() => onOpenVideoModal(p.video)}
                  className="relative h-56 sm:h-64 w-full cursor-pointer overflow-hidden bg-slate-900"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-bronze/90 group-hover:bg-bronze text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:shadow-bronze-glow transition-all">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-sans font-semibold border border-white/15">
                      <Icon className="w-3 h-3 text-bronze" />
                      <span>{p.tag}</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3 font-sans">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-obsidian group-hover:text-bronze transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-mute font-normal leading-relaxed mt-2">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-border/70 flex items-center justify-between text-xs">
                    <span className="font-semibold text-obsidian/90">{p.highlight}</span>
                    <span className="font-bold text-bronze uppercase tracking-wider flex items-center gap-1 cursor-pointer" onClick={() => onOpenVideoModal(p.video)}>
                      <span>Watch Video</span>
                      <Play className="w-3 h-3 fill-current" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
