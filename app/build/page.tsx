'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Beaker, 
  Calculator, 
  Tag, 
  Store, 
  Download, 
  Copy, 
  Check,
  FlaskConical,
  Scale,
  ShoppingBag,
  Plus,
  Trash2,
  AlertCircle
} from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  grams: number;
}

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'label' | 'suppliers'>('calculator');
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  // Formulation Calculator State
  const [batchSize, setBatchSize] = useState(100);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '1', name: 'Shea Butter', grams: 30 },
    { id: '2', name: 'Coconut Oil', grams: 25 },
    { id: '3', name: 'Sweet Almond Oil', grams: 20 },
    { id: '4', name: 'Beeswax', grams: 15 },
    { id: '5', name: 'Vitamin E Oil', grams: 10 },
  ]);
  
  const [newIngredient, setNewIngredient] = useState({ name: '', grams: '' });

  // Label Generator State
  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('Zabeth Organics');
  const [ingredientsList, setIngredientsList] = useState('');

  const totalGrams = ingredients.reduce((sum, ing) => sum + ing.grams, 0);
  
  const calculatePercentage = (grams: number) => {
    if (batchSize === 0) return 0;
    return ((grams / batchSize) * 100).toFixed(1);
  };

  const addIngredient = () => {
    if (!newIngredient.name || !newIngredient.grams) return;
    const grams = parseFloat(newIngredient.grams);
    if (isNaN(grams) || grams <= 0) return;
    
    const ingredient: Ingredient = {
      id: Date.now().toString(),
      name: newIngredient.name,
      grams: grams
    };
    
    setIngredients([...ingredients, ingredient]);
    setNewIngredient({ name: '', grams: '' });
  };

  const updateIngredientGrams = (id: string, newGrams: string) => {
    const grams = parseFloat(newGrams) || 0;
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, grams: grams } : ing
    ));
  };

  const updateIngredientName = (id: string, newName: string) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, name: newName } : ing
    ));
  };

  const deleteIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const generateLabel = () => {
    return `
${brandName.toUpperCase()}
${productName}

Ingredients: ${ingredientsList}

Directions: Apply to clean, dry skin. For external use only.

Net Wt: ${batchSize}g / ${(batchSize / 28.35).toFixed(1)}oz

Made with love by ${brandName}
    `.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateLabel());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const suppliers = [
    { name: 'Nigerian Raw Materials', location: 'Lagos, Nigeria', specialty: 'Shea Butter, Oils', minOrder: '₦50,000' },
    { name: 'Global Cosmetic Ingredients', location: 'USA/International', specialty: 'Actives, Preservatives', minOrder: '$100' },
    { name: 'African Botanicals Co.', location: 'Ghana/Kenya', specialty: 'Raw Butters, Essential Oils', minOrder: '$200' },
    { name: 'Packaging Solutions NG', location: 'Nigeria', specialty: 'Jars, Bottles, Labels', minOrder: '₦30,000' },
  ];

  const difference = batchSize - totalGrams;
  const isBalanced = Math.abs(difference) < 0.1;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#228B22]/20 to-[#0a0a0a] py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#228B22]/20 text-[#228B22] px-4 py-2 rounded-full text-sm mb-6">
              <Beaker className="w-4 h-4" />
              <span>Zabeth Studio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your <span className="text-[#228B22]">Beauty Brand</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional tools for beauty entrepreneurs. Formulate products, generate labels, and find trusted suppliers.
            </p>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="px-4 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 bg-[#1a1a1a] p-2 rounded-xl">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'calculator' 
                    ? 'bg-[#228B22] text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Calculator className="w-5 h-5" />
                Formulation Calculator
              </button>
              <button
                onClick={() => setActiveTab('label')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'label' 
                    ? 'bg-[#228B22] text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Tag className="w-5 h-5" />
                Label Generator
              </button>
              <button
                onClick={() => setActiveTab('suppliers')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'suppliers' 
                    ? 'bg-[#228B22] text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Store className="w-5 h-5" />
                Supplier Marketplace
              </button>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Formulation Calculator */}
            {activeTab === 'calculator' && (
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#228B22]/20 rounded-xl flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-[#228B22]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Formulation Calculator</h2>
                    <p className="text-gray-400">Enter ingredient amounts in grams, we calculate the percentages</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    {/* Batch Size */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Target Batch Size (grams)</label>
                      <input
                        type="number"
                        value={batchSize}
                        onChange={(e) => setBatchSize(Number(e.target.value))}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none text-lg"
                      />
                      <p className="text-gray-500 text-sm mt-1">Total product you want to make</p>
                    </div>
                    
                    {/* Add New Ingredient */}
                    <div className="mb-6 p-4 bg-[#0a0a0a] rounded-lg border border-dashed border-white/20">
                      <h4 className="text-sm font-medium mb-3 text-gray-400">Add Ingredient</h4>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Ingredient name (e.g., Shea Butter)"
                          value={newIngredient.name}
                          onChange={(e) => setNewIngredient({...newIngredient, name: e.target.value})}
                          className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-[#228B22] focus:outline-none"
                        />
                        <input
                          type="number"
                          placeholder="Grams"
                          value={newIngredient.grams}
                          onChange={(e) => setNewIngredient({...newIngredient, grams: e.target.value})}
                          className="w-24 bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-[#228B22] focus:outline-none"
                        />
                        <button
                          onClick={addIngredient}
                          className="bg-[#228B22] hover:bg-[#1a6b1a] text-white px-3 py-2 rounded-lg transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-3">
                      <div className="flex text-sm text-gray-400 px-4 pb-2 border-b border-white/10">
                        <span className="flex-1">Ingredient</span>
                        <span className="w-24 text-right">Grams</span>
                        <span className="w-20 text-right">%</span>
                        <span className="w-10"></span>
                      </div>
                      
                      {ingredients.map((ing) => (
                        <div key={ing.id} className="flex items-center gap-2 bg-[#0a0a0a] p-3 rounded-lg">
                          <input
                            type="text"
                            value={ing.name}
                            onChange={(e) => updateIngredientName(ing.id, e.target.value)}
                            className="flex-1 bg-transparent border-none text-white font-medium focus:outline-none focus:ring-1 focus:ring-[#228B22] rounded px-2 py-1"
                          />
                          <input
                            type="number"
                            value={ing.grams}
                            onChange={(e) => updateIngredientGrams(ing.id, e.target.value)}
                            className="w-20 bg-[#1a1a1a] border border-white/10 rounded px-2 py-1 text-white text-right focus:border-[#228B22] focus:outline-none"
                          />
                          <span className="w-20 text-right text-[#228B22] font-bold">
                            {calculatePercentage(ing.grams)}%
                          </span>
                          <button 
                            onClick={() => deleteIngredient(ing.id)}
                            className="w-10 p-2 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Total Summary */}
                    <div className={`mt-6 p-4 rounded-lg border ${
                      isBalanced 
                        ? 'bg-[#228B22]/10 border-[#228B22]/30' 
                        : 'bg-yellow-500/10 border-yellow-500/30'
                    }`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Current Total:</span>
                        <span className={`font-bold text-xl ${
                          isBalanced ? 'text-[#228B22]' : 'text-yellow-500'
                        }`}>
                          {totalGrams}g
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Target:</span>
                        <span className="text-gray-300">{batchSize}g</span>
                      </div>
                      
                      {!isBalanced && (
                        <div className="mt-3 flex items-center gap-2 text-yellow-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>
                            {difference > 0 
                              ? `Remove ${difference.toFixed(1)}g to match target` 
                              : `Add ${Math.abs(difference).toFixed(1)}g to match target`}
                          </span>
                        </div>
                      )}
                      
                      {isBalanced && (
                        <p className="mt-2 text-[#228B22] text-sm">✓ Formula is balanced!</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-[#228B22]" />
                      How It Works
                    </h3>
                    <div className="space-y-4 text-sm text-gray-400">
                      <div className="flex gap-3">
                        <span className="bg-[#228B22] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                        <p>Enter your target batch size (how much product you want to make)</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="bg-[#228B22] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                        <p>Add each ingredient and enter the amount in grams</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="bg-[#228B22] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                        <p>We automatically calculate the percentage for you</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="bg-[#228B22] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                        <p>Adjust amounts until total matches your target batch size</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Download className="w-4 h-4 text-[#228B22]" />
                        Quick Tips
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• 100g = ~3.5oz (small jar)</li>
                        <li>• 250g = ~8.8oz (medium jar)</li>
                        <li>• Always use a digital scale for accuracy</li>
                        <li>• Weigh ingredients, don't use volume measurements</li>
                        <li>• Add preservatives for any water-based products</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Label Generator */}
            {activeTab === 'label' && (
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#228B22]/20 rounded-xl flex items-center justify-center">
                    <Tag className="w-6 h-6 text-[#228B22]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Label Generator</h2>
                    <p className="text-gray-400">Create compliant product labels instantly</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Brand Name</label>
                      <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Product Name</label>
                      <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g., Glow Face Serum"
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ingredients (comma separated)</label>
                      <textarea
                        value={ingredientsList}
                        onChange={(e) => setIngredientsList(e.target.value)}
                        placeholder="Shea Butter, Coconut Oil, Vitamin E..."
                        rows={4}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#228B22] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="bg-white text-black p-6 rounded-xl font-mono text-sm leading-relaxed min-h-[300px] relative">
                      <pre className="whitespace-pre-wrap">{generateLabel()}</pre>
                      <button
                        onClick={copyToClipboard}
                        className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 text-center">
                      {copied ? 'Copied to clipboard!' : 'Click the copy button to use your label'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Supplier Marketplace */}
            {activeTab === 'suppliers' && (
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#228B22]/20 rounded-xl flex items-center justify-center">
                    <Store className="w-6 h-6 text-[#228B22]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Supplier Marketplace</h2>
                    <p className="text-gray-400">Trusted suppliers for your beauty business</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {suppliers.map((supplier, idx) => (
                    <div key={idx} className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5 hover:border-[#228B22]/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg">{supplier.name}</h3>
                          <p className="text-gray-400 text-sm">{supplier.location}</p>
                        </div>
                        <ShoppingBag className="w-5 h-5 text-[#228B22]" />
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-400">Specialty:</span> {supplier.specialty}</p>
                        <p><span className="text-gray-400">Min Order:</span> <span className="text-[#228B22] font-semibold">{supplier.minOrder}</span></p>
                      </div>
                      <button className="w-full mt-4 py-2 border border-[#228B22] text-[#228B22] rounded-lg hover:bg-[#228B22] hover:text-white transition-all text-sm font-medium">
                        View Catalog
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#228B22]/10 border border-[#228B22]/30 rounded-xl text-center">
                  <p className="text-gray-300 mb-2">Want to become a verified supplier?</p>
                  <button 
    onClick={() => router.push('/build/supplier-register')}
    className="bg-[#228B22] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b1a] transition-colors"
  >
    Apply to List Products
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