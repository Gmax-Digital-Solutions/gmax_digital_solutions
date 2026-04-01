import Image from "next/image";

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
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_3hugsQfilDgFj_KzKvVOfwL1x681d1hj9m6ZYHK9WBYI0lVWlBGGB-_3U5oChrzIKzbnmd_lNUq8PLP0LE1JkP5ZYW46WQDMR8gc7Q-JFOlAu5XQld5p3scmeDvZ2TDE_Mm7409XHXvYfGYATVM4jz208O_QP9KRyxxCUGWauf8aUzCGTIZT6QfDst8Af3UwT7NzsVdvU-BJU9XzjIooAa4nJ43VyZ2NstcHw4A53g3kkD_w77TiXuXtPT9TIwrLHxQqklc3GPA"
                alt="Founder portrait"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            <h3 className="text-xl font-bold">Strategic Lead</h3>
            <p className="mb-2 font-medium text-primary">Founder</p>
            <p className="text-sm text-on-surface-variant">
              Focused on bridging the gap between technical complexity and
              market relevance.
            </p>
          </div>

          {/* Collaborator 1 */}
          <div className="group">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjFsV7QuVQSUwfY1T6hb7FxBpqF4Q-I82w2vrE6aFmPWBMRUBDAWj7SdIywArO_kJHw1P1Pecoa22qAO9qwQcgoZ5DF01UMP2WwOR8nTGJTFvbES7QlypJQo8EUsPLWTiwt2CRwZACAYPsghjEtQa4uMDPlP9fwInEI0b_U1-ITIEqO1vjRAwwIDLI6NWITKc72w69Ah4QIqj_ba0byf7Z4Ms3_eTc8XEXLH_uzCPMJoJUJpGQLKrNu5BpF7OWUjTyrM3jn-lugYI"
                alt="Growth strategy collaborator"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            <h3 className="text-xl font-bold">Growth Strategy</h3>
            <p className="mb-2 font-medium text-primary">Collaborator</p>
            <p className="text-sm text-on-surface-variant">
              Expertise in multi-channel scaling and audience psychology.
            </p>
          </div>

          {/* Collaborator 2 */}
          <div className="group">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK3TLCsrvlfEFyt-FM2GMvmPiKtZK4yZlo1PRi32HXuA9AJcAzI9SwWhSG8qeFg5XPZUZIcf3N3ZPEEbG9rko-O-T8y_LViz-ezHvXpzOhclUsWyatG0d_R91tCkj3f8s6Wm6UrGY0whdfT-IwJl6gk2ZEpDNQwmTl-39yBJ83uB3zxi-uhNTYCpfn_zGEt8ErwbjMfmZwXEx6rNTVCQEBVxRwDruZ9-s9iRTHpoWSNZ8EFnlHwT8cXADmk0N9Sw_WoUXOswC3ZWQ"
                alt="Technical design collaborator"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            <h3 className="text-xl font-bold">Technical Design</h3>
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
