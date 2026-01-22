import { FOOTER_DATA } from "@/data/footer"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {FOOTER_DATA.heading}
            </h3>
            <p className="text-white text-sm">
              {FOOTER_DATA.description}
            </p>
          </div>

          <div className="w-full md:w-auto">
            <form className="flex gap-3">
              <input
                type="email"
                placeholder={FOOTER_DATA.emailPlaceholder}
                className="px-4 py-2.5 bg-transparent border border-white text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-400 w-full md:w-64"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-transparent border border-white text-white hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                {FOOTER_DATA.subscribeButton}
              </button>
            </form>
            <p className="text-white text-xs mt-2">
              {FOOTER_DATA.privacyText}
            </p>
          </div>
        </div>

        <div className="border-t border-white pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              {FOOTER_DATA.copyright}
            </p>

            <div className="flex gap-4">
              <a
                href={FOOTER_DATA.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={FOOTER_DATA.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href={FOOTER_DATA.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
