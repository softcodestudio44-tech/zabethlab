'use client'

import { useState, useRef, useEffect } from 'react'
import { ingredients, commonProducts } from '@/data/ingredients'

export default function Scanner() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [analyzed, setAnalyzed] = useState(false)
  const [showCommon, setShowCommon] = useState(false)
  
  // Ref for scrolling to results
  const resultsRef = useRef<HTMLDivElement>(null)

  // Scroll to results when analyzed
  useEffect(() => {
    if (analyzed && resultsRef.current) {
      resultsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }, [analyzed, results])

  const analyzeIngredients = (text: string = input) => {
    const ingredientList = text
      .toLowerCase()
      .split(/,|\n|\(|\)|\[|\]|\d+%|\d+\./)
      .map(i => i.trim())
      .filter(i => i.length > 2)

    const found = ingredientList.map(ing => {
      const match = ingredients.find(item => 
        item.name.toLowerCase() === ing || 
        ing.includes(item.name.toLowerCase()) ||
        item.name.toLowerCase().includes(ing)
      )
      
      return {
        name: ing,
        found: !!match,
        data: match || null
      }
    })

    setResults(found)
    setAnalyzed(true)
  }

  const loadCommonProduct = (product: typeof commonProducts[0]) => {
    setInput(product.ingredients)
    analyzeIngredients(product.ingredients)
    setShowCommon(false)
  }

  const getOverallRating = () => {
    const found = results.filter(r => r.found && r.data)
    if (found.length === 0) return 0
    const avg = found.reduce((sum, r) => {
      const rating = typeof r.data.rating === 'number' ? r.data.rating : 
        r.data.rating === 'Good' ? 5 : 
        r.data.rating === 'Average' ? 3 : 1
      return sum + rating
    }, 0) / found.length
    return Math.round(avg)
  }

  const getSkinTypeMatch = () => {
    const found = results.filter(r => r.found && r.data)
    if (found.length === 0) return []
    
    const allSkinTypes = found.flatMap(r => r.data.skinTypes || [])
    const counts: Record<string, number> = {}
    allSkinTypes.forEach((type: string) => {
      counts[type] = (counts[type] || 0) + 1
    })
    
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([type]) => type)
  }

  return (
    <div className="min-h-screen bg-dark py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-light mb-4">
            Ingredient <span className="text-primary">Scanner</span>
          </h1>
          <p className="text-light-muted max-w-2xl mx-auto">
            Paste any product ingredient list and instantly know what's good, 
            what's bad, and what's right for your skin.
          </p>
        </div>

        {/* Common Products Toggle */}
        <div className="mb-6">
          <button
            onClick={() => setShowCommon(!showCommon)}
            className="text-primary hover:text-primary-light font-medium flex items-center gap-2"
          >
            {showCommon ? '▼' : '▶'} Try Common Products
          </button>
          
          {showCommon && (
            <div className="mt-4 bg-dark-light rounded-xl p-4 border border-dark-lighter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {commonProducts.map((product, idx) => (
                  <button
                    key={idx}
                    onClick={() => loadCommonProduct(product)}
                    className="text-left p-3 rounded-lg bg-dark hover:bg-dark-lighter border border-dark-lighter hover:border-primary/50 transition-all"
                  >
                    <p className="text-light font-medium text-sm">{product.name}</p>
                    <p className="text-light-muted text-xs">{product.category}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="bg-dark-light rounded-2xl p-8 border border-dark-lighter mb-8">
          <label className="block text-light font-semibold mb-4">
            Paste Ingredients Here
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Example: Water, Shea Butter, Coconut Oil, Vitamin C, Glycerin..."
            className="w-full h-40 bg-dark border border-dark-lighter rounded-lg p-4 text-light placeholder-light-muted focus:border-primary focus:outline-none resize-none"
          />
          <button
            onClick={() => analyzeIngredients()}
            className="mt-4 w-full bg-primary hover:bg-primary-light text-white font-semibold py-4 rounded-lg transition-colors"
          >
            Analyze Ingredients
          </button>
        </div>

        {/* Results - with ref for scrolling */}
        {analyzed && (
          <div ref={resultsRef} className="space-y-6">
            {/* Overall Rating */}
            <div className="bg-dark-light rounded-2xl p-6 border border-dark-lighter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-light-muted mb-2">Product Rating</h3>
                  <div className="flex justify-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-3xl ${
                          star <= getOverallRating() ? 'text-primary' : 'text-dark-lighter'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-light">
                    {getOverallRating()}/5
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-light-muted mb-2">Best For</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {getSkinTypeMatch().length > 0 ? (
                      getSkinTypeMatch().map((type, idx) => (
                        <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                          {type}
                        </span>
                      ))
                    ) : (
                      <span className="text-light-muted text-sm">Unknown</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredient List */}
            <div className="grid gap-4">
              <h3 className="text-xl font-bold text-light mb-2">
                Found {results.filter(r => r.found).length} of {results.length} ingredients
              </h3>
              
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border ${
                    result.found 
                      ? (typeof result.data.rating === 'number' ? result.data.rating : 
                         result.data.rating === 'Good' ? 5 : 
                         result.data.rating === 'Average' ? 3 : 1) >= 4 
                        ? 'bg-dark-light border-primary/30' 
                        : (typeof result.data.rating === 'number' ? result.data.rating : 
                           result.data.rating === 'Good' ? 5 : 
                           result.data.rating === 'Average' ? 3 : 1) >= 3
                          ? 'bg-dark-light border-amber-500/30'
                          : 'bg-dark-light border-red-500/30'
                      : 'bg-dark-light/50 border-dark-lighter'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-light capitalize">
                      {result.name}
                    </h4>
                    {result.found ? (
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          (typeof result.data.rating === 'number' ? result.data.rating : 
                           result.data.rating === 'Good' ? 5 : 
                           result.data.rating === 'Average' ? 3 : 1) >= 4 
                            ? 'bg-primary/20 text-primary' 
                            : (typeof result.data.rating === 'number' ? result.data.rating : 
                               result.data.rating === 'Good' ? 5 : 
                               result.data.rating === 'Average' ? 3 : 1) >= 3
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-red-500/20 text-red-400'
                        }`}>
                          {result.data.category}
                        </span>
                        <span className={`text-sm font-bold ${
                          (typeof result.data.rating === 'number' ? result.data.rating : 
                           result.data.rating === 'Good' ? 5 : 
                           result.data.rating === 'Average' ? 3 : 1) >= 4 
                            ? 'text-primary' 
                            : (typeof result.data.rating === 'number' ? result.data.rating : 
                               result.data.rating === 'Good' ? 5 : 
                               result.data.rating === 'Average' ? 3 : 1) >= 3
                              ? 'text-amber-400'
                              : 'text-red-400'
                        }`}>
                          {typeof result.data.rating === 'number' ? result.data.rating : 
                           result.data.rating === 'Good' ? 5 : 
                           result.data.rating === 'Average' ? 3 : 1}/5
                        </span>
                      </div>
                    ) : (
                      <span className="bg-dark-lighter text-light-muted px-3 py-1 rounded-full text-sm">
                        Not in database
                      </span>
                    )}
                  </div>

                  {result.found && result.data && (
                    <div className="space-y-3">
                      {/* Benefits */}
                      <div>
                        <p className="text-emerald-400 text-sm font-medium mb-1">✓ Benefits</p>
                        <div className="flex flex-wrap gap-2">
                          {(result.data.benefits || []).slice(0, 4).map((benefit: string, i: number) => (
                            <span key={i} className="text-light-muted text-sm bg-dark px-3 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Warnings */}
                      {(result.data.warnings || []).length > 0 && (
                        <div>
                          <p className="text-amber-400 text-sm font-medium mb-1">⚠ Warnings</p>
                          <div className="flex flex-wrap gap-2">
                            {result.data.warnings.slice(0, 3).map((warning: string, i: number) => (
                              <span key={i} className="text-light-muted text-sm bg-dark px-3 py-1 rounded">
                                {warning}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Good for */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        {(result.data.skinTypes || []).length > 0 && (
                          <div>
                            <span className="text-light-muted">Skin: </span>
                            <span className="text-light">{result.data.skinTypes.slice(0, 3).join(', ')}</span>
                          </div>
                        )}
                        {(result.data.hairTypes || []).length > 0 && (
                          <div>
                            <span className="text-light-muted">Hair: </span>
                            <span className="text-light">{result.data.hairTypes.slice(0, 3).join(', ')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {!result.found && (
                    <p className="text-light-muted text-sm">
                      This ingredient isn't in our database yet. We're constantly adding new ingredients.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}