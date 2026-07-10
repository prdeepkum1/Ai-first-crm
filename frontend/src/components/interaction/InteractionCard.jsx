export default function InteractionCard({
  item,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border">

      <h2 className="text-xl font-bold">
        {item.doctor_name}
      </h2>

      <p className="text-gray-600">
        {item.hospital}
      </p>

      <p className="mt-2">
        <span className="font-semibold">Type:</span>{" "}
        {item.interaction_type}
      </p>

      <p className="mt-2">
        <span className="font-semibold">Notes:</span>{" "}
        {item.notes}
      </p>

      <p className="mt-2">
        <span className="font-semibold">Summary:</span>{" "}
        {item.summary}
      </p>

      <p className="mt-2">
        <span className="font-semibold">Follow Up:</span>{" "}
        {item.follow_up_date}
      </p>

      <div className="flex gap-3 mt-5">

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
          onClick={() => onEdit(item)}
        >
          Edit
        </button>

        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}