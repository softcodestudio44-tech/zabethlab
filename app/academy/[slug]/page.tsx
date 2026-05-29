"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle2,
  PlayCircle,
  Users,
  Star,
  Lock,
  Loader2,
  BookMarked,
  GraduationCap
} from "lucide-react";
import { getCourseBySlug } from "@/data/academy";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getUser } from "@/lib/supabase";

interface PaystackButtonProps {
  email: string;
  amount: number;
  courseName: string;
  onSuccess: (reference: string) => void;
  onClose: () => void;
}

function PaystackButton({ 
  email, 
  amount, 
  courseName, 
  onSuccess, 
  onClose 
}: PaystackButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const initializePayment = async () => {
    setIsLoading(true);
    
    try {
      const PaystackPop = (await import("@paystack/inline-js")).default;
      
      const popup = new PaystackPop();
      
      popup.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
        email: email,
        amount: amount,
        currency: "NGN",
        ref: `${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        metadata: {
          course: courseName,
        },
        onSuccess: (transaction: any) => {
          onSuccess(transaction.reference);
          setIsLoading(false);
        },
        onCancel: () => {
          onClose();
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error("Payment error:", error);
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={initializePayment}
      disabled={isLoading}
      className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white mb-4"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <PlayCircle className="w-5 h-5 mr-2" />
          Pay ₦{(amount / 100).toLocaleString()}
        </>
      )}
    </Button>
  );
}

interface Props {
  params: { slug: string };
}

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseBySlug(params.slug);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    getUser().then((u) => {
      setUser(u);
      setLoadingUser(false);
    });
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Course Not Found</h1>
          <Link href="/academy" className="text-[#228B22] hover:underline">
            Back to Academy
          </Link>
        </div>
      </div>
    );
  }

  const isComingSoon = !course.isPublished;
  const isBook = course.type === "book"; // ← CHECK IF BOOK

  const handleLoginClick = () => {
    localStorage.setItem('redirectAfterLogin', window.location.pathname);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#228B22]/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            href="/academy" 
            className="inline-flex items-center text-zinc-400 hover:text-[#228B22] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Academy
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {/* ← ADDED: Book or Course badge */}
                <Badge className={isBook ? "bg-amber-500/20 text-amber-400 border-amber-500/30" : "bg-blue-500/20 text-blue-400 border-blue-500/30"}>
                  {isBook ? (
                    <>
                      <BookMarked className="w-3 h-3 mr-1" />
                      Book
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-3 h-3 mr-1" />
                      Course
                    </>
                  )}
                </Badge>
                
                <Badge className="bg-[#228B22]/20 text-[#228B22] border-[#228B22]/30">
                  {course.level}
                </Badge>
                <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700">
                  {course.category}
                </Badge>
                {course.bookSource && (
                  <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Bestseller
                  </Badge>
                )}
                {isComingSoon && (
                  <Badge className="bg-zinc-800 text-zinc-400 border-zinc-700">
                    <Lock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {course.title}
              </h1>
              
              <p className="text-xl text-[#228B22] mb-4 font-medium">
                {course.subtitle}
              </p>
              
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                {course.description}
              </p>

              {/* Instructor */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <div className="w-14 h-14 rounded-full bg-[#228B22]/20 flex items-center justify-center">
                  <span className="text-[#228B22] font-bold">EA</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{course.instructor.name}</p>
                  <p className="text-sm text-zinc-400">{course.instructor.title}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                  <Clock className="w-5 h-5 text-[#228B22] mx-auto mb-2" />
                  <div className="text-white font-semibold">{course.duration}</div>
                  <div className="text-xs text-zinc-500">{isBook ? "Read Time" : "Duration"}</div>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                  <BookOpen className="w-5 h-5 text-[#228B22] mx-auto mb-2" />
                  <div className="text-white font-semibold">{course.lessons}</div>
                  <div className="text-xs text-zinc-500">{isBook ? "Chapters" : "Lessons"}</div>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                  <Users className="w-5 h-5 text-[#228B22] mx-auto mb-2" />
                  <div className="text-white font-semibold">500+</div>
                  <div className="text-xs text-zinc-500">{isBook ? "Readers" : "Students"}</div>
                </div>
              </div>
            </div>

            {/* Right: Enrollment / Purchase Card */}
            <div className="lg:sticky lg:top-24">
              <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
                {/* Course Image */}
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl mb-6 overflow-hidden relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-white">
                      ₦{course.price.naira.toLocaleString()}
                    </span>
                    <span className="text-zinc-500">/ ${course.price.dollar}</span>
                  </div>
                  <p className="text-sm text-zinc-500">
                    {isBook ? "Physical book + Digital access" : "One-time payment • Lifetime access"}
                  </p>
                </div>

                {/* ← BOOK: Show purchase link */}
                {isBook ? (
                  <a 
                    href={course.bookPurchaseLink || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mb-4">
                      <BookMarked className="w-5 h-5 mr-2" />
                      Get the Book
                    </Button>
                  </a>
                ) : paymentSuccess ? (
                  /* ← COURSE: Payment success shows Telegram */
                  <div className="text-center p-4 bg-[#228B22]/20 border border-[#228B22]/30 rounded-xl mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#228B22] mx-auto mb-2" />
                    <p className="text-white font-semibold mb-1">Payment Successful!</p>
                    <p className="text-sm text-zinc-400 mb-4">Join your course group on Telegram</p>
                    <a 
                      href={course.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#0088cc] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0077b5] transition-colors"
                    >
                      Join Telegram Group
                    </a>
                    {!course.telegramLink && (
                      <p className="text-xs text-yellow-500 mt-2">
                        ⚠️ Telegram link not set
                      </p>
                    )}
                  </div>
                ) : isComingSoon ? (
                  <Button 
                    size="lg" 
                    disabled
                    className="w-full bg-zinc-700 text-zinc-400 cursor-not-allowed mb-4"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Coming {course.launchDate}
                  </Button>
                ) : loadingUser ? (
                  <Button 
                    disabled
                    className="w-full bg-zinc-700 text-zinc-400 cursor-not-allowed mb-4"
                  >
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading...
                  </Button>
                ) : !user ? (
                  <Link href="/login" onClick={handleLoginClick}>
                    <Button className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white mb-4">
                      <Lock className="w-4 h-4 mr-2" />
                      Login to Enroll
                    </Button>
                  </Link>
                ) : (
                  <PaystackButton
                    email={user.email}
                    amount={course.price.naira * 100}
                    courseName={course.title}
                    onSuccess={(ref) => {
                      console.log("Payment successful!", ref);
                      setPaymentSuccess(true);
                    }}
                    onClose={() => {
                      console.log("Payment cancelled");
                    }}
                  />
                )}

                {!isBook && !isComingSoon && !paymentSuccess && (
                  <p className="text-center text-zinc-500 text-sm">
                    30-day satisfaction guarantee
                  </p>
                )}

                <div className="mt-6 pt-6 border-t border-zinc-800 space-y-3">
                  {isBook ? (
                    <>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        <span>Physical book delivered</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        <span>Digital PDF included</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        <span>Author-signed copy option</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-[#228B22]" />
                        <span>Full course access</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-[#228B22]" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-[#228B22]" />
                        <span>Telegram community access</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-[#228B22]" />
                        <span>Future updates included</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course / Book Content */}
      <section className="py-16 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {isBook ? "What's Inside" : "What You'll Learn"}
          </h2>

          <div className="space-y-6">
            {course.modules.map((module, index) => (
              <motion.div 
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#228B22]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#228B22]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#228B22] font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-semibold text-white">
                        {module.title}
                      </h3>
                      {module.practicalLab && !isBook && (
                        <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-xs">
                          Practical Lab
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-zinc-400 text-sm mb-4">
                      {module.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {module.duration}
                      </span>
                      <span>{module.topics.length} {isBook ? "sections" : "topics"}</span>
                    </div>

                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-2 text-sm text-zinc-500"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#228B22] mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification (only for courses) */}
      {!isBook && (
        <section className="py-16 bg-gradient-to-b from-[#228B22]/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 bg-zinc-900/50 border border-[#228B22]/30 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 bg-[#228B22]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-[#228B22]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {course.certification.title}
                  </h3>
                  <p className="text-zinc-400 mb-2">
                    {course.certification.description}
                  </p>
                  <p className="text-sm text-[#228B22]">
                    Valid for: {course.certification.validFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isBook ? "Ready to Start Reading?" : "Ready to Transform Your Skills?"}
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            {isBook 
              ? "Get your copy today and begin your journey to confidence and care."
              : "Join the community of women who are choosing confidence over comparison, and nature over chemicals. Your journey starts here."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isBook ? (
              <a 
                href={course.bookPurchaseLink || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8"
                >
                  <BookMarked className="w-5 h-5 mr-2" />
                  Get the Book
                </Button>
              </a>
            ) : (
              <Button 
                size="lg" 
                disabled={isComingSoon}
                className="bg-[#228B22] hover:bg-[#1a6b1a] text-white px-8"
              >
                {isComingSoon ? "Coming Soon" : "Enroll Now"}
              </Button>
            )}
            <Link href="/academy">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zinc-700 text-white hover:bg-zinc-800 px-8"
              >
                View All {isBook ? "Books" : "Courses"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}