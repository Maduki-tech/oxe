"use client";

import { ReactFlow, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function IdeaGraph() {
  return (
    <div className="flex h-[90vh] bg-linear-to-br from-emerald-50 to-sky-100 dark:from-emerald-900 dark:to-sky-950">
      <div className="flex-1">
        <ReactFlow>
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}
