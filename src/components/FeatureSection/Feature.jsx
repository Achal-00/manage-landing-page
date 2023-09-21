import Card from "./Card";

export default function Feature() {
  return (
    <div className="grid gap-[3em] relative z-10">
      <Card
        SlNo="01"
        heading="Track company-wide progress"
        content="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
      />
      <Card
        SlNo="02"
        heading="Advanced built-in reports"
        content="Set internal delivery estimates and track progress towards company goals. Our customisable dashboard helps you build out the reports you need to keep key skateholders informed."
      />
      <Card
        SlNo="03"
        heading="Everything you need in one place"
        content="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers in all-in-one team productivity solution."
      />
    </div>
  );
}
