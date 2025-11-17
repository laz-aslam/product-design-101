import { ExampleSection } from "./ExampleSection";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

export function ContrastExample() {
  const bad1 = (
    <div className="space-y-4">
      <div className="flex items-center gap-2 p-3 bg-slate-100 rounded-lg border border-slate-200">
        <AlertCircle className="w-4 h-4 text-slate-500" />
        <p className="text-slate-600 text-sm">Warning: Your session will expire soon</p>
      </div>
      <div className="flex items-center gap-2 p-3 bg-slate-100 rounded-lg border border-slate-200">
        <CheckCircle className="w-4 h-4 text-slate-500" />
        <p className="text-slate-600 text-sm">Success: Your changes have been saved</p>
      </div>
    </div>
  );

  const bad2 = (
    <div className="space-y-3">
      <Button variant="ghost" className="w-full text-slate-600">
        Create Account
      </Button>
      <Button variant="ghost" className="w-full text-slate-700">
        Sign In
      </Button>
      <Button variant="ghost" className="w-full text-slate-500">
        Continue as Guest
      </Button>
    </div>
  );

  const good1 = (
    <div className="space-y-4">
      <Alert className="border-2 border-amber-500 bg-amber-50">
        <AlertCircle className="h-5 w-5 text-amber-600" />
        <AlertDescription className="text-amber-900">
          Warning: Your session will expire soon
        </AlertDescription>
      </Alert>
      <Alert className="border-2 border-emerald-500 bg-emerald-50">
        <CheckCircle className="h-5 w-5 text-emerald-600" />
        <AlertDescription className="text-emerald-900">
          Success: Your changes have been saved
        </AlertDescription>
      </Alert>
    </div>
  );

  const good2 = (
    <div className="space-y-3">
      <Button className="w-full">
        Create Account
      </Button>
      <Button variant="secondary" className="w-full">
        Sign In
      </Button>
      <Button variant="ghost" className="w-full">
        Continue as Guest
      </Button>
    </div>
  );

  return (
    <ExampleSection
      number={3}
      title="Contrast"
      description="Go bold or go home. Timid differences just confuse people."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Both alerts are fifty shades of gray. Warning and success look like twins—good luck telling them apart in a hurry.",
        "Three buttons, three barely different grays (#64748b → #475569 → #71717a). Is this a UI or an eye exam?"
      ]}
      goodDetails={[
        "Amber alert (#f59e0b) vs emerald success (#10b981). You could spot the difference from across the room.",
        "Primary button pops in blue, secondary chills in gray, ghost barely whispers. Each button knows its role and dresses accordingly."
      ]}
    />
  );
}