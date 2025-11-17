import { HierarchyExample } from "./components/HierarchyExample";
import { RhythmExample } from "./components/RhythmExample";
import { ContrastExample } from "./components/ContrastExample";
import { SpacingExample } from "./components/SpacingExample";
import { AlignmentExample } from "./components/AlignmentExample";
import { AffordanceExample } from "./components/AffordanceExample";
import { FeedbackExample } from "./components/FeedbackExample";
import { ContextExample } from "./components/ContextExample";
import { LegibilityExample } from "./components/LegibilityExample";
import { ConstraintsExample } from "./components/ConstraintsExample";
import { TestMaster } from "./components/TestMaster";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm mb-4">
              Product Design 101
            </div>
            <h1 className="text-6xl text-slate-900 mb-6">
              Interface Design Basics
            </h1>
            <p className="text-xl text-slate-500">
              Learn by comparing the "yikes" and "nice" versions of each principle. Because sometimes the best teacher is a really bad example.
            </p>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <HierarchyExample />
        <RhythmExample />
        <ContrastExample />
        <SpacingExample />
        <AlignmentExample />
        <AffordanceExample />
        <FeedbackExample />
        <ContextExample />
        <LegibilityExample />
        <ConstraintsExample />
        <TestMaster />
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-slate-500 text-center">
            Now go forth and design stuff that doesn't make people's eyes hurt. You've got this.
          </p>
        </div>
      </div>
    </div>
  );
}