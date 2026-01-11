import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { firstName, lastName, email, phone, company, role, message, services = [] } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const serviceLabels = {
      itConsulting: "IT Consulting",
      uiUxDesign: "UI / UX Design",
      cloudSolution: "Cloud Solution",
      aiMachineLearning: "AI & Machine Learning",
      technicalSupport: "Technical Support",
      devOpsServices: "DevOps Services",
    };

    const selectedServices = services
      .map((key) => serviceLabels[key])
      .filter(Boolean)
      .join(", ");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "antan.n@valtixcube.com",
        pass: "ohha cdzj mmgy bduz",
      },
    });

    await transporter.sendMail({
      from: `"Valtixcube Contact" <${process.env.EMAIL_USER}>`,
      to: "antan.joe@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px 0;font-family:Arial,sans-serif;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;">

                <!-- HEADER -->
                <tr>
                  <td style="background:#0f172a;padding:20px 30px;">
                    <h2 style="margin:0;color:#ffffff;font-size:20px;">
                      New Contact Form Submission
                    </h2>
                    <p style="margin:5px 0 0;color:#cbd5e1;font-size:13px;">
                      Submitted via website contact page
                    </p>
                  </td>
                </tr>

                <!-- BODY -->
                <tr>
                  <td style="padding:25px 30px;color:#1f2937;">
                    <table width="100%" cellpadding="0" cellspacing="0">

                      <tr>
                        <td style="padding:8px 0;font-weight:bold;width:160px;">Name</td>
                        <td style="padding:8px 0;">${firstName} ${lastName || ""}</td>
                      </tr>

                      <tr>
                        <td style="padding:8px 0;font-weight:bold;">Email</td>
                        <td style="padding:8px 0;">${email}</td>
                      </tr>

                      <tr>
                        <td style="padding:8px 0;font-weight:bold;">Phone</td>
                        <td style="padding:8px 0;">${phone || "-"}</td>
                      </tr>

                      <tr>
                        <td style="padding:8px 0;font-weight:bold;">Company</td>
                        <td style="padding:8px 0;">${company || "-"}</td>
                      </tr>

                      <tr>
                        <td style="padding:8px 0;font-weight:bold;">Role</td>
                        <td style="padding:8px 0;">${role || "-"}</td>
                      </tr>

                      <tr>
                        <td style="padding:8px 0;font-weight:bold;vertical-align:top;">
                          Services
                        </td>
                        <td style="padding:8px 0;">
                          ${selectedServices || "None"}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:8px 0;font-weight:bold;vertical-align:top;">
                          Message
                        </td>
                        <td style="padding:8px 0;line-height:1.5;">
                          ${message}
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="background:#f1f5f9;padding:15px 30px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#64748b;">
                      This message was sent from the Contact Us page of
                      <strong>ValtixCube</strong>
                    </p>
                    <p style="margin:5px 0 0;font-size:12px;color:#94a3b8;">
                      © ${new Date().getFullYear()} ValtixCube. All rights reserved.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      `,

    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
