// netlify/functions/gemini.js

// Fungsi ini akan berjalan di server Netlify, bukan di browser pengguna.
exports.handler = async function (event, context) {
  // 1. Ambil API Key dari environment variable yang aman di Netlify
  const apiKey = process.env.GEMINI_API_KEY;

  // 2. Ambil prompt yang dikirim dari website Anda
  const { prompt } = JSON.parse(event.body);

  if (!prompt) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Prompt tidak boleh kosong." }),
    };
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

  try {
    // 3. Lakukan panggilan ke Google Gemini dari server Netlify
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error:
            errorData.error.message || "Terjadi kesalahan pada API Google.",
        }),
      };
    }

    const result = await response.json();
    const textResult = result.candidates[0].content.parts[0].text;

    // 4. Kirim kembali hasilnya ke website Anda
    return {
      statusCode: 200,
      body: JSON.stringify({ result: textResult }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
