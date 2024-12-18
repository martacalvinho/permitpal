import { useState } from "react";
import { PERMITS } from "@/data/permits";
import { PermitStatus } from "@/types/permits";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SetupPrompt from "@/components/dashboard/SetupPrompt";
import PermitGrid from "@/components/dashboard/PermitGrid";
import PermitActions from "@/components/dashboard/PermitActions";
import Timeline from "@/components/permits/Timeline";
import GuidedSetup from "@/components/setup/GuidedSetup";

const Dashboard = () => {
  const [showGuidedSetup, setShowGuidedSetup] = useState(false);
  const [activeFilter, setActiveFilter] = useState<PermitStatus | 'all'>('all');

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <DashboardHeader
          title="NYC Cafe Permit Manager"
          description="Track and manage your cafe's essential permits and licenses"
        />

        {!showGuidedSetup ? (
          <div className="mb-8">
            <SetupPrompt onStart={() => setShowGuidedSetup(true)} />
          </div>
        ) : (
          <div className="mb-8">
            <GuidedSetup />
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Permits</h2>
              <p className="text-sm text-gray-500">Manage and track your permits</p>
            </div>
            
            <PermitActions
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            
            <PermitGrid
              permits={PERMITS}
              activeFilter={activeFilter}
            />
          </div>
          <div className="lg:col-span-1">
            <Timeline permits={PERMITS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;