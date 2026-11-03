"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CONTACT_CONFIG } from "@/config/contact";
import { BRAND_CONFIG } from "@/config/brand";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceArea: CONTACT_CONFIG.serviceAreas[0],
    requirement: "20L Jars (Home)",
    quantity: "2",
    notes: "",
    honeypot: "", // anti-spam field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your name and contact phone number.");
      return;
    }

    setStatus("submitting");

    // Construct WhatsApp order link as direct backup or instant redirect
    const orderDetails = `*Order Inquiry for KALASH Drinking Water*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Pune Area:* ${encodeURIComponent(
      formData.serviceArea
    )}%0A*Plan:* ${encodeURIComponent(
      formData.requirement
    )} (${encodeURIComponent(formData.quantity)} units)%0A*Notes:* ${encodeURIComponent(
      formData.notes || "Standard delivery"
    )}`;

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-custom">
        <SectionHeading
          overline="Direct Supply & Ordering"
          title="MAKE KALASH PART OF YOUR EVERYDAY."
          subtitle="Choose the most convenient way to reach us. Whether via instant WhatsApp dispatch, a direct phone call, or our online scheduling form, our Pune team is ready to serve you."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Fast Actions & Hub Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-ocean text-white shadow-lg space-y-6 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="text-xs font-mono font-semibold tracking-widest uppercase text-nature-leaf">
                  Direct Immediate Actions
                </span>
                <h3 className="text-2xl font-display font-medium text-white">
                  Fastest Way to Order
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  For immediate delivery requests, our dispatch coordinators respond directly on WhatsApp and phone during operational hours.
                </p>

                <div className="pt-2 space-y-3">
                  <Button
                    href={CONTACT_CONFIG.whatsappMessageTemplate()}
                    external
                    variant="nature"
                    size="lg"
                    className="w-full justify-center"
                    icon={MessageSquare}
                  >
                    WhatsApp Us Directly
                  </Button>

                  <Button
                    href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                    external
                    variant="white"
                    size="lg"
                    className="w-full justify-center"
                    icon={Phone}
                  >
                    Call {CONTACT_CONFIG.phone}
                  </Button>
                </div>
              </div>
            </div>

            {/* Operational Hub Card */}
            <div className="p-8 rounded-3xl bg-surface-ice border border-slate-200/80 space-y-5">
              <h4 className="text-lg font-medium text-ocean flex items-center gap-2">
                <MapPin className="w-5 h-5 text-nature" />
                <span>Pune Service Coordination</span>
              </h4>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-ocean shrink-0" />
                  <span>{CONTACT_CONFIG.operatingHours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-ocean shrink-0" />
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="hover:text-ocean underline"
                  >
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 border-t border-slate-200/60">
                <p className="font-semibold text-ocean mb-1">Guaranteed Service Areas:</p>
                <p>{CONTACT_CONFIG.serviceAreas.slice(0, 5).join(", ")}, and surrounding Pune zones.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule / Order Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md">
              <h3 className="text-2xl font-display font-medium text-ocean mb-2">
                Schedule a Delivery or Corporate Inquiry
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Fill in your details below and our Pune coordination desk will confirm your delivery slot.
              </p>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-nature-soft border border-nature/30 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-nature-emerald mx-auto" />
                  <h4 className="text-xl font-display font-semibold text-ocean">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-ocean">{formData.name}</span>. Our Pune logistics coordinator will contact you shortly at <span className="font-semibold text-ocean">{formData.phone}</span>.
                  </p>
                  <div className="pt-4 flex justify-center">
                    <Button
                      href={CONTACT_CONFIG.whatsappMessageTemplate(
                        `${formData.requirement} for ${formData.serviceArea}`
                      )}
                      external
                      variant="primary"
                      size="md"
                      icon={MessageSquare}
                    >
                      Instant WhatsApp Confirmation
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="website_url"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98220 00000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Pune Delivery Area *
                      </label>
                      <select
                        value={formData.serviceArea}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceArea: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none text-sm bg-white transition-all"
                      >
                        {CONTACT_CONFIG.serviceAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Hydration Plan / Format
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) =>
                          setFormData({ ...formData, requirement: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none text-sm bg-white transition-all"
                      >
                        <option value="20L Jars (Home Delivery)">
                          20L Jars (Residential Routine)
                        </option>
                        <option value="20L Jars (Corporate Office)">
                          20L Jars (Office & Workplace)
                        </option>
                        <option value="Packaged 1L / 500ml Cartons">
                          Packaged Bottles (Event / Dining)
                        </option>
                        <option value="Dispenser Station Setup">
                          Dispenser Stand & Tap Station
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Delivery Address / Specific Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Apartment name, street, preferred delivery time or weekly frequency..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none text-sm transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full justify-center"
                    icon={Send}
                  >
                    {status === "submitting" ? "Submitting Inquiry..." : "Submit Delivery Request"}
                  </Button>

                  <p className="text-[11px] text-slate-400 text-center">
                    We respect your privacy. Your details are used solely to coordinate your drinking water delivery in Pune.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

