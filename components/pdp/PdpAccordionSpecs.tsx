'use client';

import React, { useState } from 'react';
import { VehicleSpecSection } from '@/lib/data/vehiclesData';

interface PdpAccordionSpecsProps {
  specifications: VehicleSpecSection[];
}

export function PdpAccordionSpecs({ specifications }: PdpAccordionSpecsProps) {
  // Keep the first section expanded by default
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Overview': true,
    'Engine & Transmission': true,
  });
  const [searchFilter, setSearchFilter] = useState('');

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    specifications.forEach((sec) => {
      allExpanded[sec.title] = true;
    });
    setExpandedSections(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  // Filter specifications by query if user enters search
  const filteredSpecs = specifications.map((section) => {
    if (!searchFilter.trim()) return section;
    const query = searchFilter.toLowerCase();
    const matchingDetails = section.detailList.filter(
      (d) =>
        d.title.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
    );
    return {
      ...section,
      detailList: matchingDetails,
    };
  }).filter((section) => section.detailList.length > 0);

  return (
    <section className="w-full bg-[#121212] rounded-3xl border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
      {/* Section Header with Search & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#deba76] font-semibold block mb-1">
            SPECIFICATION DETAILS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
            Full Vehicle Specifications
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Detailed engineering, interior appointments, and safety equipment specifications.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Specs Input */}
          <div className="relative">
            <svg
              className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search specs (e.g. sunroof, engine)..."
              className="bg-neutral-900 border border-neutral-700/80 rounded-full pl-8 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#deba76] w-48 sm:w-60 transition-all"
            />
          </div>

          <button
            type="button"
            onClick={expandAll}
            className="text-xs font-mono text-[#deba76] hover:underline"
          >
            Expand All
          </button>
          <span className="text-neutral-600">/</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-xs font-mono text-neutral-400 hover:text-white"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Items List */}
      <div className="space-y-4">
        {filteredSpecs.map((section, idx) => {
          const isOpen = !!expandedSections[section.title] || !!searchFilter.trim();

          return (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-800/90 bg-[#171717] overflow-hidden transition-colors"
            >
              {/* Accordion Trigger */}
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-800/40 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#deba76]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide">
                    {section.title}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    ({section.detailList.length} items)
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#deba76]' : ''
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-neutral-800/80 bg-neutral-900/30">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-3">
                    {section.detailList.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between py-2 border-b border-neutral-800/40 text-xs sm:text-sm"
                      >
                        <dt className="text-neutral-400 font-medium pr-4">{item.title}</dt>
                        <dd className="text-neutral-100 font-semibold text-right">{item.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          );
        })}

        {filteredSpecs.length === 0 && (
          <div className="py-12 text-center text-neutral-500 text-sm">
            No specifications matched your search query &ldquo;{searchFilter}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
