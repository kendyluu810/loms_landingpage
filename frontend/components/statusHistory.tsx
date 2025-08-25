import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatusItem {
  status: string;
  timestamp: string;
}

export default function StatusTimeline({ history }: { history: StatusItem[] }) {
  if (!history || history.length === 0) {
    return <p>No status history available.</p>;
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Status History</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="relative border-l border-gray-300">
          {history.map((item, index) => (
            <li key={index} className="mb-6 ml-4">
              {/* Dot */}
              <div
                className={cn(
                  "absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white"
                )}
              ></div>

              {/* Status + Time */}
              <h3 className="text-lg font-semibold capitalize">{item.status}</h3>
              <time className="block mb-1 text-sm text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </time>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
