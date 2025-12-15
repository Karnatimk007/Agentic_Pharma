import { AgentTask } from '../types';
import { CheckCircle, Loader2, Circle } from 'lucide-react';

interface AgentCardProps {
  task: AgentTask;
}

export function AgentCard({ task }: AgentCardProps) {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'complete':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'working':
        return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'complete':
        return 'border-green-500 bg-green-50';
      case 'working':
        return 'border-blue-500 bg-blue-50 shadow-lg';
      case 'thinking':
        return 'border-purple-500 bg-purple-50';
      case 'error':
        return 'border-red-500 bg-red-50';
      default:
        return 'border-gray-200 bg-white';
    }
  };

  return (
    <div className={`border-2 rounded-lg p-4 transition-all duration-300 ${getStatusColor()}`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">{getStatusIcon()}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm">{task.agentName}</h3>
          <p className="text-xs text-gray-600 mt-1">{task.description}</p>
          {task.result && task.result.duration && (
            <p className="text-xs text-gray-500 mt-2">
              Completed in {(task.result.duration / 1000).toFixed(1)}s
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
