import { Course } from './types';

/**
 * Primary Data Source: Your GitHub Gist.
 */
export const SHEET_CSV_URL = 'https://gist.github.com/v9741812-coder/dbfd793f10ff9f1cda6dea74f78276bb';

export const FITNESS_CURRICULUM: Course = {
  id: 'fitness-mastery-001',
  title: 'Build Your Best Body — A Complete Fitness Guide',
  instructor: 'Elite Coaching Team',
  category: 'Fitness Mastery',
  thumbnail: 'https://lh3.googleusercontent.com/d/1qboe6ctfxci2ydgLdG0Vjvh1GNVWoLJq',
  description: 'Everything you need to build your best body—training, nutrition, recovery, mindset and so much more—packed into one place with an unbeatable price. Your transformation starts here.',
  progress: 0,
  lessons: [
    { 
      id: 'm1', 
      title: 'Introduction: How This Course Works', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.1.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This introductory lecture sets the foundation for the entire course. You’ll understand why this course exists, how it eliminates fitness confusion, and what makes it different from random workouts and scattered advice found online.\n\nYou’ll learn how the course is structured, what core areas it focuses on—training, nutrition, recovery, and body goals—and how to use the system effectively for real, long-term results. This module prepares you to approach fitness with clarity, confidence, and a step-by-step framework instead of guesswork.\n\nBy the end of this lecture, you’ll know exactly how to follow the course, what to prioritize, and how to execute the system for maximum progress.', 
      studyMaterials: [
        { title: 'Module 1 Study Material', url: 'https://drive.google.com/file/d/1HhRXL8uswfF8Ok3bAuYjriXzPUpEqxQy/view?usp=sharing' }
      ]
    },
    { 
      id: 'm2', 
      title: 'Mindset & Discipline: The Mental Side of Fitness', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.2_1.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This lecture focuses on the mental side of fitness, where every physical transformation truly begins. You’ll learn how mindset shapes your response to slow progress, setbacks, fatigue, and plateaus—and why emotional decision-making is one of the biggest barriers to long-term results.\n\nThe module breaks down the difference between motivation and discipline, explaining how discipline acts as the execution engine behind consistent training, nutrition, and recovery. You’ll also explore identity-based habits, mental endurance, and why consistency over time matters far more than daily perfection.\n\nBy the end of this lecture, you’ll understand how to think strategically, execute without emotional negotiation, and build the mental framework required for sustainable, predictable physical progress.', 
      studyMaterials: [
        { title: 'Module 2 Study Material', url: 'https://drive.google.com/file/d/1xNh7SWrnxP0849LR1Kmlxf1PHyOspTKx/view?usp=sharing' }
      ]
    },
    { 
      id: 'm3', 
      title: 'How Muscle & Strength Actually Grow', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.3_1.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This Module explains the true biological mechanisms behind muscle growth and strength development, cutting through myths, sensations, and ineffective training assumptions. Rather than prescribing workouts, it teaches why certain training approaches work consistently while others fail.\n\nYou’ll learn how muscle functions as a mechanical adaptation system, why mechanical tension—not soreness or exhaustion—drives growth, and how strength acts as a reliable feedback mechanism for long-term progress. The module also breaks down progressive overload as a structured system, the interaction between volume, intensity, and recovery, and why most plateaus are caused by structural errors rather than genetic limits.\n\nBy the end of this module, muscle and strength development will no longer feel unpredictable or confusing. You’ll understand how consistent, recoverable mechanical demand applied over time leads to reliable physical adaptation.', 
      studyMaterials: [
        { title: 'Module 3 Study Material', url: 'https://drive.google.com/file/d/1QHm-uUKaMDAk6ivBgLDOoMY3lnkem2GK/view?usp=sharing' }
      ]
    },
    { 
      id: 'm4', 
      title: 'Workout Structure & Training Systems', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.4_2.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This module presents a complete, biology-driven framework for understanding how muscle is built across gym training, calisthenics, sports, and lifelong physical development. It bridges foundational physiology with practical application, explaining how muscles grow, adapt, and strengthen under mechanical tension, progressive overload, nutrition, and recovery.\n\nYou’ll explore muscle structure and fiber types, the physiology of hypertrophy, neural adaptations, and the stimulus–recovery–adaptation model that governs all physical change. The module then applies these principles to compound lifts, isolation work, training volume, intensity, frequency, calisthenics progressions, sports-based hypertrophy, and skill-based muscle development.\n\nThe module also covers nutrition science, recovery, sleep, fatigue management, injury prevention, programming, and long-term sustainability—showing how all effective muscle-building methods obey the same biological laws regardless of equipment or environment.\n\nBy the end of this module, muscle growth will no longer feel fragmented or method-dependent. You’ll understand the universal principles that govern hypertrophy and how to apply them intelligently for consistent, lifelong progress.', 
      studyMaterials: [
        { title: 'WORKOUT STRUCTURE & TRAINING SYSTEMS', url: 'https://drive.google.com/file/d/1nkR--Blxcf2CormuiU_aU4KmU9O8TwcO/view?usp=drive_link' },
        { title: 'SCIENCE AND PRACTICE OF MUSCLE BUILDING (Advanced)', url: 'https://drive.google.com/file/d/1fWSXCfvekyVWr07J30bpwM4Zgpyfr4lO/view?usp=sharing' }
      ] 
    },
    { 
      id: 'm5', 
      title: 'Exercise Form, Technique & Injury Prevention', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.5_3.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This module builds a clear, practical understanding of exercise form, technique, and injury prevention by reframing them as tools for force control, consistency, and long-term progress, rather than fear-based rules or rigid standards.\n\nYou’ll learn what good form truly means, why “perfect form” is a myth, and how technique should adapt to individual body structure while remaining stable, repeatable, and pain-free. The module introduces universal movement principles that apply across all exercises, along with practical form guidance for compound and isolation movements.\n\nThe module also explains warm-up strategies for different training styles, clarifies common misconceptions around lactic acid and cool-downs, and outlines realistic recovery timelines after various types of workouts. You’ll learn how to recognize early warning signals from the body, manage fatigue intelligently, and prevent injuries through behavior, progression control, and recovery awareness.\n\nBy the end of this module, you should feel more confident in your movement, less fearful of lifting, more aware of fatigue and recovery, and better equipped to train consistently, safely, and sustainably over the long term.', 
      studyMaterials: [
        { title: 'Principles of Safe and Sustainable Training', url: 'https://drive.google.com/file/d/1d627ZcUn6Rv_S1ViN1-_8Mb3qT8WdnIH/view?usp=sharing' }
      ] 
    },
    { 
      id: 'm6', 
      title: 'Nutrition Fundamentals & Calorie Tracking', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.6_3.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This module provides a clear, structured understanding of nutrition by explaining how food, energy, and body weight actually work, without extreme rules, rigid diets, or unnecessary complexity. Instead of starting with meal plans or food lists, the module builds a logical foundation that removes confusion created by conflicting nutrition advice.\n\nYou’ll learn how calories determine weight change, how macronutrients support muscle growth, recovery, and performance, and why micronutrients, fiber, and hydration are essential for long-term health. The module explains not only what these components are, but why they matter and how they interact as a system.\n\nPractical application is emphasized throughout. You’ll learn how to estimate calorie needs, adjust intake based on goals, and track food and activity realistically using tools like apps and scales—without becoming obsessive. Real-world examples are included to show how nutrition principles translate into daily habits.\n\nThe module concludes by establishing a long-term nutrition mindset focused on sustainability, consistency, and flexibility. Rather than short-term dieting, the goal is to build an approach to eating that supports training, recovery, and lifestyle over time.\n\nBy the end of this module, nutrition should feel clear, manageable, and controllable, giving you a reliable foundation for fat loss, muscle gain, and long-term health.', 
      studyMaterials: [
        { title: 'How Nutrition Actually Works', url: 'https://drive.google.com/file/d/1-5e8OBtMNO1zkEVLMbgCousD35Ipsk9E/view?usp=sharing' }
      ] 
    },
    { 
      id: 'm7', 
      title: 'Protein, Supplements & Smart Spending', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.7_1.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This module removes confusion around protein and supplements by replacing opinions, marketing claims, and trends with clear, practical reasoning. Instead of promoting products or brand recommendations, the module explains how protein and supplements actually fit into a training lifestyle—and when they do not.\n\nYou’ll learn the differences between food-based protein and supplements, and when protein powders are useful versus unnecessary. The module breaks down common protein types, explains creatine and other evidence-based supplements, and clearly identifies which popular products offer little real value.\n\nA major focus is intelligent spending. You’ll learn how to read supplement labels, recognize marketing traps, avoid unnecessary purchases, and build simple, affordable supplement strategies that support training without wasting money. Real-world examples show how better decisions—not more products—lead to better results.\n\nBy the end of this module, protein intake and supplementation should feel clear, optional, and intentional, allowing you to support recovery and performance while keeping nutrition simple, sustainable, and cost-effective.', 
      studyMaterials: [
        { title: 'Protein and Supplement Use in Practical Nutrition', url: 'https://drive.google.com/file/d/1keWbC0K-aMD-YGKvSrCwMUuCH3HE8C8A/view?usp=sharing' }
      ] 
    },
    { 
      id: 'm8', 
      title: 'Recovery: Sleep, Water & Stress Management', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.8_1.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This module explains recovery as the process that transforms training stress into measurable progress. Instead of treating sleep, hydration, and stress management as isolated habits, the module presents recovery as a connected biological system that determines how effectively the body adapts to training.\n\nYou’ll learn why training itself does not produce results, how fatigue accumulates across physical and mental systems, and why insufficient recovery often masquerades as lack of discipline or motivation. The module breaks down the role of sleep in muscle repair, hormonal balance, performance, and fat loss, while clarifying the difference between sleep duration and sleep quality.\n\nHydration is explored as a performance and recovery variable rather than a background habit, including how dehydration affects strength, endurance, soreness, and perceived effort. The module also explains when electrolytes matter, how hydration needs vary between individuals, and how to support fluid balance without obsession.\n\nStress management is addressed realistically, showing how mental and lifestyle stress interacts with physical training stress through shared physiological pathways. You’ll learn how accumulated stress impairs recovery, disrupts sleep, and slows progress—and how structure, routine, and intelligent rest restore balance.\n\nBy the end of this module, recovery will no longer feel passive or optional. You’ll understand how small, consistent improvements in sleep, hydration, and stress management allow training and nutrition to work together effectively, making long-term progress more predictable and sustainable.', 
      studyMaterials: [
        { title: 'The Recovery Systems That Drive Adaptation', url: 'https://drive.google.com/file/d/17bNILOhul1635AXpDUtErE_7HYdLt9d9/view?usp=sharing' }
      ] 
    },
    { 
      id: 'm9', 
      title: 'Fat Loss & Weight Gain: Cutting & Bulking', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.9_1.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This module explains how body composition changes over time by breaking down fat loss, weight gain, maintenance, and transitions into a single, structured system. Instead of focusing on short-term scale changes or extreme methods, the module teaches how cutting and bulking actually work in real life—and why most attempts fail without proper planning.\n\nYou’ll learn the critical difference between fat loss and weight loss, how energy balance governs both fat loss and muscle gain, and why the quality of weight change matters more than speed. The module explains how to execute controlled cutting phases, structured bulking phases, and why aggressive approaches often lead to muscle loss, excessive fat gain, or burnout.\n\nSpecial attention is given to common mistakes, realistic timelines, and the psychological traps that cause people to switch phases too often. You’ll also learn how to decide when to cut, when to bulk, and when to maintain, based on body fat levels, training experience, and lifestyle factors rather than emotion.\n\nThe module concludes by explaining how to transition between phases intelligently, use maintenance periods strategically, and adopt a long-term transformation mindset. By the end of this module, physique change should feel predictable, manageable, and under your control, rather than reactive or confusing.', 
      studyMaterials: [
        { title: 'Physique Change Through Deficit and Surplus', url: 'https://drive.google.com/file/d/1arB6NLGL-iaaByL7bjXRMssBcBq8g3IT/view?usp=sharing' }
      ] 
    },
    { 
      id: 'm10', 
      title: 'Long-Term Roadmap & Fitness as a Lifestyle', 
      type: 'video', 
      content: 'https://github.com/v9741812-coder/course-media/releases/download/v1/Module.10.mp4', 
      duration: '', 
      isCompleted: false, 
      description: 'This module brings the entire course together and shifts the focus from short-term results to long-term execution. Its purpose is not to introduce new techniques, but to show how training, nutrition, recovery, and mindset must operate as a unified system over years—not weeks.\n\nYou will learn why most people lose their results despite having enough knowledge, and how emotional decision-making, plan hopping, and urgency quietly undermine consistency. The module reframes fitness as a long-term practice rather than a temporary phase, removing the idea of a finish line and replacing it with structure, routine, and identity.\n\nThis module introduces a clear long-term roadmap, explaining how learning phases, fat loss phases, muscle gain phases, and maintenance phases fit together over time. You will understand when to push progress, when to consolidate, and how to adapt training and nutrition as life circumstances change—without restarting or burning out.\n\nA major emphasis is placed on execution over information. Instead of chasing new plans, this module shows how simplicity, repetition, and consistency produce results that last. Plateaus, interruptions, and slow periods are reframed as normal parts of progress rather than failures.\n\nThe module concludes by providing a practical execution framework that removes decision fatigue and reduces overthinking. By locking goals, calories, training structure, and recovery minimums, fitness becomes repeatable, manageable, and resilient—even during busy or stressful phases of life.\n\nBy the end of this module, fitness is no longer something you attempt repeatedly. It becomes something you maintain naturally.', 
      studyMaterials: [
        { title: 'The Long-Term Fitness Roadmap: From Doing Fitness to Living Fit', url: 'https://drive.google.com/file/d/1E6NgwMYAmDYnpiwat_PqrvU7_v0s25Aq/view?usp=sharing' },
        { title: 'THE EXECUTION LIST', url: 'https://drive.google.com/file/d/12pfrj-OUrAzWALEKOc8nUafgGnd0d_AO/view?usp=sharing' }
      ] 
    },
  ]
};

export const MOCK_COURSES: Course[] = [FITNESS_CURRICULUM];