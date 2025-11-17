import { ExampleSection } from "./ExampleSection";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function AffordanceExample() {
  const bad1 = (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-slate-700">Username</p>
        <p className="text-slate-900 bg-slate-50 px-3 py-2 rounded">johndoe</p>
      </div>
      <div className="space-y-2">
        <p className="text-slate-700">Settings</p>
        <p className="text-indigo-600">Manage your account</p>
      </div>
      <div className="space-y-2">
        <p className="text-slate-700">Delete Account</p>
        <p className="text-red-600">Remove all data</p>
      </div>
    </div>
  );

  const bad2 = (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Email notifications</span>
        <span className="text-indigo-600">On</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Dark mode</span>
        <span className="text-slate-500">Off</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Auto-save</span>
        <span className="text-indigo-600">On</span>
      </div>
    </div>
  );

  const good1 = (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input 
          id="username"
          type="text" 
          defaultValue="johndoe"
        />
      </div>
      <div className="space-y-2">
        <Label>Account Settings</Label>
        <Button variant="outline" className="w-full justify-between">
          Manage your account
          <span className="text-slate-500">→</span>
        </Button>
      </div>
      <div className="space-y-2">
        <Label>Danger Zone</Label>
        <Button variant="destructive" className="w-full">
          Delete Account
        </Button>
      </div>
    </div>
  );

  const good2 = (
    <div className="space-y-5">
      <div className="flex items-center justify-between py-1">
        <Label htmlFor="email-notif">Email notifications</Label>
        <Switch id="email-notif" defaultChecked />
      </div>
      <div className="flex items-center justify-between py-1">
        <Label htmlFor="dark-mode">Dark mode</Label>
        <Switch id="dark-mode" />
      </div>
      <div className="flex items-center justify-between py-1">
        <Label htmlFor="auto-save">Auto-save</Label>
        <Switch id="auto-save" defaultChecked />
      </div>
    </div>
  );

  return (
    <ExampleSection
      number={6}
      title="Affordance"
      description="If users have to guess what's clickable, you've already lost. Make it obvious."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Plain text that might be editable? Colored text that might be links? Who knows! It's a mystery adventure.",
        "'On' and 'Off' text doesn't scream 'click me!' More like 'stare at me and wonder if I do anything.'"
      ]}
      goodDetails={[
        "Input fields look like input fields. Buttons look like buttons. The red delete button practically yells 'DANGER!'", 
        "Toggles actually look toggleable. The switch component is begging to be flipped. Zero ambiguity."
      ]}
    />
  );
}