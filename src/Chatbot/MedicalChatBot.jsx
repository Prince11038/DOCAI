import React, { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';
import './MedicalChatBot.css';

const MedicalChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Hello! I\'m DOC AI. Please describe your medical symptoms or health concerns, and I\'ll try to provide some personalized insights.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Configure marked options for better rendering
  useEffect(() => {
    marked.setOptions({
      breaks: true,
      gfm: true,
      headerIds: false,
      smartypants: true
    });
  }, []);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message to chat
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Get response from Gemini API
      const response = await fetchGeminiResponse(input);
      
      // Add bot response to chat
      const botMessage = { role: 'bot', content: response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: 'I apologize, but I encountered an error processing your request. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGeminiResponse = async (prompt) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
    if (!apiKey) {
      throw new Error('Gemini API key is not configured');
    }
  
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  
    const payload = {
      contents: [{
        parts: [{
          text: `You are DOC AI, a medical assistant chatbot. Provide helpful, informative, and compassionate responses to medical questions.
                 
                 The user describes this medical concern or symptom: "${prompt}"
                 
                 Follow this exact markdown structure for your response:
                 
                 ## Initial Assessment
                 *Brief, empathetic acknowledgment of the user's concern with a general assessment*
                 
                 ## Possible Causes
                 - **Cause 1**: Brief explanation with key symptoms
                 - **Cause 2**: Brief explanation with key symptoms
                 - **Cause 3**: Brief explanation with key symptoms (if applicable)
                 
                 ## When to Seek Medical Care
                 *Clear guidance on warning signs that require professional medical attention*
                 
                 ## Self-Care Recommendations
                 - **Recommendation 1**: Details
                 - **Recommendation 2**: Details
                 - **Recommendation 3**: Details (if applicable)
                 
                 ## Prevention Tips
                 *Brief lifestyle or preventative measures if relevant*
                 
                 *__Note:__ This information is for educational purposes only and should not replace professional medical advice. Please consult a healthcare provider for proper diagnosis and treatment.*
                 
                 Keep your response concise but informative. Use markdown effectively with headers (##), bold (**text**), italics (*text*), and bullet points to structure information clearly.`
        }]
      }],
      generationConfig: {
        temperature: 0.2,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 800,
      }
    };
  
    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
      }
  
      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Enhanced rendering for bot messages with custom CSS classes for markdown elements
  const renderBotMessage = (content) => {
    const htmlContent = marked(content);
    return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  return (
    <div className="docai-chatbot-container">
      <div className="docai-chatbot-header">
        <div className="docai-logo">
          <div className="docai-logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
          </div>
          <h3>DOC AI Assistant</h3>
        </div>
        <p>Your Intelligent Healthcare Partner</p>
      </div>

      <div className="docai-chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`docai-message ${message.role}`}>
            {message.role === 'bot' && (
              <div className="docai-avatar">
                <div className="docai-avatar-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
              </div>
            )}
            <div className="docai-message-content">
              {
                message.role === 'bot'
                  ? renderBotMessage(message.content)
                  : <p>{message.content}</p>
              }
            </div>
            {message.role === 'user' && (
              <div className="docai-avatar user-avatar">
                <div className="docai-avatar-icon user">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="docai-message bot">
            <div className="docai-avatar">
              <div className="docai-avatar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
            </div>
            <div className="docai-message-content loading">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="docai-chat-input">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Describe your symptoms or health concerns..."
          rows={1}
        />
        <button 
          onClick={sendMessage}
          disabled={isLoading || input.trim() === ''}
          className="docai-send-button"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>

      <div className="docai-chat-disclaimer">
        <p>Note: This AI assistant provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
      </div>
    </div>
  );
};

export default MedicalChatBot;