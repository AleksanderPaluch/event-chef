import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, eventType, guests, date, location, message, representType, lang = "pl" } = req.body;
  console.log("lang received:", lang);

  const isEnglish = lang === "en";
    const langLabel = isEnglish
      ? "🇬🇧 English — odpowiedz po angielsku"
      : "🇵🇱 Polski — odpowiedz po polsku";

    try {
    // ── Email 1: Confirmation to the client ──────────────────────────────
    await resend.emails.send({
      from: "EventChef <no-reply@eventchef.pl>",
      to: email,
      subject: "Otrzymaliśmy Twoje zapytanie – EventChef",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="font-size: 22px; margin-bottom: 8px;">Cześć, ${name}! 👋</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #444;">
            Dziękujemy za przesłanie zapytania. Otrzymaliśmy Twoją wiadomość i już pracujemy nad spersonalizowaną ofertą.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #444;">
            Odpiszemy do Ciebie w ciągu <strong>24 godzin</strong>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="font-size: 13px; color: #999;">
            EventChef · eventchef.pl
          </p>
        </div>
      `,
    });

    // ── Email 2: Lead notification to owner ──────────────────────────────
    await resend.emails.send({
      from: "EventChef Forms <no-reply@eventchef.pl>",
      to: "biuro@eventchef.pl",
      subject: `Nowe zapytanie od ${name} – ${eventType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="font-size: 20px; margin-bottom: 4px;">📋 Nowe zapytanie</h2>
          <p style="color: #666; font-size: 14px; margin-bottom: 24px;">Przesłane przez formularz na eventchef.pl</p>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; color: #888; width: 160px;">Imię i nazwisko</td>
              <td style="padding: 10px 8px; font-weight: 500;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee; background: #fafafa;">
              <td style="padding: 10px 8px; color: #888;">E-mail</td>
              <td style="padding: 10px 8px;"><a href="mailto:${email}" style="color: #000;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; color: #888;">Reprezentuje</td>
              <td style="padding: 10px 8px;">${representType === "company" ? `Firma: ${company || "—"}` : "Osoba prywatna"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee; background: #fafafa;">
              <td style="padding: 10px 8px; color: #888;">Typ eventu</td>
              <td style="padding: 10px 8px;">${eventType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; color: #888;">Liczba gości</td>
              <td style="padding: 10px 8px;">${guests}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee; background: #fafafa;">
              <td style="padding: 10px 8px; color: #888;">Data eventu</td>
              <td style="padding: 10px 8px;">${date || "—"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; color: #888;">Lokalizacja</td>
              <td style="padding: 10px 8px;">${location || "—"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; color: #888;">Język formularza</td>
              <td style="padding: 10px 8px; font-weight: 600;">${langLabel}</td>
            </tr>
            <tr style="background: #fafafa;">
              <td style="padding: 10px 8px; color: #888; vertical-align: top;">Wiadomość</td>
              <td style="padding: 10px 8px; white-space: pre-wrap;">${message || "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <a href="mailto:${email}" style="display: inline-block; background: #000; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 14px;">
              Odpowiedz klientowi
            </a>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
