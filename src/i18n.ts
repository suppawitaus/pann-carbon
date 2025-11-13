import {
  createContext,
  createElement,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export type Language = "en" | "th";

const en = {
  "nav.hero": "Hero",
  "nav.problem": "Problem",
  "nav.solution": "Solution",
  "nav.flow": "Flow",
  "nav.market": "Market",
  "nav.business": "Business",
  "nav.differentiation": "Differentiation",
  "nav.impact": "Impact",
  "nav.future": "Future",
  "nav.team": "Team",
  "nav.backToHome": "Back to Home",
  "hero.badge": "Climate Insurtech Broker • Thailand",
  "hero.title": "PANN CARBON: Climate Insurtech Broker",
  "hero.subtitle":
    "PANN CARBON turns EV driving data into carbon credits and real insurance discounts.",
  "hero.description":
    "We connect EV telematics, insurance partners, and carbon markets to reward drivers while helping insurers launch ESG-aligned products.",
  "hero.primaryCta": "Learn how it works",
  "hero.ctaOwners": "For EV Owners",
  "hero.ctaInsurers": "For Insurers",
  "menu.label": "Menu",
  "menu.items.solutions": "Solutions",
  "menu.items.resources": "Resources",
  "menu.items.blog": "Blog",
  "menu.items.contact": "Contact",
  "menu.items.technology": "Technology",
  "menu.items.businessMarket": "Business & Market",
  "menu.items.esgPolicy": "ESG & Policy",
  "problem.title": "Why PANN CARBON matters",
  "problem.description":
    "EV adoption is surging, but insurance and carbon markets are not yet rewarding the people who reduce emissions every day.",
  "problem.groups.ev.title": "EV Drivers & Policyholders",
  "problem.groups.ev.bullet1":
    "High EV insurance premiums with limited incentives.",
  "problem.groups.ev.bullet2":
    "No clear reward for low-emission driving behavior.",
  "problem.groups.insurers.title": "Insurance Companies",
  "problem.groups.insurers.bullet1":
    "Lack of real-world EV data for accurate risk assessment.",
  "problem.groups.insurers.bullet2":
    "Pressure to launch ESG-aligned products and hit Net Zero goals.",
  "problem.groups.carbon.title": "Carbon Credit Market",
  "problem.groups.carbon.bullet1":
    "Ordinary people cannot easily access carbon markets.",
  "problem.groups.carbon.bullet2":
    "No system to aggregate carbon credits from everyday EV usage.",
  "solution.kicker": "Climate Insurtech Broker",
  "solution.title":
    "PANN CARBON converts EV carbon reductions into insurance discounts",
  "solution.description":
    "We combine telematics data, actuarial insights, and carbon market access to reward EV drivers while helping insurers design new green products.",
  "solution.points.1":
    "PANN CARBON collects EV driving data from manufacturers and calculates carbon credits for each vehicle.",
  "solution.points.2":
    "Aggregated credits are sold to central entities such as TGO or ESG funds at competitive prices.",
  "solution.points.3":
    "Part of the value returns to EV owners as insurance discounts of around 10%.",
  "solution.points.4":
    "Insurers gain better data to create ESG-aligned, risk-aware products.",
  "solution.valueFlows.title": "Key value flows",
  "solution.valueFlows.ev.title": "EV Owners",
  "solution.valueFlows.ev.description":
    "Receive lower insurance premiums tied to verifiable carbon reductions.",
  "solution.valueFlows.insurers.title": "Insurance Partners",
  "solution.valueFlows.insurers.description":
    "Use driving and carbon data to price policies and report ESG impact.",
  "solution.valueFlows.buyers.title": "Carbon Credit Buyers",
  "solution.valueFlows.buyers.description":
    "Access aggregated, verifiable EV reductions aligned with Premium T-VER and global markets.",
  "flow.title": "How PANN CARBON Works",
  "flow.subtitle":
    "A simple five-step flow that links EV data, insurers, and carbon buyers into a single value chain.",
  "flow.stepLabel": "Step {number}",
  "flow.steps.1.title": "EV Owner",
  "flow.steps.1.description":
    "EV drivers generate telematics data that records distance, usage, and charging patterns.",
  "flow.steps.2.title": "Carbon Credit Data Collection",
  "flow.steps.2.description":
    "PANN CARBON aggregates EV manufacturer data and calculates verified carbon credits per vehicle.",
  "flow.steps.3.title": "Insurance Partner",
  "flow.steps.3.description":
    "Driving and carbon intensity insights feed into insurer underwriting models to refine pricing.",
  "flow.steps.4.title": "Insurance Discount",
  "flow.steps.4.description":
    "EV policyholders receive around 10% premium discounts tied to measurable carbon reductions.",
  "flow.steps.5.title": "Carbon Credit Sale & Feedback Loop",
  "flow.steps.5.description":
    "Aggregated credits are sold to TGO / ESG funds. Insurers reinvest insights to craft new green insurance products.",
  "market.title": "Market Momentum & Traction",
  "market.description":
    "Thailand is aligning EV incentives, carbon trading, and insurance regulation—creating a prime timing for PANN CARBON.",
  "market.highlights.1":
    "EV registrations in Thailand have been growing ~52.9% year-on-year, reaching 173,000 vehicles in 2023.",
  "market.highlights.2":
    "National targets point toward roughly 1.2 million electric vehicles on the road by 2030.",
  "market.highlights.3":
    "TGO’s T-VER program now recognizes “Use of Electric Vehicle” activities with over 700 registered carbon projects.",
  "market.highlights.4":
    "Premium T-VER and cross-border markets price credits 1.5–3× above the domestic baseline, unlocking higher returns.",
  "market.focus.title": "TAM / SAM / SOM",
  "market.focus.tam.title": "TAM",
  "market.focus.tam.description":
    "All BEV & PHEV cars in Thailand (≈1.387M vehicles).",
  "market.focus.sam.title": "SAM",
  "market.focus.sam.description":
    "Battery electric vehicles (≈371,000 units) concentrated in metro hubs.",
  "market.focus.som.title": "SOM",
  "market.focus.som.description":
    "Early adopters: ~1% of the EV market via insurer pilots (≈3,700 vehicles).",
  "business.title": "Business Model",
  "business.description":
    "PANN CARBON monetizes climate impact data while returning tangible value to EV drivers and insurers.",
  "business.revenue.title": "Revenue Streams",
  "business.revenue.items.1.title": "Insurance Commission",
  "business.revenue.items.1.description":
    "2–5% commission per policy sold through green insurance partnerships powered by PANN CARBON data.",
  "business.revenue.items.2.title": "Carbon Credit Sales",
  "business.revenue.items.2.description":
    "Aggregate EV-derived credits and sell them at ~180 THB per tCO₂e baseline, with upside when matched to Premium / international markets.",
  "business.value.title": "Value Flows",
  "business.value.items.1.title": "EV Owners",
  "business.value.items.1.description":
    "Receive verified carbon-linked savings worth ~10% insurance premium discounts.",
  "business.value.items.2.title": "Insurers",
  "business.value.items.2.description":
    "Gain auditable EV usage data, ESG credentials, and faster time-to-market for green insurance products.",
  "business.value.items.3.title": "Carbon Buyers",
  "business.value.items.3.description":
    "Access real-world, traceable EV reductions that can be bundled for Premium T-VER or compliant global markets.",
  "differentiation.title": "Why PANN CARBON is unique",
  "differentiation.description":
    "Existing solutions only solve parts of the puzzle. We make carbon credits accessible while improving insurance outcomes.",
  "differentiation.cards.1.title": "Carbon credit platforms",
  "differentiation.cards.1.description":
    "Focus on cross-border trading; rarely include everyday EV drivers or insurance integration.",
  "differentiation.cards.2.title": "Telematics insurance programs",
  "differentiation.cards.2.description":
    "Reward safer driving but rarely translate behavior into carbon credits or ESG reporting.",
  "differentiation.cards.3.title": "PANN CARBON advantage",
  "differentiation.cards.3.description":
    "We blend EV data, carbon-credit aggregation, and insurance pricing so everyday drivers see instant financial value.",
  "impact.title": "Impact",
  "impact.description":
    "Every policyholder becomes part of a climate-positive insurance community.",
  "impact.cards.1.title": "Thailand & Climate",
  "impact.cards.1.description":
    "Supports Net Zero 2065 by converting distributed EV carbon reductions into meaningful credits recognized by TGO.",
  "impact.cards.2.title": "Insurance Industry",
  "impact.cards.2.description":
    "Enables data-driven pricing, ESG reporting, and new green insurance products with verified carbon metrics.",
  "impact.cards.3.title": "EV Users",
  "impact.cards.3.description":
    "Transforms invisible carbon reductions into real financial benefits and a sense of climate community.",
  "future.title": "Future vision",
  "future.description":
    "PANN CARBON evolves into a hub for distributed carbon credits that power insurance discounts across multiple asset classes.",
  "future.points.1":
    "Expand beyond EVs into electric passenger boats and public transit fleets.",
  "future.points.2":
    "Integrate solar-powered farms, buildings, and microgrids for distributed energy credits.",
  "future.points.3":
    "Offer cross-border carbon credit trading with compliance for stringent international markets.",
  "future.roadmap.title": "Long-term roadmap",
  "future.roadmap.items.1":
    "Launch multi-insurer EV pilots with verified carbon credit payouts.",
  "future.roadmap.items.2":
    "Develop API integrations for boats, freight, and smart-building partners.",
  "future.roadmap.items.3":
    "Build a cross-border compliance layer for ASEAN and premium carbon markets.",
  "team.title": "Team",
  "team.subtitle":
    "Multidisciplinary founders ready to ship climate-insurtech experiences.",
  "team.members.1.name": "Suppawit Ausawalaithong",
  "team.members.1.role": "Electrical Engineering • IoT & Data Systems",
  "team.members.1.description":
    "Leads end-to-end telematics, MQTT integrations, and data pipelines from EV OEMs.",
  "team.members.2.name": "Chanikant Sotthiwanichwong",
  "team.members.2.role": "Computer Engineering • Product & Cybersecurity",
  "team.members.2.description":
    "Product owner with hackathon experience; drives platform security and UX.",
  "team.members.3.name": "Natcha Singthong",
  "team.members.3.role": "Actuarial Science • Insurance Design",
  "team.members.3.description":
    "Architects microinsurance, parametric solutions, and carbon-linked pricing.",
  "footer.tagline":
    "Climate Insurtech Broker • Thailand • EV data → Carbon credits → Insurance discounts",
  "footer.description":
    "PANN CARBON links EV telematics, carbon markets, and insurers to reward climate-positive driving.",
  "footer.copyright": "© {year} PANN CARBON. All rights reserved.",
  "technology.hero.kicker": "Technology stack",
  "technology.hero.title": "Technology Research",
  "technology.hero.tagline":
    "How our EV data infrastructure turns telematics into carbon-backed insurance value.",
  "technology.section.objectiveLabel": "Purpose",
  "technology.section.focusLabel": "Core capabilities",
  "technology.section.outputLabel": "Key deliverables",
  "technology.section.referenceLabel": "Reference",
  "technology.section.referenceAction": "Open link",
  "technology.summary.title": "Technology summary",
  "technology.summary.description":
    "Snapshot of each technology pillar and the tangible assets that power PANN CARBON.",
  "technology.summary.headers.topic": "Module",
  "technology.summary.headers.objective": "Purpose",
  "technology.summary.headers.output": "Key deliverables",
  "technology.summary.rows.1.area": "Telematics Architecture",
  "technology.summary.rows.1.outcome":
    "Delivers real-time EV telemetry ingestion with live dashboards.",
  "technology.summary.rows.1.context":
    "CAN, MQTT, BLE stack plus ESP32 firmware prototype.",
  "technology.summary.rows.2.area": "Carbon Data Algorithm",
  "technology.summary.rows.2.outcome":
    "Translates trips into CO₂ savings and THB valuation.",
  "technology.summary.rows.2.context":
    "T-VER methodology with 180 THB/tCO₂e pricing.",
  "technology.summary.rows.3.area": "AI Risk Assessment",
  "technology.summary.rows.3.outcome":
    "Generates telematics-based scoring for dynamic premiums.",
  "technology.summary.rows.3.context":
    "Random Forest and XGBoost risk-tier models.",
  "technology.summary.rows.4.area": "Blockchain Verification",
  "technology.summary.rows.4.outcome":
    "Creates immutable carbon credit ledgers on Polygon testnet.",
  "technology.summary.rows.4.context":
    "Smart contracts prevent double counting.",
  "technology.summary.rows.5.area": "Secure Data Exchange",
  "technology.summary.rows.5.outcome":
    "Enables PDPA-ready pipelines between OEMs and insurers.",
  "technology.summary.rows.5.context":
    "Anonymised schemas plus encrypted API gateway.",
  "technology.summary.rows.6.area": "Green Dashboard UX",
  "technology.summary.rows.6.outcome":
    "Engages drivers with gamified carbon analytics UI.",
  "technology.summary.rows.6.context":
    "Next.js, Tailwind, Chart.js real-time experience.",
  "technology.vision.title": "Overall vision",
  "technology.vision.quote":
    "PANN CARBON transforms EV telematics into a complete technology stack—from real-time data collection to blockchain-verified carbon credits, AI-driven risk assessment, and secure data sharing—enabling a transparent, automated ecosystem that connects drivers, insurers, and carbon markets.",
  "technology.topics.telematics.title":
    "Telematics Data Architecture for Electric Vehicles",
  "technology.topics.telematics.objective":
    "Design a pipeline that collects and processes EV distance, energy, and trip insights.",
  "technology.topics.telematics.focus.1":
    "Standardise CAN, MQTT, BLE, and REST data flows for consistent telemetry.",
  "technology.topics.telematics.focus.2":
    "Identify core features that drive carbon reduction insights.",
  "technology.topics.telematics.focus.3":
    "Prototype lightweight firmware using ESP32 / XIAO for edge capture.",
  "technology.topics.telematics.output":
    "Real-time EV dashboard demo showing live trip and energy data.",
  "technology.topics.telematics.referenceLabel":
    "Eseye – IoT & Telematics in Modern Auto Insurance (2023)",
  "technology.topics.battery.title": "Carbon Data Processing Algorithm",
  "technology.topics.battery.objective":
    "Convert EV telemetry into CO₂ savings under T-VER “Use of Electric Vehicle”.",
  "technology.topics.battery.focus.1":
    "Source emission factors and baselines from TGO.",
  "technology.topics.battery.focus.2":
    "Apply the reduction formula (D × EF₍ICE₎) − (E × EF₍EV₎).",
  "technology.topics.battery.focus.3":
    "Link dynamic valuation to ~180 THB per tCO₂e pricing.",
  "technology.topics.battery.output":
    "RESTful Carbon Credit Calculator API for accounting and valuation.",
  "technology.topics.battery.referenceLabel":
    "TGO – T-VER Methodology: Use of Electric Vehicle",
  "technology.topics.pricing.title":
    "AI-Assisted Risk Assessment for EV Insurance",
  "technology.topics.pricing.objective":
    "Predict driver risk levels for dynamic, eco-aligned pricing.",
  "technology.topics.pricing.focus.1":
    "Engineer features around speed, acceleration, and driving time.",
  "technology.topics.pricing.focus.2":
    "Train Random Forest and XGBoost models to classify risk tiers.",
  "technology.topics.pricing.focus.3":
    "Generate eco-driving feedback loops for insurer dashboards.",
  "technology.topics.pricing.output":
    "Machine-learning prototype integrated with driver scoring dashboard.",
  "technology.topics.pricing.referenceLabel":
    "MDPI – Claim Prediction & Premium Pricing for Telematics (2023)",
  "technology.topics.mrv.title":
    "Blockchain Verification for Carbon Credit Integrity",
  "technology.topics.mrv.objective":
    "Record CO₂ reductions securely with transparent audit trails.",
  "technology.topics.mrv.focus.1":
    "Deploy smart contracts that track every credit issuance.",
  "technology.topics.mrv.focus.2":
    "Prevent double counting through immutable transaction logs.",
  "technology.topics.mrv.focus.3":
    "Link blockchain data to T-VER verification evidence.",
  "technology.topics.mrv.output":
    "Polygon testnet smart contract demo for credit lifecycle tracking.",
  "technology.topics.mrv.referenceLabel":
    "MDPI – Blockchain Technology in Carbon Trading Markets (2024)",
  "technology.topics.engagement.title":
    "Secure Data-Sharing Framework between OEMs and Insurers",
  "technology.topics.engagement.objective":
    "Enable PDPA-compliant data exchange across stakeholders.",
  "technology.topics.engagement.focus.1":
    "Design anonymised JSON schemas with cryptographic hashing.",
  "technology.topics.engagement.focus.2":
    "Enforce consent-based sharing through encrypted API gateways.",
  "technology.topics.engagement.focus.3":
    "Log data access for auditability and partnership governance.",
  "technology.topics.engagement.output":
    "Mock API gateway demo showing encrypted telematics hand-off.",
  "technology.topics.engagement.referenceLabel":
    "Telematics in Insurance: Challenges and Limitations (2024)",
  "technology.topics.compliance.title":
    "Green Dashboard & Visualisation Platform",
  "technology.topics.compliance.objective":
    "Present carbon savings and insurance metrics with engaging UX.",
  "technology.topics.compliance.focus.1":
    "Build Next.js + Tailwind + Chart.js components for analytics.",
  "technology.topics.compliance.focus.2":
    "Gamify T-VER verified credits to boost user participation.",
  "technology.topics.compliance.focus.3":
    "Sync real-time carbon and insurance data for customers and partners.",
  "technology.topics.compliance.output":
    "Interactive frontend demo for green mobility engagement.",
  "technology.topics.compliance.referenceLabel":
    "Sustainability – Enhancing Sustainable Mobility Through Gamified Challenges",
  "technology.backToHome": "Back to Home",
  "businessMarket.hero.kicker": "Business intelligence",
  "businessMarket.hero.title": "Business & Market Research",
  "businessMarket.hero.tagline":
    "Evidence that grounds PANN CARBON's climate-insurance play in Thailand.",
  "businessMarket.section.objectiveLabel": "Objective",
  "businessMarket.section.focusLabel": "Research focus",
  "businessMarket.section.whyLabel": "Why it matters",
  "businessMarket.section.referenceLabel": "Reference",
  "businessMarket.section.referenceAction": "Open link",
  "businessMarket.summary.title": "Business & market summary",
  "businessMarket.summary.description":
    "Snapshot of the research pillars informing PANN CARBON's go-to-market and revenue model.",
  "businessMarket.summary.headers.index": "No.",
  "businessMarket.summary.headers.area": "Focus area",
  "businessMarket.summary.headers.outcome": "Key outcome",
  "businessMarket.summary.headers.context": "Thai context",
  "businessMarket.topics.marketGrowth.title":
    "Thailand EV Market and Renewable Energy Outlook",
  "businessMarket.topics.marketGrowth.objective":
    "Understand Thailand's EV adoption growth and renewable energy transition under national energy planning.",
  "businessMarket.topics.marketGrowth.focus.1":
    "Analyze EV expansion rate, policy support, and investment trends.",
  "businessMarket.topics.marketGrowth.focus.2":
    "Review renewable energy integration with transportation sector.",
  "businessMarket.topics.marketGrowth.focus.3":
    "Assess market dynamics supporting PANN CARBON's EV-insurance opportunity.",
  "businessMarket.topics.marketGrowth.why":
    "Provides market overview supporting PANN CARBON's EV-insurance opportunity analysis.",
  "businessMarket.topics.marketGrowth.referenceLabel":
    "EPPO – Renewable Energy Trends in Asia 2025",
  "businessMarket.topics.carbonInsurance.title":
    "Electric Vehicle Industry Outlook (2024–2026)",
  "businessMarket.topics.carbonInsurance.objective":
    "Evaluate Thailand's EV market potential and ecosystem development.",
  "businessMarket.topics.carbonInsurance.focus.1":
    "Analyze market size, production capacity, and investment forecasts.",
  "businessMarket.topics.carbonInsurance.focus.2":
    "Review Krungsri Research industry analysis and projections.",
  "businessMarket.topics.carbonInsurance.focus.3":
    "Quantify EV market data for modeling insurance and carbon-credit projections.",
  "businessMarket.topics.carbonInsurance.why":
    "Provides quantitative EV market data used for modeling insurance and carbon-credit projections.",
  "businessMarket.topics.carbonInsurance.referenceLabel":
    "Krungsri Research – Industry Outlook: Electric Vehicle Thailand",
  "businessMarket.topics.tverStructure.title":
    "Thailand Voluntary Emission Reduction Program (T-VER)",
  "businessMarket.topics.tverStructure.objective":
    "Review T-VER framework and mechanisms for certifying voluntary GHG reductions.",
  "businessMarket.topics.tverStructure.focus.1":
    "Examine eligibility criteria, verification processes, and trading framework.",
  "businessMarket.topics.tverStructure.focus.2":
    "Understand T-VER governance structure and project registration.",
  "businessMarket.topics.tverStructure.focus.3":
    "Assess how T-VER supports PANN CARBON's carbon-credit integration model.",
  "businessMarket.topics.tverStructure.why":
    "Provides foundational reference for PANN CARBON's carbon-credit integration model.",
  "businessMarket.topics.tverStructure.referenceLabel": "TGO – What is T-VER?",
  "businessMarket.topics.microAggregation.title":
    "EV-Based Carbon Reduction Methodology (T-VER)",
  "businessMarket.topics.microAggregation.objective":
    "Identify how EV usage contributes to quantifiable carbon-credit generation.",
  "businessMarket.topics.microAggregation.focus.1":
    "Review calculation methods and verification standards for EV carbon reduction.",
  "businessMarket.topics.microAggregation.focus.2":
    "Understand T-VER methodology specific to electric vehicle usage.",
  "businessMarket.topics.microAggregation.focus.3":
    "Model micro-aggregation and credit validation in PANN CARBON.",
  "businessMarket.topics.microAggregation.why":
    "Provides technical basis for modeling micro-aggregation and credit validation in PANN CARBON.",
  "businessMarket.topics.microAggregation.referenceLabel":
    "TGO – Use of Electric Vehicle: T-VER Methodology",
  "businessMarket.topics.competitors.title":
    "Thailand's Carbon Credit Registry and Verified Projects",
  "businessMarket.topics.competitors.objective":
    "Analyze structure and categories of registered carbon projects in Thailand.",
  "businessMarket.topics.competitors.focus.1":
    "Review market size, sectoral distribution, and Premium T-VER potential.",
  "businessMarket.topics.competitors.focus.2":
    "Examine existing T-VER project categories and registration patterns.",
  "businessMarket.topics.competitors.focus.3":
    "Benchmark PANN CARBON's EV aggregation within existing T-VER projects.",
  "businessMarket.topics.competitors.why":
    "Provides insights for benchmarking PANN CARBON's EV aggregation within existing T-VER projects.",
  "businessMarket.topics.competitors.referenceLabel":
    "TGO – T-VER Project Database",
  "businessMarket.topics.pricingModel.title":
    "Thailand Net Zero and Carbon-Neutrality Policy",
  "businessMarket.topics.pricingModel.objective":
    "Understand national carbon-neutrality targets and Net Zero 2065 policy framework.",
  "businessMarket.topics.pricingModel.focus.1":
    "Review key mitigation sectors and policy direction by ONEP.",
  "businessMarket.topics.pricingModel.focus.2":
    "Analyze alignment with national climate goals.",
  "businessMarket.topics.pricingModel.focus.3":
    "Assess strategic policy alignment for long-term expansion of PANN CARBON ecosystem.",
  "businessMarket.topics.pricingModel.why":
    "Provides strategic policy alignment for long-term expansion of the PANN CARBON ecosystem.",
  "businessMarket.topics.pricingModel.referenceLabel":
    "ONEP – Carbon Neutrality and Net Zero Emissions Article",
  "businessMarket.topics.expansion.title":
    "Telematics and Usage-Based Insurance in Thailand",
  "businessMarket.topics.expansion.objective":
    "Explain how driving behavior data influences insurance premiums.",
  "businessMarket.topics.expansion.focus.1":
    "Review telematics adoption, behavioral scoring, and customer benefits.",
  "businessMarket.topics.expansion.focus.2":
    "Analyze usage-based insurance models in the Thai market.",
  "businessMarket.topics.expansion.focus.3":
    "Understand foundational reference for behavioral-based pricing in PANN CARBON's insurance model.",
  "businessMarket.topics.expansion.why":
    "Provides foundational reference for behavioral-based pricing in PANN CARBON's insurance model.",
  "businessMarket.topics.expansion.referenceLabel":
    "Roojai – Impact of Telematics on Car Insurance",
  "businessMarket.topics.evInsurance.title": "EV Insurance Product Innovation",
  "businessMarket.topics.evInsurance.objective":
    "Review localized EV insurance offerings and customizable coverage models.",
  "businessMarket.topics.evInsurance.focus.1":
    "Examine Roojai's EV-specific insurance products and pricing mechanisms.",
  "businessMarket.topics.evInsurance.focus.2":
    "Analyze market positioning and product features.",
  "businessMarket.topics.evInsurance.focus.3":
    "Benchmark green-insurance product design for PANN CARBON.",
  "businessMarket.topics.evInsurance.why":
    "Provides market benchmarking for green-insurance product design.",
  "businessMarket.topics.evInsurance.referenceLabel":
    "Roojai – EV Car Insurance Launch",
  "businessMarket.topics.telematicsPricing.title":
    "Telematics-Based Premium Pricing Models",
  "businessMarket.topics.telematicsPricing.objective":
    "Study global research on telematics data analytics in motor insurance pricing.",
  "businessMarket.topics.telematicsPricing.focus.1":
    "Review predictive modeling, Poisson regression, and data-driven risk segmentation.",
  "businessMarket.topics.telematicsPricing.focus.2":
    "Analyze academic research on telematics-based pricing.",
  "businessMarket.topics.telematicsPricing.focus.3":
    "Apply analytical framework supporting PANN CARBON's premium and risk model.",
  "businessMarket.topics.telematicsPricing.why":
    "Provides analytical framework supporting PANN CARBON's premium and risk model.",
  "businessMarket.topics.telematicsPricing.referenceLabel":
    "MDPI – Risks Journal (2024)",
  "businessMarket.topics.blockchainCarbon.title": "Blockchain in Carbon Trading",
  "businessMarket.topics.blockchainCarbon.objective":
    "Explore blockchain's role in enhancing transparency in carbon markets.",
  "businessMarket.topics.blockchainCarbon.focus.1":
    "Review data verification, traceability, and market confidence mechanisms.",
  "businessMarket.topics.blockchainCarbon.focus.2":
    "Analyze blockchain applications in carbon credit markets.",
  "businessMarket.topics.blockchainCarbon.focus.3":
    "Integrate blockchain concepts in PANN CARBON's credit registry.",
  "businessMarket.topics.blockchainCarbon.why":
    "Provides conceptual foundation for integrating blockchain in PANN CARBON's credit registry.",
  "businessMarket.topics.blockchainCarbon.referenceLabel":
    "MDPI – Energies Journal (2024)",
  "businessMarket.topics.iotTelematics.title":
    "IoT and Telematics for Auto-Insurance Innovation",
  "businessMarket.topics.iotTelematics.objective":
    "Analyze IoT applications in vehicle data collection and accident management.",
  "businessMarket.topics.iotTelematics.focus.1":
    "Review real-time data, telematics sensors, and insurer automation benefits.",
  "businessMarket.topics.iotTelematics.focus.2":
    "Examine IoT-enabled data pipelines and architecture.",
  "businessMarket.topics.iotTelematics.focus.3":
    "Support evidence for using IoT-enabled data pipelines in PANN CARBON's architecture.",
  "businessMarket.topics.iotTelematics.why":
    "Provides supporting evidence for using IoT-enabled data pipelines in PANN CARBON's architecture.",
  "businessMarket.topics.iotTelematics.referenceLabel":
    "Eseye – From Crash to Claim (2025)",
  "businessMarket.summary.rows.1.area":
    "Thailand EV Market and Renewable Energy Outlook",
  "businessMarket.summary.rows.1.outcome":
    "Market overview supporting EV-insurance opportunity analysis.",
  "businessMarket.summary.rows.1.context":
    "EPPO renewable energy trends and EV expansion analysis.",
  "businessMarket.summary.rows.2.area":
    "Electric Vehicle Industry Outlook (2024–2026)",
  "businessMarket.summary.rows.2.outcome":
    "Quantitative EV market data for insurance and carbon projections.",
  "businessMarket.summary.rows.2.context":
    "Krungsri Research industry analysis and forecasts.",
  "businessMarket.summary.rows.3.area":
    "Thailand Voluntary Emission Reduction Program (T-VER)",
  "businessMarket.summary.rows.3.outcome":
    "Foundational reference for carbon-credit integration model.",
  "businessMarket.summary.rows.3.context":
    "TGO framework and certification mechanisms.",
  "businessMarket.summary.rows.4.area":
    "EV-Based Carbon Reduction Methodology (T-VER)",
  "businessMarket.summary.rows.4.outcome":
    "Technical basis for micro-aggregation and credit validation.",
  "businessMarket.summary.rows.4.context":
    "T-VER methodology specific to electric vehicle usage.",
  "businessMarket.summary.rows.5.area":
    "Thailand's Carbon Credit Registry and Verified Projects",
  "businessMarket.summary.rows.5.outcome":
    "Insights for benchmarking EV aggregation within T-VER projects.",
  "businessMarket.summary.rows.5.context":
    "TGO project database and market structure analysis.",
  "businessMarket.summary.rows.6.area":
    "Thailand Net Zero and Carbon-Neutrality Policy",
  "businessMarket.summary.rows.6.outcome":
    "Strategic policy alignment for long-term ecosystem expansion.",
  "businessMarket.summary.rows.6.context":
    "ONEP Net Zero 2065 framework and mitigation sectors.",
  "businessMarket.summary.rows.7.area":
    "Telematics and Usage-Based Insurance in Thailand",
  "businessMarket.summary.rows.7.outcome":
    "Foundational reference for behavioral-based pricing model.",
  "businessMarket.summary.rows.7.context":
    "Roojai telematics adoption and customer benefits.",
  "businessMarket.summary.rows.8.area": "EV Insurance Product Innovation",
  "businessMarket.summary.rows.8.outcome":
    "Market benchmarking for green-insurance product design.",
  "businessMarket.summary.rows.8.context":
    "Roojai EV-specific insurance products and pricing.",
  "businessMarket.summary.rows.9.area":
    "Telematics-Based Premium Pricing Models",
  "businessMarket.summary.rows.9.outcome":
    "Analytical framework supporting premium and risk model.",
  "businessMarket.summary.rows.9.context":
    "MDPI research on predictive modeling and risk segmentation.",
  "businessMarket.summary.rows.10.area": "Blockchain in Carbon Trading",
  "businessMarket.summary.rows.10.outcome":
    "Conceptual foundation for blockchain credit registry integration.",
  "businessMarket.summary.rows.10.context":
    "MDPI research on transparency and traceability mechanisms.",
  "businessMarket.summary.rows.11.area":
    "IoT and Telematics for Auto-Insurance Innovation",
  "businessMarket.summary.rows.11.outcome":
    "Supporting evidence for IoT-enabled data pipelines.",
  "businessMarket.summary.rows.11.context":
    "Eseye research on real-time data and automation benefits.",
  "businessMarket.vision.title": "Overall vision",
  "businessMarket.vision.quote":
    "PANN CARBON creates a sustainable business model that bridges Thailand's growing EV market with carbon credit markets and insurance innovation—turning verified emission reductions into financial incentives for drivers, recurring revenue for insurers, and measurable ESG impact for the nation.",
  "businessMarket.backToHome": "Back to Home",
  "esgPolicy.hero.kicker": "Policy alignment",
  "esgPolicy.hero.title": "ESG & Policy Research",
  "esgPolicy.hero.tagline":
    "How PANN CARBON bridges national climate policy with everyday EV adoption.",
  "esgPolicy.section.objectiveLabel": "Objective",
  "esgPolicy.section.focusLabel": "Research focus",
  "esgPolicy.section.whyLabel": "Why it matters",
  "esgPolicy.section.referenceLabel": "Reference",
  "esgPolicy.section.referenceAction": "Open link",
  "esgPolicy.summary.title": "ESG & policy summary",
  "esgPolicy.summary.description":
    "Key insights that guide compliance, transparency, and public engagement for PANN CARBON.",
  "esgPolicy.summary.headers.index": "No.",
  "esgPolicy.summary.headers.area": "Focus area",
  "esgPolicy.summary.headers.outcome": "Key outcome",
  "esgPolicy.summary.headers.context": "Thai context",
  "esgPolicy.topics.netZero.title": "Thailand Net Zero & National Strategy",
  "esgPolicy.topics.netZero.objective":
    "Align PANN Carbon with Thailand's long-term carbon neutrality (2050) and net-zero (2065) roadmap.",
  "esgPolicy.topics.netZero.focus.1":
    "LT-LEDS policy under ONEP and UNFCCC; integrating EV telematics data with 30–40% GHG reduction targets by 2030.",
  "esgPolicy.topics.netZero.focus.2":
    "National climate planning structure defining mitigation pathways for transport and energy sectors.",
  "esgPolicy.topics.netZero.focus.3":
    "Policy-aligned analytics model showing verified emission reductions that support national NDC milestones.",
  "esgPolicy.topics.netZero.why":
    "Ensures PANN Carbon aligns with national climate strategy and supports NDC milestones.",
  "esgPolicy.topics.netZero.referenceLabel":
    "ONEP – ลดโลกร้อนด้วย Carbon Neutrality และ Net Zero Emissions",
  "esgPolicy.topics.ltLeds.title":
    "National Long-Term Low Emission Development Strategy (LT-LEDS)",
  "esgPolicy.topics.ltLeds.objective":
    "Incorporate Thailand's official LT-LEDS framework into carbon data modeling for EV-based reductions.",
  "esgPolicy.topics.ltLeds.focus.1":
    "National climate planning structure defining mitigation pathways for transport and energy sectors.",
  "esgPolicy.topics.ltLeds.focus.2":
    "UNFCCC-approved national datasets and baseline methodologies.",
  "esgPolicy.topics.ltLeds.focus.3":
    "Structured emission baseline methodology aligned with UNFCCC-approved national datasets.",
  "esgPolicy.topics.ltLeds.why":
    "Ensures carbon data modeling aligns with UNFCCC-approved national climate planning structure.",
  "esgPolicy.topics.ltLeds.referenceLabel":
    "UNFCCC – Thailand LT-LEDS (Revised 2022)",
  "esgPolicy.topics.tverPathway.title": "T-VER and Premium T-VER Framework",
  "esgPolicy.topics.tverPathway.objective":
    "Ensure EV-related carbon-reduction data complies with TGO's official T-VER and Premium T-VER standards.",
  "esgPolicy.topics.tverPathway.focus.1":
    "Methodologies for calculating baseline and project emissions; MRV data verification and credit issuance.",
  "esgPolicy.topics.tverPathway.focus.2":
    "T-VER compliance requirements and verification processes.",
  "esgPolicy.topics.tverPathway.focus.3":
    "Automated T-VER submission workflow and digital MRV architecture compatible with TGO registry.",
  "esgPolicy.topics.tverPathway.why":
    "Ensures compliance with TGO standards and enables automated credit issuance workflows.",
  "esgPolicy.topics.tverPathway.referenceLabel": "TGO – What is T-VER?",
  "esgPolicy.topics.insuranceEsg.title": "ESG in Thailand's Insurance Sector",
  "esgPolicy.topics.insuranceEsg.objective":
    "Support the OIC's ESG guideline implementation through measurable environmental indicators.",
  "esgPolicy.topics.insuranceEsg.focus.1":
    "ESG data integration in insurance underwriting, green-premium incentives, and disclosure practices.",
  "esgPolicy.topics.insuranceEsg.focus.2":
    "OIC guidance and regulatory requirements for ESG reporting.",
  "esgPolicy.topics.insuranceEsg.focus.3":
    "PANN Carbon Green Insurance Dashboard showing verified tCO₂e savings linked to ESG reporting.",
  "esgPolicy.topics.insuranceEsg.why":
    "Enables insurers to meet OIC ESG requirements with measurable environmental indicators.",
  "esgPolicy.topics.insuranceEsg.referenceLabel":
    "OIC – ESG Guideline for Insurance Sector (2023)",
  "esgPolicy.topics.digitalMrv.title": "Digital MRV and Blockchain for Carbon Credits",
  "esgPolicy.topics.digitalMrv.objective":
    "Explore blockchain and IoT integration for automated, transparent, and tamper-proof carbon verification.",
  "esgPolicy.topics.digitalMrv.focus.1":
    "Timestamp-based data proof, on-chain lifecycle tracking, and Premium T-VER integrity criteria.",
  "esgPolicy.topics.digitalMrv.focus.2":
    "Blockchain and IoT integration for automated verification processes.",
  "esgPolicy.topics.digitalMrv.focus.3":
    "Smart-contract prototype that issues and retires verified carbon credits automatically.",
  "esgPolicy.topics.digitalMrv.why":
    "Enables automated, transparent, and tamper-proof carbon verification using blockchain technology.",
  "esgPolicy.topics.digitalMrv.referenceLabel":
    "ResearchGate – The Role of Blockchain Technology in Enhancing Carbon Credit Market Transparency (2024)",
  "esgPolicy.topics.publicEngagement.title":
    "Public Engagement and Carbon Market Participation",
  "esgPolicy.topics.publicEngagement.objective":
    "Encourage citizen-level participation in carbon markets through data visibility and gamification.",
  "esgPolicy.topics.publicEngagement.focus.1":
    "EV-based CO₂ tracking, leaderboards, and public awareness tools to promote voluntary offset culture.",
  "esgPolicy.topics.publicEngagement.focus.2":
    "Carbon literacy and citizen engagement strategies.",
  "esgPolicy.topics.publicEngagement.focus.3":
    "Gamified Green Community platform connecting EV usage data to national carbon reduction goals.",
  "esgPolicy.topics.publicEngagement.why":
    "Encourages citizen participation in carbon markets and builds public support for Net Zero goals.",
  "esgPolicy.topics.publicEngagement.referenceLabel":
    "UN ESCAP – EV in ASEAN and Thailand (Prof. Yossapong Laoonual, KMUTT)",
  "esgPolicy.topics.renewableEnergy.title":
    "Renewable Energy and BCG Policy Context",
  "esgPolicy.topics.renewableEnergy.objective":
    "Strengthen alignment between transport decarbonization and Thailand's renewable-energy transition.",
  "esgPolicy.topics.renewableEnergy.focus.1":
    "Energy Policy and Planning Office (EPPO) BCG model; integrating EV electricity use with renewable energy growth.",
  "esgPolicy.topics.renewableEnergy.focus.2":
    "Renewable energy trends and integration with transportation sector.",
  "esgPolicy.topics.renewableEnergy.focus.3":
    "Enhanced national energy-impact modeling and baseline adjustment for EV-related carbon accounting.",
  "esgPolicy.topics.renewableEnergy.why":
    "Strengthens alignment between transport decarbonization and Thailand's renewable energy transition.",
  "esgPolicy.topics.renewableEnergy.referenceLabel":
    "EPPO – Renewable Energy Trends in Asia 2025",
  "esgPolicy.topics.partnerships.title": "Thailand Green Taxonomy & ESG Finance",
  "esgPolicy.topics.partnerships.objective":
    "Connect verified EV emission reductions to Thailand's Green Taxonomy and sustainable-finance ecosystem.",
  "esgPolicy.topics.partnerships.focus.1":
    "Green Taxonomy Phase 2 framework (BOT & FPO, 2025); carbon-pricing pilot and ESG fund integration.",
  "esgPolicy.topics.partnerships.focus.2":
    "Sustainable finance ecosystem and taxonomy compliance.",
  "esgPolicy.topics.partnerships.focus.3":
    "Green Taxonomy Compliance Module for PANN Carbon projects and ESG Consortium Dashboard prototype.",
  "esgPolicy.topics.partnerships.why":
    "Connects verified EV emission reductions to Thailand's sustainable finance ecosystem and Green Taxonomy.",
  "esgPolicy.topics.partnerships.referenceLabel":
    "Bank of Thailand – Thailand Taxonomy: A Reference Tool for Sustainable Finance",
  "esgPolicy.summary.rows.1.area": "Thailand Net Zero & National Strategy",
  "esgPolicy.summary.rows.1.outcome":
    "Policy-aligned analytics model showing verified emission reductions that support national NDC milestones.",
  "esgPolicy.summary.rows.1.context":
    "LT-LEDS policy under ONEP and UNFCCC; 30–40% GHG reduction targets by 2030.",
  "esgPolicy.summary.rows.2.area": "National LT-LEDS Framework",
  "esgPolicy.summary.rows.2.outcome":
    "Structured emission baseline methodology aligned with UNFCCC-approved national datasets.",
  "esgPolicy.summary.rows.2.context":
    "UNFCCC-approved national climate planning structure for transport and energy sectors.",
  "esgPolicy.summary.rows.3.area": "T-VER and Premium T-VER Framework",
  "esgPolicy.summary.rows.3.outcome":
    "Automated T-VER submission workflow and digital MRV architecture compatible with TGO registry.",
  "esgPolicy.summary.rows.3.context":
    "TGO methodologies for baseline and project emissions; MRV verification and credit issuance.",
  "esgPolicy.summary.rows.4.area": "ESG in Thailand's Insurance Sector",
  "esgPolicy.summary.rows.4.outcome":
    "PANN Carbon Green Insurance Dashboard showing verified tCO₂e savings linked to ESG reporting.",
  "esgPolicy.summary.rows.4.context":
    "OIC ESG guideline implementation; green-premium incentives and disclosure practices.",
  "esgPolicy.summary.rows.5.area": "Digital MRV and Blockchain for Carbon Credits",
  "esgPolicy.summary.rows.5.outcome":
    "Smart-contract prototype that issues and retires verified carbon credits automatically.",
  "esgPolicy.summary.rows.5.context":
    "Blockchain timestamp-based data proof, on-chain lifecycle tracking, and Premium T-VER integrity.",
  "esgPolicy.summary.rows.6.area":
    "Public Engagement and Carbon Market Participation",
  "esgPolicy.summary.rows.6.outcome":
    "Gamified Green Community platform connecting EV usage data to national carbon reduction goals.",
  "esgPolicy.summary.rows.6.context":
    "EV-based CO₂ tracking, leaderboards, and public awareness tools for voluntary offset culture.",
  "esgPolicy.summary.rows.7.area": "Renewable Energy and BCG Policy Context",
  "esgPolicy.summary.rows.7.outcome":
    "Enhanced national energy-impact modeling and baseline adjustment for EV-related carbon accounting.",
  "esgPolicy.summary.rows.7.context":
    "EPPO BCG model; integrating EV electricity use with renewable energy growth.",
  "esgPolicy.summary.rows.8.area": "Thailand Green Taxonomy & ESG Finance",
  "esgPolicy.summary.rows.8.outcome":
    "Green Taxonomy Compliance Module for PANN Carbon projects and ESG Consortium Dashboard prototype.",
  "esgPolicy.summary.rows.8.context":
    "Green Taxonomy Phase 2 framework (BOT & FPO, 2025); carbon-pricing pilot and ESG fund integration.",
  "esgPolicy.vision.title": "Overall vision",
  "esgPolicy.vision.quote":
    "“PANN CARBON bridges Thailand's Net Zero commitments with everyday EV drivers—turning verified telematics into carbon credits, insurance benefits, and transparent ESG impact.”",
  "esgPolicy.backToHome": "Back to Home",
} as const;

export type TranslationKey = keyof typeof en;

const th: Record<TranslationKey, string> = {
  "nav.hero": "หน้าแรก",
  "nav.problem": "ปัญหา",
  "nav.solution": "ทางออก",
  "nav.flow": "กระบวนการ",
  "nav.market": "ตลาด",
  "nav.business": "โมเดลธุรกิจ",
  "nav.differentiation": "จุดเด่น",
  "nav.impact": "ผลกระทบ",
  "nav.future": "วิสัยทัศน์",
  "nav.team": "ทีมงาน",
  "nav.backToHome": "กลับหน้าหลัก",
  "hero.badge": "โบรคเกอร์อินชัวร์เทคเพื่อสภาพภูมิอากาศ • ไทย",
  "hero.title": "PANN CARBON: โบรคเกอร์อินชัวร์เทคด้านภูมิอากาศ",
  "hero.subtitle":
    "เปลี่ยนข้อมูลการขับขี่รถ EV ให้กลายเป็นเครดิตคาร์บอนและส่วนลดประกันจริง",
  "hero.description":
    "เชื่อมข้อมูลเทเลเมติกส์ หุ้นส่วนประกัน และตลาดคาร์บอน เพื่อให้ผู้ขับขี่ได้รางวัล พร้อมช่วยบริษัทประกันสร้างผลิตภัณฑ์ที่สอดคล้องกับ ESG.",
  "hero.primaryCta": "ดูวิธีการทำงาน",
  "hero.ctaOwners": "สำหรับเจ้าของรถ EV",
  "hero.ctaInsurers": "สำหรับบริษัทประกัน",
  "menu.label": "เมนู",
  "menu.items.solutions": "โซลูชัน",
  "menu.items.resources": "แหล่งข้อมูล",
  "menu.items.blog": "บล็อก",
  "menu.items.contact": "ติดต่อเรา",
  "menu.items.technology": "เทคโนโลยี",
  "menu.items.businessMarket": "ธุรกิจ & ตลาด",
  "menu.items.esgPolicy": "ESG & นโยบาย",
  "problem.title": "ทำไม PANN CARBON จึงสำคัญ",
  "problem.description":
    "การใช้รถ EV เพิ่มขึ้นรวดเร็ว แต่ระบบประกันและตลาดคาร์บอนไม่ได้ให้รางวัลกับคนที่ลดการปล่อยจริงในชีวิตประจำวัน.",
  "problem.groups.ev.title": "ผู้ขับขี่และผู้เอาประกัน EV",
  "problem.groups.ev.bullet1":
    "เบี้ยประกัน EV สูงและแทบไม่มีแรงจูงใจเพิ่มเติม.",
  "problem.groups.ev.bullet2":
    "ไม่มีระบบให้รางวัลจากพฤติกรรมขับขี่ที่ลดการปล่อยคาร์บอน.",
  "problem.groups.insurers.title": "บริษัทประกัน",
  "problem.groups.insurers.bullet1":
    "ขาดข้อมูลใช้งาน EV จริงเพื่อประเมินความเสี่ยงได้แม่นยำ.",
  "problem.groups.insurers.bullet2":
    "ถูกกดดันให้มีผลิตภัณฑ์ ESG และเป้าหมาย Net Zero.",
  "problem.groups.carbon.title": "ตลาดคาร์บอนเครดิต",
  "problem.groups.carbon.bullet1":
    "คนทั่วไปเข้าถึงการซื้อขายคาร์บอนเครดิตได้ยาก.",
  "problem.groups.carbon.bullet2":
    "ยังไม่มีระบบรวมเครดิตจากการใช้ EV ในชีวิตประจำวัน.",
  "solution.kicker": "โบรคเกอร์อินชัวร์เทคเพื่อสภาพภูมิอากาศ",
  "solution.title":
    "PANN CARBON เปลี่ยนการลดคาร์บอนจาก EV ให้เป็นส่วนลดประกัน",
  "solution.description":
    "ผสานข้อมูลเทเลเมติกส์ วิเคราะห์เชิงประกันภัย และตลาดคาร์บอน เพื่อให้ผู้ขับขี่ได้รับรางวัลและช่วยบริษัทประกันออกผลิตภัณฑ์สีเขียว.",
  "solution.points.1":
    "รวบรวมข้อมูลการขับขี่ EV จากผู้ผลิตและคำนวณคาร์บอนเครดิตรายคัน.",
  "solution.points.2":
    "รวมเครดิตแล้วขายให้หน่วยงานกลาง เช่น องค์กร TGO หรือกองทุน ESG.",
  "solution.points.3":
    "แบ่งผลตอบแทนกลับมาเป็นส่วนลดประกันประมาณ 10% ให้เจ้าของรถ.",
  "solution.points.4":
    "บริษัทประกันได้ข้อมูลที่ดีกว่าเพื่อสร้างผลิตภัณฑ์ ESG และบริหารความเสี่ยง.",
  "solution.valueFlows.title": "คุณค่าที่เชื่อมต่อกัน",
  "solution.valueFlows.ev.title": "เจ้าของรถ EV",
  "solution.valueFlows.ev.description":
    "ได้รับส่วนลดประกันที่อิงกับคาร์บอนเครดิตที่พิสูจน์ได้.",
  "solution.valueFlows.insurers.title": "พันธมิตรประกันภัย",
  "solution.valueFlows.insurers.description":
    "ใช้ข้อมูลการขับขี่และคาร์บอนเพื่อกำหนดราคาและรายงานผล ESG.",
  "solution.valueFlows.buyers.title": "ผู้ซื้อคาร์บอนเครดิต",
  "solution.valueFlows.buyers.description":
    "เข้าถึงเครดิตจากการใช้ EV ที่ตรวจสอบได้ และเหมาะกับ Premium T-VER และตลาดต่างประเทศ.",
  "flow.title": "วิธีการทำงานของ PANN CARBON",
  "flow.subtitle":
    "กระบวนการ 5 ขั้นตอนที่เชื่อมข้อมูล EV บริษัทประกัน และผู้ซื้อตลาดคาร์บอนเข้าไว้ด้วยกัน.",
  "flow.stepLabel": "ขั้นที่ {number}",
  "flow.steps.1.title": "เจ้าของรถ EV",
  "flow.steps.1.description":
    "ข้อมูลเทเลเมติกส์บันทึกระยะทาง การใช้งาน และการชาร์จ.",
  "flow.steps.2.title": "รวบรวมข้อมูลคาร์บอนเครดิต",
  "flow.steps.2.description":
    "ระบบรวบรวมข้อมูลจากผู้ผลิต EV และคำนวณคาร์บอนเครดิตที่ยืนยันได้.",
  "flow.steps.3.title": "พันธมิตรประกันภัย",
  "flow.steps.3.description":
    "ข้อมูลการขับขี่และความเข้มคาร์บอนถูกส่งให้บริษัทประกันเพื่อพัฒนาการกำหนดราคา.",
  "flow.steps.4.title": "ส่วนลดประกัน",
  "flow.steps.4.description":
    "ผู้เอาประกัน EV ได้รับส่วนลดเบี้ยราว 10% ตามผลลัพธ์การลดคาร์บอน.",
  "flow.steps.5.title": "ขายคาร์บอนเครดิตและป้อนกลับ",
  "flow.steps.5.description":
    "นำเครดิตที่รวมไว้ขายให้ TGO / กองทุน ESG และป้อนข้อมูลกลับเพื่อสร้างผลิตภัณฑ์ประกันสีเขียวใหม่.",
  "market.title": "สภาพตลาดและแรงส่ง",
  "market.description":
    "ไทยกำลังผลักดันแรงจูงใจ EV การซื้อขายคาร์บอน และกติกาประกัน ทำให้เป็นจังหวะเหมาะของ PANN CARBON.",
  "market.highlights.1":
    "ยอดจดทะเบียน EV ในไทยโตเฉลี่ย 52.9% ต่อปี แตะ 173,000 คันในปี 2023.",
  "market.highlights.2":
    "ตั้งเป้ามีรถไฟฟ้าราว 1.2 ล้านคันบนถนนภายในปี 2030.",
  "market.highlights.3":
    "โครงการ T-VER ของ TGO เปิดให้กิจกรรม “ใช้ยานยนต์ไฟฟ้า” ขอรับเครดิตได้แล้วกว่า 700 โครงการ.",
  "market.highlights.4":
    "Premium T-VER และตลาดต่างประเทศให้ราคาสูงกว่าฐานในประเทศ 1.5–3 เท่า เพิ่มโอกาสสร้างผลตอบแทน.",
  "market.focus.title": "TAM / SAM / SOM",
  "market.focus.tam.title": "TAM",
  "market.focus.tam.description":
    "รถ BEV และ PHEV ทั้งหมดในไทย (ประมาณ 1.387 ล้านคัน).",
  "market.focus.sam.title": "SAM",
  "market.focus.sam.description":
    "กลุ่มรถ BEV (ประมาณ 371,000 คัน) ในเขตเมืองหลัก.",
  "market.focus.som.title": "SOM",
  "market.focus.som.description":
    "กลุ่มเริ่มต้น 1% ของตลาด EV ผ่านโครงการร่วมกับบริษัทประกัน (ประมาณ 3,700 คัน).",
  "business.title": "โมเดลธุรกิจ",
  "business.description":
    "สร้างรายได้จากข้อมูลผลกระทบด้านสภาพภูมิอากาศ พร้อมคืนประโยชน์ให้เจ้าของรถและบริษัทประกัน.",
  "business.revenue.title": "รายได้หลัก",
  "business.revenue.items.1.title": "คอมมิชชั่นประกัน",
  "business.revenue.items.1.description":
    "รับคอมมิชชั่น 2–5% ต่อกรมธรรม์จากความร่วมมือประกันสีเขียวที่ใช้ข้อมูลของเรา.",
  "business.revenue.items.2.title": "ขายคาร์บอนเครดิต",
  "business.revenue.items.2.description":
    "รวมเครดิตจากการใช้ EV แล้วขายในราคาพื้นฐาน ~180 บาทต่อตัน CO₂e และเพิ่มมูลค่าเมื่อเข้าสู่ Premium / ตลาดต่างประเทศ.",
  "business.value.title": "การส่งต่อคุณค่า",
  "business.value.items.1.title": "เจ้าของรถ EV",
  "business.value.items.1.description":
    "ได้รับส่วนลดเบี้ยประกันที่ผูกกับเครดิตคาร์บอนที่ตรวจสอบได้ (~10%).",
  "business.value.items.2.title": "บริษัทประกัน",
  "business.value.items.2.description":
    "มีข้อมูลการใช้งาน EV ที่ตรวจสอบได้ เสริมภาพลักษณ์ ESG และออกผลิตภัณฑ์เร็วขึ้น.",
  "business.value.items.3.title": "ผู้ซื้อคาร์บอน",
  "business.value.items.3.description":
    "เข้าถึงข้อมูลการลดคาร์บอนของ EV ที่รวมไว้ พร้อมใช้ใน Premium T-VER และตลาดสากล.",
  "differentiation.title": "จุดเด่นของ PANN CARBON",
  "differentiation.description":
    "โซลูชันอื่นมักแก้แค่บางส่วน เราเปิดให้คนทั่วไปเข้าถึงคาร์บอนเครดิต พร้อมยกระดับผลลัพธ์ประกัน.",
  "differentiation.cards.1.title": "แพลตฟอร์มคาร์บอนเครดิต",
  "differentiation.cards.1.description":
    "เน้นการซื้อขายข้ามประเทศ ไม่ได้เปิดให้ผู้ใช้ EV ทั่วไปหรือเชื่อมกับประกัน.",
  "differentiation.cards.2.title": "โปรแกรมประกันใช้ข้อมูลขับขี่",
  "differentiation.cards.2.description":
    "ให้รางวัลจากการขับดี แต่ไม่ต่อยอดเป็นคาร์บอนเครดิตหรือรายงาน ESG.",
  "differentiation.cards.3.title": "ความได้เปรียบของ PANN CARBON",
  "differentiation.cards.3.description":
    "ผสานข้อมูล EV คาร์บอนเครดิต และการกำหนดราคา เพื่อให้ผู้ใช้เห็นประโยชน์ทางการเงินทันที.",
  "impact.title": "ผลกระทบ",
  "impact.description":
    "ทุกกรมธรรม์กลายเป็นเครือข่ายประกันภัยที่ขับเคลื่อนสภาพภูมิอากาศเชิงบวก.",
  "impact.cards.1.title": "ประเทศไทยและสภาพภูมิอากาศ",
  "impact.cards.1.description":
    "สนับสนุนเป้าหมาย Net Zero 2065 ด้วยการรวมเครดิตจาก EV รายย่อยให้มีนัยสำคัญและรับรองโดย TGO.",
  "impact.cards.2.title": "อุตสาหกรรมประกันภัย",
  "impact.cards.2.description":
    "ช่วยกำหนดราคาอย่างมีข้อมูล รายงาน ESG ได้จริง และสร้างผลิตภัณฑ์สีเขียว.",
  "impact.cards.3.title": "ผู้ใช้ EV",
  "impact.cards.3.description":
    "เปลี่ยนการลดคาร์บอนที่มองไม่เห็นให้กลายเป็นผลตอบแทนทางการเงินและชุมชนสีเขียว.",
  "future.title": "วิสัยทัศน์อนาคต",
  "future.description":
    "พัฒนาเป็นศูนย์กลางคาร์บอนเครดิตแบบกระจาย ที่นำมาใช้เป็นส่วนลดประกันสำหรับทรัพย์สินหลากหลาย.",
  "future.points.1":
    "ขยายสู่เรือโดยสารไฟฟ้าและระบบขนส่งสาธารณะไฟฟ้า.",
  "future.points.2":
    "เชื่อมต่อฟาร์ม อาคาร และโรงงานที่ใช้พลังงานแสงอาทิตย์เพื่อรับเครดิตพลังงานสะอาด.",
  "future.points.3":
    "เปิดซื้อขายคาร์บอนข้ามพรมแดนตามกฎระเบียบที่เข้มงวด.",
  "future.roadmap.title": "โรดแมประยะยาว",
  "future.roadmap.items.1":
    "เปิดโครงการนำร่องกับบริษัทประกันหลายราย พร้อมจ่ายเครดิตคาร์บอนจริงให้ลูกค้า.",
  "future.roadmap.items.2":
    "พัฒนา API เชื่อมต่อเรือ รถบรรทุก และอาคารอัจฉริยะ.",
  "future.roadmap.items.3":
    "สร้างชั้นคอมพลายแอนซ์สำหรับอาเซียนและตลาดพรีเมียม.",
  "team.title": "ทีมงาน",
  "team.subtitle":
    "ทีมผู้ก่อตั้งหลายสาขาที่พร้อมสร้างประสบการณ์อินชัวร์เทคเพื่อสภาพภูมิอากาศ.",
  "team.members.1.name": "ศุภวิชญ์ อัศวลายทอง",
  "team.members.1.role": "วิศวกรรมไฟฟ้า • IoT และระบบข้อมูล",
  "team.members.1.description":
    "ดูแลการเชื่อมต่อเทเลเมติกส์ ปรับใช้ MQTT และจัดการดาต้าพายป์ไลน์จากผู้ผลิต EV.",
  "team.members.2.name": "ชนิกานต์ โสตถิวนิชย์วงศ์",
  "team.members.2.role": "วิศวกรรมคอมพิวเตอร์ • โปรดักต์และไซเบอร์ซีเคียวริตี้",
  "team.members.2.description":
    "โปรดักต์โอเนอร์ที่มีประสบการณ์แฮ็กกาธอน ดูแลความปลอดภัยและ UX ของแพลตฟอร์ม.",
  "team.members.3.name": "ณัชชา สิงห์ทอง",
  "team.members.3.role": "วิทยาศาสตร์ประกันภัย • การออกแบบประกัน",
  "team.members.3.description":
    "ออกแบบไมโครอินชัวรันส์ ประกันแพรเมตริก และผลิตภัณฑ์ที่เชื่อมกับคาร์บอนเครดิต.",
  "footer.tagline":
    "โบรคเกอร์อินชัวร์เทคเพื่อสภาพภูมิอากาศ • ไทย • ข้อมูล EV → คาร์บอนเครดิต → ส่วนลดประกัน",
  "footer.description":
    "PANN CARBON เชื่อมข้อมูลการขับ EV ตลาดคาร์บอน และบริษัทประกัน เพื่อให้การลดคาร์บอนเกิดผลลัพธ์จริง.",
  "footer.copyright": "© {year} PANN CARBON. สงวนลิขสิทธิ์.",
  "technology.hero.kicker": "เทคโนโลยีสแตก",
  "technology.hero.title": "งานวิจัยด้านเทคโนโลยี",
  "technology.hero.tagline":
    "อธิบายโครงสร้างข้อมูล EV ที่เปลี่ยนเทเลเมติกส์ให้เป็นมูลค่าประกันอิงคาร์บอน.",
  "technology.section.objectiveLabel": "เป้าประสงค์",
  "technology.section.focusLabel": "ขีดความสามารถหลัก",
  "technology.section.outputLabel": "ผลลัพธ์สำคัญ",
  "technology.section.referenceLabel": "แหล่งอ้างอิง",
  "technology.section.referenceAction": "เปิดลิงก์",
  "technology.summary.title": "สรุปเทคโนโลยี",
  "technology.summary.description":
    "มองภาพรวมแต่ละโมดูลเทคโนโลยีและผลลัพธ์ที่สร้างคุณค่าให้ PANN CARBON.",
  "technology.summary.headers.topic": "โมดูล",
  "technology.summary.headers.objective": "เป้าประสงค์",
  "technology.summary.headers.output": "ผลลัพธ์สำคัญ",
  "technology.summary.rows.1.area": "สถาปัตยกรรมเทเลเมติกส์",
  "technology.summary.rows.1.outcome":
    "รับข้อมูลเทเลเมติกส์ EV แบบเรียลไทม์พร้อมแดชบอร์ดสด.",
  "technology.summary.rows.1.context":
    "สแต็ก CAN, MQTT, BLE และเฟิร์มแวร์ ESP32.",
  "technology.summary.rows.2.area": "อัลกอริทึมข้อมูลคาร์บอน",
  "technology.summary.rows.2.outcome":
    "แปลงทริปเป็นปริมาณ CO₂ ที่ลดและมูลค่าเงินบาท.",
  "technology.summary.rows.2.context":
    "เมธอด T-VER และราคา 180 บาท/ตัน CO₂e.",
  "technology.summary.rows.3.area": "การประเมินความเสี่ยงด้วย AI",
  "technology.summary.rows.3.outcome":
    "สร้างคะแนนผู้ขับเพื่อกำหนดราคาเบี้ยประกันแบบไดนามิก.",
  "technology.summary.rows.3.context":
    "โมเดล Random Forest และ XGBoost.",
  "technology.summary.rows.4.area": "การตรวจสอบด้วยบล็อกเชน",
  "technology.summary.rows.4.outcome":
    "บันทึกเครดิตคาร์บอนบน Polygon testnet อย่างแก้ไขไม่ได้.",
  "technology.summary.rows.4.context":
    "สมาร์ตคอนแทร็กป้องกันการนับซ้ำ.",
  "technology.summary.rows.5.area": "การแลกเปลี่ยนข้อมูลปลอดภัย",
  "technology.summary.rows.5.outcome":
    "เปิดท่อข้อมูล OEM-บริษัทประกันที่สอดคล้อง PDPA.",
  "technology.summary.rows.5.context":
    "สคีมาปิดบังตัวตนและเกตเวย์ API เข้ารหัส.",
  "technology.summary.rows.6.area": "แดชบอร์ดสีเขียว",
  "technology.summary.rows.6.outcome":
    "ดึงดูดผู้ใช้ด้วยการแสดงผลคาร์บอนแบบเกมมิฟายด์.",
  "technology.summary.rows.6.context":
    "Next.js, Tailwind และ Chart.js แบบเรียลไทม์.",
  "technology.vision.title": "วิสัยทัศน์โดยรวม",
  "technology.vision.quote":
    "PANN CARBON แปลงข้อมูลเทเลเมติกส์ EV เป็นสแต็กเทคโนโลยีที่สมบูรณ์—ตั้งแต่การเก็บข้อมูลแบบเรียลไทม์ไปจนถึงคาร์บอนเครดิตที่ตรวจสอบด้วยบล็อกเชน การประเมินความเสี่ยงด้วย AI และการแบ่งปันข้อมูลที่ปลอดภัย—เปิดใช้งานระบบนิเวศที่โปร่งใสและอัตโนมัติซึ่งเชื่อมผู้ขับขี่ บริษัทประกัน และตลาดคาร์บอน",
  "technology.topics.telematics.title": "สถาปัตยกรรมข้อมูลเทเลเมติกส์สำหรับรถ EV",
  "technology.topics.telematics.objective":
    "ออกแบบท่อข้อมูลเพื่อเก็บ ประมวลผล และจัดเก็บระยะทาง พลังงาน และการเดินทางของรถ EV.",
  "technology.topics.telematics.focus.1":
    "จัดมาตรฐานข้อมูล CAN, MQTT, BLE และ REST ให้เป็นหนึ่งเดียว.",
  "technology.topics.telematics.focus.2":
    "ระบุฟีเจอร์สำคัญที่ช่วยวิเคราะห์ผลการลดคาร์บอน.",
  "technology.topics.telematics.focus.3":
    "สร้างเฟิร์มแวร์น้ำหนักเบาด้วย ESP32 / XIAO สำหรับเก็บข้อมูลที่อุปกรณ์.",
  "technology.topics.telematics.output":
    "เดโมแดชบอร์ด EV แบบเรียลไทม์แสดงทริปและพลังงาน.",
  "technology.topics.telematics.referenceLabel":
    "Eseye – บทบาท IoT และเทเลเมติกส์ในประกันภัยยุคใหม่ (2023)",
  "technology.topics.battery.title": "อัลกอริทึมประมวลผลข้อมูลคาร์บอน",
  "technology.topics.battery.objective":
    "แปลงข้อมูลเทเลเมติกส์ EV เป็นการลด CO₂ ตามเมธอด T-VER “การใช้ยานยนต์ไฟฟ้า”.",
  "technology.topics.battery.focus.1":
    "ดึงแฟกเตอร์การปล่อยและค่าพื้นฐานจาก TGO.",
  "technology.topics.battery.focus.2":
    "ประยุกต์สูตร (D × EF₍ICE₎) − (E × EF₍EV₎).",
  "technology.topics.battery.focus.3":
    "เชื่อมราคาประมาณ 180 บาทต่อหนึ่งตัน CO₂e.",
  "technology.topics.battery.output":
    "Carbon Credit Calculator API สำหรับคำนวณและตีมูลค่าเครดิต.",
  "technology.topics.battery.referenceLabel":
    "TGO – T-VER Methodology: Use of Electric Vehicle",
  "technology.topics.pricing.title": "การประเมินความเสี่ยงประกัน EV ด้วย AI",
  "technology.topics.pricing.objective":
    "ทำนายระดับความเสี่ยงของผู้ขับเพื่อกำหนดราคาเชิงไดนามิก.",
  "technology.topics.pricing.focus.1":
    "วิศวกรรมคุณลักษณะจากความเร็ว อัตราเร่ง และช่วงเวลา.",
  "technology.topics.pricing.focus.2":
    "ฝึกโมเดล Random Forest และ XGBoost เพื่อจัดชั้นความเสี่ยง.",
  "technology.topics.pricing.focus.3":
    "สร้างฟีดแบ็ก eco-driving สำหรับแดชบอร์ดบริษัทประกัน.",
  "technology.topics.pricing.output":
    "ต้นแบบแมชชีนเลิร์นนิงพร้อมแดชบอร์ดคะแนนผู้ขับ.",
  "technology.topics.pricing.referenceLabel":
    "MDPI – Claim Prediction & Premium Pricing for Telematics (2023)",
  "technology.topics.mrv.title": "การตรวจสอบเครดิตคาร์บอนด้วยบล็อกเชน",
  "technology.topics.mrv.objective":
    "บันทึกการลด CO₂ อย่างปลอดภัยพร้อมร่องรอยตรวจสอบชัดเจน.",
  "technology.topics.mrv.focus.1":
    "ใช้สมาร์ตคอนแทร็กติดตามการออกเครดิตทุกหน่วย.",
  "technology.topics.mrv.focus.2":
    "ป้องกันการนับซ้ำผ่านบันทึกธุรกรรมที่แก้ไขไม่ได้.",
  "technology.topics.mrv.focus.3":
    "เชื่อมข้อมูลบล็อกเชนกับหลักฐานตรวจสอบของ T-VER.",
  "technology.topics.mrv.output":
    "เดโมสมาร์ตคอนแทร็กบน Polygon testnet สำหรับวัฏจักรเครดิต.",
  "technology.topics.mrv.referenceLabel":
    "MDPI – Blockchain Technology in Carbon Trading Markets (2024)",
  "technology.topics.engagement.title":
    "กรอบการแชร์ข้อมูลอย่างปลอดภัยระหว่าง OEM และบริษัทประกัน",
  "technology.topics.engagement.objective":
    "เปิดให้แลกเปลี่ยนข้อมูลภายใต้ PDPA อย่างถูกต้อง.",
  "technology.topics.engagement.focus.1":
    "ออกแบบสคีมาข้อมูลแบบปิดบังตัวตนด้วยแฮชเข้ารหัส.",
  "technology.topics.engagement.focus.2":
    "ควบคุมการยินยอมผ่านเกตเวย์ API ที่เข้ารหัส.",
  "technology.topics.engagement.focus.3":
    "บันทึกการเข้าถึงข้อมูลเพื่อการตรวจสอบและกำกับดูแล.",
  "technology.topics.engagement.output":
    "เดโม API เกตเวย์เข้ารหัสสำหรับส่งต่อข้อมูลเทเลเมติกส์.",
  "technology.topics.engagement.referenceLabel":
    "Telematics in Insurance: Challenges and Limitations (2024)",
  "technology.topics.compliance.title": "แพลตฟอร์มแดชบอร์ดสีเขียวและการแสดงผล",
  "technology.topics.compliance.objective":
    "นำเสนอข้อมูลคาร์บอนและประกันด้วย UX ที่ชวนมีส่วนร่วม.",
  "technology.topics.compliance.focus.1":
    "สร้างคอมโพเนนต์ Next.js + Tailwind + Chart.js สำหรับวิเคราะห์.",
  "technology.topics.compliance.focus.2":
    "เพิ่มเกมมิฟิเคชันให้เครดิตที่ได้รับการรับรองจาก T-VER.",
  "technology.topics.compliance.focus.3":
    "ซิงก์ข้อมูลคาร์บอนและประกันแบบเรียลไทม์ให้ลูกค้าและพาร์ตเนอร์.",
  "technology.topics.compliance.output":
    "เดโมเฟรอนต์เอนด์แบบอินเทอร์แอคทีฟสำหรับการมีส่วนร่วมด้านการเดินทางสีเขียว.",
  "technology.topics.compliance.referenceLabel":
    "Sustainability – Enhancing Sustainable Mobility Through Gamified Challenges",
  "technology.backToHome": "กลับหน้าหลัก",
  "businessMarket.hero.kicker": "ข้อมูลธุรกิจ",
  "businessMarket.hero.title": "งานวิจัยด้านธุรกิจและตลาด",
  "businessMarket.hero.tagline":
    "ข้อมูลที่หนุนกลยุทธ์อินชัวร์เทคด้านสภาพภูมิอากาศของ PANN CARBON ในไทย.",
  "businessMarket.section.objectiveLabel": "เป้าหมาย",
  "businessMarket.section.focusLabel": "หัวข้อวิจัย",
  "businessMarket.section.whyLabel": "ความสำคัญ",
  "businessMarket.section.referenceLabel": "แหล่งอ้างอิง",
  "businessMarket.section.referenceAction": "เปิดลิงก์",
  "businessMarket.summary.title": "สรุปธุรกิจและตลาด",
  "businessMarket.summary.description":
    "สรุปหัวข้องานวิจัยที่กำหนดกลยุทธ์และโมเดลรายได้ของ PANN CARBON.",
  "businessMarket.summary.headers.index": "ลำดับ",
  "businessMarket.summary.headers.area": "ประเด็น",
  "businessMarket.summary.headers.outcome": "ผลลัพธ์สำคัญ",
  "businessMarket.summary.headers.context": "บริบทไทย",
  "businessMarket.topics.marketGrowth.title":
    "แนวโน้มตลาด EV และพลังงานหมุนเวียนในไทย",
  "businessMarket.topics.marketGrowth.objective":
    "ทำความเข้าใจการเติบโตของ EV และการเปลี่ยนผ่านพลังงานหมุนเวียนภายใต้นโยบายพลังงานแห่งชาติ.",
  "businessMarket.topics.marketGrowth.focus.1":
    "วิเคราะห์อัตราการขยายตัวของ EV การสนับสนุนนโยบาย และแนวโน้มการลงทุน.",
  "businessMarket.topics.marketGrowth.focus.2":
    "ทบทวนการบูรณาการพลังงานหมุนเวียนกับภาคการขนส่ง.",
  "businessMarket.topics.marketGrowth.focus.3":
    "ประเมินพลวัตตลาดที่สนับสนุนโอกาสประกัน EV ของ PANN CARBON.",
  "businessMarket.topics.marketGrowth.why":
    "ให้ภาพรวมตลาดที่สนับสนุนการวิเคราะห์โอกาสประกัน EV ของ PANN CARBON.",
  "businessMarket.topics.marketGrowth.referenceLabel":
    "EPPO – แนวโน้มพลังงานหมุนเวียนในเอเชีย 2025",
  "businessMarket.topics.carbonInsurance.title":
    "แนวโน้มอุตสาหกรรมยานยนต์ไฟฟ้า (2024–2026)",
  "businessMarket.topics.carbonInsurance.objective":
    "ประเมินศักยภาพตลาด EV และการพัฒนาระบบนิเวศในไทย.",
  "businessMarket.topics.carbonInsurance.focus.1":
    "วิเคราะห์ขนาดตลาด กำลังการผลิต และการคาดการณ์การลงทุน.",
  "businessMarket.topics.carbonInsurance.focus.2":
    "ทบทวนการวิเคราะห์อุตสาหกรรมและคาดการณ์ของ Krungsri Research.",
  "businessMarket.topics.carbonInsurance.focus.3":
    "วัดข้อมูลตลาด EV สำหรับการสร้างแบบจำลองประกันและคาร์บอนเครดิต.",
  "businessMarket.topics.carbonInsurance.why":
    "ให้ข้อมูลตลาด EV เชิงปริมาณสำหรับการสร้างแบบจำลองประกันและคาร์บอนเครดิต.",
  "businessMarket.topics.carbonInsurance.referenceLabel":
    "Krungsri Research – Industry Outlook: Electric Vehicle Thailand",
  "businessMarket.topics.tverStructure.title":
    "โครงการลดการปล่อยก๊าซเรือนกระจกโดยสมัครใจ (T-VER)",
  "businessMarket.topics.tverStructure.objective":
    "ทบทวนกรอบ T-VER และกลไกการรับรองการลด GHG โดยสมัครใจ.",
  "businessMarket.topics.tverStructure.focus.1":
    "ตรวจสอบเกณฑ์คุณสมบัติ กระบวนการตรวจสอบ และกรอบการซื้อขาย.",
  "businessMarket.topics.tverStructure.focus.2":
    "ทำความเข้าใจโครงสร้างการกำกับ T-VER และการลงทะเบียนโครงการ.",
  "businessMarket.topics.tverStructure.focus.3":
    "ประเมินว่า T-VER สนับสนุนโมเดลการรวมคาร์บอนเครดิตของ PANN CARBON อย่างไร.",
  "businessMarket.topics.tverStructure.why":
    "ให้ข้อมูลอ้างอิงพื้นฐานสำหรับโมเดลการรวมคาร์บอนเครดิตของ PANN CARBON.",
  "businessMarket.topics.tverStructure.referenceLabel": "TGO – What is T-VER?",
  "businessMarket.topics.microAggregation.title":
    "เมธอดการลดคาร์บอนจาก EV (T-VER)",
  "businessMarket.topics.microAggregation.objective":
    "ระบุว่าการใช้ EV มีส่วนในการสร้างคาร์บอนเครดิตที่วัดได้อย่างไร.",
  "businessMarket.topics.microAggregation.focus.1":
    "ทบทวนวิธีการคำนวณและมาตรฐานการตรวจสอบสำหรับการลดคาร์บอนจาก EV.",
  "businessMarket.topics.microAggregation.focus.2":
    "ทำความเข้าใจเมธอด T-VER เฉพาะสำหรับการใช้ยานยนต์ไฟฟ้า.",
  "businessMarket.topics.microAggregation.focus.3":
    "สร้างแบบจำลองไมโครแอ็กกรีเกชันและการตรวจสอบเครดิตใน PANN CARBON.",
  "businessMarket.topics.microAggregation.why":
    "ให้พื้นฐานทางเทคนิคสำหรับการสร้างแบบจำลองไมโครแอ็กกรีเกชันและการตรวจสอบเครดิตใน PANN CARBON.",
  "businessMarket.topics.microAggregation.referenceLabel":
    "TGO – Use of Electric Vehicle: T-VER Methodology",
  "businessMarket.topics.competitors.title":
    "ทะเบียนคาร์บอนเครดิตและโครงการที่ตรวจสอบแล้วในไทย",
  "businessMarket.topics.competitors.objective":
    "วิเคราะห์โครงสร้างและหมวดหมู่ของโครงการคาร์บอนที่ลงทะเบียนในไทย.",
  "businessMarket.topics.competitors.focus.1":
    "ทบทวนขนาดตลาด การกระจายตามภาคส่วน และศักยภาพ Premium T-VER.",
  "businessMarket.topics.competitors.focus.2":
    "ตรวจสอบหมวดหมู่โครงการ T-VER ที่มีอยู่และรูปแบบการลงทะเบียน.",
  "businessMarket.topics.competitors.focus.3":
    "เทียบเคียงการรวม EV ของ PANN CARBON กับโครงการ T-VER ที่มีอยู่.",
  "businessMarket.topics.competitors.why":
    "ให้ข้อมูลเชิงลึกสำหรับการเทียบเคียงการรวม EV ของ PANN CARBON กับโครงการ T-VER ที่มีอยู่.",
  "businessMarket.topics.competitors.referenceLabel":
    "TGO – T-VER Project Database",
  "businessMarket.topics.pricingModel.title":
    "นโยบาย Net Zero และความเป็นกลางทางคาร์บอนของไทย",
  "businessMarket.topics.pricingModel.objective":
    "ทำความเข้าใจเป้าหมายความเป็นกลางทางคาร์บอนและกรอบนโยบาย Net Zero 2065 แห่งชาติ.",
  "businessMarket.topics.pricingModel.focus.1":
    "ทบทวนภาคส่วนการลดผลกระทบหลักและทิศทางนโยบายโดย ONEP.",
  "businessMarket.topics.pricingModel.focus.2":
    "วิเคราะห์การสอดคล้องกับเป้าหมายสภาพภูมิอากาศแห่งชาติ.",
  "businessMarket.topics.pricingModel.focus.3":
    "ประเมินการสอดรับนโยบายเชิงกลยุทธ์สำหรับการขยายระบบนิเวศ PANN CARBON ระยะยาว.",
  "businessMarket.topics.pricingModel.why":
    "ให้การสอดรับนโยบายเชิงกลยุทธ์สำหรับการขยายระบบนิเวศ PANN CARBON ระยะยาว.",
  "businessMarket.topics.pricingModel.referenceLabel":
    "ONEP – บทความ Carbon Neutrality และ Net Zero Emissions",
  "businessMarket.topics.expansion.title":
    "เทเลเมติกส์และประกันตามการใช้งานในไทย",
  "businessMarket.topics.expansion.objective":
    "อธิบายว่าข้อมูลพฤติกรรมการขับขี่มีผลต่อเบี้ยประกันอย่างไร.",
  "businessMarket.topics.expansion.focus.1":
    "ทบทวนการนำเทเลเมติกส์มาใช้ การให้คะแนนพฤติกรรม และประโยชน์ต่อลูกค้า.",
  "businessMarket.topics.expansion.focus.2":
    "วิเคราะห์โมเดลประกันตามการใช้งานในตลาดไทย.",
  "businessMarket.topics.expansion.focus.3":
    "ทำความเข้าใจข้อมูลอ้างอิงพื้นฐานสำหรับการกำหนดราคาตามพฤติกรรมในโมเดลประกันของ PANN CARBON.",
  "businessMarket.topics.expansion.why":
    "ให้ข้อมูลอ้างอิงพื้นฐานสำหรับการกำหนดราคาตามพฤติกรรมในโมเดลประกันของ PANN CARBON.",
  "businessMarket.topics.expansion.referenceLabel":
    "Roojai – ผลกระทบของเทเลเมติกส์ต่อประกันรถยนต์",
  "businessMarket.topics.evInsurance.title": "นวัตกรรมผลิตภัณฑ์ประกัน EV",
  "businessMarket.topics.evInsurance.objective":
    "ทบทวนข้อเสนอประกัน EV ที่ปรับให้เหมาะกับท้องถิ่นและโมเดลความคุ้มครองที่ปรับแต่งได้.",
  "businessMarket.topics.evInsurance.focus.1":
    "ตรวจสอบผลิตภัณฑ์ประกัน EV เฉพาะของ Roojai และกลไกการกำหนดราคา.",
  "businessMarket.topics.evInsurance.focus.2":
    "วิเคราะห์การวางตำแหน่งตลาดและคุณสมบัติผลิตภัณฑ์.",
  "businessMarket.topics.evInsurance.focus.3":
    "เทียบเคียงการออกแบบผลิตภัณฑ์ประกันสีเขียวสำหรับ PANN CARBON.",
  "businessMarket.topics.evInsurance.why":
    "ให้การเทียบเคียงตลาดสำหรับการออกแบบผลิตภัณฑ์ประกันสีเขียว.",
  "businessMarket.topics.evInsurance.referenceLabel":
    "Roojai – การเปิดตัวประกันรถยนต์ไฟฟ้า",
  "businessMarket.topics.telematicsPricing.title":
    "โมเดลการกำหนดราคาพรีเมียมตามเทเลเมติกส์",
  "businessMarket.topics.telematicsPricing.objective":
    "ศึกษางานวิจัยระดับโลกเกี่ยวกับการวิเคราะห์ข้อมูลเทเลเมติกส์ในการกำหนดราคาประกันรถยนต์.",
  "businessMarket.topics.telematicsPricing.focus.1":
    "ทบทวนการสร้างแบบจำลองเชิงทำนาย การถดถอยแบบปัวซอง และการแบ่งกลุ่มความเสี่ยงตามข้อมูล.",
  "businessMarket.topics.telematicsPricing.focus.2":
    "วิเคราะห์งานวิจัยทางวิชาการเกี่ยวกับการกำหนดราคาตามเทเลเมติกส์.",
  "businessMarket.topics.telematicsPricing.focus.3":
    "ประยุกต์กรอบการวิเคราะห์ที่สนับสนุนโมเดลพรีเมียมและความเสี่ยงของ PANN CARBON.",
  "businessMarket.topics.telematicsPricing.why":
    "ให้กรอบการวิเคราะห์ที่สนับสนุนโมเดลพรีเมียมและความเสี่ยงของ PANN CARBON.",
  "businessMarket.topics.telematicsPricing.referenceLabel":
    "MDPI – Risks Journal (2024)",
  "businessMarket.topics.blockchainCarbon.title": "บล็อกเชนในการซื้อขายคาร์บอน",
  "businessMarket.topics.blockchainCarbon.objective":
    "สำรวจบทบาทของบล็อกเชนในการเพิ่มความโปร่งใสในตลาดคาร์บอน.",
  "businessMarket.topics.blockchainCarbon.focus.1":
    "ทบทวนกลไกการตรวจสอบข้อมูล การติดตาม และความเชื่อมั่นของตลาด.",
  "businessMarket.topics.blockchainCarbon.focus.2":
    "วิเคราะห์การประยุกต์ใช้บล็อกเชนในตลาดคาร์บอนเครดิต.",
  "businessMarket.topics.blockchainCarbon.focus.3":
    "บูรณาการแนวคิดบล็อกเชนในทะเบียนเครดิตของ PANN CARBON.",
  "businessMarket.topics.blockchainCarbon.why":
    "ให้พื้นฐานแนวคิดสำหรับการบูรณาการบล็อกเชนในทะเบียนเครดิตของ PANN CARBON.",
  "businessMarket.topics.blockchainCarbon.referenceLabel":
    "MDPI – Energies Journal (2024)",
  "businessMarket.topics.iotTelematics.title":
    "IoT และเทเลเมติกส์สำหรับนวัตกรรมประกันรถยนต์",
  "businessMarket.topics.iotTelematics.objective":
    "วิเคราะห์การประยุกต์ใช้ IoT ในการเก็บข้อมูลยานพาหนะและการจัดการอุบัติเหตุ.",
  "businessMarket.topics.iotTelematics.focus.1":
    "ทบทวนข้อมูลเรียลไทม์ เซ็นเซอร์เทเลเมติกส์ และประโยชน์การทำให้บริษัทประกันอัตโนมัติ.",
  "businessMarket.topics.iotTelematics.focus.2":
    "ตรวจสอบท่อข้อมูลที่เปิดใช้งานด้วย IoT และสถาปัตยกรรม.",
  "businessMarket.topics.iotTelematics.focus.3":
    "สนับสนุนหลักฐานสำหรับการใช้ท่อข้อมูลที่เปิดใช้งานด้วย IoT ในสถาปัตยกรรมของ PANN CARBON.",
  "businessMarket.topics.iotTelematics.why":
    "ให้หลักฐานสนับสนุนสำหรับการใช้ท่อข้อมูลที่เปิดใช้งานด้วย IoT ในสถาปัตยกรรมของ PANN CARBON.",
  "businessMarket.topics.iotTelematics.referenceLabel":
    "Eseye – From Crash to Claim (2025)",
  "businessMarket.summary.rows.1.area":
    "แนวโน้มตลาด EV และพลังงานหมุนเวียนในไทย",
  "businessMarket.summary.rows.1.outcome":
    "ภาพรวมตลาดที่สนับสนุนการวิเคราะห์โอกาสประกัน EV.",
  "businessMarket.summary.rows.1.context":
    "แนวโน้มพลังงานหมุนเวียน EPPO และการวิเคราะห์การขยายตัวของ EV.",
  "businessMarket.summary.rows.2.area":
    "แนวโน้มอุตสาหกรรมยานยนต์ไฟฟ้า (2024–2026)",
  "businessMarket.summary.rows.2.outcome":
    "ข้อมูลตลาด EV เชิงปริมาณสำหรับการคาดการณ์ประกันและคาร์บอน.",
  "businessMarket.summary.rows.2.context":
    "การวิเคราะห์อุตสาหกรรมและการคาดการณ์ของ Krungsri Research.",
  "businessMarket.summary.rows.3.area":
    "โครงการลดการปล่อยก๊าซเรือนกระจกโดยสมัครใจ (T-VER)",
  "businessMarket.summary.rows.3.outcome":
    "ข้อมูลอ้างอิงพื้นฐานสำหรับโมเดลการรวมคาร์บอนเครดิต.",
  "businessMarket.summary.rows.3.context":
    "กรอบ TGO และกลไกการรับรอง.",
  "businessMarket.summary.rows.4.area":
    "เมธอดการลดคาร์บอนจาก EV (T-VER)",
  "businessMarket.summary.rows.4.outcome":
    "พื้นฐานทางเทคนิคสำหรับไมโครแอ็กกรีเกชันและการตรวจสอบเครดิต.",
  "businessMarket.summary.rows.4.context":
    "เมธอด T-VER เฉพาะสำหรับการใช้ยานยนต์ไฟฟ้า.",
  "businessMarket.summary.rows.5.area":
    "ทะเบียนคาร์บอนเครดิตและโครงการที่ตรวจสอบแล้วในไทย",
  "businessMarket.summary.rows.5.outcome":
    "ข้อมูลเชิงลึกสำหรับการเทียบเคียงการรวม EV กับโครงการ T-VER.",
  "businessMarket.summary.rows.5.context":
    "ฐานข้อมูลโครงการ TGO และการวิเคราะห์โครงสร้างตลาด.",
  "businessMarket.summary.rows.6.area":
    "นโยบาย Net Zero และความเป็นกลางทางคาร์บอนของไทย",
  "businessMarket.summary.rows.6.outcome":
    "การสอดรับนโยบายเชิงกลยุทธ์สำหรับการขยายระบบนิเวศระยะยาว.",
  "businessMarket.summary.rows.6.context":
    "กรอบ Net Zero 2065 ของ ONEP และภาคส่วนการลดผลกระทบ.",
  "businessMarket.summary.rows.7.area":
    "เทเลเมติกส์และประกันตามการใช้งานในไทย",
  "businessMarket.summary.rows.7.outcome":
    "ข้อมูลอ้างอิงพื้นฐานสำหรับโมเดลการกำหนดราคาตามพฤติกรรม.",
  "businessMarket.summary.rows.7.context":
    "การนำเทเลเมติกส์ของ Roojai มาใช้และประโยชน์ต่อลูกค้า.",
  "businessMarket.summary.rows.8.area": "นวัตกรรมผลิตภัณฑ์ประกัน EV",
  "businessMarket.summary.rows.8.outcome":
    "การเทียบเคียงตลาดสำหรับการออกแบบผลิตภัณฑ์ประกันสีเขียว.",
  "businessMarket.summary.rows.8.context":
    "ผลิตภัณฑ์ประกัน EV เฉพาะของ Roojai และการกำหนดราคา.",
  "businessMarket.summary.rows.9.area":
    "โมเดลการกำหนดราคาพรีเมียมตามเทเลเมติกส์",
  "businessMarket.summary.rows.9.outcome":
    "กรอบการวิเคราะห์ที่สนับสนุนโมเดลพรีเมียมและความเสี่ยง.",
  "businessMarket.summary.rows.9.context":
    "งานวิจัย MDPI เกี่ยวกับการสร้างแบบจำลองเชิงทำนายและการแบ่งกลุ่มความเสี่ยง.",
  "businessMarket.summary.rows.10.area": "บล็อกเชนในการซื้อขายคาร์บอน",
  "businessMarket.summary.rows.10.outcome":
    "พื้นฐานแนวคิดสำหรับการบูรณาการทะเบียนเครดิตบล็อกเชน.",
  "businessMarket.summary.rows.10.context":
    "งานวิจัย MDPI เกี่ยวกับกลไกความโปร่งใสและการติดตาม.",
  "businessMarket.summary.rows.11.area":
    "IoT และเทเลเมติกส์สำหรับนวัตกรรมประกันรถยนต์",
  "businessMarket.summary.rows.11.outcome":
    "หลักฐานสนับสนุนสำหรับท่อข้อมูลที่เปิดใช้งานด้วย IoT.",
  "businessMarket.summary.rows.11.context":
    "งานวิจัย Eseye เกี่ยวกับข้อมูลเรียลไทม์และประโยชน์การทำให้อัตโนมัติ.",
  "businessMarket.vision.title": "วิสัยทัศน์โดยรวม",
  "businessMarket.vision.quote":
    "PANN CARBON สร้างโมเดลธุรกิจที่ยั่งยืนซึ่งเชื่อมตลาด EV ที่เติบโตของไทยกับตลาดคาร์บอนเครดิตและนวัตกรรมประกันภัย—เปลี่ยนการลดการปล่อยที่ตรวจสอบแล้วเป็นแรงจูงใจทางการเงินสำหรับผู้ขับขี่ รายได้ต่อเนื่องสำหรับบริษัทประกัน และผลกระทบ ESG ที่วัดได้สำหรับประเทศ",
  "businessMarket.backToHome": "กลับหน้าหลัก",
  "esgPolicy.hero.kicker": "การสอดรับนโยบาย",
  "esgPolicy.hero.title": "งานวิจัยด้าน ESG และนโยบาย",
  "esgPolicy.hero.tagline":
    "อธิบายบทบาทของ PANN CARBON ในการเชื่อมโยงนโยบายภูมิอากาศกับการใช้ EV รายวัน.",
  "esgPolicy.section.objectiveLabel": "เป้าหมาย",
  "esgPolicy.section.focusLabel": "หัวข้อวิจัย",
  "esgPolicy.section.whyLabel": "ความสำคัญ",
  "esgPolicy.section.referenceLabel": "แหล่งอ้างอิง",
  "esgPolicy.section.referenceAction": "เปิดลิงก์",
  "esgPolicy.summary.title": "สรุป ESG และนโยบาย",
  "esgPolicy.summary.description":
    "สรุปข้อมูลสำคัญที่กำหนดทิศทางด้านกฎระเบียบ ความโปร่งใส และการมีส่วนร่วมของสาธารณะสำหรับ PANN CARBON.",
  "esgPolicy.summary.headers.index": "ลำดับ",
  "esgPolicy.summary.headers.area": "ประเด็น",
  "esgPolicy.summary.headers.outcome": "ผลลัพธ์สำคัญ",
  "esgPolicy.summary.headers.context": "บริบทไทย",
  "esgPolicy.topics.netZero.title": "Net Zero และยุทธศาสตร์ระดับชาติของไทย",
  "esgPolicy.topics.netZero.objective":
    "ทำให้ PANN Carbon เดินตามโรดแมปความเป็นกลางทางคาร์บอนระยะยาว (2050) และ Net Zero (2065) ของไทย.",
  "esgPolicy.topics.netZero.focus.1":
    "นโยบาย LT-LEDS ภายใต้ ONEP และ UNFCCC; บูรณาการข้อมูลเทเลเมติกส์ EV กับเป้าหมายลด GHG 30–40% ภายในปี 2030.",
  "esgPolicy.topics.netZero.focus.2":
    "โครงสร้างการวางแผนภูมิอากาศระดับชาติที่กำหนดเส้นทางการลดผลกระทบสำหรับภาคการขนส่งและพลังงาน.",
  "esgPolicy.topics.netZero.focus.3":
    "โมเดลการวิเคราะห์ที่สอดรับนโยบายแสดงการลดการปล่อยที่ตรวจสอบได้ซึ่งสนับสนุนเป้าหมาย NDC ระดับชาติ.",
  "esgPolicy.topics.netZero.why":
    "รับรองว่า PANN Carbon สอดรับกับยุทธศาสตร์ภูมิอากาศระดับชาติและสนับสนุนเป้าหมาย NDC.",
  "esgPolicy.topics.netZero.referenceLabel":
    "ONEP – ลดโลกร้อนด้วย Carbon Neutrality และ Net Zero Emissions",
  "esgPolicy.topics.ltLeds.title":
    "ยุทธศาสตร์การพัฒนาระยะยาวการปล่อยต่ำ (LT-LEDS) ระดับชาติ",
  "esgPolicy.topics.ltLeds.objective":
    "บูรณาการกรอบ LT-LEDS อย่างเป็นทางการของไทยเข้ากับการสร้างแบบจำลองข้อมูลคาร์บอนสำหรับการลดผลกระทบจาก EV.",
  "esgPolicy.topics.ltLeds.focus.1":
    "โครงสร้างการวางแผนภูมิอากาศระดับชาติที่กำหนดเส้นทางการลดผลกระทบสำหรับภาคการขนส่งและพลังงาน.",
  "esgPolicy.topics.ltLeds.focus.2":
    "ชุดข้อมูลระดับชาติที่อนุมัติโดย UNFCCC และเมธอดการกำหนดค่าเบสไลน์.",
  "esgPolicy.topics.ltLeds.focus.3":
    "เมธอดการกำหนดค่าเบสไลน์การปล่อยที่มีโครงสร้างสอดรับกับชุดข้อมูลระดับชาติที่อนุมัติโดย UNFCCC.",
  "esgPolicy.topics.ltLeds.why":
    "รับรองว่าการสร้างแบบจำลองข้อมูลคาร์บอนสอดรับกับโครงสร้างการวางแผนภูมิอากาศระดับชาติที่อนุมัติโดย UNFCCC.",
  "esgPolicy.topics.ltLeds.referenceLabel":
    "UNFCCC – Thailand LT-LEDS (Revised 2022)",
  "esgPolicy.topics.tverPathway.title": "กรอบ T-VER และ Premium T-VER",
  "esgPolicy.topics.tverPathway.objective":
    "รับรองว่าข้อมูลการลดคาร์บอนที่เกี่ยวข้องกับ EV สอดคล้องกับมาตรฐาน T-VER และ Premium T-VER อย่างเป็นทางการของ TGO.",
  "esgPolicy.topics.tverPathway.focus.1":
    "เมธอดสำหรับการคำนวณค่าเบสไลน์และการปล่อยของโครงการ; การตรวจสอบข้อมูล MRV และการออกเครดิต.",
  "esgPolicy.topics.tverPathway.focus.2":
    "ข้อกำหนดการปฏิบัติตาม T-VER และกระบวนการตรวจสอบ.",
  "esgPolicy.topics.tverPathway.focus.3":
    "เวิร์กโฟลว์การส่ง T-VER อัตโนมัติและสถาปัตยกรรม MRV ดิจิทัลที่เข้ากันได้กับทะเบียน TGO.",
  "esgPolicy.topics.tverPathway.why":
    "รับรองการปฏิบัติตามมาตรฐาน TGO และเปิดใช้งานเวิร์กโฟลว์การออกเครดิตอัตโนมัติ.",
  "esgPolicy.topics.tverPathway.referenceLabel": "TGO – What is T-VER?",
  "esgPolicy.topics.insuranceEsg.title": "ESG ในภาคประกันภัยของไทย",
  "esgPolicy.topics.insuranceEsg.objective":
    "สนับสนุนการดำเนินการตามแนวทาง ESG ของ คปภ. ผ่านตัวชี้วัดสิ่งแวดล้อมที่วัดได้.",
  "esgPolicy.topics.insuranceEsg.focus.1":
    "การบูรณาการข้อมูล ESG ในการประเมินความเสี่ยงประกัน แรงจูงใจพรีเมียมสีเขียว และแนวปฏิบัติการเปิดเผยข้อมูล.",
  "esgPolicy.topics.insuranceEsg.focus.2":
    "แนวทาง คปภ. และข้อกำหนดกฎระเบียบสำหรับการรายงาน ESG.",
  "esgPolicy.topics.insuranceEsg.focus.3":
    "แดชบอร์ดประกันสีเขียว PANN Carbon แสดงการประหยัด tCO₂e ที่ตรวจสอบได้เชื่อมโยงกับการรายงาน ESG.",
  "esgPolicy.topics.insuranceEsg.why":
    "เปิดใช้งานให้บริษัทประกันภัยปฏิบัติตามข้อกำหนด ESG ของ คปภ. ด้วยตัวชี้วัดสิ่งแวดล้อมที่วัดได้.",
  "esgPolicy.topics.insuranceEsg.referenceLabel":
    "คปภ. – แนวทาง ESG สำหรับภาคประกันภัย (2023)",
  "esgPolicy.topics.digitalMrv.title": "MRV ดิจิทัลและบล็อกเชนสำหรับคาร์บอนเครดิต",
  "esgPolicy.topics.digitalMrv.objective":
    "สำรวจการบูรณาการบล็อกเชนและ IoT สำหรับการตรวจสอบคาร์บอนอัตโนมัติ โปร่งใส และป้องกันการปลอมแปลง.",
  "esgPolicy.topics.digitalMrv.focus.1":
    "หลักฐานข้อมูลตามการบันทึกเวลา การติดตามวงจรชีวิตบนเชน และเกณฑ์ความสมบูรณ์ Premium T-VER.",
  "esgPolicy.topics.digitalMrv.focus.2":
    "การบูรณาการบล็อกเชนและ IoT สำหรับกระบวนการตรวจสอบอัตโนมัติ.",
  "esgPolicy.topics.digitalMrv.focus.3":
    "ต้นแบบสัญญาอัจฉริยะที่ออกและยกเลิกคาร์บอนเครดิตที่ตรวจสอบแล้วโดยอัตโนมัติ.",
  "esgPolicy.topics.digitalMrv.why":
    "เปิดใช้งานการตรวจสอบคาร์บอนอัตโนมัติ โปร่งใส และป้องกันการปลอมแปลงโดยใช้เทคโนโลยีบล็อกเชน.",
  "esgPolicy.topics.digitalMrv.referenceLabel":
    "ResearchGate – บทบาทของเทคโนโลยีบล็อกเชนในการเพิ่มความโปร่งใสของตลาดคาร์บอนเครดิต (2024)",
  "esgPolicy.topics.publicEngagement.title":
    "การมีส่วนร่วมของสาธารณะและการเข้าร่วมตลาดคาร์บอน",
  "esgPolicy.topics.publicEngagement.objective":
    "กระตุ้นการมีส่วนร่วมระดับพลเมืองในตลาดคาร์บอนผ่านการมองเห็นข้อมูลและการเกมมิฟิเคชัน.",
  "esgPolicy.topics.publicEngagement.focus.1":
    "การติดตาม CO₂ จาก EV ลีดเดอร์บอร์ด และเครื่องมือสร้างความตระหนักเพื่อส่งเสริมวัฒนธรรมการชดเชยโดยสมัครใจ.",
  "esgPolicy.topics.publicEngagement.focus.2":
    "ความรู้คาร์บอนและกลยุทธ์การมีส่วนร่วมของพลเมือง.",
  "esgPolicy.topics.publicEngagement.focus.3":
    "แพลตฟอร์มชุมชนสีเขียวแบบเกมมิฟิเคชันที่เชื่อมข้อมูลการใช้งาน EV กับเป้าหมายการลดคาร์บอนระดับชาติ.",
  "esgPolicy.topics.publicEngagement.why":
    "กระตุ้นการมีส่วนร่วมของพลเมืองในตลาดคาร์บอนและสร้างการสนับสนุนสาธารณะสำหรับเป้าหมาย Net Zero.",
  "esgPolicy.topics.publicEngagement.referenceLabel":
    "UN ESCAP – EV ในอาเซียนและไทย (รศ.ดร.ยศพงษ์ เลาหนual, KMUTT)",
  "esgPolicy.topics.renewableEnergy.title": "พลังงานหมุนเวียนและบริบทนโยบาย BCG",
  "esgPolicy.topics.renewableEnergy.objective":
    "เสริมสร้างการสอดรับระหว่างการลดคาร์บอนจากการขนส่งและการเปลี่ยนผ่านพลังงานหมุนเวียนของไทย.",
  "esgPolicy.topics.renewableEnergy.focus.1":
    "โมเดล BCG ของสำนักงานนโยบายและแผนพลังงาน (EPPO); บูรณาการการใช้ไฟฟ้า EV กับการเติบโตของพลังงานหมุนเวียน.",
  "esgPolicy.topics.renewableEnergy.focus.2":
    "แนวโน้มพลังงานหมุนเวียนและการบูรณาการกับภาคการขนส่ง.",
  "esgPolicy.topics.renewableEnergy.focus.3":
    "การสร้างแบบจำลองผลกระทบพลังงานระดับชาติที่ปรับปรุงและการปรับค่าเบสไลน์สำหรับการบัญชีคาร์บอนที่เกี่ยวข้องกับ EV.",
  "esgPolicy.topics.renewableEnergy.why":
    "เสริมสร้างการสอดรับระหว่างการลดคาร์บอนจากการขนส่งและการเปลี่ยนผ่านพลังงานหมุนเวียนของไทย.",
  "esgPolicy.topics.renewableEnergy.referenceLabel":
    "EPPO – แนวโน้มพลังงานหมุนเวียนในเอเชีย 2025",
  "esgPolicy.topics.partnerships.title": "Green Taxonomy และการเงิน ESG ของไทย",
  "esgPolicy.topics.partnerships.objective":
    "เชื่อมการลดการปล่อย EV ที่ตรวจสอบแล้วกับ Green Taxonomy และระบบนิเวศการเงินที่ยั่งยืนของไทย.",
  "esgPolicy.topics.partnerships.focus.1":
    "กรอบ Green Taxonomy Phase 2 (ธปท. และ กพช., 2025); โครงการนำร่องการกำหนดราคาคาร์บอนและการบูรณาการกองทุน ESG.",
  "esgPolicy.topics.partnerships.focus.2":
    "ระบบนิเวศการเงินที่ยั่งยืนและการปฏิบัติตาม Taxonomy.",
  "esgPolicy.topics.partnerships.focus.3":
    "โมดูลการปฏิบัติตาม Green Taxonomy สำหรับโครงการ PANN Carbon และต้นแบบแดชบอร์ด ESG Consortium.",
  "esgPolicy.topics.partnerships.why":
    "เชื่อมการลดการปล่อย EV ที่ตรวจสอบแล้วกับระบบนิเวศการเงินที่ยั่งยืนและ Green Taxonomy ของไทย.",
  "esgPolicy.topics.partnerships.referenceLabel":
    "ธนาคารแห่งประเทศไทย – Thailand Taxonomy: เครื่องมืออ้างอิงสำหรับการเงินที่ยั่งยืน",
  "esgPolicy.summary.rows.1.area": "Net Zero และยุทธศาสตร์ระดับชาติของไทย",
  "esgPolicy.summary.rows.1.outcome":
    "โมเดลการวิเคราะห์ที่สอดรับนโยบายแสดงการลดการปล่อยที่ตรวจสอบได้ซึ่งสนับสนุนเป้าหมาย NDC ระดับชาติ.",
  "esgPolicy.summary.rows.1.context":
    "นโยบาย LT-LEDS ภายใต้ ONEP และ UNFCCC; เป้าหมายลด GHG 30–40% ภายในปี 2030.",
  "esgPolicy.summary.rows.2.area": "กรอบ LT-LEDS ระดับชาติ",
  "esgPolicy.summary.rows.2.outcome":
    "เมธอดการกำหนดค่าเบสไลน์การปล่อยที่มีโครงสร้างสอดรับกับชุดข้อมูลระดับชาติที่อนุมัติโดย UNFCCC.",
  "esgPolicy.summary.rows.2.context":
    "โครงสร้างการวางแผนภูมิอากาศระดับชาติที่อนุมัติโดย UNFCCC สำหรับภาคการขนส่งและพลังงาน.",
  "esgPolicy.summary.rows.3.area": "กรอบ T-VER และ Premium T-VER",
  "esgPolicy.summary.rows.3.outcome":
    "เวิร์กโฟลว์การส่ง T-VER อัตโนมัติและสถาปัตยกรรม MRV ดิจิทัลที่เข้ากันได้กับทะเบียน TGO.",
  "esgPolicy.summary.rows.3.context":
    "เมธอด TGO สำหรับค่าเบสไลน์และการปล่อยของโครงการ; การตรวจสอบ MRV และการออกเครดิต.",
  "esgPolicy.summary.rows.4.area": "ESG ในภาคประกันภัยของไทย",
  "esgPolicy.summary.rows.4.outcome":
    "แดชบอร์ดประกันสีเขียว PANN Carbon แสดงการประหยัด tCO₂e ที่ตรวจสอบได้เชื่อมโยงกับการรายงาน ESG.",
  "esgPolicy.summary.rows.4.context":
    "การดำเนินการตามแนวทาง ESG ของ คปภ.; แรงจูงใจพรีเมียมสีเขียวและแนวปฏิบัติการเปิดเผยข้อมูล.",
  "esgPolicy.summary.rows.5.area": "MRV ดิจิทัลและบล็อกเชนสำหรับคาร์บอนเครดิต",
  "esgPolicy.summary.rows.5.outcome":
    "ต้นแบบสัญญาอัจฉริยะที่ออกและยกเลิกคาร์บอนเครดิตที่ตรวจสอบแล้วโดยอัตโนมัติ.",
  "esgPolicy.summary.rows.5.context":
    "หลักฐานข้อมูลตามการบันทึกเวลาบล็อกเชน การติดตามวงจรชีวิตบนเชน และความสมบูรณ์ Premium T-VER.",
  "esgPolicy.summary.rows.6.area":
    "การมีส่วนร่วมของสาธารณะและการเข้าร่วมตลาดคาร์บอน",
  "esgPolicy.summary.rows.6.outcome":
    "แพลตฟอร์มชุมชนสีเขียวแบบเกมมิฟิเคชันที่เชื่อมข้อมูลการใช้งาน EV กับเป้าหมายการลดคาร์บอนระดับชาติ.",
  "esgPolicy.summary.rows.6.context":
    "การติดตาม CO₂ จาก EV ลีดเดอร์บอร์ด และเครื่องมือสร้างความตระหนักสำหรับวัฒนธรรมการชดเชยโดยสมัครใจ.",
  "esgPolicy.summary.rows.7.area": "พลังงานหมุนเวียนและบริบทนโยบาย BCG",
  "esgPolicy.summary.rows.7.outcome":
    "การสร้างแบบจำลองผลกระทบพลังงานระดับชาติที่ปรับปรุงและการปรับค่าเบสไลน์สำหรับการบัญชีคาร์บอนที่เกี่ยวข้องกับ EV.",
  "esgPolicy.summary.rows.7.context":
    "โมเดล BCG ของ EPPO; บูรณาการการใช้ไฟฟ้า EV กับการเติบโตของพลังงานหมุนเวียน.",
  "esgPolicy.summary.rows.8.area": "Green Taxonomy และการเงิน ESG ของไทย",
  "esgPolicy.summary.rows.8.outcome":
    "โมดูลการปฏิบัติตาม Green Taxonomy สำหรับโครงการ PANN Carbon และต้นแบบแดชบอร์ด ESG Consortium.",
  "esgPolicy.summary.rows.8.context":
    "กรอบ Green Taxonomy Phase 2 (ธปท. และ กพช., 2025); โครงการนำร่องการกำหนดราคาคาร์บอนและการบูรณาการกองทุน ESG.",
  "esgPolicy.vision.title": "วิสัยทัศน์โดยรวม",
  "esgPolicy.vision.quote":
    "“PANN CARBON เชื่อมพันธสัญญา Net Zero ของไทยกับผู้ขับ EV รายวัน—เปลี่ยนข้อมูลเทเลเมติกส์ให้เป็นคาร์บอนเครดิต ส่วนลดประกัน และผลกระทบ ESG ที่โปร่งใส.”",
  "esgPolicy.backToHome": "กลับหน้าหลัก",
};

const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  th,
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>("en");

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key] ?? translations.en[key],
    }),
    [language],
  );

  return createElement(I18nContext.Provider, { value }, children);
};

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};


