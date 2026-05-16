export interface Ingredient {
  name: string
  category: string
  rating: string
  description: string
  benefits: string[]
  skinTypes: string[]
  concerns: string[]
  caution?: string
}

export const ingredients: Ingredient[] = [
  // ============ ORIGINAL INGREDIENTS ============
  {
    name: "Water",
    category: "Base",
    rating: "Good",
    description: "Universal solvent and product base",
    benefits: ["Hydration", "Universal solvent", "Product base"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Aqua",
    category: "Base",
    rating: "Good",
    description: "Water - universal solvent",
    benefits: ["Hydration", "Product base"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Glycerin",
    category: "Humectant",
    rating: "Good",
    description: "Classic humectant that draws moisture to skin",
    benefits: ["Hydration", "Moisture retention", "Smoothing"],
    skinTypes: ["All", "Dry", "Dehydrated"],
    concerns: ["Dehydration", "Dryness"]
  },
  {
    name: "Hyaluronic Acid",
    category: "Hydrator",
    rating: "Good",
    description: "Powerful hydrator that holds 1000x its weight in water",
    benefits: ["Intense hydration", "Plumping", "Fine line reduction", "Non-irritating"],
    skinTypes: ["All", "Aging", "Dehydrated"],
    concerns: ["Dehydration", "Aging", "Fine lines"]
  },
  {
    name: "Sodium Hyaluronate",
    category: "Hydrator",
    rating: "Good",
    description: "Salt form of hyaluronic acid with smaller molecules",
    benefits: ["Deep hydration", "Penetrates better", "Plumping"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Aloe Vera",
    category: "Soothing Agent",
    rating: "Good",
    description: "Soothing plant extract with hydrating properties",
    benefits: ["Soothing", "Hydrating", "Healing", "Anti-inflammatory", "Cooling"],
    skinTypes: ["All", "Sensitive", "Oily", "Acne-prone"],
    concerns: ["Inflammation", "Sunburn", "Acne", "Sensitivity"]
  },
  {
    name: "Aloe Barbadensis Leaf Juice",
    category: "Soothing Agent",
    rating: "Good",
    description: "Aloe vera juice for soothing and hydration",
    benefits: ["Soothing", "Hydrating", "Healing", "Anti-inflammatory"],
    skinTypes: ["All", "Sensitive"],
    concerns: ["Sensitivity", "Inflammation"]
  },
  {
    name: "Shea Butter",
    category: "Moisturizer",
    rating: "Good",
    description: "Rich African butter with deep moisturizing properties",
    benefits: ["Deep moisturization", "Anti-inflammatory", "UV protection", "Collagen production", "Barrier repair"],
    skinTypes: ["Dry", "Normal", "Combination"],
    concerns: ["Dryness", "Eczema"],
    caution: "May be too heavy for oily skin"
  },
  {
    name: "Coconut Oil",
    category: "Oil",
    rating: "Average",
    description: "Popular oil with antimicrobial properties",
    benefits: ["Moisturizing", "Antimicrobial", "Protein retention", "Shine"],
    skinTypes: ["Normal", "Dry"],
    concerns: ["Dryness"],
    caution: "Comedogenic rating 4 - may clog pores, not for acne-prone skin"
  },
  {
    name: "Castor Oil",
    category: "Oil",
    rating: "Average",
    description: "Thick oil for hair growth and moisture",
    benefits: ["Hair growth", "Moisturizing", "Anti-fungal", "Thick consistency"],
    skinTypes: ["Dry"],
    concerns: ["Dryness", "Hair loss"],
    caution: "Very thick - mix with lighter oils"
  },
  {
    name: "Jojoba Oil",
    category: "Oil",
    rating: "Good",
    description: "Wax ester similar to skin's natural sebum",
    benefits: ["Balances oil production", "Non-comedogenic", "Lightweight"],
    skinTypes: ["All", "Oily", "Acne-prone"],
    concerns: ["Oiliness", "Acne"]
  },
  {
    name: "Argan Oil",
    category: "Oil",
    rating: "Good",
    description: "Moroccan oil rich in vitamin E and fatty acids",
    benefits: ["Anti-aging", "Moisturizing", "Frizz control", "Rich in vitamin E"],
    skinTypes: ["All", "Aging", "Dry"],
    concerns: ["Aging", "Dryness", "Frizz"]
  },
  {
    name: "Rosehip Oil",
    category: "Oil",
    rating: "Good",
    description: "Oil rich in vitamin C and essential fatty acids",
    benefits: ["Scar healing", "Anti-aging", "Brightening", "Hydration", "Vitamin A & C"],
    skinTypes: ["Mature", "Damaged", "Dry", "Aging"],
    concerns: ["Hyperpigmentation", "Scars", "Aging"],
    caution: "Can oxidize - store properly"
  },
  {
    name: "Olive Oil",
    category: "Oil",
    rating: "Average",
    description: "Rich in antioxidants and moisturizing",
    benefits: ["Moisturizing", "Rich in antioxidants", "Affordable"],
    skinTypes: ["Dry", "Normal"],
    concerns: ["Dryness"],
    caution: "Comedogenic rating 2, can feel heavy"
  },
  {
    name: "Sweet Almond Oil",
    category: "Oil",
    rating: "Average",
    description: "Lightweight moisturizing oil",
    benefits: ["Lightweight", "Moisturizing", "Rich in vitamin E", "Affordable"],
    skinTypes: ["Dry", "Normal", "Sensitive"],
    concerns: ["Dryness"],
    caution: "Not for nut allergies"
  },
  {
    name: "Grapeseed Oil",
    category: "Oil",
    rating: "Average",
    description: "Lightweight oil good for oily skin",
    benefits: ["Lightweight", "Non-comedogenic", "Antioxidant", "Affordable"],
    skinTypes: ["Oily", "Acne-prone", "Combination"],
    concerns: ["Oiliness"],
    caution: "Short shelf life"
  },
  {
    name: "Avocado Oil",
    category: "Oil",
    rating: "Average",
    description: "Deeply moisturizing oil rich in fatty acids",
    benefits: ["Deeply moisturizing", "Rich in fatty acids", "Penetrates hair shaft"],
    skinTypes: ["Dry", "Mature"],
    concerns: ["Dryness"],
    caution: "Heavy - not for fine hair"
  },
  {
    name: "Squalane",
    category: "Oil",
    rating: "Good",
    description: "Lightweight, non-greasy moisturizing oil",
    benefits: ["Lightweight", "Non-comedogenic", "Moisturizing", "Stable", "Odorless"],
    skinTypes: ["All", "Oily", "Acne-prone"],
    concerns: ["Dehydration"]
  },
  {
    name: "Vitamin C",
    category: "Antioxidant",
    rating: "Good",
    description: "Potent antioxidant for brightening",
    benefits: ["Brightening", "Collagen synthesis", "Sun damage repair", "Antioxidant", "Even skin tone"],
    skinTypes: ["All", "Dull", "Aging", "Hyperpigmentation"],
    concerns: ["Hyperpigmentation", "Aging", "Dullness", "Sun damage"],
    caution: "Can oxidize quickly, use sunscreen after"
  },
  {
    name: "Ascorbic Acid",
    category: "Antioxidant",
    rating: "Good",
    description: "Pure vitamin C form",
    benefits: ["Brightening", "Collagen synthesis", "Antioxidant"],
    skinTypes: ["All"],
    concerns: ["Hyperpigmentation", "Aging"],
    caution: "Can oxidize, may tingle"
  },
  {
    name: "Niacinamide",
    category: "Multi-functional",
    rating: "Good",
    description: "Multi-functional vitamin for barrier and pores",
    benefits: ["Pore reduction", "Oil control", "Barrier repair", "Brightening", "Anti-inflammatory", "Redness reduction"],
    skinTypes: ["All", "Oily", "Acne-prone", "Sensitive"],
    concerns: ["Enlarged pores", "Oiliness", "Barrier damage", "Hyperpigmentation", "Redness"]
  },
  {
    name: "Retinol",
    category: "Anti-aging",
    rating: "Good",
    description: "Vitamin A derivative for anti-aging",
    benefits: ["Cell turnover", "Wrinkle reduction", "Acne treatment", "Pore minimization", "Anti-aging"],
    skinTypes: ["Aging", "Acne-prone", "Normal"],
    concerns: ["Aging", "Acne", "Wrinkles"],
    caution: "Photosensitive - use at night only, not for pregnancy"
  },
  {
    name: "Salicylic Acid",
    category: "Exfoliant",
    rating: "Good",
    description: "Oil-soluble acid that penetrates pores",
    benefits: ["BHA exfoliant", "Unclogs pores", "Anti-inflammatory", "Acne treatment", "Oil soluble"],
    skinTypes: ["Oily", "Acne-prone", "Combination"],
    concerns: ["Acne", "Blackheads", "Congestion", "Oiliness"],
    caution: "Can dry skin, use sunscreen, not for pregnancy"
  },
  {
    name: "Glycolic Acid",
    category: "Exfoliant",
    rating: "Good",
    description: "Smallest AHA for deep exfoliation",
    benefits: ["AHA exfoliant", "Brightening", "Smoothing", "Anti-aging", "Removes dead skin"],
    skinTypes: ["Normal", "Aging", "Dull"],
    concerns: ["Dullness", "Aging", "Texture", "Sun damage"],
    caution: "Can irritate sensitive skin, use sunscreen"
  },
  {
    name: "Lactic Acid",
    category: "Exfoliant",
    rating: "Good",
    description: "Gentle AHA with hydrating properties",
    benefits: ["Gentle AHA", "Hydrating exfoliant", "Brightening", "Good for beginners"],
    skinTypes: ["Sensitive", "Dry", "Normal"],
    concerns: ["Dullness", "Sensitivity"],
    caution: "Photosensitivity"
  },
  {
    name: "Tea Tree Oil",
    category: "Antimicrobial",
    rating: "Good",
    description: "Potent antibacterial and antifungal",
    benefits: ["Antibacterial", "Antifungal", "Anti-acne", "Dandruff control", "Natural preservative"],
    skinTypes: ["Oily", "Acne-prone", "Combination"],
    concerns: ["Acne", "Fungal issues", "Dandruff"],
    caution: "Never use undiluted, can irritate sensitive skin"
  },
  {
    name: "Benzoyl Peroxide",
    category: "Acne Treatment",
    rating: "Average",
    description: "Kills acne bacteria effectively",
    benefits: ["Kills acne bacteria", "Unclogs pores", "Effective treatment"],
    skinTypes: ["Acne-prone", "Oily"],
    concerns: ["Acne"],
    caution: "Very drying, can bleach fabrics"
  },
  {
    name: "Sodium Lauryl Sulfate",
    category: "Surfactant",
    rating: "Bad",
    description: "Harsh cleansing agent that strips skin",
    benefits: ["Effective cleansing", "Rich lather", "Removes oil"],
    skinTypes: ["Very Oily"],
    concerns: ["Oiliness"],
    caution: "Can be harsh, strips natural oils, avoid if possible"
  },
  {
    name: "Sodium Laureth Sulfate",
    category: "Surfactant",
    rating: "Average",
    description: "Gentler than SLS but still potentially drying",
    benefits: ["Gentler than SLS", "Good cleansing", "Lather"],
    skinTypes: ["Oily", "Normal"],
    concerns: ["Oiliness"],
    caution: "Still potentially drying"
  },
  {
    name: "Coco Glucoside",
    category: "Surfactant",
    rating: "Good",
    description: "Gentle plant-derived cleanser",
    benefits: ["Gentle cleanser", "Natural origin", "Biodegradable", "Mild"],
    skinTypes: ["All", "Sensitive"],
    concerns: ["Sensitivity"]
  },
  {
    name: "Phenoxyethanol",
    category: "Preservative",
    rating: "Average",
    description: "Common gentle preservative",
    benefits: ["Effective preservative", "Prevents bacterial growth", "Broad spectrum"],
    skinTypes: ["Normal", "Oily"],
    concerns: [],
    caution: "Can irritate very sensitive skin"
  },
  {
    name: "Parabens",
    category: "Preservative",
    rating: "Average",
    description: "Effective preservatives with safety concerns",
    benefits: ["Very effective preservatives", "Prevents mold/bacteria", "Long history of use"],
    skinTypes: ["All"],
    concerns: [],
    caution: "Controversial - hormone disruption concerns"
  },
  {
    name: "Cetyl Alcohol",
    category: "Fatty Alcohol",
    rating: "Good",
    description: "Emollient and thickener, not drying",
    benefits: ["Emollient", "Thickener", "Stabilizes formulas", "Not drying"],
    skinTypes: ["All"],
    concerns: []
  },
  {
    name: "Stearyl Alcohol",
    category: "Fatty Alcohol",
    rating: "Good",
    description: "Emollient fatty alcohol",
    benefits: ["Emollient", "Thickener", "Stabilizer"],
    skinTypes: ["All"],
    concerns: []
  },
  {
    name: "Cetearyl Alcohol",
    category: "Fatty Alcohol",
    rating: "Good",
    description: "Emollient blend for stabilization",
    benefits: ["Emollient blend", "Thickener", "Stabilizes"],
    skinTypes: ["All"],
    concerns: []
  },
  {
    name: "Dimethicone",
    category: "Silicone",
    rating: "Good",
    description: "Silicone that creates smooth, protective barrier",
    benefits: ["Silky texture", "Locks in moisture", "Smoothing", "Heat protection"],
    skinTypes: ["All"],
    concerns: ["Texture issues", "Frizz"],
    caution: "Can build up, not water soluble"
  },
  {
    name: "Beeswax",
    category: "Wax",
    rating: "Good",
    description: "Natural emulsifier and protective barrier",
    benefits: ["Natural emulsifier", "Protective barrier", "Thickening"],
    skinTypes: ["Dry", "Normal"],
    concerns: ["Dryness"],
    caution: "Comedogenic rating 2, not vegan"
  },
  {
    name: "Green Tea Extract",
    category: "Antioxidant",
    rating: "Good",
    description: "Potent polyphenol antioxidant",
    benefits: ["Antioxidant", "Anti-inflammatory", "Soothing", "UV protection"],
    skinTypes: ["All", "Aging", "Sensitive"],
    concerns: ["Aging", "Environmental damage"]
  },
  {
    name: "Chamomile Extract",
    category: "Soothing Agent",
    rating: "Good",
    description: "Calming herb for sensitive skin",
    benefits: ["Soothing", "Anti-inflammatory", "Calming", "Good for sensitive skin"],
    skinTypes: ["Sensitive", "Inflamed", "Red"],
    concerns: ["Sensitivity", "Redness", "Inflammation"],
    caution: "Rare allergy to ragweed family"
  },
  {
    name: "Witch Hazel",
    category: "Astringent",
    rating: "Good",
    description: "Natural astringent for oil control",
    benefits: ["Astringent", "Pore tightening", "Oil control", "Soothing"],
    skinTypes: ["Oily", "Combination", "Acne-prone"],
    concerns: ["Oiliness", "Enlarged pores"],
    caution: "Choose alcohol-free versions"
  },
  {
    name: "Rose Water",
    category: "Hydrosol",
    rating: "Good",
    description: "Gentle hydrating floral water",
    benefits: ["Hydrating", "Soothing", "Gentle", "Pleasant scent"],
    skinTypes: ["All", "Sensitive"],
    concerns: ["Dehydration", "Sensitivity"]
  },
  {
    name: "Keratin",
    category: "Protein",
    rating: "Good",
    description: "Hair protein for strength and repair",
    benefits: ["Strengthens hair", "Repairs damage", "Smooths cuticle"],
    skinTypes: [],
    concerns: ["Damage", "Weakness"],
    caution: "Too much can make hair brittle"
  },
  {
    name: "Panthenol",
    category: "Vitamin",
    rating: "Good",
    description: "Pro-vitamin B5 that hydrates and heals",
    benefits: ["Pro-vitamin B5", "Moisturizing", "Strengthening", "Healing"],
    skinTypes: ["All"],
    concerns: ["Dehydration", "Sensitivity"]
  },
  {
    name: "Tocopherol",
    category: "Antioxidant",
    rating: "Good",
    description: "Vitamin E antioxidant",
    benefits: ["Vitamin E", "Antioxidant", "Preservative aid", "Moisturizing"],
    skinTypes: ["All"],
    concerns: ["Aging", "Environmental damage"],
    caution: "Can oxidize"
  },
  {
    name: "Honey",
    category: "Humectant",
    rating: "Good",
    description: "Natural humectant with antibacterial properties",
    benefits: ["Antibacterial", "Humectant", "Healing", "Gentle exfoliation"],
    skinTypes: ["All", "Acne-prone", "Dry"],
    concerns: ["Acne", "Dehydration", "Sensitivity"],
    caution: "Not vegan, can be sticky"
  },
  {
    name: "Snail Mucin",
    category: "Humectant",
    rating: "Good",
    description: "Snail secretion filtrate for repair and hydration",
    benefits: ["Hydrating", "Healing", "Collagen production", "Barrier repair", "Anti-aging"],
    skinTypes: ["All", "Aging", "Damaged"],
    concerns: ["Aging", "Dehydration", "Sensitivity", "Acne scars"],
    caution: "Not vegan"
  },
  {
    name: "Centella Asiatica",
    category: "Healing Agent",
    rating: "Good",
    description: "Tiger grass, legendary healing herb from Asia",
    benefits: ["Healing", "Collagen boost", "Anti-inflammatory", "Barrier repair", "Cica"],
    skinTypes: ["All", "Sensitive", "Aging", "Acne-prone"],
    concerns: ["Acne", "Sensitivity", "Redness", "Eczema", "Scarring"]
  },
  {
    name: "Azelaic Acid",
    category: "Treatment",
    rating: "Good",
    description: "Multi-functional acid for acne and rosacea",
    benefits: ["Anti-inflammatory", "Brightening", "Acne treatment", "Rosacea treatment", "Gentle"],
    skinTypes: ["Acne-prone", "Rosacea", "Hyperpigmentation", "Sensitive"],
    concerns: ["Acne", "Rosacea", "Hyperpigmentation", "Redness"],
    caution: "Can tingle, start slowly"
  },
  {
    name: "Kojic Acid",
    category: "Brightener",
    rating: "Good",
    description: "Fungal-derived brightening agent",
    benefits: ["Skin lightening", "Brightening", "Anti-aging", "Antifungal"],
    skinTypes: ["Hyperpigmentation", "Melasma"],
    concerns: ["Hyperpigmentation", "Melasma", "Age spots"],
    caution: "Can irritate, use sunscreen"
  },
  {
    name: "Licorice Root Extract",
    category: "Brightener",
    rating: "Good",
    description: "Natural brightener with anti-inflammatory benefits",
    benefits: ["Brightening", "Anti-inflammatory", "Soothing", "Gentle"],
    skinTypes: ["Sensitive", "Hyperpigmentation"],
    concerns: ["Hyperpigmentation", "Redness", "Dark spots"]
  },
  {
    name: "Kaolin Clay",
    category: "Clay",
    rating: "Good",
    description: "Gentle cleansing clay",
    benefits: ["Gentle cleansing", "Oil absorption", "Detoxifying", "Mild"],
    skinTypes: ["Sensitive", "Normal", "Combination"],
    concerns: ["Oiliness", "Congestion"],
    caution: "Can dry if overused"
  },
  {
    name: "Bentonite Clay",
    category: "Clay",
    rating: "Good",
    description: "Deep cleansing clay for oily skin",
    benefits: ["Deep cleansing", "Oil absorption", "Detoxifying", "Pore tightening"],
    skinTypes: ["Oily", "Acne-prone"],
    concerns: ["Oiliness", "Acne", "Congestion"],
    caution: "Very drying, not for dry skin"
  },
  {
    name: "Charcoal",
    category: "Detoxifier",
    rating: "Good",
    description: "Detoxifying agent for deep cleansing",
    benefits: ["Detoxifying", "Deep cleansing", "Oil absorption", "Pore clearing"],
    skinTypes: ["Oily", "Acne-prone"],
    concerns: ["Congestion", "Oiliness", "Acne"],
    caution: "Can dry skin, overuse damages barrier"
  },
  {
    name: "Zinc Oxide",
    category: "Sunscreen",
    rating: "Good",
    description: "Physical UV filter with soothing properties",
    benefits: ["Sun protection", "Physical SPF", "Soothing", "Non-irritating"],
    skinTypes: ["All", "Sensitive", "Baby"],
    concerns: ["Sun protection", "Sensitivity"],
    caution: "White cast, thick texture"
  },
  {
    name: "Titanium Dioxide",
    category: "Sunscreen",
    rating: "Good",
    description: "Physical UV filter for broad spectrum",
    benefits: ["Sun protection", "Physical SPF", "Brightening", "Non-irritating"],
    skinTypes: ["All", "Sensitive"],
    concerns: ["Sun protection"],
    caution: "White cast"
  },
  {
    name: "Allantoin",
    category: "Soothing Agent",
    rating: "Good",
    description: "Comfrey extract for healing and soothing",
    benefits: ["Soothing", "Healing", "Skin protectant", "Keratolytic"],
    skinTypes: ["All", "Sensitive", "Damaged"],
    concerns: ["Sensitivity", "Roughness"]
  },
  {
    name: "Bisabolol",
    category: "Soothing Agent",
    rating: "Good",
    description: "Chamomile-derived soothing agent",
    benefits: ["Anti-inflammatory", "Soothing", "Skin lightening aid", "Enhances penetration"],
    skinTypes: ["Sensitive", "Inflamed"],
    concerns: ["Sensitivity", "Redness", "Inflammation"]
  },
  {
    name: "Urea",
    category: "Exfoliant",
    rating: "Good",
    description: "Natural moisturizing factor that softens skin",
    benefits: ["Exfoliant", "Moisturizing", "Keratolytic", "Softens skin"],
    skinTypes: ["Dry", "Rough", "Keratosis pilaris"],
    concerns: ["Keratosis pilaris", "Dryness", "Roughness"],
    caution: "Can irritate at high concentrations"
  },
  {
    name: "Collagen",
    category: "Protein",
    rating: "Average",
    description: "Protein for moisturizing and plumping",
    benefits: ["Moisturizing", "Plumping", "Film-forming"],
    skinTypes: ["Aging", "Dry"],
    concerns: ["Aging"],
    caution: "Too large to penetrate - surface effect only"
  },
  
  // ============ NEW INGREDIENTS BATCH 1: UV FILTERS & HAIR CARE ============
  {
    name: "Tinosorb S",
    category: "Sunscreen - Chemical",
    rating: "Good",
    description: "Bemotrizinol, broad spectrum photostable filter",
    benefits: ["UVA/UVB protection", "Photostable", "Broad spectrum"],
    skinTypes: ["All"],
    concerns: ["Sun protection"]
  },
  {
    name: "Tinosorb M",
    category: "Sunscreen - Chemical",
    rating: "Good",
    description: "Bisoctrizole, hybrid chemical/physical filter",
    benefits: ["UVA/UVB protection", "Photostable"],
    skinTypes: ["All"],
    concerns: ["Sun protection"]
  },
  {
    name: "Uvinul A Plus",
    category: "Sunscreen - Chemical",
    rating: "Good",
    description: "Diethylamino Hydroxybenzoyl Hexyl Benzoate, UVA filter",
    benefits: ["UVA protection", "Photostable"],
    skinTypes: ["All"],
    concerns: ["Sun protection"]
  },
  {
    name: "Uvinul T 150",
    category: "Sunscreen - Chemical",
    rating: "Good",
    description: "Ethylhexyl Triazone, UVB filter",
    benefits: ["UVB protection", "High efficacy"],
    skinTypes: ["All"],
    concerns: ["Sun protection"]
  },
  {
    name: "Biotin",
    category: "Hair Care - Vitamin",
    rating: "Good",
    description: "Vitamin B7 for hair strength and growth",
    benefits: ["Hair growth", "Strength", "Keratin production"],
    skinTypes: ["All"],
    concerns: ["Hair loss", "Weak hair"]
  },
  {
    name: "Panthenol (Hair)",
    category: "Hair Care - Moisturizer",
    rating: "Good",
    description: "Pro-vitamin B5 for hair moisture and shine",
    benefits: ["Moisture", "Shine", "Damage repair", "Thickening"],
    skinTypes: ["All"],
    concerns: ["Dry hair", "Damage"]
  },
  {
    name: "Hydrolyzed Keratin",
    category: "Hair Care - Protein",
    rating: "Good",
    description: "Small keratin molecules for penetration",
    benefits: ["Penetration", "Repair", "Strength"],
    skinTypes: ["Damaged"],
    concerns: ["Damage"]
  },
  {
    name: "Silk Protein",
    category: "Hair Care - Protein",
    rating: "Good",
    description: "Silk amino acids for smoothness",
    benefits: ["Smoothness", "Shine", "Moisture retention"],
    skinTypes: ["All"],
    concerns: ["Frizz", "Dryness"]
  },
  {
    name: "Wheat Protein",
    category: "Hair Care - Protein",
    rating: "Good",
    description: "Plant protein for hair strength",
    benefits: ["Strength", "Volume", "Repair"],
    skinTypes: ["Fine", "Weak"],
    concerns: ["Weakness", "Volume loss"]
  },
  {
    name: "Rice Protein",
    category: "Hair Care - Protein",
    rating: "Good",
    description: "Vegan protein for hair volume",
    benefits: ["Volume", "Strength", "Vegan alternative"],
    skinTypes: ["Fine"],
    concerns: ["Volume"]
  },
  {
    name: "Arginine",
    category: "Hair Care - Amino Acid",
    rating: "Good",
    description: "Amino acid for scalp circulation",
    benefits: ["Circulation", "Growth", "Strength"],
    skinTypes: ["All"],
    concerns: ["Growth", "Thinning"]
  },
  {
    name: "Caffeine",
    category: "Hair Care - Stimulant",
    rating: "Good",
    description: "Stimulates hair follicles and growth",
    benefits: ["Follicle stimulation", "Growth", "DHT blocking"],
    skinTypes: ["All"],
    concerns: ["Hair loss", "Thinning"]
  },
  {
    name: "Saw Palmetto",
    category: "Hair Care - Botanical",
    rating: "Good",
    description: "DHT blocker for hair loss",
    benefits: ["DHT blocking", "Growth", "Anti-hair loss"],
    skinTypes: ["All"],
    concerns: ["Hair loss", "Hormonal"]
  },
  {
    name: "Rosemary Oil",
    category: "Hair Care - Essential Oil",
    rating: "Good",
    description: "Stimulates circulation comparable to minoxidil",
    benefits: ["Circulation", "Growth", "Thickness"],
    skinTypes: ["All"],
    concerns: ["Hair loss", "Thinning"]
  },
  {
    name: "Jojoba Oil (Hair)",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Scalp-balancing oil similar to sebum",
    benefits: ["Scalp balance", "Moisture", "Non-greasy"],
    skinTypes: ["All"],
    concerns: ["Scalp issues", "Dryness"]
  },
  {
    name: "Coconut Oil (Hair)",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Penetrates hair shaft for deep conditioning",
    benefits: ["Penetration", "Protein retention", "Shine"],
    skinTypes: ["Dry", "Normal"],
    concerns: ["Protein loss", "Dryness"],
    caution: "Can be too heavy for fine hair"
  },
  {
    name: "Argan Oil (Hair)",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Moroccan oil for frizz and shine",
    benefits: ["Frizz control", "Shine", "Heat protection"],
    skinTypes: ["Frizzy", "Dry"],
    concerns: ["Frizz", "Damage"]
  },
  {
    name: "Marula Oil (Hair)",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Lightweight African oil for hair",
    benefits: ["Lightweight moisture", "Heat protection", "Smoothness"],
    skinTypes: ["Fine", "Normal"],
    concerns: ["Dryness without weight"]
  },
  {
    name: "Baobab Oil (Hair)",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Vitamin-rich African oil for hair",
    benefits: ["Vitamins", "Moisture", "Elasticity"],
    skinTypes: ["Dry", "Brittle"],
    concerns: ["Brittleness", "Breakage"]
  },
  {
    name: "Moringa Oil (Hair)",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Lightweight oil for scalp health",
    benefits: ["Scalp health", "Lightweight", "Nutrient rich"],
    skinTypes: ["Oily", "Normal"],
    concerns: ["Scalp issues"]
  },
  {
    name: "Amla Oil",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Indian gooseberry for hair strength and color",
    benefits: ["Strength", "Color preservation", "Growth"],
    skinTypes: ["All"],
    concerns: ["Weakness", "Color fade"]
  },
  {
    name: "Brahmi Oil",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Ayurvedic herb for hair growth",
    benefits: ["Growth", "Thickness", "Scalp health"],
    skinTypes: ["All"],
    concerns: ["Thinning", "Growth"]
  },
  {
    name: "Bhringraj Oil",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "King of herbs for hair in Ayurveda",
    benefits: ["Growth", "Darkening", "Scalp health"],
    skinTypes: ["All"],
    concerns: ["Hair loss", "Premature graying"]
  },
  {
    name: "Neem Oil",
    category: "Hair Care - Oil",
    rating: "Good",
    description: "Antibacterial oil for scalp conditions",
    benefits: ["Antifungal", "Scalp health", "Dandruff"],
    skinTypes: ["Oily", "Problematic"],
    concerns: ["Dandruff", "Scalp acne"],
    caution: "Strong smell, dilute before use"
  },
  {
    name: "Tea Tree Oil (Hair)",
    category: "Hair Care - Essential Oil",
    rating: "Good",
    description: "Antifungal for dandruff and scalp",
    benefits: ["Antifungal", "Dandruff", "Scalp cleansing"],
    skinTypes: ["Oily", "Dandruff"],
    concerns: ["Dandruff", "Itchy scalp"],
    caution: "Dilute before use"
  },
  {
    name: "Peppermint Oil",
    category: "Hair Care - Essential Oil",
    rating: "Good",
    description: "Cooling oil for scalp stimulation",
    benefits: ["Stimulation", "Cooling", "Growth"],
    skinTypes: ["All"],
    concerns: ["Growth", "Circulation"],
    caution: "Dilute before use, avoid contact with eyes"
  },
  {
    name: "Lavender Oil",
    category: "Hair Care - Essential Oil",
    rating: "Good",
    description: "Calming oil with growth benefits",
    benefits: ["Calming", "Growth", "Antimicrobial"],
    skinTypes: ["All"],
    concerns: ["Growth", "Scalp issues"],
    caution: "Dilute before use"
  },
  {
    name: "Niacinamide (Hair)",
    category: "Hair Care - Vitamin",
    rating: "Good",
    description: "Strengthens hair and improves scalp barrier",
    benefits: ["Strength", "Scalp barrier", "Thickness"],
    skinTypes: ["All"],
    concerns: ["Thinning", "Weakness"]
  },
  {
    name: "Zinc PCA",
    category: "Hair Care - Mineral",
    rating: "Good",
    description: "Regulates scalp sebum production",
    benefits: ["Sebum regulation", "Dandruff", "Scalp health"],
    skinTypes: ["Oily"],
    concerns: ["Oily scalp", "Dandruff"]
  },
  {
    name: "Salicylic Acid (Hair)",
    category: "Hair Care - Exfoliant",
    rating: "Good",
    description: "Exfoliates scalp and removes buildup",
    benefits: ["Scalp exfoliation", "Dandruff", "Buildup removal"],
    skinTypes: ["Oily", "Dandruff"],
    concerns: ["Dandruff", "Buildup"],
    caution: "Can be drying if overused"
  },
  {
    name: "Coenzyme Q10",
    category: "Hair Care - Antioxidant",
    rating: "Good",
    description: "Antioxidant for scalp and hair anti-aging",
    benefits: ["Antioxidant", "Anti-aging", "Keratin production"],
    skinTypes: ["Aging"],
    concerns: ["Aging", "Weakness"]
  },
  
  // ============ BATCH 2: GLOBAL BOTANICALS & VITAMIN C ============
  {
    name: "Helichrysum",
    category: "Active - Healing",
    rating: "Good",
    description: "Immortelle flower for regeneration",
    benefits: ["Regeneration", "Anti-aging", "Healing"],
    skinTypes: ["Aging", "Damaged"],
    concerns: ["Aging", "Damage"]
  },
  {
    name: "Blue Tansy",
    category: "Active - Soothing",
    rating: "Good",
    description: "Moroccan chamomile for calming",
    benefits: ["Soothing", "Anti-inflammatory", "Blue color"],
    skinTypes: ["Sensitive", "Inflamed"],
    concerns: ["Redness", "Inflammation"]
  },
  {
    name: "Tamanu Oil",
    category: "Emollient",
    rating: "Good",
    description: "Polynesian oil for healing and scars",
    benefits: ["Healing", "Scar treatment", "Antibacterial"],
    skinTypes: ["Acne-prone", "Scarred"],
    concerns: ["Scars", "Acne"]
  },
  {
    name: "Monoi Oil",
    category: "Emollient",
    rating: "Good",
    description: "Tahitian gardenia in coconut oil",
    benefits: ["Moisture", "Fragrance", "Protection"],
    skinTypes: ["Dry", "Normal"],
    concerns: ["Dryness"]
  },
  {
    name: "Kukui Nut Oil",
    category: "Emollient",
    rating: "Good",
    description: "Hawaiian oil for dry skin",
    benefits: ["Deep moisture", "Absorption", "Soothing"],
    skinTypes: ["Dry", "Eczema"],
    concerns: ["Dryness", "Eczema"]
  },
  {
    name: "Moringa Extract",
    category: "Active - Purifying",
    rating: "Good",
    description: "Purifying extract for pollution protection",
    benefits: ["Anti-pollution", "Purifying", "Antioxidant"],
    skinTypes: ["All"],
    concerns: ["Environmental damage"]
  },
  {
    name: "Manketti Oil",
    category: "Emollient",
    rating: "Good",
    description: "Namibian oil rich in eleostearic acid",
    benefits: ["UV protection", "Moisture", "Repair"],
    skinTypes: ["Dry", "Damaged"],
    concerns: ["Sun damage", "Dryness"]
  },
  {
    name: "Ximenia Oil",
    category: "Emollient",
    rating: "Good",
    description: "Namibian oil for dry and mature skin",
    benefits: ["Deep moisture", "Anti-aging", "Soothing"],
    skinTypes: ["Dry", "Mature"],
    concerns: ["Dryness", "Aging"]
  },
  {
    name: "Mongongo Oil",
    category: "Emollient",
    rating: "Good",
    description: "Zambian oil with eleostearic acid",
    benefits: ["UV protection", "Moisture", "Elasticity"],
    skinTypes: ["All"],
    concerns: ["Environmental damage"]
  },
  {
    name: "Yangu Oil",
    category: "Emollient",
    rating: "Good",
    description: "African oil rich in essential fatty acids",
    benefits: ["EFA rich", "Moisture", "Protection"],
    skinTypes: ["Dry"],
    concerns: ["Dryness"]
  },
  {
    name: "Kalahari Melon Seed Oil",
    category: "Emollient",
    rating: "Good",
    description: "Namibian desert melon oil",
    benefits: ["Lightweight", "Omega-6", "Barrier repair"],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Cape Rose Geranium",
    category: "Active - Balancing",
    rating: "Good",
    description: "South African geranium for balancing",
    benefits: ["Balancing", "Astringent", "Healing"],
    skinTypes: ["Oily", "Combination"],
    concerns: ["Oiliness", "Imbalance"]
  },
  {
    name: "Honeybush Extract",
    category: "Active - Antioxidant",
    rating: "Good",
    description: "South African tea cousin of rooibos",
    benefits: ["Antioxidant", "Anti-aging", "Soothing"],
    skinTypes: ["All"],
    concerns: ["Aging"]
  },
  {
    name: "Buchu Extract",
    category: "Active - Purifying",
    rating: "Good",
    description: "South African herb for purifying",
    benefits: ["Purifying", "Antimicrobial", "Detoxifying"],
    skinTypes: ["Oily", "Acne-prone"],
    concerns: ["Acne", "Congestion"]
  },
  {
    name: "African Potato Extract",
    category: "Active - Healing",
    rating: "Good",
    description: "Hypoxis hemerocallidea for immunity",
    benefits: ["Immune support", "Anti-inflammatory", "Healing"],
    skinTypes: ["Sensitive"],
    concerns: ["Sensitivity", "Inflammation"]
  },
  {
    name: "Bulbine Frutescens",
    category: "Active - Healing",
    rating: "Good",
    description: "South African aloe relative",
    benefits: ["Healing", "Moisture", "Soothing"],
    skinTypes: ["Sensitive", "Damaged"],
    concerns: ["Damage", "Sensitivity"]
  },
  {
    name: "Ascorbyl Glucoside",
    category: "Active - Vitamin C",
    rating: "Good",
    description: "Stable vitamin C derivative",
    benefits: ["Brightening", "Stable", "Gentle"],
    skinTypes: ["All", "Sensitive"],
    concerns: ["Hyperpigmentation", "Dullness"]
  },
  {
    name: "Ascorbyl Palmitate",
    category: "Active - Vitamin C",
    rating: "Average",
    description: "Fat-soluble vitamin C, less potent",
    benefits: ["Antioxidant", "Oil soluble"],
    skinTypes: ["Dry"],
    concerns: ["Aging"],
    caution: "Less potent than other forms"
  },
  {
    name: "Ascorbyl Tetraisopalmitate",
    category: "Active - Vitamin C",
    rating: "Good",
    description: "Oil-soluble, stable vitamin C",
    benefits: ["Brightening", "Oil soluble", "Penetration"],
    skinTypes: ["All"],
    concerns: ["Hyperpigmentation"]
  },
  {
    name: "Sodium Ascorbyl Phosphate",
    category: "Active - Vitamin C",
    rating: "Good",
    description: "Stable, gentle vitamin C derivative",
    benefits: ["Brightening", "Stable", "Acne benefits"],
    skinTypes: ["All", "Acne-prone"],
    concerns: ["Hyperpigmentation", "Acne"]
  },
  {
    name: "Magnesium Ascorbyl Phosphate",
    category: "Active - Vitamin C",
    rating: "Good",
    description: "Stable vitamin C for hydration",
    benefits: ["Brightening", "Hydration", "Stable"],
    skinTypes: ["All"],
    concerns: ["Hyperpigmentation", "Dehydration"]
  },
  {
    name: "3-O-Ethyl Ascorbic Acid",
    category: "Active - Vitamin C",
    rating: "Good",
    description: "Modified vitamin C for better penetration",
    benefits: ["Brightening", "Penetration", "Stable"],
    skinTypes: ["All"],
    concerns: ["Hyperpigmentation"]
  },
  {
    name: "Ascorbic Acid Polypeptide",
    category: "Active - Vitamin C",
    rating: "Good",
    description: "Peptide-bound vitamin C",
    benefits: ["Brightening", "Delivery", "Stable"],
    skinTypes: ["All"],
    concerns: ["Hyperpigmentation"]
  },
  
  // ============ BATCH 3: RETINOIDS & CERAMIDES ============
  {
    name: "Hydroxypinacolone Retinoate",
    category: "Active - Retinoid",
    rating: "Good",
    description: "Granactive Retinoid, gentle but effective",
    benefits: ["Anti-aging", "Gentle", "Less irritation"],
    skinTypes: ["Sensitive", "Aging"],
    concerns: ["Aging", "Sensitivity to retinol"]
  },
  {
    name: "Retinyl Palmitate",
    category: "Active - Retinoid",
    rating: "Average",
    description: "Weakest retinoid, very gentle",
    benefits: ["Mild anti-aging", "Gentle", "Beginner friendly"],
    skinTypes: ["Sensitive", "Beginners"],
    concerns: ["Mild aging"],
    caution: "Very weak effects"
  },
  {
    name: "Retinyl Propionate",
    category: "Active - Retinoid",
    rating: "Good",
    description: "Olay's preferred retinoid, balanced",
    benefits: ["Anti-aging", "Balanced efficacy", "Tolerable"],
    skinTypes: ["All"],
    concerns: ["Aging"]
  },
  {
    name: "Retinyl Retinoate",
    category: "Active - Retinoid",
    rating: "Good",
    description: "Hybrid retinoid for day and night use",
    benefits: ["Daytime safe", "Anti-aging", "Photostable"],
    skinTypes: ["All"],
    concerns: ["Aging", "Convenience"]
  },
  {
    name: "Adapalene",
    category: "Active - Retinoid",
    rating: "Good",
    description: "Third-gen retinoid for acne",
    benefits: ["Acne treatment", "Anti-aging", "Stable"],
    skinTypes: ["Acne-prone", "Oily"],
    concerns: ["Acne", "Aging"],
    caution: "Prescription in some countries"
  },
  {
    name: "Tazarotene",
    category: "Active - Retinoid",
    rating: "Good",
    description: "Prescription retinoid for acne and psoriasis",
    benefits: ["Strong acne treatment", "Psoriasis", "Anti-aging"],
    skinTypes: ["Problematic"],
    concerns: ["Severe acne", "Psoriasis"],
    caution: "Prescription only, very strong"
  },
  {
    name: "Ceramide NP",
    category: "Active - Ceramide",
    rating: "Good",
    description: "Ceramide 3, skin-identical barrier lipid",
    benefits: ["Barrier repair", "Moisture retention", "Protection"],
    skinTypes: ["All", "Dry", "Sensitive"],
    concerns: ["Barrier damage", "Dryness"]
  },
  {
    name: "Ceramide AP",
    category: "Active - Ceramide",
    rating: "Good",
    description: "Ceramide 6, barrier restoration",
    benefits: ["Barrier repair", "Exfoliation support"],
    skinTypes: ["All"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Ceramide EOP",
    category: "Active - Ceramide",
    rating: "Good",
    description: "Ceramide 1, essential for barrier",
    benefits: ["Barrier integrity", "Moisture retention"],
    skinTypes: ["All"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Phytosphingosine",
    category: "Active - Ceramide Precursor",
    rating: "Good",
    description: "Precursor to ceramides, antimicrobial",
    benefits: ["Ceramide production", "Antimicrobial", "Soothing"],
    skinTypes: ["All", "Acne-prone"],
    concerns: ["Barrier damage", "Acne"]
  },
  {
    name: "Sphingosine",
    category: "Active - Ceramide Precursor",
    rating: "Good",
    description: "Natural component of skin barrier",
    benefits: ["Barrier support", "Cell regulation"],
    skinTypes: ["All"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Cholesterol",
    category: "Active - Barrier",
    rating: "Good",
    description: "Essential barrier lipid with ceramides",
    benefits: ["Barrier repair", "Moisture retention", "Skin-identical"],
    skinTypes: ["Dry", "Aging"],
    concerns: ["Barrier damage", "Aging"]
  },
  {
    name: "Fatty Acids",
    category: "Active - Barrier",
    rating: "Good",
    description: "Essential for barrier function",
    benefits: ["Barrier support", "Moisture", "Protection"],
    skinTypes: ["All"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Linoleic Acid",
    category: "Active - Omega-6",
    rating: "Good",
    description: "Essential fatty acid for barrier",
    benefits: ["Barrier repair", "Anti-inflammatory", "Lightweight"],
    skinTypes: ["Oily", "Acne-prone"],
    concerns: ["Barrier damage", "Acne"]
  },
  {
    name: "Oleic Acid",
    category: "Active - Omega-9",
    rating: "Average",
    description: "Fatty acid, can disrupt barrier if dominant",
    benefits: ["Moisture", "Penetration"],
    skinTypes: ["Dry"],
    concerns: ["Dryness"],
    caution: "Can compromise barrier in excess"
  },
  {
    name: "Gamma-Linolenic Acid",
    category: "Active - Omega-6",
    rating: "Good",
    description: "GLA, anti-inflammatory omega-6",
    benefits: ["Anti-inflammatory", "Barrier support", "Hormonal skin"],
    skinTypes: ["Sensitive", "Hormonal"],
    concerns: ["Inflammation", "Hormonal acne"]
  },
  
  // ============ BATCH 4: PREBIOTICS, ANTI-POLLUTION, ACIDS ============
  {
    name: "Inulin",
    category: "Active - Prebiotic",
    rating: "Good",
    description: "Prebiotic fiber for good bacteria",
    benefits: ["Microbiome support", "Prebiotic", "Hydration"],
    skinTypes: ["All"],
    concerns: ["Microbiome imbalance"]
  },
  {
    name: "Alpha-Glucan Oligosaccharide",
    category: "Active - Prebiotic",
    rating: "Good",
    description: "Selective prebiotic for skin flora",
    benefits: ["Microbiome balance", "Protection", "Hydration"],
    skinTypes: ["All"],
    concerns: ["Microbiome"]
  },
  {
    name: "Polymnia Sonchifolia Root Juice",
    category: "Active - Prebiotic",
    rating: "Good",
    description: "Yacon juice, natural prebiotic",
    benefits: ["Prebiotic", "Antioxidant", "Soothing"],
    skinTypes: ["All"],
    concerns: ["Microbiome"]
  },
  {
    name: "Lactococcus Ferment Lysate",
    category: "Active - Postbiotic",
    rating: "Good",
    description: "Probiotic lysate for barrier",
    benefits: ["Barrier support", "Microbiome", "Hydration"],
    skinTypes: ["All"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Saccharomyces Lysate",
    category: "Active - Postbiotic",
    rating: "Good",
    description: "Yeast lysate for skin health",
    benefits: ["Cellular energy", "Antioxidant", "Soothing"],
    skinTypes: ["All"],
    concerns: ["Dullness"]
  },
  {
    name: "Bifida Ferment Filtrate",
    category: "Active - Postbiotic",
    rating: "Good",
    description: "Fermented bifida for DNA repair",
    benefits: ["DNA repair", "Anti-aging", "Barrier"],
    skinTypes: ["Aging", "Damaged"],
    concerns: ["Aging", "Damage"]
  },
  {
    name: "Alteromonas Ferment Extract",
    category: "Active - Anti-pollution",
    rating: "Good",
    description: "Marine extract for pollution protection",
    benefits: ["Anti-pollution", "Blue light protection", "Barrier"],
    skinTypes: ["All"],
    concerns: ["Environmental damage"]
  },
  {
    name: "Exopolysaccharides",
    category: "Active - Anti-pollution",
    rating: "Good",
    description: "Marine sugars for protection shield",
    benefits: ["Pollution shield", "Hydration", "Protection"],
    skinTypes: ["All"],
    concerns: ["Pollution"]
  },
  {
    name: "Lutein",
    category: "Active - Antioxidant",
    rating: "Good",
    description: "Carotenoid for blue light protection",
    benefits: ["Blue light protection", "Antioxidant", "Eye health"],
    skinTypes: ["All"],
    concerns: ["Digital aging", "Blue light"]
  },
  {
    name: "Zeaxanthin",
    category: "Active - Antioxidant",
    rating: "Good",
    description: "Carotenoid with blue light filtering",
    benefits: ["Blue light filter", "Antioxidant", "Protection"],
    skinTypes: ["All"],
    concerns: ["Blue light", "Environmental damage"]
  },
  {
    name: "Theobroma Cacao Extract",
    category: "Active - Anti-pollution",
    rating: "Good",
    description: "Cocoa extract for pollution defense",
    benefits: ["Anti-pollution", "Antioxidant", "Blue light"],
    skinTypes: ["All"],
    concerns: ["Pollution"]
  },
  {
    name: "Indian Ginseng",
    category: "Active - Anti-pollution",
    rating: "Good",
    description: "Withania Somnifera for blue light",
    benefits: ["Blue light protection", "Energy", "Anti-fatigue"],
    skinTypes: ["All"],
    concerns: ["Digital aging", "Fatigue"]
  },
  {
    name: "Solibroil",
    category: "Active - Anti-pollution",
    rating: "Good",
    description: "Broccoli sprout extract for pollution",
    benefits: ["Anti-pollution", "Detoxifying", "Antioxidant"],
    skinTypes: ["All"],
    concerns: ["Pollution"]
  },
  {
    name: "Citric Acid",
    category: "Active - AHA",
    rating: "Good",
    description: "AHA from citrus for pH adjustment and exfoliation",
    benefits: ["Exfoliation", "pH adjustment", "Brightening"],
    skinTypes: ["Normal", "Oily"],
    concerns: ["Dullness"]
  },
  {
    name: "Tartaric Acid",
    category: "Active - AHA",
    rating: "Good",
    description: "Grape-derived AHA",
    benefits: ["Exfoliation", "Antioxidant", "pH balance"],
    skinTypes: ["All"],
    concerns: ["Dullness"]
  },
  {
    name: "Malic Acid",
    category: "Active - AHA",
    rating: "Good",
    description: "Apple-derived AHA",
    benefits: ["Gentle exfoliation", "Hydration", "pH balance"],
    skinTypes: ["Sensitive"],
    concerns: ["Gentle exfoliation"]
  },
  {
    name: "Mandelic Acid",
    category: "Active - AHA",
    rating: "Good",
    description: "Large molecule AHA from almonds, very gentle",
    benefits: ["Very gentle exfoliation", "Antibacterial", "Brightening"],
    skinTypes: ["Sensitive", "Acne-prone"],
    concerns: ["Sensitivity", "Acne"]
  },
  {
    name: "Polyhydroxy Butyric Acid",
    category: "Active - PHA",
    rating: "Good",
    description: "Gentle PHA for sensitive skin",
    benefits: ["Very gentle exfoliation", "Hydration"],
    skinTypes: ["Very sensitive"],
    concerns: ["Sensitivity"]
  },
  {
    name: "Capryloyl Salicylic Acid",
    category: "Active - BHA",
    rating: "Good",
    description: "LHA, lipophilic salicylic acid derivative",
    benefits: ["Gentle exfoliation", "Oil soluble", "Cell by cell"],
    skinTypes: ["Sensitive", "Acne-prone"],
    concerns: ["Sensitivity", "Acne"]
  },
  {
    name: "Salix Alba Bark Extract",
    category: "Active - Natural BHA",
    rating: "Good",
    description: "Willow bark, natural salicylic acid source",
    benefits: ["Natural exfoliation", "Anti-inflammatory", "Gentle"],
    skinTypes: ["Sensitive"],
    concerns: ["Natural preference", "Sensitivity"]
  },
  
  // ============ BATCH 5: MINERALS & AMINO ACIDS ============
  {
    name: "Zinc Oxide (Non-nano)",
    category: "Active - Mineral",
    rating: "Good",
    description: "Mineral for soothing and protection",
    benefits: ["Soothing", "Protection", "Non-nano safety"],
    skinTypes: ["Sensitive", "Baby"],
    concerns: ["Sensitivity", "Protection"]
  },
  {
    name: "Colloidal Sulfur",
    category: "Active - Mineral",
    rating: "Good",
    description: "Sulfur for acne and oil control",
    benefits: ["Acne treatment", "Oil control", "Antibacterial"],
    skinTypes: ["Oily", "Acne-prone"],
    concerns: ["Acne", "Oiliness"],
    caution: "Strong smell"
  },
  {
    name: "Dead Sea Salt",
    category: "Active - Mineral",
    rating: "Good",
    description: "Mineral-rich salt for skin health",
    benefits: ["Minerals", "Detoxifying", "Exfoliation"],
    skinTypes: ["All"],
    concerns: ["Mineral deficiency"]
  },
  {
    name: "Himalayan Pink Salt",
    category: "Active - Mineral",
    rating: "Good",
    description: "Trace mineral-rich salt",
    benefits: ["Minerals", "Detoxifying", "Purifying"],
    skinTypes: ["All"],
    concerns: ["Detoxification"]
  },
  {
    name: "Magnesium Chloride",
    category: "Active - Mineral",
    rating: "Good",
    description: "Magnesium for skin health",
    benefits: ["Magnesium delivery", "Soothing", "Barrier"],
    skinTypes: ["All"],
    concerns: ["Magnesium deficiency"]
  },
  {
    name: "Calcium",
    category: "Active - Mineral",
    rating: "Good",
    description: "Essential mineral for skin barrier",
    benefits: ["Barrier function", "Cell turnover", "Protection"],
    skinTypes: ["All"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Potassium",
    category: "Active - Mineral",
    rating: "Good",
    description: "Electrolyte for hydration balance",
    benefits: ["Hydration balance", "Cell function"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Silica",
    category: "Active - Mineral",
    rating: "Good",
    description: "Mineral for skin strength",
    benefits: ["Collagen support", "Strength", "Oil absorption"],
    skinTypes: ["Oily"],
    concerns: ["Oiliness", "Weakness"]
  },
  {
    name: "Copper",
    category: "Active - Mineral",
    rating: "Good",
    description: "Trace mineral for healing and collagen",
    benefits: ["Collagen", "Healing", "Antioxidant"],
    skinTypes: ["Aging", "Damaged"],
    concerns: ["Aging", "Damage"]
  },
  {
    name: "Iron",
    category: "Active - Mineral",
    rating: "Good",
    description: "Mineral for oxygenation and glow",
    benefits: ["Oxygenation", "Glow", "Circulation"],
    skinTypes: ["Dull"],
    concerns: ["Dullness", "Pale skin"]
  },
  {
    name: "Selenium",
    category: "Active - Mineral",
    rating: "Good",
    description: "Antioxidant mineral",
    benefits: ["Antioxidant", "Protection", "Anti-aging"],
    skinTypes: ["Aging"],
    concerns: ["Aging", "Environmental damage"]
  },
  {
    name: "Proline",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Collagen-building amino acid",
    benefits: ["Collagen synthesis", "Firmness", "Healing"],
    skinTypes: ["Aging"],
    concerns: ["Aging"]
  },
  {
    name: "Glycine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Smallest amino acid, collagen component",
    benefits: ["Collagen", "Texture", "Hydration"],
    skinTypes: ["All"],
    concerns: ["Texture", "Aging"]
  },
  {
    name: "Alanine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Hydrating amino acid",
    benefits: ["Hydration", "Immune support"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Serine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Natural moisturizing factor",
    benefits: ["Hydration", "Barrier", "NMN component"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Threonine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Essential amino acid for skin",
    benefits: ["Barrier function", "Immune", "Elasticity"],
    skinTypes: ["All"],
    concerns: ["Barrier damage"]
  },
  {
    name: "Valine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Branched-chain amino acid",
    benefits: ["Tissue repair", "Muscle support"],
    skinTypes: ["Damaged"],
    concerns: ["Damage"]
  },
  {
    name: "Isoleucine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Essential amino acid",
    benefits: ["Immune function", "Healing"],
    skinTypes: ["All"],
    concerns: ["Healing"]
  },
  {
    name: "Leucine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Key for protein synthesis",
    benefits: ["Protein synthesis", "Repair", "Anti-aging"],
    skinTypes: ["Aging"],
    concerns: ["Aging"]
  },
  {
    name: "Lysine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Essential for collagen and healing",
    benefits: ["Collagen support", "Healing", "Anti-viral"],
    skinTypes: ["All"],
    concerns: ["Healing", "Aging"]
  },
  {
    name: "Histidine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Antioxidant amino acid",
    benefits: ["Antioxidant", "Soothing", "UV protection"],
    skinTypes: ["All"],
    concerns: ["Environmental damage"]
  },
  {
    name: "Phenylalanine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Precursor to tyrosine and melanin",
    benefits: ["Pigmentation regulation", "UV protection"],
    skinTypes: ["Hyperpigmented"],
    concerns: ["Hyperpigmentation"]
  },
  {
    name: "Tryptophan",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Essential amino acid with UV protection",
    benefits: ["UV protection", "Barrier", "Soothing"],
    skinTypes: ["All"],
    concerns: ["Sun protection"]
  },
  {
    name: "Tyrosine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Melanin precursor for tanning",
    benefits: ["Tanning support", "Pigmentation"],
    skinTypes: ["All"],
    concerns: ["Tanning"]
  },
  {
    name: "Cysteine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Sulfur amino acid for keratin",
    benefits: ["Keratin synthesis", "Antioxidant", "Detox"],
    skinTypes: ["All"],
    concerns: ["Strength"]
  },
  {
    name: "Methionine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Essential sulfur amino acid",
    benefits: ["Detoxification", "Antioxidant", "Protein synthesis"],
    skinTypes: ["All"],
    concerns: ["Detox"]
  },
  {
    name: "Aspartic Acid",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Acidic amino acid for energy",
    benefits: ["Energy production", "Cell function"],
    skinTypes: ["All"],
    concerns: ["Energy"]
  },
  {
    name: "Glutamic Acid",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "NMN component and hydrating",
    benefits: ["Hydration", "Barrier", "NMN"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Asparagine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Hydrating amino acid",
    benefits: ["Hydration", "Protein synthesis"],
    skinTypes: ["All"],
    concerns: ["Dehydration"]
  },
  {
    name: "Glutamine",
    category: "Active - Amino Acid",
    rating: "Good",
    description: "Cellular energy amino acid",
    benefits: ["Cellular energy", "Healing", "Barrier"],
    skinTypes: ["Damaged"],
    concerns: ["Damage"]
  },
  
  // ============ BATCH 6: STEM CELLS, ENZYMES, ADAPTOGENS, AMAZONIAN ============
  {
    name: "Apple Stem Cell",
    category: "Active - Stem Cell",
    rating: "Good",
    description: "Uttwiler Spätlauber for longevity",
    benefits: ["Longevity", "Protection", "Anti-aging"],
    skinTypes: ["Aging"],
    concerns: ["Aging"]
  },
  {
    name: "Argan Stem Cell",
    category: "Active - Stem Cell",
    rating: "Good",
    description: "Argan tree stem cells for density",
    benefits: ["Dermal density", "Firming", "Anti-aging"],
    skinTypes: ["Aging", "Thin skin"],
    concerns: ["Thinning skin", "Aging"]
  },
  {
    name: "Gardenia Stem Cell",
    category: "Active - Stem Cell",
    rating: "Good",
    description: "For collagen and hydration",
    benefits: ["Collagen", "Hydration", "Anti-aging"],
    skinTypes: ["Aging"],
    concerns: ["Aging"]
  },
  {
    name: "Echinacea Stem Cell",
    category: "Active - Stem Cell",
    rating: "Good",
    description: "For firming and contouring",
    benefits: ["Firming", "Contouring", "Anti-aging"],
    skinTypes: ["Aging", "Sagging"],
    concerns: ["Sagging", "Aging"]
  },
  {
    name: "Sea Fennel Stem Cell",
    category: "Active - Stem Cell",
    rating: "Good",
    description: "Marine plant for renewal",
    benefits: ["Cell renewal", "Retinol alternative", "Anti-aging"],
    skinTypes: ["Aging", "Sensitive"],
    concerns: ["Aging", "Sensitivity to retinol"]
  },
  {
    name: "Edelweiss Stem Cell",
    category: "Active - Stem Cell",
    rating: "Good",
    description: "Alpine flower for protection",
    benefits: ["Antioxidant", "Protection", "Anti-aging"],
    skinTypes: ["Aging"],
    concerns: ["Environmental damage", "Aging"]
  },
  {
    name: "Snow Algae",
    category: "Active - Algae",
    rating: "Good",
    description: "Swiss algae for longevity",
    benefits: ["Longevity", "Cell protection", "Anti-aging"],
    skinTypes: ["Aging"],
    concerns: ["Aging"]
  },
  {
    name: "Papain",
    category: "Active - Enzyme",
    rating: "Good",
    description: "Papaya enzyme for gentle exfoliation",
    benefits: ["Gentle exfoliation", "Brightening", "Protein digestion"],
    skinTypes: ["Sensitive", "All"],
    concerns: ["Dullness", "Gentle exfoliation needed"]
  },
  {
    name: "Bromelain",
    category: "Active - Enzyme",
    rating: "Good",
    description: "Pineapple enzyme for exfoliation",
    benefits: ["Exfoliation", "Anti-inflammatory", "Brightening"],
    skinTypes: ["All"],
    concerns: ["Dullness", "Inflammation"]
  },
  {
    name: "Pumpkin Enzyme",
    category: "Active - Enzyme",
    rating: "Good",
    description: "Pumpkin-derived exfoliating enzyme",
    benefits: ["Exfoliation", "Vitamin A", "Antioxidant"],
    skinTypes: ["All", "Dull"],
    concerns: ["Dullness", "Aging"]
  },
  {
    name: "Pomegranate Enzyme",
    category: "Active - Enzyme",
    rating: "Good",
    description: "Gentle exfoliating enzyme",
    benefits: ["Gentle exfoliation", "Antioxidant", "Brightening"],
    skinTypes: ["Sensitive"],
    concerns: ["Dullness", "Sensitivity"]
  },
  {
    name: "Bacillus Ferment",
    category: "Active - Enzyme",
    rating: "Good",
    description: "Probiotic enzyme for exfoliation",
    benefits: ["Exfoliation", "Probiotic benefits", "Gentle"],
    skinTypes: ["All", "Sensitive"],
    concerns: ["Dullness", "Sensitivity"]
  },
  {
    name: "Gluconolactone",
    category: "Active - PHA",
    rating: "Good",
    description: "Gentle PHA with antioxidant properties",
    benefits: ["Gentle exfoliation", "Antioxidant", "Hydration"],
    skinTypes: ["Sensitive", "All"],
    concerns: ["Sensitivity", "Dullness"]
  },
  {
    name: "Lactobionic Acid",
    category: "Active - PHA",
    rating: "Good",
    description: "PHA with humectant properties",
    benefits: ["Gentle exfoliation", "Hydration", "Antioxidant"],
    skinTypes: ["Sensitive", "Dry"],
    concerns: ["Sensitivity", "Dehydration"]
  },
  {
    name: "Maltobionic Acid",
    category: "Active - PHA",
    rating: "Good",
    description: "Stronger PHA with antioxidant benefits",
    benefits: ["Exfoliation", "Antioxidant", "Gentle"],
    skinTypes: ["Sensitive", "Aging"],
    concerns: ["Aging", "Sensitivity"]
  },
  {
    name: "Ashwagandha",
    category: "Active - Adaptogen",
    rating: "Good",
    description: "Indian ginseng for stress protection",
    benefits: ["Stress protection", "Cortisol reduction", "Anti-aging"],
    skinTypes: ["Stressed", "Aging"],
    concerns: ["Stress aging", "Environmental stress"]
  },
  {
    name: "Rhodiola Rosea",
    category: "Active - Adaptogen",
    rating: "Good",
    description: "Arctic root for environmental stress",
    benefits: ["Environmental protection", "Oxygenation", "Anti-fatigue"],
    skinTypes: ["All", "Stressed"],
    concerns: ["Environmental damage", "Fatigue"]
  },
  {
    name: "Holy Basil",
    category: "Active - Adaptogen",
    rating: "Good",
    description: "Tulsi, sacred herb for purifying and calming",
    benefits: ["Purifying", "Calming", "Anti-inflammatory"],
    skinTypes: ["Oily", "Acne-prone", "Stressed"],
    concerns: ["Acne", "Stress", "Congestion"]
  },
  {
    name: "Schisandra Berry",
    category: "Active - Adaptogen",
    rating: "Good",
    description: "Five-flavor berry for resilience",
    benefits: ["Skin resilience", "Antioxidant", "Firming"],
    skinTypes: ["Aging", "Stressed"],
    concerns: ["Aging", "Loss of resilience"]
  },
  {
    name: "Curcumin",
    category: "Active - Anti-inflammatory",
    rating: "Good",
    description: "Active compound in turmeric",
    benefits: ["Potent anti-inflammatory", "Brightening", "Antioxidant"],
    skinTypes: ["All"],
    concerns: ["Inflammation", "Aging"]
  },
  {
    name: "Tetrahydrocurcumin",
    category: "Active - Brightening",
    rating: "Good",
    description: "Stabilized curcumin for brightening",
    benefits: ["Brightening", "Anti-inflammatory", "Stable"],
    skinTypes: ["All"],
    concerns: ["Hyperpigmentation"]
  },
  {
    name: "Kakadu Plum",
    category: "Active - Vitamin C",
    rating: "Good",
    description: "Highest vitamin C content of any fruit",
    benefits: ["Super vitamin C", "Brightening", "Antioxidant", "Anti-aging"],
    skinTypes: ["All", "Aging", "Dull"],
    concerns: ["Aging", "Dullness", "Hyperpigmentation"]
  },
  {
    name: "Finger Lime Caviar",
    category: "Active - Exfoliant",
    rating: "Good",
    description: "Australian citrus with natural AHA",
    benefits: ["Natural exfoliation", "Brightening", "Vitamin C"],
    skinTypes: ["All", "Dull"],
    concerns: ["Dullness", "Texture"]
  },
  {
    name: "Davidson Plum",
    category: "Active - Antioxidant",
    rating: "Good",
    description: "Australian superfruit with anthocyanins",
    benefits: ["Antioxidant", "Anti-inflammatory", "Collagen support"],
    skinTypes: ["Aging", "Sensitive"],
    concerns: ["Aging", "Inflammation"]
  },
  {
    name: "Quandong",
    category: "Active - Brightening",
    rating: "Good",
    description: "Australian peach with vitamin C",
    benefits: ["Vitamin C", "Brightening", "Antioxidant"],
    skinTypes: ["All"],
    concerns: ["Dullness", "Aging"]
  },
  {
    name: "Dragon's Blood",
    category: "Active - Healing",
    rating: "Good",
    description: "Amazonian tree sap for healing",
    benefits: ["Wound healing", "Anti-inflammatory", "Barrier repair"],
    skinTypes: ["Sensitive", "Damaged"],
    concerns: ["Sensitivity", "Redness", "Damage"]
  },
  {
    name: "Copaiba Resin",
    category: "Active - Anti-inflammatory",
    rating: "Good",
    description: "Amazonian tree resin for inflammation",
    benefits: ["Anti-inflammatory", "Healing", "Antibacterial"],
    skinTypes: ["Inflamed", "Acne-prone"],
    concerns: ["Inflammation", "Acne"]
  },
  {
    name: "Andiroba Oil",
    category: "Emollient",
    rating: "Good",
    description: "Amazonian oil for healing and inflammation",
    benefits: ["Anti-inflammatory", "Healing", "Moisturizing"],
    skinTypes: ["Inflamed", "Damaged"],
    concerns: ["Inflammation", "Damage"]
  },
  {
    name: "Buriti Oil",
    category: "Emollient",
    rating: "Good",
    description: "Amazonian oil richest in beta-carotene",
    benefits: ["Beta-carotene", "UV protection", "Moisturizing"],
    skinTypes: ["Dry", "Aging"],
    concerns: ["Aging", "Sun damage"]
  },
  {
    name: "Sacha Inchi Oil",
    category: "Emollient",
    rating: "Good",
    description: "Inca peanut oil rich in omega-3",
    benefits: ["Omega-3", "Barrier repair", "Anti-inflammatory"],
    skinTypes: ["All", "Inflamed"],
    concerns: ["Inflammation", "Barrier damage"]
  },
  {
    name: "Maracuja Oil",
    category: "Emollient",
    rating: "Good",
    description: "Passion fruit seed oil",
    benefits: ["Lightweight", "Vitamin C", "Linoleic acid"],
    skinTypes: ["Oily", "Acne-prone"],
    concerns: ["Oiliness", "Acne"]
  },
  {
    name: "Acai Berry",
    category: "Active - Antioxidant",
    rating: "Good",
    description: "Amazonian superfruit with anthocyanins",
    benefits: ["Super antioxidant", "Anti-aging", "Nutrient dense"],
    skinTypes: ["Aging"],
    concerns: ["Aging", "Environmental damage"]
  },
  {
    name: "Cupuacu Butter",
    category: "Emollient",
    rating: "Good",
    description: "Amazonian super-moisturizer",
    benefits: ["Super hydration", "Elasticity", "Water retention"],
    skinTypes: ["Dry", "Very dry"],
    concerns: ["Severe dryness"]
  },
  {
    name: "Bacuri Butter",
    category: "Emollient",
    rating: "Good",
    description: "Amazonian butter for healing",
    benefits: ["Healing", "Anti-inflammatory", "Moisturizing"],
    skinTypes: ["Damaged", "Inflamed"],
    concerns: ["Damage", "Inflammation"]
  }
]

// Common products database for quick select
export const commonProducts = [
  {
    name: 'CeraVe Hydrating Cleanser',
    category: 'Cleanser',
    ingredients: 'Water, Glycerin, Cetearyl Alcohol, Phenoxyethanol, Stearyl Alcohol, Cetyl Alcohol, Peg-40 Stearate, Behentrimonium Methosulfate, Sodium Lauroyl Lactylate, Ethylhexylglycerin, Potassium Phosphate, Disodium Edta, Dipotassium Phosphate, Ceramide Np, Ceramide Ap, Phytosphingosine, Cholesterol, Sodium Hyaluronate, Xanthan Gum, Carbomer, Sodium Hydroxide, Tocopherol, Ceramide Eop'
  },
  {
    name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    category: 'Serum',
    ingredients: 'Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin'
  },
  {
    name: 'Shea Moisture Raw Shea Butter Deep Treatment Masque',
    category: 'Hair Mask',
    ingredients: 'Deionized Water, Butyrospermum Parkii (Shea Butter), Argan Oil, Coconut Oil, Macadamia Ternifolia Seed Oil, Mangifera Indica (Mango) Seed Butter, Persea Gratissima (Avocado) Oil, Vegetable Glycerin, Aloe Barbadensis Leaf Extract, Tocopherol (Vitamin E), Melia Azadirachta (Neem) Seed Oil, Daucus Carota Sativa (Carrot) Seed Oil, Sorbitol Esters, Caprylyl Glycol, Essential Oil Blend'
  },
  {
    name: 'Paula\'s Choice 2% BHA Liquid Exfoliant',
    category: 'Exfoliant',
    ingredients: 'Water, Methylpropanediol, Butylene Glycol, Salicylic Acid, Polysorbate 20, Camellia Oleifera Leaf Extract, Sodium Hydroxide, Tetrasodium EDTA'
  },
  {
    name: 'Neutrogena Hydro Boost Gel-Cream',
    category: 'Moisturizer',
    ingredients: 'Water, Dimethicone, Glycerin, Cetearyl Olivate, Polyacrylamide, Phenoxyethanol, Dimethicone/Vinyl Dimethicone Crosspolymer, Synthetic Beeswax, C13-14 Isoparaffin, Sorbitan Olivate, Dimethiconol, Dimethicone Crosspolymer, Chlorphenesin, Carbomer, Laureth-7, Sodium Hyaluronate, Ethylhexylglycerin, C12-14 Pareth-12, Sodium Hydroxide'
  },
  {
    name: 'Cantu Shea Butter Leave-In Conditioning Repair Cream',
    category: 'Hair Leave-in',
    ingredients: 'Water, Cetearyl Alcohol, Glycerin, Cetyl Alcohol, Dimethicone, Butyrospermum Parkii (Shea Butter), Peg-40 Hydrogenated Castor Oil, Parfum (Fragrance), Polyquaternium-32, Lanolin, Phenoxyethanol, Ethylhexylglycerin, Ceteareth-20, Panthenol, Sodium Citrate, Citric Acid'
  },
  {
    name: 'The Ordinary Hyaluronic Acid 2% + B5',
    category: 'Serum',
    ingredients: 'Aqua (Water), Sodium Hyaluronate, Pentylene Glycol, Propanediol, Sodium Hyaluronate Crosspolymer, Panthenol, Ahnfeltia Concinna Extract, Glycerin, Trisodium Ethylenediamine Disuccinate, Citric Acid, Isoceteth-20, Ethoxydiglycol, Ethylhexylglycerin, Hexylene Glycol, 1,2-Hexanediol, Phenoxyethanol, Caprylyl Glycol'
  },
  {
    name: 'African Black Soap',
    category: 'Cleanser',
    ingredients: 'Cocos Nucifera (Coconut) Oil, Elaeis Guineensis (Palm) Kernel Oil, Cocoa Pod Ash, Plantain Peel Ash, Water'
  },
  {
    name: 'Simple Kind to Skin Hydrating Light Moisturizer',
    category: 'Moisturizer',
    ingredients: 'Aqua, Glycerin, Paraffinum Liquidum, Polyglyceryl-3 Methylglucose Distearate, Cetyl Palmitate, Dimethicone, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Bisabolol, Borago Officinalis Seed Oil, Caprylyl Glycol, Carbomer, Cetyl Alcohol, Disodium EDTA, Lactic Acid, Panthenol, Pantolactone, Pentylene Glycol, Phenoxyethanol, Potassium Carbonate, Potassium Hydroxide, Serine, Sodium Lactate, Sorbitol, Tocopherol, Urea'
  },
  {
    name: 'Garnier Micellar Cleansing Water',
    category: 'Cleanser',
    ingredients: 'Aqua/Water, Hexylene Glycol, Glycerin, Poloxamer 184, Disodium Cocoamphodiacetate, Disodium EDTA, Polyaminopropyl Biguanide'
  }
]