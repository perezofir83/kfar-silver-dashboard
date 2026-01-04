
import type { Lead } from '../types';
import { cn } from '../lib/utils';

interface LeadsTableProps {
    leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {

    const getRowColor = (status: string) => {
        switch (status) {
            case 'התקבל':
                return 'bg-blue-50 hover:bg-blue-100 border-l-4 border-l-blue-500';
            case 'בטיפול':
            case 'הוזמן לפגישה':
            case 'מחכה למסמכים':
                return 'bg-yellow-50 hover:bg-yellow-100 border-l-4 border-l-yellow-400';
            case 'לא רלוונטי':
                return 'bg-red-50 hover:bg-red-100 border-l-4 border-l-red-400';
            case 'חדש':
            default:
                // "Green" for new as per requirements (although usually green is success, user said Green: New)
                // User said: Green: "New" or empty.
                return 'bg-green-50 hover:bg-green-100 border-l-4 border-l-green-500';
        }
    };

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm text-right">
                <thead className="bg-gray-50 font-medium text-gray-500">
                    <tr>
                        <th className="px-4 py-3">שם מלא</th>
                        <th className="px-4 py-3">מסלול</th>
                        <th className="px-4 py-3">שכבה</th>
                        <th className="px-4 py-3">טלפון</th>
                        <th className="px-4 py-3">סטטוס</th>
                        <th className="px-4 py-3">הערות</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {leads.map((lead) => (
                        <tr key={lead.id} className={cn("transition-colors", getRowColor(lead.status))}>
                            <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                            <td className="px-4 py-3 text-gray-600">
                                {lead.leadType === 'External' ? 'אקסטרני' :
                                    lead.leadType === 'Boarding' ? 'פנימייה' :
                                        lead.leadType === 'Naale' ? 'נע"לה' :
                                            lead.leadType === 'Aliyah' ? 'עליית הנוער' : lead.leadType}
                            </td>
                            <td className="px-4 py-3 text-gray-600">{lead.grade}'</td>
                            <td className="px-4 py-3 text-gray-600" dir="ltr">{lead.phone}</td>
                            <td className="px-4 py-3 font-medium">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/50 border border-gray-200 shadow-sm">
                                    {lead.status || 'חדש'}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-500 max-w-xs truncate" title={lead.notes}>{lead.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
