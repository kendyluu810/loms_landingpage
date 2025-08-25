"use client";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    transportation: "",
    typeOfShipment: "",
    containerType: "",
    containerNumber: "",
    weight: "",
    origin: "",
    destination: "",
    departureETA: "",
    typeOfGoods: "",
    otherInformation: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload: any = { ...formData };

      // ✅ convert datetime
      if (payload.departureETA) {
        payload.departureETA = new Date(payload.departureETA).toISOString();
      }

      // ✅ convert richtext
      if (payload.otherInformation) {
        payload.otherInformation = [
          {
            type: "paragraph",
            children: [{ type: "text", text: payload.otherInformation }],
          },
        ];
      }

      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to submit form");

      toast.success("Form submitted successfully!");
      setFormData({
        fullname: "",
        phoneNumber: "",
        email: "",
        transportation: "",
        typeOfShipment: "",
        containerType: "",
        containerNumber: "",
        weight: "",
        origin: "",
        destination: "",
        departureETA: "",
        typeOfGoods: "",
        otherInformation: "",
      });
    } catch (err: any) {
      toast.error("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Form */}
      <Card className="w-full max-w-7xl mx-auto mt-20 p-6 md:p-10 shadow-lg mb-10">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold text-green-600">
            Freight Rate Consultation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            onSubmit={handleSubmit}
          >
            {/* Left */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>

              <div className="space-y-2">
                <Label htmlFor="fullname" className="font-medium">
                  Fullname <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullname"
                  value={formData.fullname}
                  onChange={(e) => handleChange("fullname", e.target.value)}
                  placeholder="Enter your fullname"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <h3 className="text-2xl font-semibold pt-4">Goods Details</h3>

              <div className="space-y-2">
                <Label htmlFor="typeOfGoods" className="font-medium">
                  Type of Goods
                </Label>
                <Input
                  id="typeOfGoods"
                  value={formData.typeOfGoods}
                  onChange={(e) => handleChange("typeOfGoods", e.target.value)}
                  placeholder="Enter type of goods"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="otherInformation" className="font-medium">
                  Other Information
                </Label>
                <Input
                  id="otherInformation"
                  value={formData.otherInformation}
                  onChange={(e) =>
                    handleChange("otherInformation", e.target.value)
                  }
                  placeholder="Enter other information"
                  className="h-20"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Shipment Details</h3>

              <div className="space-y-2">
                <Label className="font-medium">
                  Transportation <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.transportation}
                  onValueChange={(value) =>
                    handleChange("transportation", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Transportation by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sea">Sea</SelectItem>
                    <SelectItem value="Air">Air</SelectItem>
                    <SelectItem value="Land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="font-medium">
                  Type of Shipment <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.typeOfShipment}
                  onValueChange={(value) =>
                    handleChange("typeOfShipment", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type of shipment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FCL">FCL</SelectItem>
                    <SelectItem value="LCL">LCL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Container type + number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-medium">Container Type</Label>
                  <Select
                    value={formData.containerType}
                    onValueChange={(value) =>
                      handleChange("containerType", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select container type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="container20ft">20ft</SelectItem>
                      <SelectItem value="container40ft">40ft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-medium">Container Number</Label>
                  <Input
                    id="containerNumber"
                    value={formData.containerNumber}
                    onChange={(e) =>
                      handleChange("containerNumber", e.target.value)
                    }
                    placeholder="Enter container number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-medium">Weight (kg)</Label>
                <Input
                  type="number"
                  id="weight"
                  value={formData.weight}
                  onChange={(e) => handleChange("weight", e.target.value)}
                  placeholder="Enter weight"
                />
              </div>

              {/* Origin + Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-medium">Origin</Label>
                  <Input
                    id="origin"
                    value={formData.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                    placeholder="Enter origin"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-medium">Destination</Label>
                  <Input
                    id="destination"
                    value={formData.destination}
                    onChange={(e) =>
                      handleChange("destination", e.target.value)
                    }
                    placeholder="Enter destination"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-medium">Departure ETA</Label>
                <Input
                  type="datetime-local"
                  id="departureETA"
                  value={formData.departureETA}
                  onChange={(e) => handleChange("departureETA", e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="col-span-1 lg:col-span-2 text-center">
              <Button
                type="submit"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
