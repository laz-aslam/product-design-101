import { ExampleSection } from "./ExampleSection";

export function LegibilityExample() {
  const bad1 = (
    <div className="space-y-3">
      <h4 className="text-slate-400 text-xs uppercase tracking-tight">Latest Updates</h4>
      <div className="space-y-2">
        <p className="text-slate-500 text-xs" style={{ letterSpacing: '-0.05em' }}>
          We've just released a major update to our platform with several new features including advanced analytics dashboard, team collaboration tools, and enhanced security protocols.
        </p>
        <p className="text-slate-400 text-xs" style={{ lineHeight: '1.2' }}>
          The new version includes performance improvements that make the application 40% faster, along with a redesigned interface that follows modern design patterns and accessibility guidelines.
        </p>
      </div>
    </div>
  );

  const bad2 = (
    <div className="space-y-2">
      <div className="bg-slate-800 p-3 rounded">
        <p className="text-slate-400 text-xs leading-tight">
          Important: Your subscription will renew automatically on the 1st of next month. To cancel or modify your plan, visit the billing section in your account settings before the renewal date.
        </p>
      </div>
      <div className="space-y-1">
        <p className="text-slate-700 italic text-sm" style={{ letterSpacing: '-0.03em' }}>
          Premium Feature Available
        </p>
        <p className="text-slate-500 text-xs" style={{ lineHeight: '1.3' }}>
          Unlock unlimited exports, priority support, and advanced analytics by upgrading to Pro.
        </p>
      </div>
    </div>
  );

  const good1 = (
    <div className="space-y-5">
      <h4 className="text-slate-900 uppercase tracking-wide">Latest Updates</h4>
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          We've just released a major update to our platform with several new features including advanced analytics dashboard, team collaboration tools, and enhanced security protocols.
        </p>
        <p className="text-slate-600 leading-relaxed">
          The new version includes performance improvements that make the application 40% faster, along with a redesigned interface that follows modern design patterns and accessibility guidelines.
        </p>
      </div>
    </div>
  );

  const good2 = (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p className="text-slate-900 leading-relaxed">
          <strong>Important:</strong> Your subscription will renew automatically on the 1st of next month. To cancel or modify your plan, visit the billing section before the renewal date.
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-slate-900">Premium Feature Available</p>
        <p className="text-slate-600 leading-relaxed">
          Unlock unlimited exports, priority support, and advanced analytics by upgrading to Pro.
        </p>
      </div>
    </div>
  );

  return (
    <ExampleSection
      number={9}
      title="Legibility"
      description="If people squint to read your text, they'll just... not read it. Your interface isn't a vision test."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Gray on white (#64748b), tiny 12px text, squished letter spacing, tight line-height. Reading this is cardio for your eyeballs.",
        "Dark background with wimpy contrast (#94a3b8), microscopic text. Important info buried in a design that doesn't want to be read."
      ]}
      goodDetails={[
        "Strong contrast (#334155 dark text), proper spacing, relaxed line-height (1.625). Your eyes can actually rest.",
        "High contrast (#0f172a on blue-50 background), full-size 16px text, generous line-height. Bold text for emphasis. Finally."
      ]}
    />
  );
}