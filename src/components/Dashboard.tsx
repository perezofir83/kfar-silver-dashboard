
import { useLeads } from '../hooks/useLeads';
import { useGoals } from '../hooks/useGoals';
import { Layout } from './Layout';
import { GoalWidget } from './GoalWidget';
import { LeadsTable } from './LeadsTable';
import { Users, AlertCircle } from 'lucide-react';

export function Dashboard() {
    const { leads, loading } = useLeads();
    const goals = useGoals(leads);

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="space-y-8">

                {/* Goals Grid */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Users size={20} className="text-blue-600" />
                        יעדי קליטה (נותר לגיוס)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* Grade 7 */}
                        <GoalWidget
                            title="שכבה ז' - אקסטרני"
                            current={goals.remaining.grade7.external} // Remaining needed
                            target={goals.targets.grade7.external}
                            subLabel={`יעד התחלתי: ${goals.targets.grade7.external}`}
                            className="border-t-4 border-t-blue-500"
                        />
                        <GoalWidget
                            title="שכבה ז' - פנימייה"
                            current={goals.remaining.grade7.boarding}
                            target={goals.targets.grade7.boarding}
                            subLabel={`יעד התחלתי: ${goals.targets.grade7.boarding}`}
                            className="border-t-4 border-t-indigo-500"
                        />

                        {/* Grade 8 */}
                        <GoalWidget
                            title="שכבה ח' - פנימייה"
                            current={goals.remaining.grade8.boarding}
                            target={goals.targets.grade8.boarding}
                            subLabel="הגדלת פנימייה"
                            className="border-t-4 border-t-purple-500"
                        />

                        {/* Grade 9 */}
                        <div className="space-y-2">
                            <div className="bg-white p-3 rounded-lg border shadow-sm flex justify-between items-center">
                                <span className="text-sm text-gray-600">שכבה ט' - עליית הנוער</span>
                                <span className="font-bold text-blue-600">
                                    {goals.remaining.grade9.aliyah} <span className="text-xs text-gray-400 font-normal">/ {goals.targets.grade9.aliyah}</span>
                                </span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border shadow-sm flex justify-between items-center">
                                <span className="text-sm text-gray-600">שכבה ט' - נע"לה</span>
                                <span className="font-bold text-blue-600">
                                    {goals.remaining.grade9.naale} <span className="text-xs text-gray-400 font-normal">/ {goals.targets.grade9.naale}</span>
                                </span>
                            </div>
                        </div>

                        {/* Grade 10 */}
                        <div className="space-y-2">
                            <div className="bg-white p-3 rounded-lg border shadow-sm flex justify-between items-center">
                                <span className="text-sm text-gray-600">שכבה י' - פנימייה</span>
                                <span className="font-bold text-blue-600">
                                    {goals.remaining.grade10.boarding} <span className="text-xs text-gray-400 font-normal">/ {goals.targets.grade10.boarding}</span>
                                </span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border shadow-sm flex justify-between items-center">
                                <span className="text-sm text-gray-600">שכבה י' - נע"לה</span>
                                <span className="font-bold text-blue-600">
                                    {goals.remaining.grade10.naale} <span className="text-xs text-gray-400 font-normal">/ {goals.targets.grade10.naale}</span>
                                </span>
                            </div>
                        </div>

                        {/* Total Boarding */}
                        <GoalWidget
                            title="סה״כ יעד פנימייה"
                            current={goals.remaining.totalBoarding}
                            target={goals.targets.totalBoarding}
                            subLabel="יעד כולל לפנימייה"
                            className="border-t-4 border-t-green-500 lg:col-span-1"
                        />

                    </div>
                </div>

                <div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4 flex items-start gap-3">
                        <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={18} />
                        <div className="text-sm text-yellow-800">
                            <strong>שים לב:</strong> לא תתבצע קליטת תלמידים אקסטרנים מאשקלון בשלב זה.
                        </div>
                    </div>
                </div>

                {/* Leads Table */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            רשימת מועמדים
                        </h3>
                        <span className="text-sm text-gray-500">
                            סה״כ: {leads.length} | התקבלו: {goals.totalAccepted}
                        </span>
                    </div>
                    <LeadsTable leads={leads} />
                </div>

            </div>
        </Layout>
    );
}
