import Image from "next/image"

export default function WhatsAppWidget() {
  const phone = "2348052923367" // Assumes Nigeria: +234 and drops leading 0
  const href = `https://wa.me/${phone}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6"
    >
      <Image
        src="/wa.png"
        alt="WhatsApp"
        width={64}
        height={64}
        priority
        className="h-14 w-14 md:h-16 md:w-16 drop-shadow-lg hover:scale-105 transition-transform"
      />
    </a>
  )
}