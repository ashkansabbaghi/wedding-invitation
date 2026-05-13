/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, MapPin, Heart } from 'lucide-react';
import { useRef } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const bannerOpac = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);
  const bannerScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-brand-white selection:bg-white selection:text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: bannerOpac, scale: bannerScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://picsum.photos/seed/wed_bw_couple/1920/1080?grayscale" 
            alt="Wedding Couple"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="uppercase tracking-[0.4em] text-xs mb-6 block font-light opacity-80">
              Welcome to the wedding of
            </span>
            <h1 className="font-serif italic text-6xl md:text-9xl mb-4 font-light tracking-tight">
              Ashkan & <br className="md:hidden" /> Sara
            </h1>
            <div className="w-12 h-px bg-brand-white/40 mx-auto mt-8" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-white/20 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest opacity-40">Scroll</span>
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-32 px-6 max-w-3xl mx-auto text-center border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart className="w-8 h-8 mx-auto mb-10 opacity-30 stroke-[1px]" />
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 italic font-serif">
            "Everything begins with a single step, <br /> and we're taking ours together."
          </p>
          <p className="text-base md:text-lg opacity-60 font-light leading-loose max-w-xl mx-auto" dir="rtl">
            آغاز زندگی مشترکمان را در کنار شما خوشحالیم. حضور گرم شما، <br className="hidden md:block" /> روشنایی‌بخش مسیر جدید زندگی ما خواهد بود.
          </p>
        </motion.div>
      </section>

      {/* Date & Details */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
          {/* Gregorian Date */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 border-l border-white/10 pl-8"
          >
            <div className="flex items-center gap-3 opacity-40 uppercase tracking-widest text-[11px]">
              <Calendar className="w-4 h-4" />
              <span>Gregorian Calendar</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-8xl font-serif font-light">13</span>
              <div className="flex flex-col">
                <span className="text-2xl uppercase tracking-widest">June</span>
                <span className="text-xl opacity-40">2026</span>
              </div>
            </div>
            <p className="text-sm opacity-50 font-light mt-4">
              Join us for a beautiful ceremony <br /> starting at 6:00 PM.
            </p>
          </motion.div>

          {/* Persian Date */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:items-end md:text-right border-r border-white/10 pr-8 order-first md:order-last"
            dir="rtl"
          >
            <div className="flex items-center gap-3 opacity-40 uppercase tracking-widest text-[11px]">
              <span>تقویم شمسی</span>
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-8xl font-serif font-light">۲۳</span>
              <div className="flex flex-col">
                <span className="text-2xl tracking-widest">خرداد</span>
                <span className="text-xl opacity-40">۱۴۰۵</span>
              </div>
            </div>
            <p className="text-sm opacity-50 font-light mt-4">
              منتظر دیدار شما <br /> در این جشن باشکوه هستیم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-8 h-8 mx-auto mb-8 opacity-30 stroke-[1px]" />
            <h2 className="text-3xl font-serif mb-6 font-light italic">The Location</h2>
            <div className="w-full aspect-video bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 mb-10 overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
               <p className="relative z-10 text-sm tracking-widest opacity-40 uppercase">Location details coming soon</p>
               <div className="relative z-10 w-24 h-px bg-white/20 group-hover:w-48 transition-all duration-700" />
            </div>
            <p className="text-base opacity-50 font-light italic">
              We'll update the venue and map coordinates here shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="text-3xl font-serif italic mb-2">A & S</div>
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">
            Ashkan & Sara • 2026
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
