import { Layout } from '@/components/Layout';
import { TreeDeciduous, Recycle, Zap, Megaphone, Flower2, Sparkles, Leaf } from 'lucide-react';

const Environmental = () => {
  const greenInitiatives = [
    {
      icon: TreeDeciduous,
      title: 'Planting Trees',
      description: 'Students participate in planting the trees to make the surroundings greener, reduce pollution, and improve air quality. This helps create a healthier, cleaner, and more beautiful environment for everyone to enjoy and live in.'
    },
    {
      icon: Recycle,
      title: 'Managing Waste',
      description: 'We teach students how to separate waste, recycle materials, and compost organic waste. This helps keep the environment clean, reduces pollution, and promotes sustainable practices for a healthier, cleaner world.'
    },
    {
      icon: Zap,
      title: 'Saving Energy',
      description: 'Students learn how to save electricity and water by using them wisely. This helps conserve resources, reduce waste, and promotes sustainable habits for a more efficient and eco-friendly lifestyle.'
    },
    {
      icon: Megaphone,
      title: 'Eco-Friendly Campaigns',
      description: "We organize programs like 'Say No to Plastic' and 'Save Water' to raise awareness. These initiatives encourage people to reduce plastic use and save water for a cleaner, healthier environment."
    },
    {
      icon: Flower2,
      title: 'Nature Activities',
      description: 'Gardening, bird-watching, and eco-projects allow students to connect with nature. These activities help them learn about the environment, develop care for it, and understand the importance of protecting nature.'
    },
    {
      icon: Sparkles,
      title: 'Clean Campus',
      description: 'We encourage students to keep the school clean by not littering. This helps maintain a neat and tidy environment, teaching them the importance of cleanliness and responsibility for their surroundings.'
    }
  ];

  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Environmental Awareness</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nurturing eco-conscious citizens for a sustainable future
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Environmental Awareness at International Delhi Public School, Gangavathi
            </h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              At IDPS Gangavathi, we teach students to care for nature and protect the environment. Small actions, like saving water, planting trees, and reducing waste, can make a big difference. We encourage students to use less plastic, recycle, and keep their surroundings clean. Our school promotes eco-friendly habits through activities like gardening and awareness campaigns. By learning about the environment, students understand the importance of nature and work towards a greener, healthier planet. Every effort, no matter how small, helps in making the world a better place. Together, we can create a bright future for the next generation!
            </p>
          </div>
        </div>
      </section>

      {/* Our Green Initiatives */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Our Green Initiatives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {greenInitiatives.map((initiative, index) => {
                const Icon = initiative.icon;
                return (
                  <div key={index} className="card-elevated p-6">
                    <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground text-sm text-justify">{initiative.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Environmental Awareness Matters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Why Environmental Awareness Matters</h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed mb-8">
              At IDPS Gangavathi, we teach students why the environment matters. We help them become responsible and make better choices for a greener future. Through various activities and lessons, students learn how to protect nature, reduce waste, and conserve resources. By understanding their role in preserving the planet, they develop a sense of responsibility. Together, we work to make a healthier, cleaner, and more sustainable world. This helps create a better environment for everyone to live in and enjoy.
            </p>

            {/* Call to Action */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-xl font-display font-bold text-green-800 dark:text-green-300">
                Join us in building a greener, cleaner, and brighter tomorrow for everyone!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Environmental;
