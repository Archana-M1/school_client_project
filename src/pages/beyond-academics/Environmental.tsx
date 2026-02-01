import { Layout } from '@/components/Layout';
import { Leaf, Recycle, TreeDeciduous, Droplets } from 'lucide-react';

const Environmental = () => {
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              We believe in raising environmentally responsible citizens. Our environmental awareness 
              programs educate students about sustainability and inspire them to take action.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated p-6">
                <Leaf className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Green Campus Initiative</h3>
                <p className="text-muted-foreground text-sm">
                  Tree plantation drives, maintaining gardens, and creating green spaces within school premises
                </p>
              </div>
              <div className="card-elevated p-6">
                <Recycle className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Waste Management</h3>
                <p className="text-muted-foreground text-sm">
                  Segregation, recycling programs, and reducing single-use plastics
                </p>
              </div>
              <div className="card-elevated p-6">
                <TreeDeciduous className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Nature Clubs</h3>
                <p className="text-muted-foreground text-sm">
                  Student-led clubs organizing awareness campaigns and nature walks
                </p>
              </div>
              <div className="card-elevated p-6">
                <Droplets className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">Water Conservation</h3>
                <p className="text-muted-foreground text-sm">
                  Rainwater harvesting and educating about responsible water usage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Environmental;
