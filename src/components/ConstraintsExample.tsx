import { ExampleSection } from "./ExampleSection";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Palette, Type, Layout, Image, Video, Code, Link, Table, Music, File, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { useState } from "react";

export function ConstraintsExample() {
  const [showMoreBlocks, setShowMoreBlocks] = useState(false);

  const bad1 = (
    <div className="space-y-4">
      <Label>Choose a block type:</Label>
      <div className="grid grid-cols-4 gap-2">
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Type className="w-4 h-4" />
          Text
        </button>
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Image className="w-4 h-4" />
          Image
        </button>
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Video className="w-4 h-4" />
          Video
        </button>
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Code className="w-4 h-4" />
          Code
        </button>
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Link className="w-4 h-4" />
          Link
        </button>
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Table className="w-4 h-4" />
          Table
        </button>
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Layout className="w-4 h-4" />
          Layout
        </button>
        <button className="p-3 bg-slate-100 rounded text-slate-600 hover:bg-slate-200 text-xs flex flex-col items-center gap-1">
          <Palette className="w-4 h-4" />
          Color
        </button>
      </div>
    </div>
  );

  const bad2 = (
    <div className="space-y-4">
      <Label>Export format:</Label>
      <div className="grid grid-cols-3 gap-2">
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          PDF
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          Word
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          Excel
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          PowerPoint
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          CSV
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          JSON
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          XML
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          HTML
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          TXT
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          Markdown
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          LaTeX
        </button>
        <button className="p-2 border border-slate-300 rounded text-xs text-slate-700 hover:bg-slate-50">
          RTF
        </button>
      </div>
    </div>
  );

  const good1 = (
    <div className="space-y-5">
      <Label>Choose a block type</Label>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="h-auto p-4 justify-start gap-3">
          <Type className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <div className="text-left">
            <p className="text-slate-900">Text</p>
            <p className="text-slate-600">Add a text block</p>
          </div>
        </Button>
        <Button variant="outline" className="h-auto p-4 justify-start gap-3">
          <Image className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <div className="text-left">
            <p className="text-slate-900">Image</p>
            <p className="text-slate-600">Upload an image</p>
          </div>
        </Button>
        <Button variant="outline" className="h-auto p-4 justify-start gap-3">
          <Video className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <div className="text-left">
            <p className="text-slate-900">Video</p>
            <p className="text-slate-600">Embed a video</p>
          </div>
        </Button>
        <DropdownMenu open={showMoreBlocks} onOpenChange={setShowMoreBlocks}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-auto p-4 justify-start gap-3">
              <Layout className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <div className="text-left flex-1">
                <p className="text-slate-900">More blocks</p>
                <p className="text-slate-600">5 more options</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>
              <Code className="w-4 h-4 mr-2" />
              Code
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-4 h-4 mr-2" />
              Link
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Table className="w-4 h-4 mr-2" />
              Table
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Layout className="w-4 h-4 mr-2" />
              Layout
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Palette className="w-4 h-4 mr-2" />
              Color
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  const good2 = (
    <div className="space-y-4">
      <Label>Export format</Label>
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 gap-2">
          <File className="w-4 h-4" />
          PDF
        </Button>
        <Button variant="outline" className="flex-1 gap-2">
          <File className="w-4 h-4" />
          CSV
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              More
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              Word
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              Excel
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              PowerPoint
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              JSON
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              XML
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              HTML
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              Markdown
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              TXT
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              LaTeX
            </DropdownMenuItem>
            <DropdownMenuItem>
              <File className="w-4 h-4 mr-2" />
              RTF
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="text-slate-600 text-sm">
        Most common formats upfront. Everything else? One click away.
      </p>
    </div>
  );

  return (
    <ExampleSection
      number={10}
      title="Constraints"
      description="Every option you add is a tiny decision you're forcing users to make. Be ruthless about what actually matters."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Eight block types staring at you. Which one do I need? Analysis paralysis in 4x2 grid form.",
        "Twelve export formats. TWELVE. Most users need like... two. This is choice overload disguised as features."
      ]}
      goodDetails={[
        "Three common blocks visible, five more in a dropdown. Progressive disclosure means less cognitive load upfront.",
        "PDF and CSV front and center—covers 90% of cases. Need LaTeX? It's in the More menu. All options accessible, none overwhelming."
      ]}
    />
  );
}