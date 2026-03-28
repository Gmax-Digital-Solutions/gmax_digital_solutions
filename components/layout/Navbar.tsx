import { Menu } from "lucide-react"
import Image from "next/image"
import Logo from "@/public/images/gm-logo.jpg"
import RequestProposalButton from "@/components/ui/RequestProposalButton"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-surface-container-high text-on-surface">
      <div className="flex items-center gap-3 p-3">
        <button aria-label="Open menu" className="p-2 rounded-md hover:bg-surface-variant">
          <Menu size={24} />
        </button>
        <Image src={Logo} alt="Gmax Digital Logo" width={32} height={32} className="rounded-xl"/>
      </div>
      <div className="flex items-center justify-end p-3">
        <RequestProposalButton />
      </div>
    </div>
  )
}

export default Navbar
