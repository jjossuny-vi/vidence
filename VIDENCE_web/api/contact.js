import process from 'node:process';

/** Server-only inquiry delivery. Credentials must never use a VITE_ prefix. */
export default async function contactHandler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false });
  }
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ success: false });
  }
  const { name, email, company = '', message } = body || {};
  if (typeof name !== 'string' || !name.trim() || name.length > 100 ||
    typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof company !== 'string' || company.length > 200 ||
    typeof message !== 'string' || !message.trim() || message.length > 5000) {
    return res.status(400).json({ success: false });
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return res.status(503).json({ success: false });
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL || 'jjossuny@vidence.co.kr'],
        reply_to: email,
        subject: 'VIDENCE 웹사이트 문의',
        text: `이름: ${name.trim()}\n회신 이메일: ${email}\n회사 / 기관: ${company.trim()}\n\n${message.trim()}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return res.status(502).json({ success: false });
    const result = await response.json();
    if (!result.id) return res.status(502).json({ success: false });
    return res.status(200).json({ success: true });
  } catch {
    return res.status(502).json({ success: false });
  }
}
