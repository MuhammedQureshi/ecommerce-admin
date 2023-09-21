"use client"
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className='p-4 '>
      <Modal title="Test" description="test desc" isOpen onClose={()=>{}}>
        Body
      </Modal>
    </div>
  )
}
