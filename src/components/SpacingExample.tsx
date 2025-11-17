import { ExampleSection } from "./ExampleSection";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { MessageSquare, Share2 } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function SpacingExample() {
  const bad1 = (
    <Card className="p-2">
      <div className="flex gap-1 items-center mb-1">
        <Avatar className="w-6 h-6">
          <AvatarFallback className="text-[10px]">SK</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs text-slate-900">Sarah Kim</p>
          <p className="text-[10px] text-slate-500">2 min ago</p>
        </div>
      </div>
      <p className="text-xs text-slate-700 mb-1">
        Just finished the new dashboard design. Would love to get your feedback on the layout and interactions before we move forward.
      </p>
      <div className="flex gap-1">
        <button className="flex-1 flex items-center justify-center gap-0.5 py-1 px-2 bg-slate-100 rounded text-[10px] text-slate-600">
          <MessageSquare className="w-3 h-3" />
          Reply
        </button>
        <button className="flex-1 flex items-center justify-center gap-0.5 py-1 px-2 bg-slate-100 rounded text-[10px] text-slate-600">
          <Share2 className="w-3 h-3" />
          Share
        </button>
      </div>
    </Card>
  );

  const bad2 = (
    <Card className="p-3">
      <div className="space-y-1">
        <Label className="text-xs">Email address</Label>
        <Input className="h-7 text-xs" placeholder="you@example.com" />
      </div>
      <div className="space-y-1 mt-2">
        <Label className="text-xs">Password</Label>
        <Input type="password" className="h-7 text-xs" placeholder="••••••••" />
      </div>
      <Button size="sm" className="w-full mt-2 h-7 text-xs">
        Sign In
      </Button>
    </Card>
  );

  const good1 = (
    <Card className="p-6">
      <div className="flex gap-4 items-start mb-6">
        <Avatar className="w-12 h-12">
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-slate-900">Sarah Kim</p>
          <p className="text-sm text-slate-500">2 minutes ago</p>
        </div>
      </div>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Just finished the new dashboard design. Would love to get your feedback on the layout and interactions before we move forward.
      </p>
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">
          <MessageSquare className="w-4 h-4 mr-2" />
          Reply
        </Button>
        <Button variant="outline" className="flex-1">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </Card>
  );

  const good2 = (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <Label>Email address</Label>
        <Input placeholder="you@example.com" />
      </div>
      <div className="space-y-2 mb-6">
        <Label>Password</Label>
        <Input type="password" placeholder="••••••••" />
      </div>
      <Button className="w-full">
        Sign In
      </Button>
    </Card>
  );

  return (
    <ExampleSection
      number={4}
      title="Spacing"
      description="White space isn't wasted space—it's the difference between 'premium app' and 'sketchy website from 2004.'"
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Everything's squished: 8px padding, 4px gaps, 24px avatar, 10-12px text. This is design claustrophobia.",
        "12px padding, 4px label gaps, 8px field spacing. Feels like you're trying to fit a mansion into a shoebox."
      ]}
      goodDetails={[
        "Breathing room: 24px padding, 16px gaps, 48px avatar, 24px sections. Suddenly it feels expensive.",
        "24px padding, proper 8px label gaps, generous 24px between fields. This form doesn't yell at you."
      ]}
    />
  );
}