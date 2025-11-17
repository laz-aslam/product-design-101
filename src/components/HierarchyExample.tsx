import { ExampleSection } from "./ExampleSection";

export function HierarchyExample() {
  const bad1 = (
    <div className="w-[550px]">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[#0f172b] text-[16px] leading-[24px] tracking-[-0.3125px]">New Message</p>
        <p className="text-[#314158] text-[16px] leading-[24px] tracking-[-0.3125px]">You have a new message from Sarah Chen</p>
        <p className="text-[#45556c] text-[16px] leading-[24px] tracking-[-0.3125px]">Hey! Are we still on for the meeting tomorrow at 3pm?</p>
        <div className="flex gap-[20px] pt-[12px]">
          <p className="text-[#155dfc] text-[16px] leading-[24px] tracking-[-0.3125px]">Reply</p>
          <p className="text-[#45556c] text-[16px] leading-[24px] tracking-[-0.3125px]">Mark as Read</p>
          <p className="text-[#45556c] text-[16px] leading-[24px] tracking-[-0.3125px]">Archive</p>
        </div>
      </div>
    </div>
  );

  const bad2 = (
    <div className="w-[550px]">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[#314158] text-[26px] leading-[24px] tracking-[-0.3125px]">Project Dashboard</p>
        <p className="text-[#62748e] text-[14px] leading-[24px]">Updated 5 minutes ago</p>
        <p className="text-[#e7000b] text-[16px] leading-[24px] tracking-[-0.3125px]">5 tasks overdue</p>
        <p className="text-[#314158] text-[16px] leading-[24px] tracking-[-0.3125px]">Team meeting at 2pm</p>
        <p className="text-[#314158] text-[16px] leading-[24px] tracking-[-0.3125px]">Budget: $45,000 remaining</p>
      </div>
    </div>
  );

  const good1 = (
    <div className="w-[550px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-[2px]">
          <h3 className="text-[#0f172b] text-[18px] leading-[27px] tracking-[-0.4395px] font-medium">New Message</h3>
          <p className="text-[#62748e] text-[16px] leading-[24px] tracking-[-0.3125px]">From Sarah Chen • 2 minutes ago</p>
        </div>
        <div className="flex flex-col gap-[9px] pt-[6px]">
          <div className="flex flex-col gap-[6px]">
            <p className="text-[#0f172b] text-[16px] leading-[24px] tracking-[-0.3125px]">Hey! Are we still on for the meeting tomorrow at 3pm?</p>
            <p className="text-[#45556c] text-[16px] leading-[24px] tracking-[-0.3125px]">I've prepared the quarterly report and would love to get your feedback before we present to the board on Friday.</p>
          </div>
          <div className="flex gap-[12px] pt-[8px]">
            <div className="bg-[#030213] rounded-[8px] px-[16px] py-[8px]">
              <p className="text-white text-[14px] leading-[20px] tracking-[-0.1504px] font-medium">Reply</p>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] px-[17px] py-[9px]">
              <p className="text-black text-[14px] leading-[20px] tracking-[-0.1504px] font-medium">Archive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const good2 = (
    <div className="w-[550px]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center justify-between">
          <p className="text-[#0f172b] text-[18px] leading-[27px] tracking-[-0.4395px] font-medium">Project Dashboard</p>
          <p className="text-[#62748e] text-[14px] leading-[24px] tracking-[-0.31px]">Updated 5 minutes ago</p>
        </div>
        <div className="flex flex-col gap-[22px]">
          <div className="bg-[rgba(255,234,234,0.4)] border-[0.5px] border-[rgba(255,0,0,0.5)] rounded-[8px] p-[12px]">
            <p className="text-[rgba(0,0,0,0.8)] text-[14px] leading-[24px] tracking-[-0.3125px]">Requires immediate attention</p>
            <p className="text-[#e7000b] text-[16px] leading-[24px] tracking-[-0.3125px] font-medium">5 tasks overdue</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#0f172b] text-[16px] leading-[24px] tracking-[-0.3125px]">
              → Team meeting at <span className="font-medium">2pm</span> at <span className="font-medium">Conference room B</span>
            </p>
          </div>
          <p className="text-black text-[16px] leading-[24px] tracking-[-0.3125px]">
            → Budget : <span className="font-medium">$45,000</span> remaining
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <ExampleSection
      number={1}
      title="Hierarchy"
      description="Make the most important thing the loudest thing on the page. Everything else? Supporting cast."
      badExamples={[bad1, bad2]}
      goodExamples={[good1, good2]}
      badDetails={[
        "Everything's the same size and weight. It's like a design team meeting where everyone talks at once.",
        "Uniform spacing (8px everywhere) and identical colors (#475569) make this a visual democracy. Spoiler: democracy doesn't work in design."
      ]}
      goodDetails={[
        "Big bold heading grabs attention, muted timestamps know their place. The 32px spacing between sections says 'these are different things.'",
        "Red urgency (#dc2626) literally screams for attention, while gray metadata whispers from the sidelines. Spacing goes 32px → 24px to show importance."
      ]}
    />
  );
}
