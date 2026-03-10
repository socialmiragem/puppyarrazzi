import type { Metadata } from "next"
import ContactClientPage from "./contact-client"
import { ContactSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Contact Puppyarazzi - Dog Grooming Appointments Wellington FL | (561) 429-5589",
  description:
    "Contact Puppyarazzi for professional dog grooming in Wellington, Florida. Call (561) 429-5589 for appointments. Located at 13873 Wellington Trce, Wellington FL 33414. Same-day appointments available.",
  keywords:
    "contact puppyarazzi Wellington FL, dog grooming appointments Wellington, pet grooming phone Wellington, (561) 429-5589, 13873 Wellington Trce, dog grooming Palm Beach County contact",
  openGraph: {
    title: "Contact Puppyarazzi - Dog Grooming Wellington FL",
    description: "Contact us for professional dog grooming appointments in Wellington, Florida. Call (561) 429-5589",
    images: ["/images/contact-puppyarazzi.jpg"],
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <ContactClientPage />
    </>
  )
}
