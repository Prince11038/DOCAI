import React, { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';
import './NutritionPlannerChatBot.css';

const NutritionPlannerChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: "Hello! I'm your DOC AI Nutrition Planner. I can help create a personalized nutrition plan based on your goals, preferences, and dietary needs. Let's get started with a few questions."
    },
    {
      role: 'bot',
      content: "## Let's create your nutrition plan!\n\nPlease tell me about:\n\n1. **Your goal** (weight loss, muscle gain, maintenance, etc.)\n2. **Your dietary preferences** (vegan, vegetarian, no restrictions, etc.)\n3. **Any allergies or foods you avoid**\n4. **Your approximate height, weight, age, and activity level**\n\nThis will help me create a customized plan for you."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [planCreated, setPlanCreated] = useState(false);
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
      
      // Check if a nutrition plan was created
      if (response.includes("## Your Personalized Nutrition Plan")) {
        setPlanCreated(true);
      }
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
    
    // Collect conversation history for context
    const conversationHistory = messages.map(msg => ({
      role: msg.role === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));
    
    // Add user's new message
    conversationHistory.push({
      role: 'user',
      parts: [{ text: prompt }]
    });
  
    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{
            text: `You are DOC AI's Nutrition Planner, a specialized nutrition assistant chatbot. You create personalized nutrition plans based on users' goals, preferences, and health conditions.

When creating a nutrition plan, follow this structure:

If the user has provided enough information (goals, dietary preferences, allergies, and basic stats):

## Your Personalized Nutrition Plan

### Summary
*Brief overview of the nutrition plan based on user's goals*

### Daily Caloric Target
*Recommended calorie range with breakdown of macronutrients (proteins, carbs, fats)*

### Meal Structure
**Breakfast Options:**
- Option 1: [meal with approximate calories and macros]
- Option 2: [meal with approximate calories and macros] 
- Option 3: [meal with approximate calories and macros]

**Lunch Options:**
- Option 1: [meal with approximate calories and macros]
- Option 2: [meal with approximate calories and macros]
- Option 3: [meal with approximate calories and macros]

**Dinner Options:**
- Option 1: [meal with approximate calories and macros] 
- Option 2: [meal with approximate calories and macros]
- Option 3: [meal with approximate calories and macros]

**Snack Options:**
- Option 1: [snack with approximate calories]
- Option 2: [snack with approximate calories]
- Option 3: [snack with approximate calories]

### Hydration Recommendation
*Personalized water intake recommendation*

### Supplements to Consider
*Only if relevant based on dietary preferences and goals*

### Weekly Grocery List
*Basic grocery list to prepare the recommended meals*

### Nutrition Tips
*3-5 specific tips relevant to the user's goals*

*__Disclaimer:__ This nutrition plan is for informational purposes only and not medical advice. Consult with a registered dietitian or healthcare provider before making significant changes to your diet, especially if you have health conditions.*

If the user hasn't provided enough information, ask specific questions to gather the necessary details in a friendly, conversational manner.

Current conversation history: ${JSON.stringify(conversationHistory)}`
          }]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1000,
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

  // Example questions to help users get started
  const exampleQuestions = [
    "I need a weight loss plan, I'm vegetarian with no allergies. I'm 5'8\", 180 lbs, 34 years old and moderately active.",
    "Can you create a high-protein meal plan for building muscle? I eat everything, no restrictions. I'm 6'0\", 175 lbs, 28 years old and work out 5 days a week.",
    "I need a balanced diet plan for diabetes management. I avoid red meat and dairy. I'm 5'6\", 160 lbs, 45 years old with light activity.",
    "I'd like a vegan nutrition plan for maintenance. I'm allergic to nuts. I'm 5'4\", 135 lbs, 30 years old and do yoga daily."
  ];

  const useExampleQuestion = (question) => {
    setInput(question);
  };

  return (
    <div className="docai-chatbot-container nutrition-planner">
      <div className="docai-chatbot-header">
        <div className="docai-logo">
          <div className="docai-logo-icon nutrition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v1" />
              <path d="M12 21v-1" />
              <path d="M4.93 4.93l.7.7" />
              <path d="M18.36 18.36l.7.7" />
              <path d="M2 12h1" />
              <path d="M21 12h-1" />
              <path d="M4.93 19.07l.7-.7" />
              <path d="M18.36 5.64l.7-.7" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <h3>Nutrition Planner</h3>
        </div>
        <p>Personalized Diet Plans & Nutritional Guidance</p>
      </div>

      <div className="docai-chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`docai-message ${message.role}`}>
            {message.role === 'bot' && (
              <div className="docai-avatar">
                <div className="docai-avatar-icon nutrition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v1" />
                    <path d="M12 21v-1" />
                    <path d="M4.93 4.93l.7.7" />
                    <path d="M18.36 18.36l.7.7" />
                    <path d="M2 12h1" />
                    <path d="M21 12h-1" />
                    <path d="M4.93 19.07l.7-.7" />
                    <path d="M18.36 5.64l.7-.7" />
                    <circle cx="12" cy="12" r="4" />
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
              <div className="docai-avatar-icon nutrition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v1" />
                  <path d="M12 21v-1" />
                  <path d="M4.93 4.93l.7.7" />
                  <path d="M18.36 18.36l.7.7" />
                  <path d="M2 12h1" />
                  <path d="M21 12h-1" />
                  <path d="M4.93 19.07l.7-.7" />
                  <path d="M18.36 5.64l.7-.7" />
                  <circle cx="12" cy="12" r="4" />
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

      {!planCreated && (
        <div className="docai-example-questions">
          <p>Try these examples:</p>
          <div className="docai-example-buttons">
            {exampleQuestions.map((question, index) => (
              <button 
                key={index}
                onClick={() => useExampleQuestion(question)}
                className="docai-example-button"
              >
                {question.length > 60 ? question.substring(0, 60) + '...' : question}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="docai-chat-input">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Describe your nutrition goals, dietary preferences, and any restrictions..."
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
        <p>Note: The nutrition plans provided are for informational purposes only and not medical advice. Always consult with a registered dietitian for personalized guidance.</p>
      </div>
    </div>
  );
};

export default NutritionPlannerChatBot;