---
title: "Capstone Project Coding Camp 2026"
description: "A multimodal AI platform that helps Indonesian migrant worker candidates screen overseas job offers before trusting risky recruitment claims."
summary: "Built Emigria as a Coding Camp 2026 capstone project powered by DBS Foundation. As an AI Engineer, I focused on AI model development for job offer fraud detection, combining structured data extraction, TensorFlow-based classification, PMI-specific red flag analysis, and explainable risk reports."
date: "June 2026"
type: "MILESTONE"
accentColor: "#3B82F6"
skills:
  [
    "TypeScript",
    "Python",
    "FastAPI",
    "Express JS",
    "TensorFlow",
    "Google Gemini API",
    "Chart JS",
    "MapLibre",
    "Neon Database",
  ]
---

## The Challenge & Solution

Indonesian migrant worker candidates often find overseas job offers through social media, messaging apps, posters, and informal agents. These offers can look convincing, but the important safety signals are often unclear: recruiter identity, visa type, salary realism, placement fees, destination risk, and official verification.

Emigria was built to help users check those offers faster. It turns unstructured job offer materials such as images, raw text, and URLs into an explainable risk report. The goal is not to replace official verification, but to give early warnings before users make high-risk decisions.

The system uses a **Two-Stage AI Pipeline**:

- **Smart Extraction:** Gemini API reads job posters, text, and URLs, then converts them into structured job offer data.
- **Fraud Detection:** A TensorFlow Multi-Layer Perceptron model analyzes the extracted data and predicts potential fraud patterns.
- **PMI-Specific Risk Analysis:** The system checks red flags such as tourist visa usage, upfront fees, passport requests, unrealistic salary claims, unclear recruiter identity, and informal contact channels.
- **Geographic & Reality Context:** Destination-based context helps compare job claims with more realistic field conditions.
- **Actionable Report:** Users receive a clear risk level, explanation, and suggested next steps that can be shared with family or trusted contacts.

---

## My Role as AI Engineer

As an AI Engineer in the team, my main responsibility was **AI model development** for the fraud detection layer. I worked on turning extracted job offer information into model-ready features, designing the classification flow, and developing a TensorFlow-based MLP model to identify suspicious patterns in overseas job offers.

My work focused on making the model useful in a real safety product, not only accurate in experiments. This meant thinking about feature quality, risk signals, explainability, and how the model output should support clear recommendations for users. I also helped connect the model logic with PMI-specific rules so the final report could explain why an offer might be risky, instead of only showing a score.

---

## Technologies & Skills

<div class="journey-skills" data-skills="AI Engineering,Machine Learning,TensorFlow,Neural Networks,Google Gemini,FastAPI,Fraud Detection"></div>

---

## What I Learned

- **Model Development for Real Problems:** I learned how to build an ML model around a social-impact use case where false confidence can be dangerous.
- **Feature Engineering:** I practiced converting extracted job offer data into useful features for fraud pattern detection.
- **Explainable AI:** I learned that users need reasons, not just predictions. A risk score becomes more useful when it is supported by clear red flags.
- **Human-Centered AI:** I learned to design AI output for people who may need quick, simple, and practical guidance before making a serious decision.
- **Cross-Functional Collaboration:** I worked with Data Science, AI Engineering, and Web Development teammates to connect extraction, model prediction, backend orchestration, and user-facing reports.

---

## Impact & Takeaway

Emigria showed me how AI can become a practical safety layer for vulnerable communities. By combining Gemini-based extraction, a TensorFlow fraud detection model, PMI-specific red flag analysis, and destination context, the platform helps users understand whether an overseas job offer may be unsafe or misleading.

This capstone strengthened my confidence as an AI Engineer. I learned how to move from model development to a working product, where predictions must be explainable, useful, and responsible. It also made me more interested in building AI systems that solve real problems and help people make safer decisions.
