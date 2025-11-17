import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { AlertCircle } from "lucide-react";

export function TestMaster() {
  const [principles, setPrinciples] = useState({
    hierarchy: true,
    rhythm: true,
    contrast: true,
    spacing: true,
    alignment: true,
    affordance: true,
    feedback: true,
    context: true,
    legibility: true,
    constraints: true,
  });

  const [hovering, setHovering] = useState(false);

  const togglePrinciple = (key: keyof typeof principles) => {
    setPrinciples((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allEnabled = Object.values(principles).every((v) => v);
  const enabledCount = Object.values(principles).filter((v) => v).length;

  return (
    <div className="mb-24">
      <div className="mb-10">
        <div className="flex items-baseline gap-4 mb-4">
          <h2 className="text-4xl text-slate-900">See it in action</h2>
        </div>
        <p className="text-slate-500 text-base max-w-3xl">
          Toggle ingredients on and off to see how they affect the same component. Watch it go from "yikes" to "nice" in real-time.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls */}
        <Card>
          <CardContent className="pt-6">
            <div className="mb-6">
              <h3 className="text-slate-900 mb-2">Design Ingredients</h3>
              <p className="text-sm text-slate-600">
                {enabledCount} of 10 enabled {allEnabled && "✨"}
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(principles).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <Label
                    htmlFor={`toggle-${key}`}
                    className="capitalize cursor-pointer"
                  >
                    {key}
                  </Label>
                  <Switch
                    id={`toggle-${key}`}
                    checked={value}
                    onCheckedChange={() =>
                      togglePrinciple(key as keyof typeof principles)
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card className={allEnabled ? "border-emerald-200 bg-white" : "border-red-200 bg-white"}>
          <CardContent className="pt-6">
            <div className="mb-4">
              <h3 className="text-slate-900 mb-2">Live Preview</h3>
              <p className="text-sm text-slate-600">
                {allEnabled
                  ? "Perfect! All ingredients working together."
                  : `Missing ${10 - enabledCount} ingredient${10 - enabledCount !== 1 ? "s" : ""}...`}
              </p>
            </div>

            {/* The Component That Changes */}
            <div
              className={`
                ${principles.spacing ? "p-6 space-y-6" : "p-2 space-y-1"}
                border border-slate-200 rounded-lg
              `}
            >
              {/* Header Section */}
              <div className={principles.alignment ? "" : "pl-2"}>
                <div
                  className={`
                    flex items-start gap-3 mb-4
                    ${!principles.alignment && "gap-2 pl-1"}
                  `}
                >
                  <AlertCircle
                    className={`
                      ${principles.spacing ? "w-5 h-5 mt-0.5" : "w-4 h-4"}
                      ${principles.contrast ? "text-amber-600" : "text-slate-500"}
                      ${!principles.alignment && "mt-1"}
                    `}
                  />
                  <div className={principles.rhythm ? "space-y-2" : "space-y-0.5"}>
                    <h4
                      className={`
                        ${principles.hierarchy ? "text-slate-900" : "text-slate-700"}
                        ${principles.legibility ? "" : "text-xs text-slate-500"}
                      `}
                      style={
                        principles.legibility
                          ? {}
                          : { letterSpacing: "-0.03em", lineHeight: "1.2" }
                      }
                    >
                      Payment Method Expiring Soon
                    </h4>
                    <p
                      className={`
                        ${principles.hierarchy ? "text-sm text-slate-600" : "text-slate-700"}
                        ${principles.legibility ? "leading-relaxed" : "text-xs text-slate-500"}
                      `}
                      style={
                        principles.legibility
                          ? {}
                          : { letterSpacing: "-0.03em", lineHeight: "1.3" }
                      }
                    >
                      {principles.context
                        ? "Your credit card ending in 4242 expires on 12/24."
                        : "Your credit card ending in 4242 expires on 12/24. Please update your payment method to avoid service interruption. We accept all major credit cards including Visa, Mastercard, American Express, and Discover. You can update your payment method in the billing section of your account settings."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Section */}
              {!principles.constraints && (
                <div className={principles.rhythm ? "space-y-2" : "space-y-1"}>
                  <Label
                    className={
                      principles.legibility ? "" : "text-xs text-slate-500"
                    }
                  >
                    Card Number
                  </Label>
                  <Input
                    placeholder={
                      principles.affordance
                        ? "1234 5678 9012 3456"
                        : "Enter card number"
                    }
                    className={
                      principles.affordance
                        ? ""
                        : "border-none bg-slate-50 shadow-none"
                    }
                  />
                </div>
              )}

              {!principles.constraints && (
                <div
                  className={`grid grid-cols-2 ${principles.rhythm ? "gap-4" : "gap-1"}`}
                >
                  <div className={principles.rhythm ? "space-y-2" : "space-y-0.5"}>
                    <Label
                      className={
                        principles.legibility ? "" : "text-xs text-slate-500"
                      }
                    >
                      Expiry
                    </Label>
                    <Input
                      placeholder={principles.affordance ? "MM/YY" : "Expiry date"}
                      className={
                        principles.affordance
                          ? ""
                          : "border-none bg-slate-50 shadow-none"
                      }
                    />
                  </div>
                  <div className={principles.rhythm ? "space-y-2" : "space-y-0.5"}>
                    <Label
                      className={
                        principles.legibility ? "" : "text-xs text-slate-500"
                      }
                    >
                      CVV
                    </Label>
                    <Input
                      placeholder={principles.affordance ? "123" : "Security code"}
                      className={
                        principles.affordance
                          ? ""
                          : "border-none bg-slate-50 shadow-none"
                      }
                    />
                  </div>
                </div>
              )}

              {/* Actions */}
              <div
                className={`
                  flex gap-3
                  ${!principles.rhythm && "gap-1"}
                  ${!principles.alignment && "pl-3"}
                `}
              >
                <Button
                  className={`
                    flex-1
                    ${principles.contrast ? "" : "bg-slate-500"}
                    ${principles.affordance ? "" : "shadow-none"}
                  `}
                  variant={principles.contrast ? "default" : undefined}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  {principles.feedback && hovering ? "Updating..." : "Update Card"}
                </Button>
                <Button
                  className={`
                    flex-1
                    ${!principles.contrast && "bg-slate-400"}
                    ${!principles.affordance && "shadow-none"}
                  `}
                  variant={principles.contrast ? "outline" : undefined}
                >
                  {principles.constraints ? "Remind Me Later" : "Cancel"}
                </Button>
                {!principles.constraints && (
                  <Button
                    variant="ghost"
                    className={`flex-1 ${!principles.affordance && "shadow-none"}`}
                  >
                    Maybe Later
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}