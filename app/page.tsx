'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ProjectsView } from '@/components/ProjectsView';
import { BuyMeCoffeeView } from '@/components/BuyMeCoffeeView';
import { ResourcesView } from '@/components/ResourcesView';
import { CommunityView } from '@/components/CommunityView';
import { LearnView } from '@/components/LearnView';
import { Footer } from '@/components/Footer';

type Tab = 'projects' | 'resources' | 'learn' | 'support' | 'community';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Prince Kakadiya World',
            applicationCategory: 'DesignApplication',
            operatingSystem: 'All',
            description:
              'Professional web design portfolio, free developer resources, tutorials, and curated AI tools.',
            author: {
              '@type': 'Person',
              name: 'Prince Kakadiya',
              email: 'princekakadiya20@gmail.com',
              url: 'https://princekakadiya.tech',
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      {/* Header */}
      <Header activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab as Tab)} />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* ── Projects Tab (Split Pane Dashboard) ── */}
        {activeTab === 'projects' && <ProjectsView />}

        {/* ── Resources Tab ── */}
        {activeTab === 'resources' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto h-[calc(100vh-64px-100px)]">
            <ResourcesView />
          </div>
        )}

        {/* ── Learn Tab (Vibe Coding Guide) ── */}
        {activeTab === 'learn' && (
          <div className="overflow-y-auto h-[calc(100vh-64px-100px)]">
            <LearnView />
          </div>
        )}

        {/* ── Support Tab ── */}
        {activeTab === 'support' && (
          <div className="overflow-y-auto h-[calc(100vh-64px-100px)]">
            <BuyMeCoffeeView />
          </div>
        )}

        {/* ── Community Tab ── */}
        {activeTab === 'community' && (
          <div className="overflow-y-auto h-[calc(100vh-64px-100px)]">
            <CommunityView />
          </div>
        )}
      </main>

      {/* Footer */}
      {activeTab !== 'projects' && <Footer />}
    </div>
  );
}
