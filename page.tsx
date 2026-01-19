import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Calendar, FileText, ClipboardCheck, Microscope, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SurgicalExamHub() {
  const [page, setPage] = useState("home");

  const sections = [
    { title: "MRCS Preparation", icon: BookOpen, desc: "Core surgical principles, anatomy, pathology and basic sciences tailored for MRCS success." },
    { title: "FRCS T&O Written", icon: FileText, desc: "High-yield SBA topics across subspecialties with structured revision pathways." },
    { title: "Viva & Clinicals", icon: Brain, desc: "Focused viva frameworks, short case structure and examiner-style questioning." },
    { title: "Biomechanics Simplified", icon: Microscope, desc: "Understand mechanical principles tested heavily in both MRCS and FRCS." },
    { title: "Study Timelines", icon: Calendar, desc: "Structured week-by-week revision plans for busy trainees." },
    { title: "Question Bank Strategy", icon: ClipboardCheck, desc: "How to use SBAs and past questions efficiently to maximise scores." },
  ];

  if (page === "about") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" className="mb-6" onClick={() => setPage("home")}>← Back to Home</Button>
          <h1 className="text-4xl font-bold mb-6">About Surgical Exam Hub</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Surgical Exam Hub was created to provide focused, high-yield revision material for trainees preparing for the MRCS and FRCS (Trauma & Orthopaedics) examinations.
            </p>
            <p>
              The platform is designed by surgeons who understand exactly how these exams are tested — combining core theory, biomechanics, anatomy, clinical reasoning and viva structure into a clear and exam-oriented format.
            </p>
            <p>
              Our goal is simple: remove noise, highlight what actually scores marks, and give trainees structured pathways to pass efficiently even with busy clinical schedules.
            </p>
            <p>
              Content will continue to expand across subspecialty FRCS topics, viva scenarios, rapid revision guides and strategic SBA learning.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Surgical Exam Hub</h1>
          <Button variant="outline" className="rounded-xl flex gap-2" onClick={() => setPage("about")}>
            <User className="w-4 h-4" /> About
          </Button>
        </div>

        <div className="text-center mb-10">
          <p className="text-gray-600 text-lg">
            A dedicated revision resource for surgical trainees preparing for MRCS and FRCS (Trauma & Orthopaedics).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <s.icon className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <Button className="w-full rounded-xl">Open Section</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-gray-400">
          Built for trainees · MRCS & FRCS Trauma & Orthopaedics
        </div>
      </motion.div>
    </div>
  );
}