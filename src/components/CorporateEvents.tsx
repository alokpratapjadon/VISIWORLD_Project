import React from 'react';

const CorporateEvents = () => {
  return (
    <section className="w-full bg-white text-black px-4 md:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Video Block */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full h-full object-cover"
          >
            <source src="/Assets/corporate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Block */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Corporate & Social Events
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our Corporate & Social Events service delivers elegant, high-impact
            experiences tailored for your business milestones, networking
            summits, gala dinners, or intimate social gatherings. From
            conceptualization to execution, we ensure sophistication meets
            flawless management.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Professional AV setups & staging</li>
            <li>Luxury venue styling and branding</li>
            <li>Live entertainment & artist bookings</li>
            <li>Seamless guest management</li>
            <li>On-ground coordination by expert planners</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CorporateEvents;