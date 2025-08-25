"use client";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import StatusTimeline from "@/components/statusHistory";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TrackingPage() {
  const [loadId, setLoadId] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loadId) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_LOMS_URL
        }/api/load_board/tracking/${encodeURIComponent(loadId)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Không tìm thấy đơn hàng");
      }

      setData(json.data);
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      {/* Hero Image */}
      <HeaderBreadcrums />
      {/* Tracking  */}
      <Card className="max-w-4xl w-full mx-auto mt-16 p-6 sm:p-8 shadow-lg mb-5">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-5xl font-bold text-center">
            Tracking Information
          </CardTitle>
          <CardDescription className="text-base sm:text-lg mt-2 text-center">
            Look up information related to your order using the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={fetchTracking} className="w-full">
            <div>
              <Label
                htmlFor="loadId"
                className="text-base sm:text-lg font-semibold mb-2 block"
              >
                Container Number / Bill of Lading Code{" "}
                <span className="text-destructive">*</span>
              </Label>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  id="loadId"
                  type="text"
                  placeholder="Enter Load ID"
                  className="rounded-2xl px-4 h-12 sm:h-14 flex-1"
                  value={loadId}
                  onChange={(e) => setLoadId(e.target.value)}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-2xl px-4 h-12 sm:h-14 bg-green-600 hover:bg-[#a2d236] font-semibold text-base sm:text-lg"
                >
                  {loading ? "Searching..." : "Search"}
                  <ChevronRight width={24} height={24} className="ml-1" />
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Error */}
      {error && <p className="text-red-500 text-lg mt-3">{error}</p>}

      {/* Data Display */}
      {data && (
        <Card className="max-w-5xl w-full mx-auto p-6 sm:p-8 shadow-lg mb-10">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-semibold">
              Load Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Customer Info */}
            <section>
              <h3 className="font-semibold text-xl mb-3">
                Customer Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <p>
                  <strong>Company:</strong> {data.customer?.companyName}
                </p>
                <p>
                  <strong>Email:</strong> {data.customer?.companyEmail}
                </p>
                <p>
                  <strong>Phone:</strong> {data.customer?.companyPhone}
                </p>
                <p>
                  <strong>Contact Person:</strong>{" "}
                  {data.customer?.contactPerson}
                </p>
                <p>
                  <strong>Contact Email:</strong> {data.customer?.contactEmail}
                </p>
                <p>
                  <strong>Contact Phone:</strong> {data.customer?.contactPhone}
                </p>
              </div>
            </section>

            {/* Shipment Info */}
            <section>
              <h3 className="font-semibold text-xl mb-3">
                Shipment Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <p>
                  <strong>Item Category:</strong> {data.shipment?.itemCategory}
                </p>
                <p>
                  <strong>Weight:</strong> {data.shipment?.weight} kg
                </p>
                <p>
                  <strong>Rate:</strong> {data.shipment?.rate} VND
                </p>
                <p>
                  <strong>Pickup Point:</strong>{" "}
                  {data.shipment?.pickupPoint?.code}
                </p>
                <p>
                  <strong>Stop Point:</strong> {data.shipment?.stopPoint?.code}
                </p>
                <p>
                  <strong>Delivery Point:</strong>{" "}
                  {data.shipment?.deliveryPoint?.code}
                </p>
              </div>
            </section>

            {/* Current Status */}
            <section>
              <h3 className="font-semibold text-xl mb-3">Current Status</h3>
              <p className="px-3 py-2 rounded-lg bg-green-50 border border-green-200 inline-block">
                <strong>{data.currentStatus}</strong>
              </p>
            </section>

            {/* Status History */}
            <StatusTimeline history={data.statusHistory} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
