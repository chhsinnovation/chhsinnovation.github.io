---
layout: page.njk
title: Our Methods
---

We work with you side by side to tightly define problems, imagine novel solutions, prototype & test the solutions. We use the agile sprint methodology – 2 week long sprints focused on iterating on previous work. Each sprint has a specific goal and set of deliverables. 

Deliverables vary by what we uncover during discovery and the highest value return based on those needs. Therefore, what you get might not be what you initially asked for, but the improvements will be significant. 

> “Therefore, what you get might not be what you initially asked for, but the improvements will be significant.”

Our deliverables can be digital products, improvements to workflows, policies changes, procedure recommendations, skills improvements, changes to forms or even suggestions for legislation changes. 

All our engagements last three sprints with a prep week before and a wrap up week after. Thus, expect us to be on this engagement for eight weeks total. After each two-week long sprint, we do a demo or what we learned and built. This demo is a chance to review and determine if we continue with the current plan or pivot to a new idea based on what we learned. From the first meeting to the delivery of the final prototype, we work with your team to transition the work to your staff. Each step of the way, we teach your team our methods with immersive, hand-ons co-creation.

We don’t build things for you; we build things with you side by side.

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