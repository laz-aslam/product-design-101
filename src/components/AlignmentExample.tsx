import { ExampleSection } from "./ExampleSection";
import { Mail, Phone, MapPin, User, Calendar } from "lucide-react";

export function AlignmentExample() {
  const bad1 = (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-slate-600" />
        <div>
          <p className="text-slate-600 text-sm">Email</p>
          <p className="text-slate-900">contact@example.com</p>
        </div>
      </div>
      <div className="flex items-center gap-3 pl-2">
        <Phone className="w-4 h-4 text-slate-600" />
        <div>
          <p className="text-slate-600 text-sm">Phone</p>
          <p className="text-slate-900">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-center gap-2 pl-1">
        <MapPin className="w-6 h-6 text-slate-600" />
        <div>
          <p className="text-slate-600 text-sm">Address</p>
          <p className="text-slate-900">123 Main Street</p>
        </div>
      </div>
    </div>
  );

  const bad2 = (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <User className="w-5 h-5 text-slate-600" />
        <span className="text-slate-900">John Smith</span>
      </div>
      <div className="flex items-center gap-4 pl-1">
        <Mail className="w-4 h-4 text-slate-600" />
        <span className="text-slate-900">john@example.com</span>
      </div>
      <div className="flex items-center gap-3 pl-2">
        <Calendar className="w-6 h-6 text-slate-600" />
        <span className="text-slate-900">Joined March 2024</span>
      </div>
    </div>
  );

  const good1 = (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 text-slate-600 mt-0.5" />
        <div>
          <p className="text-slate-600 text-sm">Email</p>
          <p className="text-slate-900">contact@example.com</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Phone className="w-5 h-5 text-slate-600 mt-0.5" />
        <div>
          <p className="text-slate-600 text-sm">Phone</p>
          <p className="text-slate-900">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-slate-600 mt-0.5" />
        <div>
          <p className="text-slate-600 text-sm">Address</p>
          <p className="text-slate-900">123 Main Street</p>
        </div>
      </div>
    </div>
  );

  const good2 = (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <User className="w-5 h-5 text-slate-600" />
        <span className="text-slate-900">John Smith</span>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-slate-600" />
        <span className="text-slate-900">john@example.com</span>
      </div>
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-slate-600" />
        <span className="text-slate-900">Joined March 2024</span>
      </div>
    </div>
  );

  return (
    <ExampleSection
      number={5}
      title="Alignment"
      description="Misaligned elements are like crooked picture frames—you might not notice right away, but something feels off."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Icon sizes bouncing around (20px → 16px → 24px), random gaps (8px → 12px → 8px). It's subtle chaos.",
        "More icon madness (20px → 16px → 24px), gap inconsistency (8px → 16px → 12px). Your eyes are working overtime to make sense of this."
      ]}
      goodDetails={[
        "All icons locked to 20px, gaps uniformly 12px. Icons align to the top of text blocks. This is what 'pixel-perfect' means.",
        "Same deal: 20px icons, 12px gaps, everything lines up vertically. Your brain can finally relax."
      ]}
    />
  );
}