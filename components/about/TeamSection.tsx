import Image from "next/image";
import FounderPotraite from "@/public/images/Founder_Gmax.png";
import CmoPotraite from "@/public/images/CMO.png";
import FemaleBoss from "@/public/images/female_bos.png";

export default function TeamSection() {
  return (
    <section className="bg-white px-8 py-32 text-on-surface-variant">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="mb-6 text-4xl font-bold">
            The minds shaping Gmax Digital
          </h2>

          <p className="max-w-2xl text-xl text-on-surface-variant">
            Founder-led execution supported by strategic collaboration across
            growth, design, and technical delivery.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Founder */}
          <div className="group">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-surface-container">
              <Image
                src={FounderPotraite}
                alt="founder"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            <h3 className="text-xl font-bold">Lamfih B.</h3>
            <p className="mb-2 font-medium text-primary">
              Founder, Strategic Lead
            </p>
            <p className="text-sm text-on-surface-variant">
              Focused on bridging the gap between technical complexity and
              market relevance.
            </p>
          </div>

          {/* Collaborator 1 */}
          <div className="group">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-surface-container">
              <Image
                src={CmoPotraite}
                alt="Growth strategy collaborator"
                fill
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            <h3 className="text-xl font-bold">James A Powell</h3>
            <p className="mb-2 font-medium text-primary">Collaborator, CMO</p>
            <p className="text-sm text-on-surface-variant">
              Expertise in multi-channel scaling and audience psychology.
            </p>
          </div>

          {/* Collaborator 2 */}
          <div className="group">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-surface-container">
              <Image
                src={FemaleBoss}
                alt="Technical design collaborator"
                fill
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            <h3 className="text-xl font-bold">Teresa Hansén</h3>
            <p className="mb-2 font-medium text-primary">Collaborator</p>
            <p className="text-sm text-on-surface-variant">
              Specializing in high-performance digital architecture and user
              flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
