
import { cn } from '../lib/utils';
import { Target } from 'lucide-react';

interface GoalWidgetProps {
    title: string;
    current: number;
    target: number;
    subLabel?: string;
    className?: string;
}

export function GoalWidget({ title, current, target, subLabel, className }: GoalWidgetProps) {
    const percentage = Math.min(100, (current / target) * 100);
    const isCompleted = current >= target;

    return (
        <div className={cn("bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2", className)}>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
                    <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-bold text-gray-900">{current}</span>
                        <span className="text-sm text-gray-500">/ {target}</span>
                    </div>
                </div>
                <div className={cn("p-2 rounded-full", isCompleted ? "bg-green-100 text-green-600" : "bg-blue-50 text-blue-600")}>
                    <Target size={18} />
                </div>
            </div>

            {subLabel && <p className="text-xs text-gray-400">{subLabel}</p>}

            <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                <div
                    className={cn("h-2 rounded-full transition-all duration-500", isCompleted ? "bg-green-500" : "bg-blue-600")}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
