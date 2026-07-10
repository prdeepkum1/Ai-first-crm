



import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../services/chatService";
import {
  FaUserCircle,
  FaRobot,
  FaPaperPlane,
} from "react-icons/fa";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm your AI CRM Assistant. I can help you manage doctor interactions, reminders and answer CRM-related questions.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const currentMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const data = await sendMessage(currentMessage);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.response,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Backend Error",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl mb-6">

        <h1 className="text-4xl font-bold">
          AI CRM Assistant
        </h1>

        <p className="mt-2 text-blue-100">
          Ask about doctors, reminders, interactions and CRM tasks.
        </p>

      </div>

      {/* Chat Box */}

      <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">

        {/* Messages */}

        <div className="h-[550px] overflow-y-auto p-6 bg-gray-50">

          <div className="space-y-6">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`flex gap-3 max-w-2xl ${
                    msg.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >

                  {msg.sender === "user" ? (
                    <FaUserCircle
                      className="text-blue-600 mt-1"
                      size={34}
                    />
                  ) : (
                    <FaRobot
                      className="text-green-600 mt-1"
                      size={34}
                    />
                  )}

                  <div>

                    <div
                      className={`rounded-2xl px-5 py-3 shadow ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white border"
                      }`}
                    >
                      {msg.text}
                    </div>

                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "user"
                          ? "text-right"
                          : ""
                      } text-gray-400`}
                    >
                      {msg.time}
                    </p>

                  </div>

                </div>

              </div>

            ))}

            {loading && (

              <div className="flex gap-3">

                <FaRobot
                  className="text-green-600 mt-1"
                  size={34}
                />

                <div className="bg-white border rounded-2xl px-5 py-3 shadow">

                  <div className="flex gap-2 items-center">

                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>

                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>

                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>

                  </div>

                </div>

              </div>

            )}

            <div ref={bottomRef}></div>

          </div>

        </div>

        {/* Input */}

        <div className="border-t bg-white p-4">

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              disabled={loading}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className="flex-1 border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 transition text-white px-6 rounded-xl flex items-center justify-center"
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}