'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Search,
  Heart,
  MessageSquare,
  Share2,
  UserPlus,
  Filter
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Post {
  id: string;
  content: string;
  author_name: string;
  author_role: string;
  created_at: string;
  likes: number;
}

interface Member {
  id: string;
  name: string;
  role: string;
  location: string;
  joined_at: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  type: string;
  attendees: number;
  max_attendees: number;
}

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState<'feed' | 'members' | 'events'>('feed');
  const [posts, setPosts] = useState<Post[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch data on load
  useEffect(() => {
    fetchPosts();
    fetchMembers();
    fetchEvents();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.error('Error fetching posts:', error);
    else setPosts(data || []);
    setLoading(false);
  };

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('joined_at', { ascending: false });
    
    if (error) console.error('Error fetching members:', error);
    else setMembers(data || []);
  };

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });
    
    if (error) console.error('Error fetching events:', error);
    else setEvents(data || []);
  };

  const createPost = async () => {
    if (!newPost.trim()) return;
    
    const { error } = await supabase
      .from('posts')
      .insert([
        {
          content: newPost,
          author_name: 'You', // Will be replaced with actual user later
          author_role: 'Member',
          likes: 0
        }
      ]);
    
    if (error) console.error('Error creating post:', error);
    else {
      setNewPost('');
      fetchPosts(); // Refresh posts
    }
  };

  const registerForEvent = async (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    const { error } = await supabase
      .from('events')
      .update({ attendees: event.attendees + 1 })
      .eq('id', eventId);
    
    if (error) console.error('Error registering:', error);
    else fetchEvents(); // Refresh events
  };

  if (loading) return <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#228B22]/20 to-[#0a0a0a] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#228B22]/20 text-[#228B22] px-4 py-2 rounded-full text-sm mb-6">
              <Users className="w-4 h-4" />
              <span>Zabeth Connect</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect & <span className="text-[#228B22]">Grow Together</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join a thriving community of beauty entrepreneurs, formulators, and industry professionals.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="px-4 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 bg-[#1a1a1a] p-2 rounded-xl">
              <button
                onClick={() => setActiveTab('feed')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${activeTab === 'feed' ? 'bg-[#228B22] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <MessageCircle className="w-5 h-5" />
                Community Feed
              </button>
              <button
                onClick={() => setActiveTab('members')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${activeTab === 'members' ? 'bg-[#228B22] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <Users className="w-5 h-5" />
                Members ({members.length})
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${activeTab === 'events' ? 'bg-[#228B22] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <Calendar className="w-5 h-5" />
                Events ({events.length})
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Community Feed */}
            {activeTab === 'feed' && (
              <div className="max-w-3xl mx-auto space-y-6">
                {/* Create Post */}
                <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center font-bold">
                      You
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Share your journey, ask questions, or celebrate wins..."
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none resize-none h-24"
                      />
                      <div className="flex justify-end mt-3">
                        <button 
                          onClick={createPost}
                          className="bg-[#228B22] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b1a] transition-colors"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts */}
                {posts.map((post) => (
                  <div key={post.id} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#228B22] to-[#1a6b1a] rounded-full flex items-center justify-center font-bold">
                        {post.author_name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{post.author_name}</h3>
                          <span className="text-[#228B22] text-sm">•</span>
                          <span className="text-gray-400 text-sm">{post.author_role}</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          {new Date(post.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>
                    
                    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-[#228B22] transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-[#228B22] transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-[#228B22] transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Members */}
            {activeTab === 'members' && (
              <div>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search members by name or role..."
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                    />
                  </div>
                  <button className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 rounded-lg text-gray-400 hover:text-white transition-colors">
                    <Filter className="w-5 h-5" />
                    Filter
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member) => (
                    <div key={member.id} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-[#228B22]/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#228B22] to-[#1a6b1a] rounded-full flex items-center justify-center text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <button className="p-2 bg-[#228B22]/20 text-[#228B22] rounded-lg hover:bg-[#228B22] hover:text-white transition-colors">
                          <UserPlus className="w-5 h-5" />
                        </button>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      <p className="text-[#228B22] text-sm mb-2">{member.role}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{member.location}</span>
                        <span>•</span>
                        <span>Joined {new Date(member.joined_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Events */}
            {activeTab === 'events' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-[#228B22]/50 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${event.type === 'Online' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{event.attendees} / {event.max_attendees} attending</span>
                      <button 
                        onClick={() => registerForEvent(event.id)}
                        disabled={event.attendees >= event.max_attendees}
                        className={`px-4 py-2 rounded-lg text-sm ${event.attendees >= event.max_attendees ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#228B22] hover:bg-[#1a6b1a]'} transition-colors`}
                      >
                        {event.attendees >= event.max_attendees ? 'Full' : 'Register'}
                      </button>
                    </div>
                  </div>
                ))}

                <div className="bg-[#228B22]/10 border border-[#228B22]/30 p-6 rounded-2xl text-center">
                  <Calendar className="w-12 h-12 text-[#228B22] mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Host an Event</h3>
                  <p className="text-gray-400 mb-4">Share your expertise with the community</p>
                  <button className="border border-[#228B22] text-[#228B22] px-6 py-2 rounded-lg hover:bg-[#228B22] hover:text-white transition-colors">
                    Propose Event
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>
      </main>
    </div>
  );
}