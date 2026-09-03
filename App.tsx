import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SimulationProvider } from './context/SimulationContext';
import { Sidebar } from './components/common/Sidebar';
import { Header } from './components/common/Header';
import { CommandConsole } from './components/common/CommandConsole';

// 12 Functional Pages
import { Dashboard } from './pages/Dashboard';
import { TopologyView } from './pages/TopologyView';
import { VlanManager } from './pages/VlanManager';
import { RoutingLab } from './pages/RoutingLab';
import { TrafficSimulation } from './pages/TrafficSimulation';
import { QoSManager } from './pages/QoSManager';
import { PacketFlowView } from './pages/PacketFlowView';
import { PerformanceAnalysis } from './pages/PerformanceAnalysis';
import { RoutingComparison } from './pages/RoutingComparison';
import { BeforeAfterView } from './pages/BeforeAfterView';
import { ReportsView } from './pages/ReportsView';
import { ProjectInfo } from './pages/ProjectInfo';

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <SimulationProvider>
      <Router>
        <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex">
          {/* Sidebar Navigation */}
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />

          {/* Main Layout Area */}
          <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
            {/* Top Operational Header */}
            <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

            {/* Page Content Viewport */}
            <main className="flex-1 p-4 lg:p-6 max-w-7xl w-full mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/topology" element={<TopologyView />} />
                <Route path="/vlans" element={<VlanManager />} />
                <Route path="/routing" element={<RoutingLab />} />
                <Route path="/traffic" element={<TrafficSimulation />} />
                <Route path="/qos" element={<QoSManager />} />
                <Route path="/packet-flow" element={<PacketFlowView />} />
                <Route path="/performance" element={<PerformanceAnalysis />} />
                <Route path="/comparison" element={<RoutingComparison />} />
                <Route path="/before-after" element={<BeforeAfterView />} />
                <Route path="/reports" element={<ReportsView />} />
                <Route path="/about" element={<ProjectInfo />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Bottom University Accreditation Footer */}
            <footer className="border-t border-slate-800/80 bg-slate-900/40 px-6 py-4 text-center text-xs text-slate-400 print:hidden">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>
                  SMART CAMPUS NETWORK (SCN) • Academic Computer Networks Engineering Project
                </span>
                <span className="font-mono text-[11px] text-cyan-400">
                  CO1 • CO3 • CO4 • SDG 9, 11, 17
                </span>
              </div>
            </footer>
          </div>

          {/* Simulated Cisco Command Console (Global Terminal) */}
          <CommandConsole />
        </div>
      </Router>
    </SimulationProvider>
  );
}

export default App;
