"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Clock, 
  Award, 
  Users, 
  ChevronRight, 
  Star,
  PlayCircle,
  CheckCircle2,
  Lock,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { courses, categories, type Course } from "@/data/academy";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function CourseCard({ course, index }: { course: Course; index: number }) {
  const isComingSoon = !course.isPublished;
  
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#228B22]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#228B22]/10"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
        <Image 
          src={course.image} 
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-[#228B22]/20 text-[#228B22] border-[#228B22]/30 backdrop-blur-sm">
            {course.level}
          </Badge>
          {course.bookSource && (
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              Bestseller
            </Badge>
          )}
        </div>
        
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <Lock className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
              <span className="text-zinc-300 font-medium">Coming Soon</span>
              <p className="text-xs text-zinc-500 mt-1">{course.launchDate}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
          <span className="capitalize">{course.category}</span>
          <span>•</span>
          <span>{course.duration}</span>
          <span>•</span>
          <span>{course.lessons} lessons</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#228B22] transition-colors">
          {course.title}
        </h3>
        
        <p className="text-[#228B22] text-sm font-medium mb-2">
          {course.subtitle}
        </p>
        
        <p className="text-zinc-500 text-sm mb-6 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-800">
          <div className="w-10 h-10 rounded-full bg-[#228B22]/20 flex items-center justify-center">
            <span className="text-[#228B22] font-bold text-sm">EA</span>
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-300">{course.instructor.name}</p>
            <p className="text-xs text-zinc-500">{course.instructor.title}</p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">
                ₦{course.price.naira.toLocaleString()}
              </span>
              <span className="text-sm text-zinc-500">/ ${course.price.dollar}</span>
            </div>
          </div>
          
          <Link href={isComingSoon ? "#" : `/academy/${course.slug}`}>
            <Button 
              disabled={isComingSoon}
              className="bg-[#228B22] hover:bg-[#1a6b1a] text-white"
            >
              {isComingSoon ? "Notify Me" : "Enroll Now"}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function StatsSection() {
  const stats = [
    { icon: Users, value: "500+", label: "Students Enrolled" },
    { icon: BookOpen, value: "5", label: "Expert Courses" },
    { icon: Award, value: "98%", label: "Certification Rate" },
    { icon: Star, value: "4.9", label: "Average Rating" }
  ];

  return (
    <section className="py-16 border-y border-zinc-800 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-[#228B22] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Book-Based Curriculum",
      description: "Courses built on Elizabeth's bestselling books with proven frameworks and real results."
    },
    {
      icon: Award,
      title: "Recognized Certification",
      description: "Earn certificates that validate your expertise in skincare, haircare, and formulation."
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join a global community of women learning to glow and grow together."
    },
    {
      icon: PlayCircle,
      title: "Self-Paced Learning",
      description: "Study on your schedule with lifetime access to course materials and updates."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-[#228B22]">Zabeth Academy</span>?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Education that transforms not just your skills, but your confidence and your future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#228B22]/30 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-[#228B22] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AcademyPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const coursesRef = useRef<HTMLDivElement>(null);
  
  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  // Scroll to courses section
  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#228B22]/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-[#228B22]/20 text-[#228B22] border-[#228B22]/30 px-4 py-1">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              Now Enrolling
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Learn to Glow <br />
              <span className="text-[#228B22]">From the Inside Out</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
              Professional courses in skincare, haircare, and organic formulation 
              from Elizabeth Aderibigbe, founder of Zabeth Botanical House of Beauty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#228B22] hover:bg-[#1a6b1a] text-white px-8"
                onClick={scrollToCourses}
              >
                Explore Courses
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  View Curriculum
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">How Zabeth Academy Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#228B22]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#228B22] font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enroll & Pay</h3>
              <p className="text-zinc-400 text-sm">Choose your course, complete payment, and get immediate access to Module 1.</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-[#228B22]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#228B22] font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Learn at Your Pace</h3>
              <p className="text-zinc-400 text-sm">Read lessons, complete quizzes, and unlock the next module weekly.</p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-[#228B22]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#228B22] font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Certified</h3>
              <p className="text-zinc-400 text-sm">Complete all modules, pass the final assessment, and earn your certificate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20" id="courses" ref={coursesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-zinc-400">
              Beginner to advanced programs designed for real transformation
            </p>
          </motion.div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
            <TabsList className="bg-zinc-900 border border-zinc-800 p-1 flex flex-wrap justify-center gap-1">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-[#228B22] data-[state=active]:text-white text-zinc-400 px-4 py-2"
                >
                  {cat.name}
                  <span className="ml-2 text-xs opacity-60">({cat.count})</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Course Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500">No courses available in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose */}
      <WhyChooseSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#228B22]/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of women who have transformed their relationship with 
              their skin, hair, and confidence through Zabeth Academy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#228B22]" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#228B22]" />
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#228B22]" />
                <span>Community Support</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-[#228B22] hover:bg-[#1a6b1a] text-white px-8"
              onClick={scrollToCourses}
            >
              Browse All Courses
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}