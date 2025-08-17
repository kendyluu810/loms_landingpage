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
import Image from "next/image";
import { useState } from "react";

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

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBreadcrums />
      {/* Form */}
      <Card className="max-w-7xl mx-auto mt-28 p-8 shadow-lg mb-5">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-bold text-green-500">
            Freight Rate Consultation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={handleSubmit}
          >
            {/* Left */}
            <div className="flex flex-col space-y-4 ">
              <div className="flex flex-col space-y-4">
                <h3 className="text-3xl font-semibold">Contact Information</h3>
                <div className="mb-4 space-y-2 w-full ">
                  <Label htmlFor="fullname" className="text-lg font-semibold">
                    Fullname: <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="fullname"
                    placeholder="Enter your fullname"
                    value={formData.fullname}
                    onChange={(e) => handleChange("fullname", e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 space-y-2 w-full ">
                  <Label
                    htmlFor="phoneNumber"
                    className="text-lg font-semibold"
                  >
                    Phone Number: <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="phone"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleChange("phoneNumber", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="mb-4 space-y-2 w-full ">
                  <Label htmlFor="email" className="text-lg font-semibold">
                    Email: <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-3xl font-semibold">Goods Details</h3>
                <div className="mb-4 space-y-2 w-full ">
                  <Label
                    htmlFor="typeOfGoods"
                    className="text-lg font-semibold"
                  >
                    Type of Goods
                  </Label>
                  <Input
                    type="text"
                    id="typeOfGoods"
                    placeholder="Enter type of goods"
                    value={formData.typeOfGoods}
                    onChange={(e) =>
                      handleChange("typeOfGoods", e.target.value)
                    }
                  />
                </div>
                <div className="mb-4 space-y-2 w-full ">
                  <Label
                    htmlFor="otherInformation"
                    className="text-lg font-semibold"
                  >
                    Other Information
                  </Label>
                  <Input
                    type="text"
                    id="otherInformation"
                    placeholder="Enter other information"
                    value={formData.otherInformation}
                    onChange={(e) =>
                      handleChange("otherInformation", e.target.value)
                    }
                    className="h-20"
                  />
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-3xl font-semibold">Goods details</h3>
              <div className="mb-4 space-y-2 w-full">
                <Label
                  htmlFor="transportation"
                  className="text-lg font-semibold"
                >
                  Transportation <span className="text-destructive">*</span>
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
              <div className="mb-4 space-y-2 w-full">
                <Label
                  htmlFor="typeOfShipment"
                  className="text-lg font-semibold"
                >
                  Type of Shipment <span className="text-destructive">*</span>
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
              <div className="flex flex-row space-x-3">
                <div className="mb-4 space-y-2 w-full">
                  <Label
                    htmlFor="containerType"
                    className="text-lg font-semibold"
                  >
                    Container Type
                  </Label>
                  <Select
                    value={formData.containerType}
                    onValueChange={(value) =>
                      handleChange("containerType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select container type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20ft">20ft</SelectItem>
                      <SelectItem value="40ft">40ft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4 space-y-2 w-full">
                  <Label
                    htmlFor="containerNumber"
                    className="text-lg font-semibold"
                  >
                    Container Number
                  </Label>
                  <Input
                    id="containerNumber"
                    placeholder="Enter container number"
                    value={formData.containerNumber}
                    onChange={(e) =>
                      handleChange("containerNumber", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="mb-4 space-y-2 w-full">
                <Label htmlFor="weight" className="text-lg font-semibold">
                  Weight (kg)
                </Label>
                <Input
                  type="number"
                  id="weight"
                  placeholder="Enter weight"
                  value={formData.weight}
                  onChange={(e) => handleChange("weight", e.target.value)}
                />
              </div>
              <div className="flex flex-row space-x-3">
                <div className="mb-4 space-y-2 w-full">
                  <Label htmlFor="origin" className="text-lg font-semibold">
                    Origin
                  </Label>
                  <Input
                    id="origin"
                    placeholder="Enter origin"
                    value={formData.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                  />
                </div>
                <div className="mb-4 space-y-2 w-full">
                  <Label
                    htmlFor="destination"
                    className="text-lg font-semibold"
                  >
                    Destination
                  </Label>
                  <Input
                    id="destination"
                    placeholder="Enter destination"
                    value={formData.destination}
                    onChange={(e) =>
                      handleChange("destination", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="mb-4 space-y-2 w-full">
                <Label htmlFor="departureETA" className="text-lg font-semibold">
                  Departure ETA
                </Label>
                <Input
                  type="time"
                  id="departureETA"
                  placeholder="Enter departure ETA"
                  value={formData.departureETA}
                  onChange={(e) => handleChange("departureETA", e.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="mt-8 text-center">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
