
import { GoogleGenAI } from "@google/genai";

export const getCourseAssistantResponse = async (prompt: string, context: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const systemInstruction = `You are a helpful study assistant for an LMS platform. 
    The student is currently viewing a lesson. 
    Context of the lesson: ${context}. 
    Provide concise, helpful, and encouraging responses.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
};
