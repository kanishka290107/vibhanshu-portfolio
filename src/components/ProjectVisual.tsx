import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Box, 
  Clapperboard, 
  Printer, 
  Video, 
  Table2, 
  Maximize2 
} from 'lucide-react';

interface ProjectVisualProps {
  type: 'python' | 'code' | 'model3d' | 'animation' | 'print3d' | 'video' | 'excel';
  title: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, title }) => {
  switch (type) {
    case 'python':
      return (
        <div className="relative w-full h-48 bg-[#091120] border-b border-slate-800 p-4 font-mono text-xs overflow-hidden flex flex-col justify-between group-hover:border-cyan-500/30 transition-colors">
          <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800/80">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
              pipeline_engine.py
            </span>
            <span className="text-[10px] text-emerald-400">● 100k rows/sec</span>
          </div>
          <div className="space-y-1 text-[11px] text-slate-300 py-1">
            <p className="text-cyan-400">
              <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd
            </p>
            <p className="text-slate-400">
              <span className="text-purple-400">class</span> <span className="text-sky-300">DataPipeline</span>:
            </p>
            <p className="pl-4 text-emerald-400">
              def ingest_and_validate(df: pd.DataFrame):
            </p>
            <p className="pl-8 text-slate-300">
              return df.dropna().pipe(calculate_kpis)
            </p>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
            <span>FastAPI · ReportLab</span>
            <span className="text-cyan-400 font-semibold">Python 3.x</span>
          </div>
        </div>
      );

    case 'code':
      return (
        <div className="relative w-full h-48 bg-[#070e1c] border-b border-slate-800 p-4 font-mono text-xs overflow-hidden flex flex-col justify-between group-hover:border-blue-500/30 transition-colors">
          <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800/80">
            <span className="flex items-center gap-1.5 text-blue-400">
              <Cpu className="w-3.5 h-3.5" />
              mesh_kernel.cpp
            </span>
            <span className="text-[10px] text-cyan-400">C++20 · STL</span>
          </div>
          <div className="space-y-1 text-[11px] text-slate-300 py-1">
            <p className="text-blue-400">
              template &lt;typename Vertex&gt;
            </p>
            <p className="text-slate-300">
              <span className="text-purple-400">void</span> <span className="text-sky-300">compute_convex_hull</span>(std::vector&lt;Vertex&gt;&amp; v) &#123;
            </p>
            <p className="pl-4 text-slate-400">
              tbb::parallel_for(0, v.size(), [&amp;](size_t i) &#123;
            </p>
            <p className="pl-8 text-cyan-300">
              mesh_optimizer::rebalance(v[i]);
            </p>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
            <span>Multithreaded</span>
            <span className="text-blue-400 font-semibold">2M+ Tris Optimized</span>
          </div>
        </div>
      );

    case 'model3d':
      return (
        <div className="relative w-full h-48 bg-gradient-to-b from-[#091528] to-[#060c18] border-b border-slate-800 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/30 transition-colors">
          <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
          {/* Wireframe CAD Isometric Mesh Vector */}
          <svg className="w-32 h-32 text-cyan-400 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" stroke="currentColor" strokeWidth="1.5" fill="rgba(6, 182, 212, 0.08)" />
            <line x1="50" y1="15" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
            <line x1="85" y1="35" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
            <line x1="15" y1="35" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="55" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Inner nodes */}
            <circle cx="50" cy="55" r="3" fill="#38bdf8" />
            <circle cx="85" cy="35" r="2.5" fill="#38bdf8" />
            <circle cx="15" cy="35" r="2.5" fill="#38bdf8" />
            <circle cx="50" cy="15" r="2.5" fill="#38bdf8" />
          </svg>
          <div className="absolute bottom-2.5 inset-x-4 flex justify-between items-center text-[10px] font-mono text-cyan-300">
            <span>Blender / CAD</span>
            <span className="text-slate-400">0.25mm Tolerance</span>
          </div>
        </div>
      );

    case 'animation':
      return (
        <div className="relative w-full h-48 bg-[#0a1020] border-b border-slate-800 flex flex-col justify-between p-4 overflow-hidden group-hover:border-sky-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-sky-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Clapperboard className="w-3.5 h-3.5" />
              Kinematic Timeline
            </span>
            <span className="text-emerald-400 text-[10px]">60 FPS UHD</span>
          </div>
          {/* Keyframe Curves Representation */}
          <div className="relative h-16 w-full flex items-center">
            <svg className="w-full h-full text-sky-400" viewBox="0 0 200 60" fill="none">
              <path
                d="M0,50 C40,50 60,10 100,10 C140,10 160,40 200,20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M0,55 C50,55 80,30 120,30 C160,30 180,15 200,45"
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="100" cy="10" r="3" fill="#38bdf8" />
              <circle cx="200" cy="20" r="3" fill="#38bdf8" />
            </svg>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            <span>Cycles Engine</span>
            <span className="text-sky-300">Exploded View Rig</span>
          </div>
        </div>
      );

    case 'print3d':
      return (
        <div className="relative w-full h-48 bg-[#08131e] border-b border-slate-800 flex flex-col justify-between p-4 overflow-hidden group-hover:border-teal-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-teal-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Printer className="w-3.5 h-3.5" />
              G-Code Slicer Layer
            </span>
            <span className="text-[10px] text-teal-300">0.16mm Layer Height</span>
          </div>
          {/* FDM toolpath visualization */}
          <div className="relative flex items-center justify-center py-2">
            <div className="w-40 space-y-1.5">
              <div className="h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full w-full" />
              <div className="h-1 bg-gradient-to-r from-teal-400/80 to-cyan-400/80 rounded-full w-5/6 mx-auto" />
              <div className="h-1 bg-gradient-to-r from-teal-400/60 to-cyan-400/60 rounded-full w-4/6 mx-auto" />
              <div className="h-1 bg-gradient-to-r from-teal-400/40 to-cyan-400/40 rounded-full w-3/6 mx-auto" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            <span>Cura · PrusaSlicer</span>
            <span className="text-teal-300">PETG / PLA+ Verified</span>
          </div>
        </div>
      );

    case 'video':
      return (
        <div className="relative w-full h-48 bg-[#0e0f22] border-b border-slate-800 flex flex-col justify-between p-4 overflow-hidden group-hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-indigo-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" />
              Multi-Track Timeline
            </span>
            <span className="text-[10px] text-purple-300">Color Grading LUT</span>
          </div>
          {/* Video tracks mockup */}
          <div className="space-y-1.5 py-1">
            <div className="h-3.5 bg-indigo-600/30 border border-indigo-500/40 rounded flex items-center px-2 text-[9px] text-indigo-200">
              V2: Motion Titles &amp; Callouts
            </div>
            <div className="h-3.5 bg-blue-600/30 border border-blue-500/40 rounded flex items-center px-2 text-[9px] text-blue-200">
              V1: 4K A-Roll Master Cut
            </div>
            <div className="h-3.5 bg-emerald-600/30 border border-emerald-500/40 rounded flex items-center px-2 text-[9px] text-emerald-200">
              A1: Dialogue Master (-14 LUFS)
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            <span>Premiere Pro · DaVinci</span>
            <span className="text-indigo-300">68%+ Retention</span>
          </div>
        </div>
      );

    case 'excel':
      return (
        <div className="relative w-full h-48 bg-[#091512] border-b border-slate-800 flex flex-col justify-between p-4 overflow-hidden font-mono text-xs group-hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-emerald-400">
            <span className="flex items-center gap-1.5">
              <Table2 className="w-3.5 h-3.5" />
              Enterprise_Model.xlsx
            </span>
            <span className="text-[10px] text-emerald-300">Power Query Linked</span>
          </div>
          {/* Spreadsheet Grid */}
          <div className="space-y-1 text-[10px] border border-slate-800 rounded p-1.5 bg-slate-950/60">
            <div className="flex justify-between border-b border-slate-800 pb-0.5 text-slate-500">
              <span>Metric</span>
              <span>Baseline</span>
              <span>Optimized</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Throughput</span>
              <span className="text-slate-400">1,240</span>
              <span className="text-emerald-400 font-bold">+18.4%</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Discrepancy</span>
              <span className="text-rose-400">4.2%</span>
              <span className="text-emerald-400 font-bold">0.00%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-2">
            <span>Dynamic Arrays / VBA</span>
            <span className="text-emerald-300">15 hrs/wk Saved</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
