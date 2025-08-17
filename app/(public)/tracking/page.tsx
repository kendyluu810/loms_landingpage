"use client";
import HeaderBreadcrums from "@/components/layout/Header_Breadcrumbs";
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
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero Image */}
      <HeaderBreadcrums />
      {/* Tracking  */}
      <Card className="max-w-7xl mx-auto mt-28 p-8 shadow-lg mb-5 w-[50%]">
        <CardHeader>
          <CardTitle className="text-5xl font-bold text-center">
            Tracking Information
          </CardTitle>
          <CardDescription className="text-lg mt-2 text-center">
            Look up information related to your order using the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div>
              <Label
                htmlFor="containerNumber"
                className="text-lg font-semibold"
              >
                Container Number / Bill of Lading Code{" "}
                <span className="text-destructive">*</span>
              </Label>
              <div className="flex gap-3">
                <Input
                  id="containerNumber"
                  type="text"
                  placeholder="Container Number"
                  className="rounded-2xl px-4 h-14"
                />
                <Button
                  type="submit"
                  className="rounded-2xl px-4 h-14 bg-green-600 hover:bg-[#a2d236] font-semibold text-lg"
                >
                  Search
                  <ChevronRight width={24} height={24} className="ml-1" />
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      {/* Tracking Results */}
      <Card className="max-w-4xl mx-auto p-6 shadow-lg mb-10 w-[70%]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Loads Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p>
              <strong>Customer:</strong>
            </p>
            <p>
              <strong>Email:</strong> 
            </p>
            <p>
              <strong>Phone:</strong> 
            </p>
          </div>

          <div>
            <p>
              <strong>Pickup:</strong>
            </p>
            <p>
              <strong>Delivery:</strong>{" "}
            </p>
            <p>
              <strong>Pickup Date:</strong>
            </p>
            <p>
              <strong>Delivery Date:</strong>{" "}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Status History:</h3>
            <ul className="list-disc ml-5">
              <li>
                <strong>status</strong> at:
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
