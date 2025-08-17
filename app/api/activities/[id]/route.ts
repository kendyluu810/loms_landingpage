import dbConnect from "@/lib/mongodb";
import Activity from "@/models/Activity";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const activity = await Activity.findById(params.id);
  if (!activity) return new Response("Not Found", { status: 404 });
  return Response.json(activity);
}
