import { ExampleSection } from "./ExampleSection";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

export function RhythmExample() {
  const bad1 = (
    <div className="space-y-3">
      <Card className="p-3">
        <p className="text-slate-900">Task: Review designs</p>
      </Card>
      <Card className="p-5">
        <p className="text-slate-900">Task: Update documentation</p>
      </Card>
      <Card className="p-2">
        <p className="text-slate-900">Task: Team meeting</p>
      </Card>
      <Card className="p-6">
        <p className="text-slate-900">Task: Code review</p>
      </Card>
    </div>
  );

  const bad2 = (
    <div className="space-y-2">
      <div className="flex items-center gap-2 p-2">
        <Checkbox id="bad-1" />
        <label htmlFor="bad-1" className="text-slate-700">Morning standup</label>
      </div>
      <div className="flex items-center gap-4 p-4">
        <Checkbox id="bad-2" />
        <label htmlFor="bad-2" className="text-slate-700">Review pull requests</label>
      </div>
      <div className="flex items-center gap-1 p-1">
        <Checkbox id="bad-3" />
        <label htmlFor="bad-3" className="text-slate-700">Update Jira tickets</label>
      </div>
      <div className="flex items-center gap-3 p-5">
        <Checkbox id="bad-4" />
        <label htmlFor="bad-4" className="text-slate-700">Write documentation</label>
      </div>
    </div>
  );

  const good1 = (
    <div className="space-y-3">
      <Card className="p-4">
        <p className="text-slate-900">Review designs</p>
      </Card>
      <Card className="p-4">
        <p className="text-slate-900">Update documentation</p>
      </Card>
      <Card className="p-4">
        <p className="text-slate-900">Team meeting</p>
      </Card>
      <Card className="p-4">
        <p className="text-slate-900">Code review</p>
      </Card>
    </div>
  );

  const good2 = (
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
        <Checkbox id="good-1" />
        <label htmlFor="good-1" className="text-slate-700 cursor-pointer flex-1">Morning standup</label>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
        <Checkbox id="good-2" />
        <label htmlFor="good-2" className="text-slate-700 cursor-pointer flex-1">Review pull requests</label>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
        <Checkbox id="good-3" />
        <label htmlFor="good-3" className="text-slate-700 cursor-pointer flex-1">Update Jira tickets</label>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
        <Checkbox id="good-4" />
        <label htmlFor="good-4" className="text-slate-700 cursor-pointer flex-1">Write documentation</label>
      </div>
    </div>
  );

  return (
    <ExampleSection
      number={2}
      title="Rhythm"
      description="Consistent spacing is like a good drumbeat—once you notice it's off, you can't unhear it."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Padding jumps around like 12px → 20px → 8px → 24px. Your brain notices, even if you don't consciously.",
        "Gap roulette: 8px, then 16px, then 4px. Padding does the same chaotic dance. This is design ADHD."
      ]}
      goodDetails={[
        "Every card gets 16px padding. Every gap gets 12px. Boring? Maybe. Professional? Absolutely.",
        "12px gaps everywhere, 12px padding for all. Even the hover states match. This is the design equivalent of Marie Kondo."
      ]}
    />
  );
}