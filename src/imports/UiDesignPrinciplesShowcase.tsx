function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-[#0f172b] text-nowrap w-full whitespace-pre">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[36px]">Hierarchy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[0px] tracking-[0.3516px]">
        <span className="text-[28px]">1</span>
        <span className="text-[18px]">/10</span>
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Make the most important thing the loudest thing on the page. Everything else? Supporting cast.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[1232.5px]">
      <Frame2 />
      <Paragraph />
    </div>
  );
}

function Container() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[0.5px] tracking-[0.1996px] uppercase whitespace-pre">Not Good</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[0.5px] tracking-[0.1996px] uppercase whitespace-pre">Good</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[550px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">New Message</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[36px] w-[550px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">You have a new message from Sarah Chen</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[72px] w-[550px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Hey! Are we still on for the meeting tomorrow at 3pm?</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.297px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Reply</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.063px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Mark as Read</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[54.273px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Archive</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 top-[108px]">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function HierarchyExample() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[550px]" data-name="HierarchyExample">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[550px]">
        <Paragraph1 />
        <Paragraph2 />
        <Paragraph3 />
        <Frame1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[194px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[194px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <HierarchyExample />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[4px] not-italic text-[#62748e] text-[12px] top-px w-[574px]">{`Everything's the same size and weight. It's like a design team meeting where everyone talks at once.`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] h-[238px] items-start relative shrink-0" data-name="Container">
      <Card />
      <Paragraph4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#0f172b] text-[18px] text-nowrap top-[0.5px] tracking-[-0.4395px] whitespace-pre">New Message</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#62748e] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">From Sarah Chen • 2 minutes ago</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[63px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Hey! Are we still on for the meeting tomorrow at 3pm?</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#45556c] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[508px]">{`I've prepared the quarterly report and would love to get your feedback before we present to the board on Friday.`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-[68.82px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[68.82px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Reply</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[83.727px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[17px] py-[9px] relative w-[83.727px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap tracking-[-0.1504px] whitespace-pre">Archive</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[44px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <Container5 />
      <Container6 />
    </div>
  );
}

function HierarchyExample1() {
  return (
    <div className="relative shrink-0 w-[550px]" data-name="HierarchyExample">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] items-start relative w-[550px]">
        <Container4 />
        <Frame />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative w-full">
          <HierarchyExample1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[4px] not-italic text-[#62748e] text-[12px] top-px w-[552px]">{`Big bold heading grabs attention, muted timestamps know their place. The 32px spacing between sections says 'these are different things.'`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Card1 />
      <Paragraph8 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[353px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[0.5px] tracking-[0.1996px] uppercase whitespace-pre">Not Good</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_2] relative shrink-0" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#62748e] text-[14px] text-nowrap top-[0.5px] tracking-[0.1996px] uppercase whitespace-pre">Good</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[26px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Project Dashboard</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#e7000b] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">5 tasks overdue</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Team meeting at 2pm</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#314158] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Budget: $45,000 remaining</p>
    </div>
  );
}

function HierarchyExample2() {
  return (
    <div className="relative shrink-0 w-[550px]" data-name="HierarchyExample">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start relative w-[550px]">
        <Paragraph9 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#62748e] text-[14px] text-nowrap whitespace-pre">Updated 5 minutes ago</p>
        <Paragraph10 />
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative w-full">
          <HierarchyExample2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[4px] not-italic text-[#62748e] text-[12px] top-px w-[592px]">{`Uniform spacing (8px everywhere) and identical colors (#475569) make this a visual democracy. Spoiler: democracy doesn't work in design.`}</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] h-[214px] items-start relative shrink-0" data-name="Container">
      <Card2 />
      <Paragraph13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[27px] relative shrink-0 text-[#0f172b] text-[18px] tracking-[-0.4395px]">Project Dashboard</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#62748e] text-[14px] tracking-[-0.31px]">Updated 5 minutes ago</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,234,234,0.4)] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,0,0,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start leading-[24px] not-italic p-[12px] relative text-nowrap tracking-[-0.3125px] w-full whitespace-pre">
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)]">Requires immediate attention</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#e7000b] text-[16px]">5 tasks overdue</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#0f172b] text-[16px] text-nowrap tracking-[-0.3125px] whitespace-pre">
        <span>{`→ Team meeting at `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium">2pm</span> at <span className="font-['Inter:Medium',sans-serif] font-medium">Conference room B</span>
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.3125px] whitespace-pre">
        <span>{`→ Budget : `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium">$45,000</span>
        <span>{` remaining`}</span>
      </p>
    </div>
  );
}

function HierarchyExample3() {
  return (
    <div className="relative shrink-0 w-[550px]" data-name="HierarchyExample">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[15px] items-start relative w-[550px]">
        <Frame5 />
        <Container15 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#a4f4cf] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative w-full">
          <HierarchyExample3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[4px] not-italic text-[#62748e] text-[12px] top-px w-[586px]">Red urgency (#dc2626) literally screams for attention, while gray metadata whispers from the sidelines. Spacing goes 32px → 24px to show importance.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Card3 />
      <Paragraph14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[373px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Container11 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[750px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Container2 />
      <Container18 />
    </div>
  );
}

function ExampleSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[922.5px] items-start relative shrink-0 w-full" data-name="ExampleSection">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[96px] items-center justify-center pb-0 pt-[48px] px-[24px] relative shrink-0 w-[1280px]" data-name="Container">
      <ExampleSection />
    </div>
  );
}

export default function UiDesignPrinciplesShowcase() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="UI Design Principles Showcase">
      <Container19 />
    </div>
  );
}