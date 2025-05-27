import React from 'react';
import b2Image from '../assets/images/b2.png';
import b3Image from '../assets/images/b2-1.png';
import b4Image from '../assets/images/b2-2.png';
import b5Image from '../assets/images/b2-3.png';

const Blog2Content = () => (
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why You're Paying for Tools You're Not Using And How Manumation Fixes That</h2>
    <img src={b2Image} alt="Software stack overload" className="w-full max-w-5xl mx-auto rounded-xl shadow-lg my-8" />
    <div className="bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-400 p-4 mb-8">
      <strong>Focus Keyword:</strong> <em>software stack optimization</em>
    </div>
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4">Let's Talk About Tool Overload</h3>
      <p className="mb-3">You're subscribed to Notion, Calendly, Slack, Zoom, ClickUp, Zapier, Airtable, Canva, Stripe, and ten other platforms. "Just in case." Sound familiar?</p>
      <p className="mb-3">If so, you're not alone. According to <a href="https://www.productiv.com/blog/the-average-small-business-uses-over-250-saas-apps-annually" target="_blank" className="text-primary-600 underline hover:text-primary-800">Productiv</a>, the average small business uses over 250 SaaS apps annually, but employees actively use less than 45% of them. That's a lot of unused logins and wasted money.</p>
      <p className="mb-3">Most entrepreneurs over-stack their tech and under-leverage it. Not because they're lazy but because there's no cohesive strategy tying it all together.</p>
      <p className="mb-3">Enter <strong>Manumation</strong>.</p>
    </section>
    <hr className="my-10 border-secondary-200 dark:border-dark-600" />
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4">What Is Manumation (And Why Does It Matter Here)?</h3>
      <img src={b3Image} alt="Manumation workflow" className="w-full max-w-5xl mx-auto rounded-xl shadow-lg my-8" />
      <p className="mb-3"><strong>Manumation</strong> is the strategic fusion of human creativity, AI agents, and smart automation that transforms scattered tools into a streamlined system. Instead of stacking more apps, we build custom workflows that work for you.</p>
      <p className="mb-3">So instead of "Having tools," your tools finally start working like a team.</p>
    </section>
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4">The Hidden Cost of a Messy Tech Stack</h3>
      <p className="mb-3">Let's look beyond subscription fees. A bloated tool stack costs you:</p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li><strong>Time:</strong> Switching between apps eats up 9.4 hours/week on average <a href="https://www.ringcentral.com/blog/time-wasted-switching-between-apps" target="_blank" className="text-primary-600 underline hover:text-primary-800">(Source: RingCentral)</a>.</li>
        <li><strong>Mistakes:</strong> Manual data transfers lead to errors and missed information.</li>
        <li><strong>Inefficiency:</strong> Tools that don't "Talk" to each other create double work.</li>
        <li><strong>Budget drain:</strong> Paying for tools you forgot existed or only use 5% of.</li>
        <li><strong>Decision fatigue:</strong> You spend more time figuring out how to work than actually working.</li>
      </ul>
      <p className="mb-3">You don't need more software. You need a strategy.</p>
    </section>
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4">Signs You're Suffering from Software Sprawl</h3>
      <p className="mb-3">Ask yourself:</p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Are you using more than 5 tools to manage day-to-day tasks?</li>
        <li>Do you copy-paste info from one app to another regularly?</li>
        <li>Are you missing follow-ups, leads, or payments because nothing is centralized?</li>
        <li>Is your team (or you) constantly asking, "Where do I find that again?"</li>
        <li>Are you unsure what half your subscriptions even do?</li>
      </ul>
      <p className="mb-3">If you said yes to 2+ of the above, your stack is likely costing you far more than it's helping.</p>
    </section>
    <hr className="my-10 border-secondary-200 dark:border-dark-600" />
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4">How Manumation Fixes Your Stack</h3>
      <ol className="list-decimal ml-6 space-y-2 mb-4">
        <li><strong>Audit and Eliminate Waste</strong><br />We begin by auditing your existing tools and highlighting:
          <ul className="list-disc ml-6 mt-2">
            <li>What's essential?</li>
            <li>What's overlapping?</li>
            <li>What's underused?</li>
            <li>What's breaking your workflow?</li>
          </ul>
          <span className="block mt-2">We typically cut 20–40% of tool costs in the first month.</span>
        </li>
        <li><strong>Streamline and Integrate</strong><br />Instead of patching tools together with a dozen Zaps, we build unified systems that:
          <ul className="list-disc ml-6 mt-2">
            <li>Automate key processes (Sales, onboarding, scheduling, payments).</li>
            <li>Route data from one place to another without human input.</li>
            <li>Trigger actions based on client behavior (Like email follow-ups or reminders).</li>
          </ul>
          <span className="block mt-2">Your systems now work together in one flow.</span>
        </li>
        <li><strong>Train Your AI Agent</strong><br />We set up an AI agent trained in:
          <ul className="list-disc ml-6 mt-2">
            <li>Your tone of voice.</li>
            <li>Your service/product details.</li>
            <li>Your workflows and decision rules.</li>
          </ul>
          <span className="block mt-2">That AI now handles repetitive communication, follow-ups, lead responses, and FAQs without sounding like a robot.</span>
        </li>
        <li><strong>Turn Your Stack Into a Profit Center</strong><br />Once everything's connected, your tools aren't just "Operational", they're actively driving conversions, improving retention, and reclaiming your time.<br />That means less chaos, more profit, and a business that doesn't rely on duct tape.</li>
      </ol>
    </section>
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4">Real Example: The $6,200 Saved in Subscriptions</h3>
      <img src={b4Image} alt="SaaS savings" className="w-full max-w-5xl mx-auto rounded-xl shadow-lg my-8" />
      <p className="mb-3">A service-based founder had:</p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>13 active SaaS subscriptions.</li>
        <li>3 different CRMs (Yep).</li>
        <li>Zero integration across tools.</li>
      </ul>
      <p className="mb-3">After implementing Manumation:</p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>We reduced her stack to 5 tools.</li>
        <li>Connected email, client intake, proposals, and scheduling into one smart workflow.</li>
        <li>Eliminated $6,200 in annual SaaS costs.</li>
        <li>Gave her back 8+ hours a week from manual admin.</li>
      </ul>
    </section>
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4">You Don't Need More Tech. You Need Less Working Smarter</h3>
      <img src={b5Image} alt="Manumation workflow" className="w-full max-w-5xl mx-auto rounded-xl shadow-lg my-8" />
      <p className="mb-3">Tech isn't the enemy. But random tools without a strategy? That's what keeps businesses small, chaotic, and unscalable.</p>
      <p className="mb-3"><strong>Manumation</strong> turns your software stack from a burden into your secret weapon.</p>
    </section>
    <hr className="my-10 border-secondary-200 dark:border-dark-600" />
    <section className="mb-12">
      <h4 className="text-xl font-bold mb-3">Want to Know How Much You're Wasting on Unused Tools?</h4>
      <p className="mb-3">Use our <a href="/calculator" className="text-primary-600 underline hover:text-primary-800">Business Calculator</a> to find out how much time and money you're losing to tool overload. Or take the <a href="/quiz" className="text-primary-600 underline hover:text-primary-800">2-minute quiz</a> to see if your stack is hurting your growth.</p>
      <p><a href="https://manumation.ai" target="_blank" className="text-primary-600 underline font-bold hover:text-primary-800">👉 Clean up your systems and reclaim your sanity at Manumation.ai</a></p>
    </section>
  </div>
);

export default Blog2Content; 