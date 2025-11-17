import { ExampleSection } from "./ExampleSection";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useState } from "react";
import { Check, Loader2, Copy, Heart } from "lucide-react";

export function FeedbackExample() {
  const [bad1Clicked, setBad1Clicked] = useState(false);
  const [bad2Clicked, setBad2Clicked] = useState(false);
  const [good1State, setGood1State] = useState<'idle' | 'loading' | 'success'>('idle');
  const [good2Copied, setGood2Copied] = useState(false);
  const [good2Liked, setGood2Liked] = useState(false);

  const handleBad1Click = () => {
    setBad1Clicked(true);
  };

  const handleBad2Click = () => {
    setBad2Clicked(true);
  };

  const handleGood1Click = () => {
    setGood1State('loading');
    setTimeout(() => {
      setGood1State('success');
      setTimeout(() => setGood1State('idle'), 2000);
    }, 1500);
  };

  const handleCopy = () => {
    setGood2Copied(true);
    setTimeout(() => setGood2Copied(false), 2000);
  };

  const handleLike = () => {
    setGood2Liked(!good2Liked);
  };

  const bad1 = (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Subscribe to newsletter</Label>
        <input 
          type="email" 
          placeholder="your@email.com"
          className="w-full bg-white border border-slate-300 px-3 py-2 rounded text-slate-900"
        />
      </div>
      <button 
        onClick={handleBad1Click}
        className="w-full bg-indigo-500 text-white py-2 rounded"
      >
        Subscribe
      </button>
      {bad1Clicked && (
        <p className="text-slate-500 text-sm">
          (Nothing happens... did it work?)
        </p>
      )}
    </div>
  );

  const bad2 = (
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 border border-slate-200 rounded">
        <span className="text-slate-700">API Key: sk_test_abc123xyz</span>
        <button 
          onClick={handleBad2Click}
          className="text-indigo-600"
        >
          Copy
        </button>
      </div>
      {bad2Clicked && (
        <p className="text-slate-500 text-sm">
          (Did it copy? No feedback!)
        </p>
      )}
    </div>
  );

  const good1 = (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Subscribe to newsletter</Label>
        <Input 
          id="email"
          type="email" 
          placeholder="your@email.com"
        />
      </div>
      <Button 
        onClick={handleGood1Click}
        disabled={good1State === 'loading'}
        className={`w-full ${
          good1State === 'success' 
            ? 'bg-emerald-500 hover:bg-emerald-600' 
            : ''
        }`}
      >
        {good1State === 'loading' && (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Subscribing...
          </>
        )}
        {good1State === 'success' && (
          <>
            <Check className="w-4 h-4 mr-2" />
            Subscribed!
          </>
        )}
        {good1State === 'idle' && 'Subscribe'}
      </Button>
    </div>
  );

  const good2 = (
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 border border-slate-200 rounded">
        <span className="text-slate-700 text-sm">sk_test_abc123xyz</span>
        <Button 
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className={good2Copied ? 'text-emerald-600' : ''}
        >
          {good2Copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      <Button 
        variant="outline" 
        className="w-full"
        onClick={handleLike}
      >
        <Heart className={`w-4 h-4 mr-2 transition-colors ${good2Liked ? 'fill-red-500 text-red-500' : ''}`} />
        {good2Liked ? 'Liked!' : 'Like this'}
      </Button>
    </div>
  );

  return (
    <ExampleSection
      number={7}
      title="Feedback"
      description="Silence after a click is the UI equivalent of talking to someone who just stares blankly at you. Don't be that interface."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "You click subscribe and... nothing. Did it work? Did it break? Should you click again? Welcome to anxiety town.",
        "Copy button with no feedback is like sending a text and never getting a 'delivered' receipt. Unsettling."
      ]}
      goodDetails={[
        "Spinner says 'working on it,' checkmark says 'all done,' button disables so you don't double-click. Chef's kiss.",
        "Icon changes to checkmark, text updates to 'Copied!', color shifts to green. Your brain gets three confirmation signals."
      ]}
    />
  );
}