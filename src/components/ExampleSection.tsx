import { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

interface ExampleSectionProps {
  number: number;
  title: string;
  description: string;
  badExamples: ReactNode[];
  goodExamples: ReactNode[];
  badDetails?: string[];
  goodDetails?: string[];
}

export function ExampleSection({
  number,
  title,
  description,
  badExamples,
  goodExamples,
  badDetails,
  goodDetails,
}: ExampleSectionProps) {
  return (
    <div className="mb-24">
      <div className="mb-10">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl text-slate-900">{number}</span>
          <h2 className="text-4xl text-slate-900">{title}</h2>
        </div>
        <p className="text-slate-500 text-base max-w-3xl">{description}</p>
      </div>

      {/* Labels */}
      <div className="grid lg:grid-cols-2 gap-8 mb-6">
        <div className="text-sm text-slate-500 uppercase tracking-wide">Not Good</div>
        <div className="text-sm text-slate-500 uppercase tracking-wide">Good</div>
      </div>

      {/* Example Pairs */}
      <div className="space-y-6">
        {badExamples.map((badExample, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <Card className="border-red-200 bg-white">
                <CardContent className="pt-6">
                  {badExample}
                </CardContent>
              </Card>
              {badDetails && badDetails[index] && (
                <p className="text-xs text-slate-500 px-1">{badDetails[index]}</p>
              )}
            </div>
            <div className="space-y-3">
              <Card className="border-emerald-200 bg-white">
                <CardContent className="pt-6">
                  {goodExamples[index]}
                </CardContent>
              </Card>
              {goodDetails && goodDetails[index] && (
                <p className="text-xs text-slate-500 px-1">{goodDetails[index]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}