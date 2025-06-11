import { ArrowLeft, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    type: "bot",
    message:
      "Hello! I'm your Tripura Tourism assistant. How can I help you today?",
    time: "10:30 AM",
  },
  {
    id: 2,
    type: "user",
    message: "What are the best places to visit in Tripura?",
    time: "10:31 AM",
  },
  {
    id: 3,
    type: "bot",
    message:
      "Great question! Tripura has many beautiful destinations. Some must-visit places include:\n\n• Unakoti - Ancient rock sculptures\n• Neermahal - Water palace\n• Ujjayanta Palace - Royal heritage\n• Jampui Hills - Scenic hill station\n\nWould you like detailed information about any of these?",
    time: "10:31 AM",
  },
];

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: "user" as const,
        message: newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages([...messages, userMessage]);
      setNewMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          type: "bot" as const,
          message:
            "Thanks for your message! Our team will get back to you shortly with detailed information.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="pb-20 bg-slate-50 h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/home")}
            className="text-slate-600"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-nature-500 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-800">
                Tourism Assistant
              </h1>
              <p className="text-sm text-nature-600">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] ${
                message.type === "user"
                  ? "bg-nature-500 text-white rounded-l-2xl rounded-tr-2xl"
                  : "bg-white text-slate-800 rounded-r-2xl rounded-tl-2xl shadow-sm"
              } p-3`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.message}</p>
              <p
                className={`text-xs mt-1 ${
                  message.type === "user" ? "text-nature-100" : "text-slate-500"
                }`}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-slate-200 p-4 flex-shrink-0">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="bg-nature-500 hover:bg-nature-600"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
