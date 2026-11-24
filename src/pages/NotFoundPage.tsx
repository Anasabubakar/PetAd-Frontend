import { useNavigate } from "react-router-dom";
import { EmptyState } from "../components/approval/EmptyState";
import { SearchX } from "lucide-react";
import { localize } from "../i18n/locale";
import { notFound } from "../i18n/not-found";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <EmptyState
        title={localize(notFound.title)}
        description={localize(notFound.description)}
        icon={<SearchX className="w-6 h-6" />}
        action={
          <button
            onClick={() => navigate("/")}
            className="max-w-full break-words px-6 py-2.5 bg-[#E84D2A] text-white font-semibold rounded-xl hover:bg-[#d4431f] transition-colors shadow-sm"
          >
            {localize(notFound.goHome)}
          </button>
        }
      />
    </div>
  );
}
