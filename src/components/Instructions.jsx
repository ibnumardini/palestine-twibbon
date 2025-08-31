import { InstructionCard } from "./InstructionCard";

export const Instructions = () => {
  const steps = [
    {
      step: 1,
      title: "Upload Foto",
      description: "Pilih foto kece dari galeri mu",
    },
    {
      step: 2,
      title: "Auto Dipasangin Frame",
      description: "Langsung dikasih frame bendera Palestine keren!",
    },
    {
      step: 3,
      title: "Share ke Mana-mana!",
      description: "Download terus posting/pasang di IG, X, WhatsApp dll!",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {steps.map((step) => (
        <InstructionCard
          key={step.step}
          step={step.step}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
};
