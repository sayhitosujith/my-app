import { useParams, useNavigate } from "react-router-dom";

function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-10 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Detailed information about {slug.replace(/-/g, " ")} will be shown here.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
      >
        Go Back
      </button>
    </div>
  );
}

export default ServicePage;