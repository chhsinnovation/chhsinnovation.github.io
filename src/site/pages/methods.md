---
title: Our Methods
---

We work with you side by side to tightly define problems, imagine novel solutions, prototype & test the solutions. We use the agile sprint methodology – 2 week long sprints focused on iterating on previous work. Each sprint has a specific goal and set of deliverables.

Deliverables vary by what we uncover during discovery and the highest value return based on those needs. Therefore, what you get might not be what you initially asked for, but the improvements will be significant.

> “Therefore, what you get might not be what you initially asked for, but the improvements will be significant.”

##Driving Culture Change with HCD and Product Management
We have the dual mission of delivering value and creating culture change. How do we drive that culture change? By teaching the methods and mindset of human centered design and iterative product management process. By reframing the nature of state government work, we show employees how to tightly define problems, set the desired business goal, understand user needs and design a product that will solve the problem.

When staff see how well this process works to solve long-standing problems, they start adopting these methods into their daily work. The simplest first step is to start talking to actual users!

##The OI Method = HCD + Product + Facilitation + Communication skills

##The HCD Process
The HCD process we use is a cycle of: Discovery, Imagine, Prototype, Test and Iterate.
(Add graphic)

##Product Management
Product management is basically can you build a thing to solve a problem. It is the combination of business goals, user needs, technical requirements and policy/regulations. Who better than the state employees to blend these skills into a single role. Moreover, by iterating and getting frequent feedback, the solution is crafted more mindfully. With less re-work the solution is delivered more quickly.

##Facilitation
The art of faciliation is convening groups of people to some shared understanding. This is a key skill for our team as we are often in the role of getting groups with diverse needs and goals to work together to craft some shared solution.

##Communication skills
One of the goals of OI is to help our staff become the best version of themselves. Working with our teams, we want our partners to also join similar journeys. The "soft skills" of communication are key to team success.

Our methods and the skills included with them are how we deliver solutions and culture change.

## Methods

{% set discoveryTraining %}
* Smallify
* Facilitation
* HCD
* Design Studio
* Stakeholder Mapping
{% endset %}

{% set discoverySkills %}
* Empathic Listening
* Story Harvesting
* Journey Mapping
* Affinity Analysis
* KJ Analysis
{% endset %}

{% set imagineTraining %}
* Smallify
* HCD
* Design Studio
* Product Management
{% endset %}

{% set imagineSkills %}
* Diverge
* Yes, And
* Rapid Proto
* Story Mapping
* Pain Point analysis
{% endset %}

{% set prototypeTraining %}
* Agile the Right Way
* Rapid Prototyping
{% endset %}

{% set prototypeSkills %}
* Rapid Prototyping
{% endset %}

{% set testTraining %}
* UX Testing
* Facilitation
* Product
{% endset %}

{% set testSkills %}
* UX Testing
{% endset %}

{% set iterateTraining %}
* Facilitation
* Agile the Right Way
{% endset %}

<div class="max-w-3xl xl:max-w-full flex mt-6 mx-2 sm:mx-6 lg:mx-auto xl:mx-6 flex-col xl:flex-row border-4 border-gray-400">
    <div class="max-w-3xl xl:w-1/5 xl:max-w-lg xl:border-r xl:border-gray-400">
        <div class="mb-6 py-6 bg-red-200 font-bold text-xl">
            <p class="m-0">
                Discovery
            </p>
        </div>
        <div class="mb-12">
            <h3>
                Training
            </h3>
            {{- discoveryTraining | markdownify | safe -}}
        </div>
        <div class="mb-12">
            <h3>
                Skills
            </h3>
            {{- discoverySkills | markdownify | safe -}}
        </div>
    </div>
    <div class="max-w-3xl xl:w-1/5 xl:max-w-lg xl:border-r xl:border-gray-400">
        <div class="mb-6 py-6 bg-orange-200 font-bold text-xl">
            <p class="m-0">
                Imagine
            </p>
        </div>
        <div class="mb-12">
            <h3>
                Training
            </h3>
            {{- imagineTraining | markdownify | safe -}}
        </div>
        <div class="mb-12">
            <h3>
                Skills
            </h3>
            {{- imagineSkills | markdownify | safe -}}
        </div>
    </div>
    <div class="max-w-3xl xl:w-1/5 xl:max-w-lg xl:border-r xl:border-gray-400">
        <div class="mb-6 py-6 bg-gold-200 font-bold text-xl">
            <p class="m-0">
                Prototype
            </p>
        </div>
        <div class="mb-12">
            <h3>
                Training
            </h3>
            {{- prototypeTraining | markdownify | safe -}}
        </div>
        <div class="mb-12">
            <h3>
                Skills
            </h3>
            {{- prototypeSkills | markdownify | safe -}}
        </div>
    </div>
    <div class="max-w-3xl xl:w-1/5 xl:max-w-lg xl:border-r xl:border-gray-400">
        <div class="mb-6 py-6 bg-cyan-200 font-bold text-xl">
            <p class="m-0">
                Test
            </p>
        </div>
        <div class="mb-12">
            <h3>
                Training
            </h3>
            {{- testTraining | markdownify | safe -}}
        </div>
        <div class="mb-12">
            <h3>
                Skills
            </h3>
            {{- testSkills | markdownify | safe -}}
        </div>
    </div>
    <div class="max-w-3xl xl:w-1/5 xl:max-w-lg">
        <div class="mb-6 py-6 bg-magenta-200 font-bold text-xl">
            <p class="m-0">
                Hibernate/Iterate
            </p>
        </div>
        <div class="mb-12">
            <h3>
                Training
            </h3>
            {{- iterateTraining | markdownify | safe -}}
        </div>
    </div>
</div>
