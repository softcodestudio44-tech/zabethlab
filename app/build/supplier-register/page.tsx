'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Package,
  CreditCard,
  CheckCircle
} from 'lucide-react';

export default function SupplierRegister() {
  const router = useRouter();
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: '',
    email: '',
    phone: '',
    products: '',
    location: '',
    website: '',
    subscription_type: 'monthly'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = async () => {
    setLoading(true);
    
    // Calculate amount based on subscription
    const amount = formData.subscription_type === 'yearly' ? 50000 : 5000; // ₦50k yearly, ₦5k monthly
    
    // Initialize Paystack
    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_your_paystack_key_here', // Replace with your actual Paystack public key
      email: formData.email,
      amount: amount * 100, // Convert to kobo
      currency: 'NGN',
      ref: 'SUP_' + Date.now(),
      metadata: {
        business_name: formData.business_name,
        subscription_type: formData.subscription_type
      },
      callback: async function(response: any) {
        // Payment successful - save to Supabase
        try {
          const res = await fetch('/api/suppliers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              amount_paid: amount,
              paystack_ref: response.reference,
              payment_status: 'paid'
            })
          });
          
          if (res.ok) {
            setStep('success');
          }
        } catch (error) {
          console.error('Error saving supplier:', error);
        }
        setLoading(false);
      },
      onClose: function() {
        setLoading(false);
      }
    });
    
    handler.openIframe();
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <CheckCircle className="w-20 h-20 text-[#228B22] mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-gray-400 mb-6">
            Your payment was successful. Your listing is pending admin approval. 
            You'll receive an email once approved.
          </p>
          <button 
            onClick={() => router.push('/build')}
            className="bg-[#228B22] text-white px-8 py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <button 
          onClick={() => router.push('/build')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Marketplace
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">List Your Products</h1>
          <p className="text-gray-400">Become a verified supplier on ZabethLab</p>
        </div>

        {/* Pricing Cards */}
        {step === 'form' && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div 
              onClick={() => setFormData({...formData, subscription_type: 'monthly'})}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                formData.subscription_type === 'monthly' 
                  ? 'border-[#228B22] bg-[#228B22]/10' 
                  : 'border-white/10 bg-[#1a1a1a]'
              }`}
            >
              <h3 className="font-bold text-xl mb-2">Monthly</h3>
              <div className="text-3xl font-bold text-[#228B22] mb-2">₦5,000</div>
              <p className="text-gray-400 text-sm">per month</p>
            </div>
            
            <div 
              onClick={() => setFormData({...formData, subscription_type: 'yearly'})}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                formData.subscription_type === 'yearly' 
                  ? 'border-[#228B22] bg-[#228B22]/10' 
                  : 'border-white/10 bg-[#1a1a1a]'
              }`}
            >
              <h3 className="font-bold text-xl mb-2">Yearly</h3>
              <div className="text-3xl font-bold text-[#228B22] mb-2">₦50,000</div>
              <p className="text-gray-400 text-sm">per year (Save ₦10,000)</p>
            </div>
          </div>
        )}

        {/* Form */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Building2 className="w-4 h-4" />
                Business Name
              </label>
              <input
                required
                type="text"
                value={formData.business_name}
                onChange={(e) => setFormData({...formData, business_name: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                placeholder="e.g., African Botanicals Co."
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Mail className="w-4 h-4" />
                Business Email
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                placeholder="hello@yourbusiness.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                placeholder="+234 800 000 0000"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Package className="w-4 h-4" />
                Products You Supply
              </label>
              <textarea
                required
                value={formData.products}
                onChange={(e) => setFormData({...formData, products: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none h-24 resize-none"
                placeholder="e.g., Raw shea butter, essential oils, packaging materials..."
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <input
                required
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                placeholder="e.g., Lagos, Nigeria"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Globe className="w-4 h-4" />
                Website (Optional)
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#228B22] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#1a6b1a] transition-colors"
            >
              Continue to Payment
            </button>
          </form>
        ) : (
          /* Payment Step */
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 text-center">
            <CreditCard className="w-16 h-16 text-[#228B22] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Complete Payment</h2>
            <p className="text-gray-400 mb-6">
              {formData.subscription_type === 'monthly' ? '₦5,000/month' : '₦50,000/year'}
            </p>
            
            <div className="bg-[#0a0a0a] p-4 rounded-lg mb-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Business:</span>
                <span>{formData.business_name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Plan:</span>
                <span className="capitalize">{formData.subscription_type}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-[#228B22]">
                  ₦{formData.subscription_type === 'monthly' ? '5,000' : '50,000'}
                </span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-[#228B22] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#1a6b1a] transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Pay with Paystack'}
            </button>
            
            <button
              onClick={() => setStep('form')}
              className="mt-4 text-gray-400 hover:text-white transition-colors"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}