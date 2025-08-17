import dbConnect from "@/lib/mongodb";
import Activity from "@/models/Activity";

export async function GET() {
  await dbConnect();
  const activities = await Activity.find();
  return Response.json(activities);
}
