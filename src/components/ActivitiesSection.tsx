import {
  Trophy,
  Dumbbell,
  Brain,
  Waves,
  Swords,
  Palette,
  Mic2,
  Music4,
  HelpCircle,
} from 'lucide-react';

const activities = [
  { icon: Trophy, label: 'Sports' },
  { icon: Dumbbell, label: 'Exercise' },
  { icon: Brain, label: 'Meditation' },
  { icon: Waves, label: 'Swimming' },
  { icon: Swords, label: 'Karate' },
  { icon: Palette, label: 'Drawing' },
  { icon: Mic2, label: 'Singing' },
  { icon: Music4, label: 'Dance' },
  { icon: HelpCircle, label: 'Quiz Competitions' },
];

export function ActivitiesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">More Activities for Students</h2>
          <p className="section-subtitle mx-auto">
            We offer a wide range of extracurricular activities to ensure holistic development of every child
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="activity-card"
            >
              <activity.icon className="h-10 w-10 mb-3" />
              <span className="font-medium text-sm">{activity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
