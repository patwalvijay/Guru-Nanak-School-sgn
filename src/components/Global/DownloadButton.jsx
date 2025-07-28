// components/DownloadButton.tsx

import { Download } from "lucide-react";


export default function DownloadButton({buttonText}) {
    const fileUrl = "/pdf/brochure.pdf"
  return (
    <a
      href={fileUrl}
      download={"brochure"}
      className="inline-flex items-center gap-2 bg-[#990000] text-white font-semibold px-5 py-2 rounded-lg shadow hover:opacity-90 transition-opacity duration-150"
    >
      <Download className="w-5 h-5" />
      {buttonText||"Download Brochure"}
    </a>
  );
}
