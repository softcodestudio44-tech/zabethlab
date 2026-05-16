'use client';

import { useParams } from 'next/navigation';
import { courses } from '@/data/courses';

export default function LearnPage() {
  const { slug } = useParams();
  const course = courses.find((c: typeof courses[0]) => c.slug === slug);

  if (!course) return <div>Course not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-[#228B22] mb-4">{course.title}</h1>
      <p className="text-gray-400 mb-8">Welcome to your course! Content coming soon...</p>
      
      {/* Module list will go here */}
      <div className="space-y-4">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Module 1: Introduction</h3>
          <p className="text-gray-400">Getting started with {course.title}</p>
        </div>
      </div>
    </div>
  );
}