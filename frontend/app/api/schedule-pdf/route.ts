import { NextResponse } from "next/server";
import { getSchedules } from "@/lib/api";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") || "ocean";

  const data = await getSchedules(type);
  const schedules = data.data;

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = 800;
  page.drawText(`${type.toUpperCase()} FREIGHT SCHEDULE`, {
    x: 50,
    y,
    size: 18,
    font,
    color: rgb(0, 0, 0),
  });

  y -= 40;
  schedules.forEach((sch: any) => {
    page.drawText(`Title: ${sch.title}`, { x: 50, y, size: 12, font });
    y -= 20;

    sch.rows?.forEach((row: any, idx: number) => {
      page.drawText(
        `${idx + 1}. ${row.vesselName} - VOY: ${row.voyageNo} - ETD: ${
          row.etd
        } - ETA: ${row.eta}`,
        { x: 60, y, size: 10, font }
      );
      y -= 15;
    });

    y -= 20;
  });

  const pdfBytes = await pdfDoc.save();
  // 🔑 Chuyển Uint8Array → ArrayBuffer để chắc chắn tương thích
  const buffer = pdfBytes.buffer.slice(
    pdfBytes.byteOffset,
    pdfBytes.byteOffset + pdfBytes.byteLength
  );

  const pdfBlob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });

  return new NextResponse(pdfBlob, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${type}-schedule.pdf"`,
    },
  });
}
