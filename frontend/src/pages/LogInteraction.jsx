

import InteractionForm from "../components/interaction/InteractionForm";

export default function LogInteraction() {

  return (

    <div className="max-w-4xl">

      <h1 className="text-3xl font-bold mb-6">
        Log Interaction
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <InteractionForm />

      </div>

    </div>

  );

}