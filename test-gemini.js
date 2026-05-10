const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyDJpRwC7QhIOlG9ovZB9zAfTr7XRHjbgww');
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function test() {
  try {
    const result = await model.generateContent("Test connection");
    console.log(result.response.text());
  } catch (error) {
    console.error("Error Details:", error);
  }
}

test();
