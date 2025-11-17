import { ExampleSection } from "./ExampleSection";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { Info } from "lucide-react";

export function ContextExample() {
  const bad1 = (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="bad-api">API Key</Label>
        <Input 
          id="bad-api"
          type="text" 
          placeholder="Enter your API key"
        />
      </div>
      <Alert>
        <AlertDescription className="text-slate-700 space-y-2">
          <p>How to use API keys:</p>
          <p>1. Generate a key from settings</p>
          <p>2. Never share your key publicly</p>
          <p>3. Rotate keys every 90 days</p>
          <p>4. Use environment variables</p>
          <p>5. Monitor usage in dashboard</p>
          <p>6. Set rate limits appropriately</p>
        </AlertDescription>
      </Alert>
    </div>
  );

  const bad2 = (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="bad-password">Create Password</Label>
        <Input 
          id="bad-password"
          type="password" 
          placeholder="Enter password"
        />
      </div>
      <Alert>
        <AlertDescription className="text-slate-700">
          <p className="mb-2">Password requirements:</p>
          <ul className="space-y-1 text-sm">
            <li>• At least 12 characters long</li>
            <li>• Must include uppercase letters</li>
            <li>• Must include lowercase letters</li>
            <li>• Must include numbers</li>
            <li>• Must include special characters (@, #, $, etc.)</li>
            <li>• Cannot contain common words</li>
            <li>• Cannot be similar to your username</li>
            <li>• Cannot reuse last 5 passwords</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );

  const good1 = (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="good-api">API Key</Label>
        <Input 
          id="good-api"
          type="text" 
          placeholder="sk_live_..."
        />
        <div className="flex items-start gap-2 text-slate-600">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p>Keep your API key secure and never share it publicly.</p>
        </div>
      </div>
    </div>
  );

  const good2 = (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="good-password">Create Password</Label>
        <Input 
          id="good-password"
          type="password" 
          placeholder="Enter password"
        />
        <p className="text-slate-600">
          Use at least 12 characters with a mix of letters, numbers, and symbols.
        </p>
      </div>
    </div>
  );

  return (
    <ExampleSection
      number={8}
      title="Context"
      description="Information overload is real. Give users exactly what they need, exactly when they need it."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Six steps of instructions when you just wanted to paste an API key. This is like getting a 20-minute story when you asked for the time.",
        "Eight password rules that you'll forget immediately. Reading this feels like homework."
      ]}
      goodDetails={[
        "One critical tip: keep it secure. That's it. That's all you need right now. Simple, actionable, done.",
        "One clear guideline that you can actually remember: 12+ characters, mix it up. Easy."
      ]}
    />
  );
}